//SIZE OF GRID
var COLUMNS = 18;
var ROWS = 10;

//SIZE OF EACH CELL
var cellSize = 50;

//CANVAS SIZE
var canvasWidth = 900;
var canvasHeight = 500;

//PLAYER HAS WON
var playerWon = false;

//PIPES 2D ARRAY
var pipes;

//OBSTACLES 2D ARRAY
var obstacles;

var obstaclesList;

var playerMoves = [];

var endX, endY, startX, startY, destinationX, destinationY;

var obstaclesInfo = [];

var pipesRemaining;

$.getJSON("mapInfo.json", function(data) {
    console.log("hello");
    console.log(data);

    obstaclesList = data.obstaclesList;

    //ARRAY OF MOVES 
    playerMoves = data.playerMoves;

    //POSITION OF DESTINATION/FINAL PIPE
    endX = data.end.x * cellSize;
    endY = data.end.y * cellSize;

    //STARTING PIPE POSITION

    startX = data.start.x * cellSize;
    startY = data.start.y * cellSize;

    //OBSTACLES

    obstaclesInfo = data.obstaclesInfo;

    //Number of pipes left
    pipesRemaining = data.pipesRemaining;

    //FINAL PLAYER ENDPOINT
    destinationX = data.destination.x;
    destinationY = data.destination.y;

});


//BASE TEXT SIZE
var fontSize = 14;

//IMAGE VARIABLES
var bg, firstPipe, user, endPipe, gameOver, winner, crack;

/*=======LOAD SOUNDS=======*/
//UNCOMMENT TO PLAY SOUNDS
// var yeah = new Audio("assets/yeah.mp3");
// var water = new Audio("assets/water.mp3");
// var scream = new Audio("assets/scream.mp3");
// var win = new Audio("assets/winning.mp3");
// var track = new Audio("assets/track.mp3");

//TIMER VARIABLE
var interval = 20;

function preload() {
    /*=======LOAD IMAGES=======*/
    bg = loadImage("assets/background.png");
    firstPipe = loadImage("assets/begin.png");
    user = loadImage("assets/user.png");
    endPipe = loadImage("assets/end.png");
    gameOver = loadImage("assets/loser.png");
    winner = loadImage("assets/winnerTwo.png");
    crack = loadImage("assets/crack.png")

    for (i = 0; i < obstaclesInfo.length; i++) {
        obstaclesInfo[i]["img"] = loadImage(obstaclesInfo[i].artwork)
    }
}

function setup() {

    var canvas = createCanvas(canvasWidth, canvasHeight);
    canvas.parent('game');

    //UNCOMMENT FOR BACKGROUND SOUNDTRACK
    // track.play();

    noStroke();
    pipes = [];
    obstacles = [];

    for (var i = 0; i < COLUMNS; i++) {
        pipes[i] = [];
        obstacles[i] = [];
        for (var j = 0; j < ROWS; j++) {
            pipes[i][j] = "empty";
            obstacles[i][j] = "empty";
        }
    }

    //STORING OBSTACLES INTO OBSTACLE ARRAY

    for (var i = 0; i < obstaclesList.length; i++) {
        obstacles[obstaclesList[i].x][obstaclesList[i].y] = "occupied";
    }

    // console.log(obstacles);

}

