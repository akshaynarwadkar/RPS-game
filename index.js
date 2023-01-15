
let newscore=0
function computerChoice(){
    const computerChoice=Math.floor(Math.random()*3)
    const RPS=['Rock','Paper','Scissors']
    
    
    return RPS[computerChoice]
}

function playerChoice(){
    const RPSButtons=document.querySelectorAll('.rpsButton')

    RPSButtons.forEach((RPSButton)=>{
        RPSButton.onclick=()=>{
            result(RPSButton.value)
        }
    })


}

function compareScore(playerChoice,computerChoice){
    let score;
    if(playerChoice==computerChoice){
         score=0
    }else if(playerChoice=='Rock' && computerChoice=='Scissors'){
        score=1
    }else if(playerChoice=='Scissors' && computerChoice=='Paper'){
        score=1
    }else if(playerChoice=='Paper' && computerChoice=='Rock'){
        score=1
    }else {
        score=-1
    }
    return score

}

function result(pChoice){
    const ComputerChoice=computerChoice()

    let score=compareScore(pChoice,ComputerChoice)
    const playerScoreEl=document.getElementById('player-score')
    const handsEl=document.getElementById('hands')
    handsEl.innerText=` 🧑  ${pChoice} vs 🤖 ${ComputerChoice}`

    newscore=newscore+score
    playerScoreEl.innerText=`Your score ${newscore}`

    const resultEl=document.getElementById('result')
    if(score==1){
        resultEl.innerText=`You Won !!`
    }else if(score==0){
        resultEl.innerText="It's a Tie !!"
    }else{
        resultEl.innerText='You Lose !!'
    }
   
    const endGameButtonEl=document.getElementById('endGameButton')
    endGameButtonEl.onclick=()=>{
        handsEl.innerText=''
        resultEl.innerText=''
        newscore=0
        playerScoreEl.innerText=''
    }
}




    


playerChoice()
