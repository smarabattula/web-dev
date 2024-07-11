
alert("Begin by refreshing.");

let p1 = Math.min(6,Math.floor(Math.random()*6)+1);
let p2 = Math.min(6,Math.floor(Math.random()*6)+1);

let result = "Draw!"
if (p1 > p2){
    result = "🚩Player 1 Wins!";
}
else if (p1 < p2){
    result = "Player 2 Wins!🚩";
}

document.getElementsByClassName("img1")[0].setAttribute("src", './images/dice'+String(p1)+'.png');
document.querySelector(".img2").setAttribute("src", './images/dice'+String(p2)+'.png');

document.querySelector("h1").textContent = result;



