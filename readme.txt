Welcome to NET3010 Winter of 2025.

You will find in this repository all of the code we work on in the 
lectures and in the tutorial class. Note that the branches are used to 
organize the material. 

TUTORIAL CLASS - CROSSWORD PUZZLE game

CLASS 1: Initial Planning

- decided on crossword puzzle game
- verified that ai can generate a nice list
- identified the various problems we will need to solve
- grouped the problems

offline
- adjusted this readme file
- had ai make the list as a JSON object (will likely need to add more words)
- created a datastructures file to help keep track of our thinking as 
  to how to construct our objects
- found a few images as possible background images - talk about creating a collage

CLASS 2: Design and Semantic HTML

- had a design discussion and decided on a foundational design to use
- decided on a classic puzzle structure
- built a basic semantic HTML page for our puzzle

offline

- cleaned up the files and added div for instructions
- created a bit of collateral images for the initial page design
- played around with design a bit, will demo in tutorial class how I set things up

CLASS 3: Implementing the Layout

- chose colours and used CSS variables
- used flex to organize header and heading elements on page
- talked about TRouBLe

offline

- created drop down menu using CSS and buttons
- adjusted banner elements
- set up grid for main section
- added ai generated instructions (which I massaged to fit our program)
- continued to update the word list, we can not have too many words

CLASS 4: Preparing to code

- worked through the algorithms to help us code a crossword generator


offline

- updated the datastructures to reflect the work we did on developing 
  our algorithms/problem breakdown.
- created some identified datastructures and empty functions to help us
  organize our new codebase.
- modified some of our design structure to allow for data points that 
  were identified in the datastructure work. 


CLASS 5 & 6: Coding in JavaScript

- demonstrated some of the troubleshooting techniques that are needed to
  work with JavaScript, including creating a simplified section of code to 
  quickly identify issues with populating the array

offline

- continued coding the puzzle generator
- removed the 2 letter words, they will not be needed in this schema
- fixed the generator so that it can build puzzles
- next thing to do is to not display the solution and clean up the clue lists 

CLASS 7: Coding in JavaScript and CSS

- worked through the issues of making cells clickable, highlighting words, and 
  capturing key presses. 

offline

- added a seconds timer and the ability to stop and start it as needed
- reconfigured the display puzzle to use classes so that we can use classes 
  and animations for selecting cells
- added a function to reset the puzzle
- built functionality for selecting a cell in the puzzle (only works on numbered cells)
  but it will select the word, and in the case of the first word the second click will
  change the direction to down

TODO: Keyboard input handling (COMPLETED)

- In a lab class we had a discussion about handling keyboard input. The following captures
  that information (offline)

      When a candidate word is selected:

        catch rt.arrow and dwn.arrow - make both move forward one space in word following the
        direction of the word when there are more candidate letter spaces.

        catch lt.arrow and up.arrow and backspace - make both move backward one space in word following the
        words directionality (horizontal or vertical) when there are more candidate letter spaces.

        These two do not care if there is a letter in that space, they simply move the highlighted 
        letter box and allow typing of a letter to make a change to that box.

        Catch upper and lower case letters (convert to lowercase always) and place them in the current
        highlighted letter box. Move highlight ahead if there are more candidate spaces.

        Catch delete and turn highlighted box into a space so that it renders as empty.

        Catch the return key to deselect candidate word and check the win condition for the puzzle.

CLASS 8: Interface development (responsive)

- implemented arrow keys movement through the puzzle

offline

- completed the implementation of interface elements
- puzzle is functional

TODO: Begin to plan out the macro controls (load,save,restart, etc.)

CLASS 9: Backend/Frontend functionality

- define where functionality works and what needs to be on the 
  front end for the interface to work.


explicit

LOGIN - username, password, highscore (0)

NEW/SAVE - (save only if logged in)
  - if logged in save the puzzle
  - create a new puzzle

LOAD - (only if logged in)
  - display selectable uncompleted puzzles 
  - save existing puzzle and load in the selected puzzle

implicit functions for when a puzzle is won

  - on the front end when logged in
    - flag puzzle for removal of uncompleted puzzles
    - save the high score (if better than previous high 
      score: on backend) 
    - create a new puzzle (this will likely happen on 
      return to front end)

  - on the back end when logged in
    - remove any flagged puzzle
    - save high score with user if better
    - return to the front end making a new puzzle










