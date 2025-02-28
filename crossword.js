/* 
    Front End code for Crossword Puzzle generation, Puzzle display, game functions,
    user management, game saving, game restoring. 

    Prof. Frank Emanuel (c) 2025 for NET3010_W25 
*/

// Constants 

const NOLETTER = '?';                                           /* character for an empty square */
const NONUMBER = 0; /* token for a square that has no number to indicate the start of a word */
const NOBESTTIME = Symbol('NOBESTTIME', {constant: true});         /* no saved best time yet */
const NUMWORDS = 8;             /* number of words to attempt to generate from our word list */
const MAXWIDTH = 12;                              /* width of the puzzle in character spaces */
const MAXHEIGHT = 12;                           /* height of the puzzle in characters spaces */
const ACROSS = true;                /* constant to set the initial direction as binary value */ 

// Global Variables

const solvedPuzzle = Array(MAXHEIGHT);
const guessedPuzzle = Array(MAXHEIGHT);
let cluesAcross = "";
let cluesDown = "";
let currentWordNumber = 1;
let currentDirection = ACROSS;

let currentWordLocation = { across: 0, down: 0 }; 

// Puzzle Generation Functions

function createNewPuzzle() {

    // Main function for puzzle creation 
    // Start with a fresh puzzle array (using a mapping function)
    // Also build an array for the working puzzle map which will be set 
    // by the puzzle array when it is completed

    for (let i = 0; i < MAXHEIGHT; i++ ){
        solvedPuzzle[i] = Array.from({ length: MAXWIDTH }, 
            () => ({ referenceNumber: 0, assignedLetter: '?' }));
        guessedPuzzle[i] = Array.from({length: MAXWIDTH},
            () => ({referenceNumber: 0, assignedLetter: '?'}));
    }

displayPuzzle( solvedPuzzle ); // for troubleshooting purposes only

    // set conditions (flags) to help place words on the puzzle 

    let puzzleFull = false;
    let wordsToPlace = NUMWORDS;
    currentWordNumber = 1;   

    while ((wordsToPlace > 0) && !puzzleFull ){

        // determine how much space is available 

        let spacesAvailable = (currentDirection ? MAXWIDTH : MAXHEIGHT) - 
            (currentDirection ? currentWordLocation.across : currentWordLocation.down);

        // see if there is enough space on the puzzle for a word (more 
        // than 2 spaces in either direction)

        if (spacesAvailable < 2) {

            currentDirection = !currentDirection;

            spacesAvailable = (currentDirection ? MAXWIDTH : MAXHEIGHT) - 
                (currentDirection ? currentWordLocation.across : currentWordLocation.down);

            if (spacesAvailable < 2) puzzleFull = true;

        }

        if (!puzzleFull){

            // grab a word that fits in the space matching any existing characters 

            let wordIndex = 0;
            let numberWords = numWordsLeft();

            do{

                // loop until you have a word that fits or run out of words 

                do{

                    // add a bailing condition for exhausting the list 
                    wordIndex = Math.floor (Math.random() * wordList.length );

                } while ((wordList[wordIndex].word.length > spacesAvailable) || wordList[wordIndex].used);

            } while (!wordTestFit(wordList[wordIndex].word, currentWordLocation, currentDirection) 
                        && (--numberWords > 0) );

            if (numberWords > 0){

                recordClue( wordList[wordIndex].clue, currentDirection );
                placeWord( wordList[wordIndex].word, currentWordLocation, currentDirection );
                wordsToPlace--;
                wordList[wordIndex].used = true;

                if (!currentDirection){ 

                    // going across after going down - skip 2 

                    currentWordLocation.down += 2;
                    currentWordNumber++;

                } else if (currentWordNumber > 1) {

                    // otherwise skip 2 across after the first words are placed 

                    currentWordLocation.across += 2;
                    currentWordNumber++;
                }

                currentDirection = !currentDirection;
                displayClues();
                displayPuzzle(solvedPuzzle);

            } else {

                // move to a new location to check if there are no matches

                currentDirection ? currentDirection.across++ : currentDirection.down += 2;
                currentWordNumber++;

            }
        }
    }
}
   

function wordTestFit ( word, startingLocation, direction ) {

    // function compares a string 
    // to the target space on the puzzle.
    // returns true if the word will fit. 

    let wordWorks = true;

    // look for an invalid letter placement 

    let testString = "";

    if (direction){

        // test plotting a word across 

        for (let i = 0; i < word.length; i++ )
            testString += solvedPuzzle[startingLocation.across + i][startingLocation.down].assignedLetter;

    } else {

        // test plotting a word down 

        for (let i = 0; i < word.length; i++ )
            testString += solvedPuzzle[startingLocation.across][startingLocation.down + i].assignedLetter;

    }

    for (let i = 0; i < word.length; i++ ){

        if ( testString[i] != '?' ){
  
            if ( testString[i] != word[i] ) wordWorks = false;

        }
    }

    return wordWorks;
}

function numWordsLeft() {

    let i = 0;
    wordList.forEach( word => {
        if ( !word.used ) i++;
    });

    return i;
}

function recordClue (clue, direction){

    clue = currentWordNumber + ". " + clue + "<br>";
    direction ? cluesAcross += clue : cluesDown += clue;

}

function placeWord ( word, location, direction ){

    // takes a word and places it on the solvedPuzzle array

    if (solvedPuzzle[location.across][location.down].referenceNumber == 0) {
        solvedPuzzle[location.across][location.down].referenceNumber = currentWordNumber;
    }

    let across = location.across;
    let down = location.down;

    for ( let i = 0; i < word.length; i++ ){
        
        solvedPuzzle[across][down].assignedLetter = word[i];
        (direction) ? across++ : down++;

    }

}

// Puzzle Display Functions

function displayClues() {

    document.getElementsByClassName("acrossClues")[0].innerHTML = cluesAcross;
    document.getElementsByClassName("downClues")[0].innerHTML = cluesDown;

}

function displayPuzzle( puzzleData ) {

    // Build to see what is happening.

    let index = 0;
    const puzzleBoard = document.getElementsByClassName("letter");
    const puzzleNumbers = document.getElementsByClassName("number");
    const puzzleSquares = document.querySelectorAll("#puzzle table tr td");

    for (let i = 0; i < MAXHEIGHT; i++ ){
        for (let j = 0; j < MAXWIDTH; j++ ){

            if (puzzleData[j][i].assignedLetter != '?'){
                puzzleBoard[index].innerText = puzzleData[j][i].assignedLetter;
                puzzleSquares[index].style.borderColor = "black";
                puzzleSquares[index].style.backgroundColor = "white";
            }
            else{
                puzzleSquares[index].style.borederColor = "white";
                puzzleSquares[index].style.backgroundColor = "black";
            }

            if (puzzleData[j][i].referenceNumber != 0)
                puzzleNumbers[index].innerText = puzzleData[j][i].referenceNumber;

            index++;

        }
    }
}

function displayTime() {

}


// Puzzle Solving Gameplay Functions

function isWon() {

    let puzzleWon = true;

    // compares the guessed letters with the puzzle solution 
    // and returns true if puzzle is solved

    return puzzleWon;
}

// testing Code 

createNewPuzzle();

