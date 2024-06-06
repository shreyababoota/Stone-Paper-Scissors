let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");
const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");
const drawchoice=(userchoice,compchoice)=>{
        console.log("draw.");
        msg.innerText="Draw. Try Again.";
        msg.style.backgroundColor="darkseagreen" ;
}
const showWinner=(userwin,userchoice,compchoice)=>{
    if(userwin==="true")
        {
            console.log("you win");
            msg.innerText=`You Win!Your ${userchoice} beats ${compchoice}.`;
            msg.style.backgroundColor="green";
            userscore++;
            userscorepara.innerText=userscore;
    }
    else if(userwin==="false") {
        console.log("you lose.");
        msg.innerText=`You Lose.${compchoice} beats your ${userchoice}.`;
        msg.style.backgroundColor="red";
        compscore++;
        compscorepara.innerText=compscore;
    }
}
const gencompchoice=()=>{
    const options=["rock","paper","scissors"];
    const index=Math.floor(Math.random()*3);
    return(options[index]);
}
const playgame=(userchoice)=>{
    console.log(userchoice,"was clicked.");
    const compchoice=gencompchoice();
    console.log("computer choice=", compchoice);
    let userwin=true;
    if(userchoice===compchoice)
    drawchoice(userchoice,compchoice);
    else{
        if(userchoice==="rock")
            {
                if(compchoice==="paper")
                   userwin="false";
                else userwin="true";
            }
            else if(userchoice==="paper")
                {
                    if(compchoice==="scissors")
                        userwin="false";
                    else userwin="true";
                }
                else {

                    if(compchoice==="rock")
                        userwin="false";
                    else userwin="true";
                }
            showWinner(userwin,userchoice,compchoice);
    }
}

choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    })
})

