/* 
    Front End code for Crossword Puzzle generation, Puzzle display, game functions,
    user management, game saving, game restoring. 

    Prof. Frank Emanuel (c) 2025 for NET3010_W25 
*/

// Constants 

const NOLETTER = Symbol('NOLETTER', {constant: true});          /* token for an empty square */
const NONUMBER = 0; /* token for a square that has no number to indicate the start of a word */
const NOBESTTIME = Symbol('NOBESTTIME', {constant: true});         /* no saved best time yet */
const NUMWORDS = 4;             /* number of words to attempt to generate from our word list */
const MAXWIDTH = 12;                              /* width of the puzzle in character spaces */
const MAXHEIGHT = 12;                           /* height of the puzzle in characters spaces */
const BLANKARRAYCONST = { referenceNumber: 0, assignedLetter: NOLETTER };

// Global Variables

const solvedPuzzle = [];
const cluesAcross = [];
const cluesDown = [];

// Puzzle Generation Functions

function createNewPuzzle() {

    // Main function for puzzle creation 

    for( let i = 0; i < MAXHEIGHT; i++ ){
        for( let j = 0; j <  MAXWIDTH; j++) {
            solvedPuzzle [i,j] = BLANKARRAYCONST;

            console.log( "writing to " + i + " " + j );
        }
    }

    for ( let i = 0; i < NUMWORDS; i++ ){

        // grab and place a word 

        // grab a random word that could potentially fit if there 
        // are no words that could potentially fit then move to the next
        // space.  

        // try to fit it in the current location mapping it onto the 
        // solved puzzle array. 

        // if it fits add it to the array 

        // add the clue to the clue list 

        // change the directionality 

        // record that this word should not be chosen again 

        // else go back to grab another word (while test)


    }


}

function addWord() {

}


// Puzzle Display Functions

function displayClues() {

}

function displayPuzzle() {


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

console.log ( "here I am" );

createNewPuzzle();

