-- this file creates the tables for our crossword puzzle app 

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS puzzles;

-- create our tables 

CREATE TABLE crossword.users (
    userID INT NOT NULL AUTO_INCREMENT , 
    username VARCHAR(20) NOT NULL , 
    password VARCHAR(20) NOT NULL , 
    besttime INT NULL DEFAULT NULL , 
    PRIMARY KEY (userID)
);

CREATE TABLE crossword.puzzles (
    puzzleID INT NOT NULL AUTO_INCREMENT , 
    timespent INT NOT NULL , 
    datestarted INT NOT NULL DEFAULT CURRENT_TIMESTAMP , 
    puzzlesolution VARCHAR(400) NOT NULL , 
    puzzleguesses VARCHAR(400) NOT NULL , 
    acrossclues TEXT NOT NULL , 
    downclue TEXT NOT NULL , 
    userID INT NOT NULL ,
    PRIMARY KEY (puzzleID),
    FOREIGN KEY (userID) REFERENCES users(userID)
);

-- If we require test data we could create some standardized test data in a DML file 