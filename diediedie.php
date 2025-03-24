<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="author" content="Prof. Frank Emanuel">
    <meta name="email" content="emanuef@algonquincollege.com">
    <meta name="date" content="2025-03-24">
    <title>DieDieDie</title>
</head>
<body>
    <header>DieDieDie</header>

<?php
    echo $status = $_GET['name'] or die ('whoops');

    // the above is a kludge - for those who know

    if ($status == 'ohno')
        die ('you killed me!');
?>
    <hr>
    <p>some other text.</p>

</body>
</html>