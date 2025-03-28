<?php
    session_start();

    $username = $_POST['name'] ?? "Anonymous";

    $sessiondata = $_SERVER['SCRIPT_FILENAME'] . "<hr>";

    echo $sessiondata;

    include("text.php");

    include_once("crosswordDBhelper.php");

    // if()

    // // process header 

    // $db_connection = connect_to_database();
    // $myquery = "SELECT username FROM crossword.users";
    // $results = execute_query( $myquery, $db_connection);

    // if( mysqli_num_rows($results) > 0){        
    //     while ($row = mysqli_fetch_assoc($results)){
    //         echo "users.push( '" .$row['username']. "' );";
    //     }
    // }

    // close_database_connection( $db_connection );

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="author" content="Prof. Frank Emanuel">
    <meta name="email" content="emanuef@algonquincollege.com">
    <meta name="date" content="2025-01-17">
    <link rel="stylesheet" href="crossword.css">
    <title>Tutorial Crossword</title>
    <script src="word_data.js"></script>
    <script src="crossword.js" defer></script>

    <script>
        const users = [];
        const puzzleList = [];
<?php 

// get the names of all the users for validation

    $db_connection = connect_to_database();
    $myquery = "SELECT username FROM crossword.users";
    $results = execute_query( $myquery, $db_connection);

    if( mysqli_num_rows($results) > 0){        
        while ($row = mysqli_fetch_assoc($results)){
            echo "users.push( '" .$row['username']. "' );";
        }
    }

    close_database_connection( $db_connection );

?>
    </script>
</head>
<body>
    <header>
        <div class="price">
            <img src="images/price.png" alt="5 pence">
        </div>
        <div class="masthead">
            <img src="images/title_centered.png" 
            alt="Crossword page title">
        </div>
        <div class="blurb">
            Solving crosswords<br>
            is great for the brain!
        </div>
    </header>

    <div id="heading">
        <span id="username"><?php echo $username ?></span>
        <span id="timer">00:00:00</span>
        <nav>
            <button id="puzzlecontrol">Control Puzzle</button>
            <div class="dropdown">
                <button onclick="openLogin()">login</button>
                <button>new game</button>
                <button onclick="saveGame()">save game</button>
                <button onclick="loadGame()">load game</button>
            </div>
        </nav>
    </div>

    <main>
        <div id="puzzle">
            <table>
                <tr>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                </tr>
                <tr>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                </tr>
                <tr>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                </tr>
                <tr>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                </tr>
                <tr>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                </tr>
                <tr>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                </tr>
                <tr>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                </tr>
                <tr>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                </tr>
                <tr>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                </tr>
                <tr>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                </tr>
                <tr>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                </tr>
                <tr>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                    <td><span class="number"></span><span class="letter"></span></td>
                </tr>
            </table>
        </div>
        <div class="cluelist" id="across">
            <div class="title">Across</div>
            <div class="acrossClues"></div>
        </div>
        <div class="cluelist" id="down">
            <div class="title">Down</div>
            <div class="downClues"></div>
        </div>
        <div id="instructions">
            <div class="title">How to Play the Crossword Puzzle Game</div>
            <p>
                Click on a clue to highlight its corresponding row or column in the puzzle 
                and use your keyboard to fill in the squares. The letters will automatically 
                move to the next square. You can also use your arrow keys to move between 
                squares or click on any square select that word direction, once for across and 
                twice for down. You can use the backspace key to delete letters, and typing a new letter in a 
                selected square will overwrite any existing letter.
            </p>
            <p>          
                The puzzle will check to see if it is completely filled correctly, until
                that time a timer will track your progress. When you have completed the puzzle,
                registered users will have their puzzle time score recorded with the date of 
                completion. You can pause the game from the menu, but clicking anywhere on the 
                puzzle will restart the timer. 
            </p>
            <p>
                Above all have fun.
            </p>
        </div>
    </main>
    <div class="logincard">
        <img class="formclose" src="images/check-box.png" alt="close button" onclick="closeLogin()">
        <div class="formelements">
            <form action="" method="post" onsubmit="return validateName()">
                <div class="formtitle">login</div>
                <label for="existinguser">username:</label>
                <input type="text" name="name" id="existinguser"><br>
                <label for="oldpassword">password:</label>
                <input type="password" name="password" id="oldpassword"><br>
                <input type="hidden" name="solvedpuzzle">
                <input type="hidden" name="guessedpuzzle">
                <input type="hidden" name="timer">
                <input type="hidden" name="acrossclues">
                <input type="hidden" name="downclues">
                <button type="submit">login</button>
            </form>
            <img class="formdivider" src="images/vert_line.png" alt="decorative line">
            <form action="" method="post" onsubmit="return checkIfNameAvailable()">
                <div class="formtitle">register</div>
                <label for="newuser">choose a username:</label>
                <input type="text" name="name" id="newuser"><br>
                <label for="newpassword">choose a password:</label>
                <input type="password" name="password" id="newpassword"><br>
                <input type="hidden" name="solvedpuzzle">
                <input type="hidden" name="guessedpuzzle">
                <input type="hidden" name="timer">
                <input type="hidden" name="acrossclues">
                <input type="hidden" name="downclues">
                <button type="submit">register</button>
            </form>
        </div>
        <div class="feedback"></div>
    </div>
<?php 
    if ($username != "Anonymous"){ 
?>    
    <div class="gamepicker">
        <img class="formclose" src="images/check-box.png" alt="close button" onclick="closePuzzleList()">
        <div class="formtitle">
            <?php echo $username; ?> please choose a game: 
        </div>
        <ol>
<?php
   
    $db_connection = connect_to_database();
    $myquery = "SELECT datestarted, puzzleID FROM crossword.puzzles WHERE userID in SELECT userID FROM crossword.users WHERE username = '" . $username . "'";
    $results = execute_query( $myquery, $db_connection);

    if( mysqli_num_rows($results) > 0){        
        while ($row = mysqli_fetch_assoc($results)){
            echo "<li>Game started " . $row['datestarted'] . "</li>";
            echo "<script>puzzlelist.push( '" .$row['puzzleID']. "' );</script>";
        }
    }

    close_database_connection( $db_connection );
?>
        </ol>
    </div>
<?php
    }
?>
    <footer>NET3010W25 - Tutorial Class Project</footer>
</body>
</html>