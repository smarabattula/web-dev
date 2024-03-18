let gamePattern = [];
const sequence = ["green","red","yellow","blue"];
let start = false;
let id = 0;

function failure(){
    gamePattern = [];
    start = false;
    //Change heading
    $("h1").text("You Failed! Press any Key to Restart.");
    $("body").addClass("game-over");
    setTimeout(function(){
        $("body").removeClass("game-over");
    },200);
    audioPlay("wrong");
    newGame();
}

function audioPlay(sound){
    let audio = new Audio('./sounds/'+sound+'.mp3');
    audio.play();
}

function buttonPressed(obj){
    obj.addClass("pressed");
    setTimeout(function(){
        obj.removeClass("pressed");
    },100);
}

function nextSequence(){
    let randomChosenColourId = Math.floor(Math.random()*3);
    gamePattern.push(randomChosenColourId);
    // Change heading
    $("h1").text("Level "+gamePattern.length);
    // Play audio and animation for button pressed
    audioPlay(sequence[randomChosenColourId]);
    buttonPressed($("#"+sequence[randomChosenColourId]));
}

function checkAnswer(colorPressed,pos){
    console.log(gamePattern,pos)
    if (colorPressed === sequence[gamePattern[pos]]){
    if (pos === gamePattern.length-1){
    setTimeout(function(){
        nextSequence();
    },1000);
    id = -1;
    }
    id += 1;
}
    else{
     failure();
    }
}

function startGame(){
    gamePattern = [];
    start = false;
    id = 0;
}

function newGame(){
$(document).keypress(function(){
    if(!start){
        nextSequence();
        start = true;
    }
});
}

newGame();

$(".btn").click(function(){
    let colorPressed = this.id;
    audioPlay(colorPressed);
    buttonPressed($("#"+colorPressed));
    checkAnswer(colorPressed,id);
});








