<!-- PARSING PHP & JS SHOWING WHAT IS DISPLAYED IN THE RENDERED WINDOW OF THE BROWSER  -->

<?php session_start(); $name = 'Ahmed'; ?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <title><?php echo $name . "'s Page"; ?></title>
        <style>
            .container {
                display: flex;
                justify-content: space-evenly;
            }
        </style>
    </head>
    <body>
        <header>Rendering a Page</header>
        <hr>
        <div class="container">       
        </div>
        <hr>
        <script>
            const container = document.getElementsByClassName('container')[0];
            const name = <?php echo "'" . $name . "'"; ?>;
            for (let i = 0; i < 5; i++){
                const subDiv = document.createElement("div");
                const subText = document.createTextNode(name[i] + "!");
                subDiv.appendChild(subText);
                container.appendChild(subDiv);
            }
        </script>
        <footer>Enjoy your day <?php echo $name; ?></footer>
    </body>
</html>