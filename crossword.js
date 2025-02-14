/* 
    Front End code for Crossword Puzzle generation, Puzzle display, game functions,
    user management, game saving, game restoring. 

    Prof. Frank Emanuel (c) 2025 for NET3010_W25 
*/

// Constants 

const NOLETTER = '?';                                           /* character for an empty square */
const NONUMBER = 0; /* token for a square that has no number to indicate the start of a word */
const NOBESTTIME = Symbol('NOBESTTIME', {constant: true});         /* no saved best time yet */
const NUMWORDS = 2;             /* number of words to attempt to generate from our word list */
const MAXWIDTH = 12;                              /* width of the puzzle in character spaces */
const MAXHEIGHT = 12;                           /* height of the puzzle in characters spaces */
const ACROSS = true;                /* constant to set the initial direction as binary value */ 

// Global Variables

const solvedPuzzle = Array(MAXHEIGHT);
let cluesAcross = "";
let cluesDown = "";
let currentWordNumber = 1;


// Puzzle Generation Functions

function createNewPuzzle() {

    // local variables

    let currentWordLocation = { across: 0, down: 0 }; 
    let currentDirection = ACROSS;

    // Main function for puzzle creation 
    // Start with a fresh puzzle array (using a mapping function)

    for (let i = 0; i < MAXHEIGHT; i++ ){
        solvedPuzzle[i] = Array.from({ length: MAXWIDTH }, 
            () => ({ referenceNumber: 0, assignedLetter: '?' }));
    }

    displayPuzzle();

    // set conditions (flags) to help place words on the puzzle 

    let puzzleFull = false;
    let wordsToPlace = NUMWORDS;
    currentWordNumber = 1;   

    while ((wordsToPlace > 0) && !puzzleFull ){
console.log("next iteration");

        // determine how much space is available 

        let spacesAvailable = (currentDirection ? MAXWIDTH : MAXHEIGHT) - 
            (currentDirection ? currentWordLocation.across : currentWordLocation.down);

        if (spacesAvailable < 2) {
console.log("changing direction");
            currentDirection = !currentDirection;

            spacesAvailable = (currentDirection ? MAXWIDTH : MAXHEIGHT) - 
                (currentDirection ? currentWordLocation.across : currentWordLocation.down);

            if (spacesAvailable < 2) puzzleFull = true;
        }

        if ((!puzzleFull) && (spacesAvailable > 2)){

            // grab a word that fits in the space matching any existing characters 
console.log("grabbing a word");
            let wordIndex = 0;

            do{

                wordIndex = Math.floor (Math.random() * wordList.length );

            } while ((wordList[wordIndex].word.length > spacesAvailable) &&
                (wordList[wordIndex].used));

console.log("got a word = " + wordList[wordIndex].word);

            if (wordTestFit(wordList[wordIndex].word, currentWordLocation, currentDirection)){

                recordClue( wordList[wordIndex].clue, currentDirection );
                placeWord( wordList[wordIndex].word, currentWordLocation, currentDirection );
                wordsToPlace--;
                wordList[wordIndex].used = true;
                currentDirection ? currentWordLocation.across++ : currentWordLocation.down += 2;
                currentDirection = !currentDirection;

                displayClues();
                displayPuzzle();

            }
        }
    }
}
   

function wordTestFit ( word, startingLocation, direction ) {

    // function compares a string 
    // to the target space on the puzzle.
    // returns true if the word will fit. 
console.log(" checking word [" + word + "] for a fit");

    let wordWorks = true;

    // look for an invalid letter placement 

    let testString = "";

    if (direction){

        // test plotting a word across 

        for (let i = 0; i < word.length; i++ )
            testString += solvedPuzzle[startingLocation.down][startingLocation.across + i].assignedLetter;

    } else {

        // test plotting a word down 

        for (let i = 0; i < word.length; i++ )
            testString += solvedPuzzle[startingLocation.down + i][startingLocation.across].assignedLetter;

    }

console.log("test string from existing puzzle = " + testString);

    for (let i = 0; i < word.length; i++ ){

        if ( testString[i] != '?' ){
  
            if ( testString[i] != word[i] ) wordWorks = false;
        }
    }
console.log("does it fit? " + wordWorks);
    return wordWorks;
}

function recordClue (clue, direction){

    clue = currentWordNumber + ". " + clue + "<br>";
    direction ? cluesAcross += clue : cluesDown += clue;

}

function placeWord ( word, location, direction ){

    // takes a word and places it on the solvedPuzzle array

    if (solvedPuzzle[location.across][location.down].referenceNumber == 0) {
        solvedPuzzle[location.across][location.down].referenceNumber = currentWordNumber++;
    }

    for ( let i = 0; i < word.length; i++ ){

console.log("plotting " + word[i] + " onto " + solvedPuzzle[location.across][location.down].assignedLetter);
        
        solvedPuzzle[location.across][location.down].assignedLetter = word[i];

        (direction) ? location.across++ : location.down++;

    }

}


// Puzzle Display Functions

function displayClues() {

    document.getElementById("across").innerHTML = cluesAcross;
    document.getElementById("down").innerHTML = cluesDown;

}

function displayPuzzle() {

    // Build to see what is happening. 

    let index = 0;
    const puzzleBoard = document.getElementsByClassName("letter");
    const puzzleNumbers = document.getElementsByClassName("number");

    for (let i = 0; i < MAXHEIGHT; i++ ){
        for (let j = 0; j < MAXWIDTH; j++ ){

            if (solvedPuzzle[j][i].assignedLetter != '?')
                puzzleBoard[index].innerText = solvedPuzzle[j][i].assignedLetter;

            if (solvedPuzzle[j][i].referenceNumber != 0)
                puzzleNumbers[index].innerText = solvedPuzzle[j][i].referenceNumber;

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

