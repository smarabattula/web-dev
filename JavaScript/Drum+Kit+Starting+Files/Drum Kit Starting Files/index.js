const drums = document.getElementsByClassName("drum");
const maps = {'w': "tom-1", 'a': "tom-2", 's': "tom-3", 'd': "tom-4", 'j': "snare", 'k': "kick-bass", 'l': "crash"};

for (let i = 0; i < drums.length; i++) {

// Using an IIFE to create a closure that captures 'i' and 'maps' for each loop iteration
    drums[i].addEventListener("click", function() {
        console.log(this.innerHTML);
        makeSound(this.innerHTML);
    });
}

document.addEventListener("keydown", function(event) {
    console.log(event.key);
    if(event.key in maps){
    makeSound(event.key);
}
});

function makeSound(i) {
    var audio = new Audio("./sounds/" + maps[i] + ".mp3");
    document.querySelector("."+i).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+i).classList.remove("pressed");
            },1100);
    audio.play();

}
