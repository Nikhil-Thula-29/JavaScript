const score=JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    loose: 0,
    tie: 0
  };
updateScoreElement();
function playGame(usermove){   
let result='';   
const computermove=pickComputerMove();
if(usermove==='paper'){
    if(computermove==='rock'){
    result='You Win';
    }else if(computermove==='scissor'){
    result='You Loose';
    }else{
    result='Tie';
    }
}else if(usermove==='scissor'){
    if(computermove==='rock'){
    result='You Loose';
    }else if(computermove==='scissor'){
    result='Tie';
    }else{
    result='You Win';
    }
}else{
    if(computermove==='rock'){
    result='Tie';
    }else if(computermove==='scissor'){
    result='You Win';
    }else{
    result='You Loose';
    }
}

if(result==='You Win'){
    score.wins+=1;
}else if(result==='You Loose'){
    score.loose+=1;
}else{ 
    score.tie+=1;
}
//localStorage only supports strings then we need to convert score to string i.e json.stringify
localStorage.setItem('score',JSON.stringify(score));
updateScoreElement();
//Note::  It is not '' it is `` on tab button.
document.querySelector('.js-result').innerHTML=`${result}`;
document.querySelector('.js-moves').innerHTML=`You
    <img src="images/${usermove}.jpeg" class="move-i">
    <img src="images/${computermove}.jpeg" class="move-i">
    Computer`
//alert(`You picked ${usermove}. Computer picked ${computermove}. ${result}.\nWins: ${score.wins}, Looses: ${score.loose}, Ties: ${score.tie}.`);
}      
function pickComputerMove(){
let computervalue1=Math.random();
let computermove='';
if(computervalue1>=0 && computervalue1<1/3){
    computermove='rock';
}else if(computervalue1>=1/3 && computervalue1>2/3){
    computermove='paper';
}else{
    computermove='scissor';
}
console.log(computermove);
return computermove;
}
function updateScoreElement(){
    document.querySelector('.js-score').innerHTML=`Wins: ${score.wins}, Looses: ${score.loose}, Ties: ${score.tie}`;
} 