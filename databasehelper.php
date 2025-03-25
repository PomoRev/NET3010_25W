<?php

    // abstacts the database commands from the main file 

    function openDB() {

        $server = "localhost";
        $db_user = "backend";
        $db_password = "PassWord!";

        $connection = mysqli_connect($server, $db_user, $db_password);
        if (!$connection) die("cannot see database");
        return $connection;
    }

    function closeDB($connection){

        mysqli_close($connection);

    }

    function executeSQL($query, $connection){

        // potentially returns a cursor to the calling environment

        return mysqli_query($connection, $query);

    }


?>