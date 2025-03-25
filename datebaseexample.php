<?php
    session_start();

    include_once("databasehelper.php");

    $db_connector = openDB();

    $table_pull = "SELECT * FROM example.items ORDER BY name";

    $cursor = executeSQL($table_pull, $db_connector);

    $operation = $_POST["operation"] ?? "none";

    if((mysqli_num_rows($cursor) > 0) && ($operation != "none")){
        
        for ($i = -1; $i < $_POST["row"]; $i++ ) 
            $row = mysqli_fetch_assoc($cursor);
        
        switch ($operation) {
            case 'add':
                $SQLstatement = "INSERT INTO example.items (name, type, cost) VALUES ( '" . 
                                $_POST['name'] . "', '" . $_POST['type'] . "', '" . 
                                $_POST['cost'] . "')";
                break;
            case 'update':
                $SQLstatement = "UPDATE example.items SET name='" . $_POST['name'] . "', type='" .
                                $_POST['type'] . "', cost='" . $_POST['cost'] . "' WHERE name='" . 
                                $row['name'] . "'";
                break;
            case 'delete':
                $SQLstatement = "DELETE FROM example.items WHERE name='" . $row['name'] . "'";
                break;
        }

        executeSQL($SQLstatement, $db_connector);

        $cursor = executeSQL($table_pull, $db_connector);

}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="author" content="Prof. Frank Emanuel">
    <meta name="email" content="emanuef@algonquincollege.com">
    <meta name="date" content="2025-03-24">
    <script>   
        const table = [];
<?php

    if( mysqli_num_rows($cursor) > 0){

        while ($row = mysqli_fetch_assoc($cursor)){

        echo 'table.push(["' . $row["name"] . '", "' . $row["type"] . '", ' . $row["cost"] . ']);';

    }

    closeDB($db_connector);
}

?>
    </script>
    <link rel="stylesheet" href="databaseexample.css">
    <title>Class Database</title>
</head>
<body>
    <header>Class Database</header>

    <form action="" method="post" onsubmit="return validateForm()">

        <table>
            <tr>
                <th>NAME OF ITEM</th>
                <th>TYPE OF ITEM</th>
                <th>COST OF ITEM</th>
                <th>SELECT</th>
            </tr>

            <script>

                let radioIndex = 0;

                for (const row of table) {

                    const newRow = document.createElement("tr");

                    const nameCell = document.createElement("td");
                    nameCell.textContent = row[0];
                    newRow.appendChild(nameCell);

                    const typeCell = document.createElement("td");

                    let typeDescription = "unknown";

                    switch (row[1]) {
                        case "rnd": 
                            typeDescription = "round";         
                            break;
                        case "sqr": 
                            typeDescription = "square";
                            break;
                        case "flt": 
                            typeDescription = "flat";
                            break;
                    }

                    typeCell.textContent = typeDescription;
                    newRow.appendChild(typeCell);

                    const costCell = document.createElement("td");
                    costCell.textContent = row[2];
                    newRow.appendChild(costCell);

                    const selectCell = document.createElement("td");
                    selectCell.innerHTML = '<input type="radio" name="row" value="' 
                        + radioIndex++ + '">';
                    newRow.appendChild(selectCell);

                    document.querySelector("table").appendChild(newRow);

                }

                document.querySelector("input[type=radio]").checked = true;
            

            </script>
        </table>
        <table>
            <tr class="workingrow">
                <td><input type="text" name="name" id="name"></td>
                <td>
                    <select name="type" id="type">
                        <option value="flt">flat</option>
                        <option value="rnd">round</option>
                        <option value="sqr">square</option>
                    </select>
                </td>
                <td><input type="text" name="cost" id="cost"></td>
                <td class="operations">
                    <button type="submit" onclick="setOperation('add')">ADD</button>
                    <button type="submit" onclick="setOperation('update')">UPDATE</button>
                    <button type="submit" onclick="setOperation('delete')">DELETE</button>
                </td>
            </tr>    

        </table>  
        
        <input type="hidden" name="operation" id="operation">

    </form>

    <div id="feedback"></div>

</body>
</html>

<script>

    function validateForm() {

        let formReady = true;

        switch (document.getElementById("operation").value) {
            case "add":
                if (( document.getElementById("name").value.length == 0 ) 
                   || ( document.getElementById("cost").value.length == 0 )){
                
                    formReady = false;
                    document.getElementById("feedback").innerText = "Adding an entry requires all fields to be filled";
                }
                break;
            case "update":
                let rowSelected = document.querySelector('input[name="row"]:checked').value;

                if (document.getElementById("name").value.length == 0)
                    document.getElementById("name").value = table[rowSelected][0];

                if (document.getElementById("cost").value.length == 0)
                    document.getElementById("cost").value = table[rowSelected][2];
                break;
            case "delete":
                break;
        }

        return formReady;

    }

    function setOperation(opType) {

        document.getElementById("operation").value = opType;

    }



</script>