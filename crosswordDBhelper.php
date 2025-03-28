<!-- Database Helper Files -->

<?php

// Connecting to the Database 
// This function requires an address for a database server that is listening for database requests. 
// Because we are using a windows web stack (XAMPP) over the default database port id, we can 
// simply use localhost and log in with credentials.

// Alternatively you could pass in this information, but having it embedded here is fine 
// for our purposes.

function connect_to_database(){

    $servername = "localhost";
    $dbuser = "webuser";
    $dbpassword = "password";

    $connection = mysqli_connect($servername, $dbuser, $dbpassword);

    if (!$connection) {
        exit("Connection Failed: " . mysqli_connect_error());
    }   
    
    return $connection;
}

function close_database_connection($connection){

    mysqli_close($connection);

}

function execute_query($query, $connection){

    return mysqli_query($connection, $query);

}

?>

