<!-- PARSING CODE WITH PHP 
     SHOWING WHAT CODE IS SENT TO THE BROWSWER 
     
     Assume page was reached with the following URI using the GET method:
        localhost/codeTracingPractice3.php?name=Mandy&&cycles=4 
-->

<!DOCTYPE html>
<html lang="en">
<head>
    <title>Getting Testy</title>
</head>
<body>
    <h1> Welcome <?php $name = $_GET['name'] ?? 'to the Webpage'; 
              echo $name; ?></h1>
    <?php
        if ($name != 'to the Webpage') {
    ?>

    <h2>A Fine Design</h2>
    <div>
        <script>
            let text = "";          
            for(let i = 0; i < <?php echo $_GET['cycles']; ?>; i++){
                for(let j = i; j > 0; j--) {
                    text += i + " ";
                }
                text += "<br>";
            }
            document.writeln(text);
        </script>
    </div>
    <?php        
        } else {
    ?>
        <div>I await your instructions.</div>
    <?php
        }
    ?>

    <form action="codeTracingPractice3.php" method="get">

        Name: 
        <input type="text" name="name" 
        <?php if (isset($_GET['name'])) echo 'value="' . $name . '"'; ?>
        ><br>
        Number: <input type="number" name="cycles">
        <br>
        <button type="submit">Make it Happen</button>

    </form>
</body>
</html>