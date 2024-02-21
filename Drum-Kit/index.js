let drums = $(".drum").length;
$(".drum").click(function(){
    let butt = this.innerHTML;
    console.log(butt);
    playSound(butt);
    addAnimation(butt);
});
$(document).keypress(function(event){
    console.log(event.key);
    let butt = event.key;
    playSound(butt);
    addAnimation(butt);
})


function addAnimation(key){
    let activeKey =  $("." + key);
    activeKey.addClass("pressed");
    setTimeout(function(){
        activeKey.removeClass("pressed");
    }, 100);
}

function playSound(key){
    switch(key){
        case "w":
            let audNum1 = "sounds/drum5.mp3";
            var audio = new Audio(audNum1);
            audio.play();
            break;
        case "s":
            let audNum2 = "sounds/drum2.mp3";
            var audio = new Audio(audNum2);
            audio.play();
            break;
        case "a":
            let audNm1 = "sounds/drum6.mp3";
            var audio = new Audio(audNm1);
           audio.play();
           break;
        case "d":
            let audNu = "sounds/drum7.mp3";
            var audio = new Audio(audNu);
            audio.play();
            break;
        case "j":
            let audNm2 = "sounds/drum1.mp3";
            var audio = new Audio(audNm2);
            audio.play();
            break;
        case "k":
            let auNm1 = "sounds/drum3.mp3";
            var audio = new Audio(auNm1);
           audio.play();
           break;
        case "l":
            let audu = "sounds/drum4.mp3";
            var audio = new Audio(audu);
            audio.play();
            break;
        default: console.log(key);
    }
}