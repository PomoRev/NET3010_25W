/* 
    Front End code for Crossword Puzzle generation, Puzzle display, game functions,
    user management, game saving, game restoring. 

    Prof. Frank Emanuel (c) 2025 for NET3010_W25 
*/

// Constants 

const NOLETTER = '?';                                           /* token for an empty square */
const NONUMBER = 0; /* token for a square that has no number to indicate the start of a word */
const NOBESTTIME = Symbol('NOBESTTIME', {constant: true});         /* no saved best time yet */
const NUMWORDS = 1;             /* number of words to attempt to generate from our word list */
const MAXWIDTH = 12;                              /* width of the puzzle in character spaces */
const MAXHEIGHT = 12;                           /* height of the puzzle in characters spaces */
const ACROSS = true;                /* constant to set the initial direction as binary value */ 
const BLANKARRAYCONST = { referenceNumber: 0, assignedLetter: '?' }; 

// Global Variables

const solvedPuzzle = [];
const cluesAcross = [];
const cluesDown = [];
let   currentWordNumber = 0;

// Puzzle Generation Functions

function createNewPuzzle() {

    // local variables

    let currentWordLocation = { across: 0, down: 0 }; /* location we are working from on board */ 
    let currentDirection = ACROSS;           /* direction we are looking at for word placement */
    
    // Main function for puzzle creation 

    // Start with a fresh puzzle array

    for( let i = 0; i < MAXHEIGHT; i++ ){
        solvedPuzzle [i] = [];
        for( let j = 0; j <  MAXWIDTH; j++) {
            solvedPuzzle [i][j] = BLANKARRAYCONST;
        }
    }

    displayPuzzle();

    // set conditions (flags) to help place words on the puzzle 

    let puzzleFull = false;
    let wordsToPlace = NUMWORDS;
    currentWordNumber = 1;   

    while ( (wordsToPlace > 0) && !puzzleFull ){

        let wordPlaced = false; 
        let spacesAvailable = 0;    

        // loop until puzzle is full or all the words are words are placed 

        while ( !(wordPlaced) && !(puzzleFull)) {

                   // determine how big a space we are working with
        
            do {

                spacesAvailable = (currentDirection ? MAXWIDTH : MAXHEIGHT) - 
                    (currentDirection ? currentWordLocation.across : 
                        currentWordLocation.down);

                // find a new starting point on the puzzle 

                if (spacesAvailable < 1) {

                    // moving around we skip two(2) so that we do not  
                    // have to worry about bunched words 

                    currentDirection ? currentWordLocation.down += 2 : 
                        currentWordLocation.across += 2; 
                    
                    if ( currentWordLocation.across > (MAXWIDTH - 2) ) {
                        currentWordLocation.across = 0;
                        currentWordLocation.down +=2;
                    }

                    if ( currentWordLocation.down > MAXHEIGHT ) !puzzleFull;
                }

                } while ((spacesAvailable < 1) && !(puzzleFull));

                // grab a random word that has not been used already

                let candidateIndex = Math.floor (Math.random() * wordList.length );

                while ( wordList[candidateIndex].used == true )
                    candidateIndex = Math.floor (Math.random() * wordList.length );

                // see if it fits in size 

                if ( wordList[candidateIndex].word.length < spacesAvailable ) {

                    // see if it matches what is possibly there already

                    if (solvedPuzzle[currentWordLocation.across][currentWordLocation.down].assignedLetter != '?'){

                        let indexOffset = 0;
                        let tempAcross = currentWordLocation.across;
                        let tempDown = currentWordLocation.down;

                        while ( (indexOffset < wordList[candidateIndex].word.length) 
                            && (wordList[candidateIndex].word[indexOffset] == 
                            solvedPuzzle[tempAcross][tempDown].assignedLetter) ) {
                                
                            indexOffset++;
                            currentDirection ? tempAcross++ : tempDown++;
                    
                        }

                        if (indexOffset < wordList[candidateIndex].word.length ){

                            recordClue(wordList[candidateIndex].clue);
                            placeWord(wordList[candidateIndex].word, currentWordLocation);
                            wordList[candidateIndex].used = true;
                            wordsToPlace--;

                            currentDirection = !currentDirection; 

                            displayPuzzle();

                        }
                    } else {

                        recordClue(wordList[candidateIndex].clue, currentDirection);
                        placeWord(wordList[candidateIndex].word, currentWordLocation, currentDirection);
                        wordList[candidateIndex].used = true;
                        wordsToPlace--;

                        currentDirection = !currentDirection; 

                        displayPuzzle();

                    }

                } else {

                    currentDirection ? currentWordLocation.down += 2 : 
                        currentWordLocation.across += 2; 
                    
                    if ( currentWordLocation.across > (MAXWIDTH - 2) ) {
                        currentWordLocation.across = 0;
                        currentWordLocation.down +=2;
                    }

                    if ( currentWordLocation.down > MAXHEIGHT ) !puzzleFull;

                }
            }
    }     
} 

/* function wordPlacementChecker ( puzzleSpace, word2 ) {

    // function compares a string 
    // to the target space on the puzzle.
    // returns true if the word will fit. 

    let wordWorks = true;

    for ( let i = 0; i < word2.length; i++ ){

    // look for an invalid letter placement 

        if ( puzzleSpace[i] != '?' ){

console.log ( "matching[" + puzzleSpace[i] + "]with[" + word2[i] + "]" );
  
            if ( puzzleSpace[i] != word2[i] ) wordWorks = false;
        }
    }

    console.log ( wordWorks );
    return wordWorks;
} */

function recordClue (clue, direction){

    clue = currentWordNumber + ". " + clue + "<br>";

    direction ? cluesAcross.push(clue) : cluesDown.push(clue);

}

function placeWord ( wordString, location, direction ){

    // takes a word and places it on the solved Puzzle 

    if (solvedPuzzle[location.across][location.down].referenceNumber == 0) {
        solvedPuzzle[location.across][location.down].referenceNumber = currentWordNumber++;
    }

    for ( let i = 0; i < wordString.length; i++ ){

        solvedPuzzle[location.across][location.down].assignedLetter = wordString[i];

        (direction) ? location.across++ : location.down++;

    }

}


// Puzzle Display Functions

function displayClues() {

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
                puzzleNumbers[index].innerText = i;

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

