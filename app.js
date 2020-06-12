/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/



//console.log(dice);

//document.querySelector('#current-'+ activePlayer).textContent=dice;

//document.querySelector('#current-'+activePlayer).innerHTML='<em>'+dice+'</em>';

/* var x=document.querySelector('#score-0').textContent;
console.log(x); */
var scores,roundScore,activePlayer,gamePlaying,dice1DOM,dice2DOM;

dice1DOM=document.getElementById('dice-1');
dice2DOM=document.getElementById('dice-2');
inIt();


document.querySelector('.btn-roll').addEventListener('click',function(){
    if(gamePlaying){
    //1. Random number
    var dice1 = Math.floor(Math.random()*6)+1;
    var dice2 = Math.floor(Math.random()*6)+1;
    // 2. Display the result
   /*  var diceDOM=document.querySelector('.dice'); */
    dice1DOM.style.display='block';
    dice1DOM.src='dice-'+dice1+'.png';
    dice2DOM.style.display='block';
    dice2DOM.src='dice-'+dice2+'.png';
    // 3. Update the round score If the rolled number was NOT a 1.

    if(dice1 !== 1 && dice2 != 1){
        // Add score
        roundScore +=dice1;
        roundScore +=dice2;
        document.querySelector('#current-'+ activePlayer).textContent=roundScore;
    }else{
        // Next player
        nextPlayer();
    }
}
});

function nextPlayer(){
    activePlayer ===0?activePlayer=1:activePlayer=0;
        roundScore=0;
        document.querySelector('#current-0').textContent=0;
        document.querySelector('#current-1').textContent=0;
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        //document.querySelector('.player-0-panel').classList.remove('active');
       // document.querySelector('.player-1-panel').classList.add('active');
       dice1DOM.style.display='none';
       dice2DOM.style.display='none';
       
}

document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gamePlaying){
        // 1. Add Current scoe to global score
        scores[activePlayer] += roundScore;
        document.getElementById('score-'+activePlayer).textContent=scores[activePlayer];
        var fScore=document.querySelector('.final-score').value;
        console.log(fScore);
         if(fScore.length == 0){
            fScore=100;
        }
        // 2. Check if player won the game
        if(scores[activePlayer]>=fScore){
            document.getElementById('name-'+activePlayer).textContent='Winner!';

            dice1DOM.style.display='none';
            dice2DOM.style.display='none';
            document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
            gamePlaying=false;
        }else{
        // 3. Update the UI
            nextPlayer();
        }
    }
   
});

document.querySelector('.btn-new').addEventListener('click',inIt);

function inIt(){
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    dice1DOM.style.display='none';
    dice2DOM.style.display='none';
    gamePlaying=true;
document.getElementById('score-0').textContent='0';

document.getElementById('score-1').textContent='0';

document.getElementById('current-0').textContent='0';

document.getElementById('current-1').textContent='0';
document.getElementById('name-0').textContent='Player-0';

document.getElementById('name-1').textContent='Player-1';

document.querySelector('.player-0-panel').classList.remove('winner');

document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');

document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');
}
















