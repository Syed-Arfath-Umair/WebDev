let randomNumber1 = Math.floor(Math.random()*6) + 1;
let randomNumber2 = Math.floor(Math.random()*6) + 1;

let a = "images/dice"+randomNumber1+".png";
let b = "images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[0].setAttribute("src", a);
document.querySelectorAll("img")[1].setAttribute("src",b);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player1 Won!";
}else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player2 Won!";
}else{
    document.querySelector("h1").innerHTML = "Draw";
}