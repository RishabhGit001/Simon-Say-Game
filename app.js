let gameSeq = [];
let userSeq = [];


let btns = ["btn-1", "btn-2", "btn-3", "btn-4"];
let start = false;
let level = 0;
let h2 = document.querySelector("h2");


document.addEventListener("keypress", function(){
    if(start == false){
        start = true;
        console.log("Game Started");
        levelup();
    }
});


function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 350);
}


function userflash(btn){
    btn.classList.add("user-flash");
    setTimeout(function(){
        btn.classList.remove("user-flash");
    }, 200);
}


function levelup(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randomidx = Math.floor(Math.random()*3);
    let randombtn = btns[randomidx];
    gameSeq.push(randombtn);
    console.log("Game seq: ", gameSeq);
    let selectrand = document.querySelector(`.${randombtn}`);

    btnflash(selectrand );
}


function checkAns(idx){
    if(gameSeq[idx] === userSeq[idx]){
        if(gameSeq.length == userSeq.length){
            setTimeout(levelup, 700);
        }
    }
    else{
        h2.innerHTML = `Game over! Your score was <b>${level}</b> <br> Press any key to start.`
        reset();
    }
}


function btnpress(){
    let btn = this;
    userflash(btn);

    let usercolor = btn.getAttribute("id");
    userSeq.push(usercolor);

    checkAns(userSeq.length-1);
}



let allbtns = document.querySelectorAll(".btn");

for(btn of allbtns){
    btn.addEventListener("click", btnpress);
}

function reset(){
    start = false;
    level = 0;
    gameSeq = [];
    userSeq = [];
}