function draw() {

    if (!playerWon) {
        /*=========START + END==========*/
        background(bg);
        image(firstPipe, startX, startY, cellSize * 3, cellSize * 3);
        image(endPipe, endX, endY, cellSize, cellSize * 2);

        //OBSTACLE POSITIONS
        for (var i = 0; i < obstaclesInfo.length; i++) {
            image(obstaclesInfo[i].img,
                obstaclesInfo[i].coordinates.x * cellSize,
                obstaclesInfo[i].coordinates.y * cellSize,
                obstaclesInfo[i].imageSize.w * cellSize,
                obstaclesInfo[i].imageSize.h * cellSize);
        }

        /*=========CREATE PIPES 2D ARRAY============*/
        for (var i = 0; i < COLUMNS; i++) {
            for (var j = 0; j < ROWS; j++) {


                if (i === getPlayerPosition().x &&
                    j === getPlayerPosition().y) {
                    //DRAW THE PLAYER
                    // fill('#E8D738');
                    image(user, i * cellSize, j * cellSize, cellSize, cellSize);
                } else if (pipes[i][j] == "empty") {
                    noFill();
                    rect(i * cellSize, j * cellSize, cellSize, cellSize);

                } else if (pipes[i][j] == "pipe") {
                    fill('#58595b');
                    rect(i * cellSize, j * cellSize, cellSize, cellSize);
                }

            }
        }

        /*=========DISPLAY PIPES REMAINING===========*/
        fill(255);
        textAlign(CENTER);
        textFont('Quattrocento');
        textSize(fontSize);
        text("PIPES", 67, 66);

        //NUMBER OF PIPES REMAINING
        textFont('Oswald-Heavy');
        textSize(fontSize + 10);
        text(pipesRemaining, 67, 93);

        //TIMER
        fill("#414042");
        text("NO", 67, 155);
        textSize(fontSize);
        text("PRESSURE", 67, 170);

        // /*=========TIMER SETUP===========*/
        //    var t = interval-int(millis()/1000);
        //    time = nf(t , 3);

        //    if (t > 10){
        //        fill("#414042");
        //        text(time, 67, 166);
        //    } 

        //    //IN DANGER OF RUNNING OUT OF TIME
        //    if(t <= 10) {
        //        fill("#92002d")
        //        text(time, 67, 166);
        //    } 

        //    //OUT OF TIME
        //    if(t <= 0) {
        //        noFill();
        //        image(gameOver, 0, 0, 750, 500);
        //        if (mouseIsPressed){
        //            console.log("PRESS")
        //            var t = interval-int(millis()/1000);
        //            time = nf(t , 3);
        //            reset();
        //        };
        //    } 

        if (pipesRemaining <= 0) {
            /*=======YOU LOSE=======*/

            //UNCOMMENT TO PLAY LOSING NOISES 
            // track.pause();
            // scream.play();

            image(gameOver, 0, 0, canvasWidth, canvasHeight);
            if (mouseIsPressed) {
                // scream.pause();
                reset();
            }
        }

        /*=========PLAYER REACHES END PIPE = WINNER=================*/
        if (getPlayerPosition().x == destinationX && getPlayerPosition().y == destinationY) {
            //YOU WIN
            // track.pause();
            // water.play();
            console.log("WINNER");
            image(winner, 0, 0, canvasWidth, canvasHeight);
            var levelButton = document.createElement('button');
            levelButton.innerHTML = "Next Level"
            levelButton.classList.add = "next";

            var canvasPage = document.getElementById('game');
            canvasPage.appendChild(levelButton);

            levelButton.addEventListener("click", function() {
                levelButton.style.display = 'none';
                reset();
            });
            playerWon = true;
        }
    }


}

/*=========TRACKING PLAYER MOVES/POSITION==========*/

const getPlayerPosition = (index) => {
    let ind = index ? index + 1 : 1;
    return playerMoves[playerMoves.length - ind];
};

const undoMove = (nextPos) => {
    //the current position = getPlayerPosition(1)//
    return (nextPos.x === getPlayerPosition(1).x && nextPos.y === getPlayerPosition(1).y);
};

/*=========MOVE PLAYER==========*/

