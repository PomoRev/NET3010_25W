<!-- PARSING CODE WITH PHP 
     SHOWING WHAT CODE IS SENT TO THE BROWSWER 
     
     Assume page was reached with the following URI using the GET method:
        localhost/codeTracingPractice4.php 
-->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title><?php $name = $_POST['name'] ?? $_GET['name'] ?? "TITLE"; ?></title>
</head>
<body>
    <header>Another Short One</header>
    <hr>
    <?php 
        for($i = 0; $i < strlen($name); $i++ )
            echo strtolower($name)[$i] . "<br>"; ?>
    <hr>
</body>
</html>