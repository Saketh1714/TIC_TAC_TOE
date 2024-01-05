console.log("welcone to tic tac toe")
let music=new Audio("winning.wav")
let turn=new Audio("ting.mp3")
let gameover=new Audio("gameover.mp3")
let Turn="X"
let isgameover=false


const ChangeTurn=()=>{

    return Turn==="X"?"o":"X"
}
const checkforwin=()=>{
    let boxtext=document.getElementsByClassName('boxtext');
    let wins=[
        [0,1,2,-1,89,0],
        [3,4,5,-1,250,0],
        [6,7,8,-1,420,0],
        [0,3,6,80,65,90],
        [1,4,7,251,65,90],
        [2,5,8,407,65,90],
        [0,4,8,206,200,45],
        [2,4,6,272,243,136],
    ]
    wins.forEach(e=>{
        if(boxtext[e[0]].innerText===boxtext[e[1]].innerText&& boxtext[e[2]].innerText==boxtext[e[1]].innerText && boxtext[e[0]].innerText!==""){
        document.querySelector('.info').innerText=boxtext[e[0]].innerText+"won"
        music.play();
        isgameover=true;
        document.querySelector('.imagebox').getElementsByTagName('img')[0].style.width="255px";
        document.querySelector(".line").style.width="20vw";
        // document.querySelector(".line").style.transform=`translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`
        document.querySelector(".line").style.transform = `translate(${e[3]}px, ${e[4]}px) rotate(${e[5]}deg)`;

      
        
        }
    })

}


//main logic

let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText==='')
        {
            boxtext.innerText=Turn;
            Turn=ChangeTurn();
            turn.play();
            checkforwin();
            if(!isgameover)
            {
                document.getElementsByClassName("info")[0].innerText="Turn for"+Turn;
            }
                //  document.getElementsByClassName("info")[0].innerText="Turn for"+Turn;
            
        }
    })
})


reset.addEventListener('click',()=>{
    let boxtexts=document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element=>{
        element.innerText=""
    });
    Turn="X"
    isgameover=false
    document.querySelector(".line").style.width="0vw";
    document.getElementsByClassName("info")[0].innerText="Turn for"+Turn;
    document.querySelector('.imagebox').getElementsByTagName('img')[0].style.width="0px"
    
})
