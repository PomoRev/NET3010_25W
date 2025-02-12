/* 
    Front End code for Crossword Puzzle generation, Puzzle display, game functions,
    user management, game saving, game restoring. 

    Prof. Frank Emanuel (c) 2025 for NET3010_W25 
*/

// Constants 

const NOLETTER = '?';                                           /* token for an empty square */
const NONUMBER = 0; /* token for a square that has no number to indicate the start of a word */
const NOBESTTIME = Symbol('NOBESTTIME', {constant: true});         /* no saved best time yet */
const NUMWORDS = 4;             /* number of words to attempt to generate from our word list */
const MAXWIDTH = 12;                              /* width of the puzzle in character spaces */
const MAXHEIGHT = 12;                           /* height of the puzzle in characters spaces */
const ACROSS = true;                /* constant to set the initial direction as binary value */ 
const BLANKARRAYCONST = { referenceNumber: 0, assignedLetter: '?' }; 

// Global Variables

const solvedPuzzle = [];
const cluesAcross = [];
const cluesDown = [];

// Puzzle Generation Functions

function createNewPuzzle() {

    // local variables

    let currentWordLocation = { across: 0, down: 0 }; /* location we are working from on board */ 
    let currentDirection = ACROSS;           /* direction we are looking at for word placement */
    let currentWordNumber = 1;   /* when placing a word on an unnumbered space use this and ++ */

    // Main function for puzzle creation 

    // Start with a fresh puzzle array

    for( let i = 0; i < MAXHEIGHT; i++ ){
        for( let j = 0; j <  MAXWIDTH; j++) {
            solvedPuzzle [i,j] = BLANKARRAYCONST;
        }
    }

    // set conditions (flags) to help place words on the puzzle 

    let puzzleFull = false;
    let wordsToPlace = NUMWORDS;

    while ( (wordsToPlace > 0) && !puzzleFull ){

        let wordPlaced = false; 
        let spacesAvailable = 0;    

        // determine how big a space we are working with
        
        do {

            spacesAvailable = (currentDirection ? MAXWIDTH : MAXHEIGHT) - 
                (currentDirection ? currentWordLocation.across : 
                    currentWordLocation.down);

            // find a new starting point on the puzzle 

            if (spacesAvailable < 1) {

            // moving around we skip two(2) so that we do not have to worry 
            // about bunched words 

                currentDirection ? currentWordLocation.down += 2 : 
                    currentWordLocation.across +=2; 
                
                if ( currentWordLocation.across > (MAXWIDTH - 2) ) {
                    currentWordLocation.across = 0;
                    currentWordLocation.down +=2;
                }

                if ( currentWordLocation.down > MAXHEIGHT ) !puzzleFull;
            }

        } while ((spacesAvailable < 1) && !(puzzleFull));

        while ( !(wordPlaced) && !(puzzleFull)) {

            // grab a random word 

            let candidateIndex = Math.floor (Math.random() * wordList.length );

            // see if it fits in size 

            if ( wordList[candidateIndex].word.length <= spacesAvailable ) {

console.log( "how long? " + wordList[candidateIndex].word.length );

            // see if it matches what is possibly there already 

// 1. if there is a word there already see if one of the letters in that word
// match the new word's first letter. 

// 2. starting from that first match see if there is enough room for the new 
// word on the puzzle. 

// 3. grab a string of the place where the word will go to make sure our 
// word will map onto the puzzle in that position. 

// 4. if it will map, insert the word and change the direction before finding 
// a new word to place. 




                let puzzleSpot = "";
                let across = currentWordLocation.across;
                let down = currentWordLocation.down;

            // build a string from the current state of solvedPuzzle for comparing 

                for ( let i = 0; i < wordList[candidateIndex].word.length; i++ ){

console.log( "what is this at first: " + solvedPuzzle[across, down].assignedLetter  );

                    puzzleSpot += solvedPuzzle[across, down].assignedLetter;

console.log( "what is this undefined: " + puzzleSpot[i]  );

                    (currentDirection) ? across++ : down++;

                }

console.log( "left with " + puzzleSpot );

                if ( wordPlacementChecker(puzzleSpot, wordList[candidateIndex].word) ){

                    // add a number to the solvedPuzzle location if none present,
                    // place word on the solved puzzle 

                    let across = currentWordLocation.across;
                    let down = currentWordLocation.down;

                    if (solvedPuzzle[across, down].referenceNumber == 0) {
                        solvedPuzzle[across, down].referenceNumber = currentWordNumber++;
                    }

                    for ( let i = 0; i < wordList[candidateIndex].word.length; i++ ){

                        solvedPuzzle[across, down].assignedLetter = 
                            wordList[candidateIndex].word[i];
                        (currentDirection) ? across++ : down++;

                    }

                    // mark the word used
                    
                    wordList[candidateIndex].used = true;
                    wordsToPlace--;

                    // record the clue and then change the direction

                    (currentDirection) ? 
                        cluesAcross.push(
                            solvedPuzzle[currentWordLocation.across, 
                            currentWordLocation.down].referenceNumber 
                            + ". " + wordList[candidateIndex].clue) : 
                            cluesDown.push(solvedPuzzle[currentWordLocation.across,
                            currentWordLocation.down].referenceNumber 
                            + ". " + wordList[candidateIndex].clue);
                    
                    currentDirection = !currentDirection; 
                }
            }
        }      
    } 
}

function wordPlacementChecker ( puzzleSpace, word2 ) {

    // function compares a string 
    // to the target space on the puzzle.
    // returns true if the word will fit. 

    let wordWorks = true;

console.log("comparing " + word2 + " to " + puzzleSpace );

    for ( let i = 0; i < word2.length; i++ ){

    // look for an invalid letter placement 

// HERE IS THE PROBLEM TO FIX

        if ( puzzleSpace[i] != '?' ){

console.log ( "matching[" + puzzleSpace[i] + "]with[" + word2[i] + "]" );
  
            if ( puzzleSpace[i] != word2[i] ) wordWorks = false;
        }
    }

    console.log ( wordWorks );
    return wordWorks;
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

