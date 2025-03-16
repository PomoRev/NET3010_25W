<!-- Database Helper Files -->

<?php

// Connecting to the Database 
// This function requires an address for a database server that is listening for database requests. 
// Because we are using a windows web stack (XAMPP) over the default database port id, we can 
// simply use localhost and log in with credentials.

// Alternatively you could pass in this information, but having it embedded here is fine 
// for our purposes.

function connect2db(){

    $servername = "localhost";
    $dbuser = "webusers";
    $dbpassword = "password";

    $connection = mysqli_connect($servername, $dbuser, $dbpassword);

    if (!$connection) {
        exit("Connection Failed: " . mysqli_connect_error());
    }   
    
    return $connection;
}

function closedb($connection){

    mysqli_close($connection);

}

function executequery($query, $connection){

    return mysqli_query($connection, $query);

}

echo "start<br>";

$dbconnected = connect2db();

echo "<br>connected";

echo "<br>query ";

$myquery = "SELECT * FROM webusers.test";

$results = executequery( $myquery, $dbconnected);

if( mysqli_num_rows($results) > 0){

    echo "<ul>";

    while ($row = mysqli_fetch_assoc($results)){

        echo "<li>" . $row["name"] . " = usernumber " . $row["usernumber"] . "</li>";

    }

    echo "</ul>";

}

closedb( $dbconnected );

echo "<br>closed";

?>