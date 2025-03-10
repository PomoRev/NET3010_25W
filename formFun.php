<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="author" content="Prof. Frank Emanuel">
    <meta name="email" content="emanuef@algonquincollege.com">
    <meta name="date" content="2025-03-10">
    <title>Form Fun is the Best Fun</title>
</head>
<body>
    <header>Form Fun is the Best Fun</header>

    <?php

        if( is_null($_GET['name'])) {

            ?>

                <form action="formFun.php" method="get">
                    Name: <input type="text" name="name">
                    <button type="submit">Send for Fun</button>
                </form>


            <?php
        
        } else {

echo "whoah nelly " . $_GET['name'] . " <br> uh huh.";

        }

    ?>

    <p>I am outside now, looking in.</p>
</body>
</html>