function keyPressed() {
    var collisionDetected = detectCollisions(keyCode);

    if (!collisionDetected) {
        if (keyCode == UP_ARROW) {
            //If the player isn't at the top of the grid, move it UP.
            if (getPlayerPosition().y > 0) {
                let nextPos = { x: getPlayerPosition().x, y: getPlayerPosition().y - 1 };
                if (playerMoves.length > 1 && undoMove(nextPos)) {
                    console.log('undo');
                    if (pipes[getPlayerPosition().x][getPlayerPosition().y] == "pipe") {

                        //DELETE THE PREVIOUS PIPE
                        pipes[getPlayerPosition().x][getPlayerPosition().y] = "empty";
                        pipesRemaining++;
                    }

                    //REMOVE LAST MOVE FROM THE ARRAY
                    playerMoves.pop();
                } else {
                    pipes[getPlayerPosition().x][getPlayerPosition().y] = "pipe";
                    playerMoves.push(nextPos);
                    pipesRemaining--;
                }
            }
        } else if (keyCode == DOWN_ARROW) {
            //If the player isn't at the bottom of the grid, move it DOWN.
            if (getPlayerPosition().y < ROWS - 1) {
                let nextPos = { x: getPlayerPosition().x, y: getPlayerPosition().y + 1 };
                if (playerMoves.length > 1 && undoMove(nextPos)) {
                    console.log('undo');
                    if (pipes[getPlayerPosition().x][getPlayerPosition().y] == "pipe") {

                        //DELETE THE PREVIOUS PIPE
                        pipes[getPlayerPosition().x][getPlayerPosition().y] = "empty";
                        pipesRemaining++
                    }

                    //REMOVE LAST MOVE FROM THE ARRAY
                    playerMoves.pop();
                } else {
                    pipes[getPlayerPosition().x][getPlayerPosition().y] = "pipe";
                    playerMoves.push(nextPos);
                    pipesRemaining--;
                }
            }
        } else if (keyCode == LEFT_ARROW) {
            if (getPlayerPosition().x > 0) {
                let nextPos = { x: getPlayerPosition().x - 1, y: getPlayerPosition().y };
                if (playerMoves.length > 1 && undoMove(nextPos)) {

                    if (pipes[getPlayerPosition().x][getPlayerPosition().y] == "pipe") {

                        //DELETE THE PREVIOUS PIPE
                        pipes[getPlayerPosition().x][getPlayerPosition().y] = "empty";
                        pipesRemaining++
                    }

                    //REMOVE LAST MOVE FROM THE ARRAY
                    playerMoves.pop();

                } else {
                    pipes[getPlayerPosition().x][getPlayerPosition().y] = "pipe";
                    playerMoves.push(nextPos);
                    pipesRemaining--;
                }
            }
        } else if (keyCode == RIGHT_ARROW) {
            if (getPlayerPosition().x < COLUMNS - 1) {
                let nextPos = { x: getPlayerPosition().x + 1, y: getPlayerPosition().y };
                if (playerMoves.length > 1 && undoMove(nextPos)) {
                    console.log('undo');
                    if (pipes[getPlayerPosition().x][getPlayerPosition().y] == "pipe") {

                        //DELETE THE PREVIOUS PIPE
                        pipes[getPlayerPosition().x][getPlayerPosition().y] = "empty";
                        pipesRemaining++
                    }

                    //REMOVE LAST MOVE FROM THE ARRAY
                    playerMoves.pop();
                } else {
                    pipes[getPlayerPosition().x][getPlayerPosition().y] = "pipe";
                    playerMoves.push(nextPos);
                    pipesRemaining--;
                }
            }
        }

    }
    /* switch(keyCode) {
         case UP_ARROW:
             if ( getPlayerPosition().y > 0) {
                 let nextPos = {x: getPlayerPosition().x, y: getPlayerPosition().y -1};
                 if ( nextPos == playerMoves[playerMoves.length-2] && playerMoves.length > 1) {
                     cosole.log('undo');
                 } else {
                     pipes[getPlayerPosition().x][getPlayerPosition().y] = "pipe";
                     playerMoves.push(nextPos);
                 }
             }
         break;
         case DOWN_ARROW:
         break;
         case RIGHT_ARROW:
         break;
         case LEFT_ARROW:
         break;
     }*/
}

/*===========COLLISION DETECTION==============*/

function detectCollisions(keyCode) {
    var playerPos = getPlayerPosition();
    var lastPos = getPlayerPosition(1);

    var wherePlayerWantsGo = null;

    if (keyCode == UP_ARROW) {
        console.log("up");
        wherePlayerWantsGo = { x: playerPos.x, y: playerPos.y - 1 };
        console.log(wherePlayerWantsGo);
    } else if (keyCode == DOWN_ARROW) {
        console.log("down");
        wherePlayerWantsGo = { x: playerPos.x, y: playerPos.y + 1 };
    } else if (keyCode == RIGHT_ARROW) {
        console.log("right");
        wherePlayerWantsGo = { x: playerPos.x + 1, y: playerPos.y };
    } else if (keyCode == LEFT_ARROW) {
        console.log("left");
        wherePlayerWantsGo = { x: playerPos.x - 1, y: playerPos.y };
    } else {
        console.log(wherePlayerWantsGo);
    }

    console.log(lastPos);

    //Allows player to go backwards to delete previous pipe
    if (lastPos == null) {
        return false;
    } else if (wherePlayerWantsGo.x == lastPos.x && wherePlayerWantsGo.y == lastPos.y) {
        console.log("delete");
        return false;
    }

    // DETECT PIPES IN THE WAY OF WHERE THE PLAYER WANTS TO GO

    if (pipes[wherePlayerWantsGo.x][wherePlayerWantsGo.y] == "pipe") {
        console.log("boom");
        return true;
    }

    //DETECT OBSTACLES

    if (obstacles[wherePlayerWantsGo.x][wherePlayerWantsGo.y] == "occupied") {
        console.log('BOOM');
        return true;
    }

    return false;
}

/*=======RESET CURRENT LEVEL========*/

function reset() {


    playerMoves = [{ x: 3, y: 1 }];
    pipesRemaining = 20;
    // interval = 20;

    playerWon = false;

    //UNCOMMENT TO RESET SOUNDTRACK
    // track.play();

    for (var i = 0; i < COLUMNS; i++) {
        pipes[i] = [];
        for (var j = 0; j < ROWS; j++) {
            pipes[i][j] = "empty";
        }
    }

}
