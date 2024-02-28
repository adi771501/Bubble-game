
var score=0;
var hitrn=10;
function getScore(){
    score+=10;
    document.querySelector("#scoreval").textContent=score;
}

function makeBubble(){
    var clutter="";
    for(var i = 0 ; i<=104;i++){
        var rn = Math.floor(Math.random()*10);
        clutter += `<div id="bubble">${rn}</div>`;
    }
    document.querySelector("#pbtm").innerHTML=clutter;
}
function runTimer(){
    var timer=60;
    var timer2=setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timeval").textContent=timer;
        }
        else{
            clearInterval(timer2);
            document.querySelector("#pbtm").innerHTML=`
            <h2>Game Over</h2>
            <h3>Press F5 to Restart</h3>
        `;
        }
    },1000);
}
function hit(){
    hitrn=Math.floor(Math.random()*10);
    document.querySelector("#hit").textContent=hitrn;
}
document.querySelector("#pbtm")
.addEventListener("click",function(dets){
    var clicked=Number(dets.target.textContent);
    if(clicked==hitrn){
        getScore();
        hit();
        makeBubble();
    }
});
document.querySelector(".instruction button").addEventListener("click", function() {
    hit();
    runTimer();
    makeBubble();
  });
  

