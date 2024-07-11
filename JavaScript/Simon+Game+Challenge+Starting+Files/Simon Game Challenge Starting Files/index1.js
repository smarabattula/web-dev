let sequence1 = [];
const colors = ["green", "yellow", "red", "blue"];

let startGame = false;
let id = 0;

function startGame1(){
    $(document).keypress(function(){
        if (!startGame){
        nextSequence1();
        startGame = true;
    }});
    }

function nextSequence1(){
    let curr_seq = Math.floor(Math.random()*3);
    sequence1.push(curr_seq);

    $("h1").text("Level " + sequence1.length);
    let curr_obj = colors[curr_seq];
    audioPlay1(curr_obj);
    buttonPressed1(curr_obj);

}

function audioPlay1(obj){
    let audio = new Audio('./sounds/'+obj+'.mp3');
    audio.play();
}

function buttonPressed1(obj){
    $("#" + obj).addClass("pressed");
    setTimeout(function(){
        $("#" + obj).removeClass("pressed");
    }, 200);
}

function failure(){
    gamePattern = [];
    start = false;
    //Change heading
    $("h1").text("You Failed! Press any Key to Restart.");
    $("body").addClass("game-over");
    audioPlay1("wrong");
    setTimeout(function(){
        $("body").removeClass("game-over");
    },200);

    startGame1();
}

startGame1();

$(".btn").click(function(){

    let curr_color = this.id;
    audioPlay1(curr_color);
    buttonPressed1(curr_color);
    if (curr_color === colors[sequence1[id]]){
        if (id === sequence1.length-1){
        setTimeout(function(){
            nextSequence1();
        },1000);
        id = 0;
        }
        else{
        id += 1;
        }
    }
        else{
         failure();
        }
})
