/**********js for pig-game****** */

/***********
 * there is actually a better way of coding what to do after a player wins and the user clicks
 * the roll dice or hold button and that is to use state variable like jonas did.
 * I did it in such a way that when the user clicks the roll dice or hold after a player won it just calls the newGame() function
 * REFER JONAS PIG_GAME VERSION TO SEE THE STATE VARIABLE ONE :)
 * I DID IT USING FUNCTIONAL PROGRAMMING :) i.e. following --> immutability and pure functions.
 */

//variable declaration
var score, roundScore,activePlayer,comp_dice_1,comp_dice_2,winning_number;

//winning_number = prompt('enter the winning number');

/*working
score = [0,0];
roundScore = 0;
activePlayer = 0;*/

//settting all values to 0
newGame();

//function to remove winner
function removeWinner(){
    document.getElementsByClassName('main-div__child')[0].classList.remove('winner');
    document.getElementsByClassName('main-div__child')[1].classList.remove('winner');
}

//function to change player
function changePlayer(){
    roundScore = 0;
    comp_dice_1 = [0,0];
    comp_dice_2 = [0,0];
    document.getElementById('player-' + activePlayer + '__currentscore').textContent = 0;
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    document.getElementsByClassName('child-1')[0].classList.toggle('active');
    document.getElementsByClassName('child-2')[0].classList.toggle('active');
    document.getElementsByTagName('IMG')[0].style.display = 'none';
    document.getElementsByTagName('IMG')[1].style.display = 'none';
}

//resetting everything to zero(new game/when a player wins)
function newGame(){
winning_number = 100;
score = [0,0];
roundScore = 0;
activePlayer = 0;
comp_dice_1 = [0,0];
comp_dice_2 = [0,0];
document.getElementById('player-0__score').textContent = 0;
document.getElementById('player-1__score').textContent = 0;
document.getElementById('player-0__currentscore').textContent = 0;
document.getElementById('player-1__currentscore').textContent = 0;
removeWinner();
document.getElementById('player-0').textContent = 'Player 1';
document.getElementById('player-1').textContent = 'Player 2';
//the reason I removed a class and added it again is to avoid the problem of duplicate classes
//that is there wiil be two 'active' classes in this case 
//but this problem did not occur when i ran the program but jonas suggested it ;)
//document.getElementsByClassName('main-div__child child-1')[0].classList.remove('active');
document.getElementsByClassName('main-div__child child-2')[0].classList.remove('active');
document.getElementsByClassName('main-div__child child-1')[0].classList.add('active');
document.getElementsByTagName('IMG')[0].style.display = 'none';
document.getElementsByTagName('IMG')[1].style.display = 'none';
}

//function for roll dice button
comp_dice_1 = [0,0];
comp_dice_2 = [0,0];
document.getElementsByClassName('btn-roll')[0].addEventListener('click',function(){
    //rolling the dice
    var dice = [Math.floor(Math.random() * 6 + 1), Math.floor(Math.random() * 6 + 1)];

    //compare the dices(for dice--->1)
    if(comp_dice_1[0] === 0 ){
        comp_dice_1[0] = dice[0];
        console.log('comp_dice-1-->0:' + comp_dice_1[0]);
    }
    else{
        comp_dice_1[1] = dice[0];
        console.log('comp_dice-1-->1:' + comp_dice_1[1]);
    }
    //compare the dices(for dice--->1)
    if(comp_dice_2[0] === 0 ){
        comp_dice_2[0] = dice[1];
        console.log('comp_dice-2-->0:' + comp_dice_2[0]);
    }
    else{
        comp_dice_2[1] = dice[1];
        console.log('comp_dice-2-->1:' + comp_dice_2[1]);
    }
    

    //compare the dices( for reals  :) )
    if((comp_dice_1[0] === 6 && comp_dice_1[1] === 6) || (comp_dice_2[0] === 6 && comp_dice_2[1] === 6)){
        score[activePlayer] = 0;
        document.getElementById('player-' + activePlayer + '__score').textContent = score[activePlayer];
        changePlayer();
    }
    else{
        if(comp_dice_1[1] !== 0 ){
            comp_dice_1[0] = comp_dice_1[1]; 
        }
        if(comp_dice_2[1] !== 0 ){
            comp_dice_2[0] = comp_dice_2[1]; 
        }
        //comp_dice_1[1] = comp_dice_1[0] ; 
        //comp_dice_2[1] = comp_dice_2[0] ; 

        if(score[activePlayer] >= winning_number){
            //reset everthing and activeplayer set to zero
            newGame();
        }
        else{
        //setting the display back to block
        var diceDOM = [document.getElementsByTagName('IMG')[0],document.getElementsByTagName('IMG')[1]];
        diceDOM[0].style.display = 'inline-block';
        diceDOM[1].style.display = 'inline-block';
    
        //setting the sameimg as the number rolled on dice
        diceDOM[0].src = 'resources/img/dice-' + dice[0] + '.png' ;
        diceDOM[1].src = 'resources/img/dice-' + dice[1] + '.png' ;
    
        //working
        if(dice[0] !== 1 && dice[1] !== 1){
            //continue to roll and add the score to currentscore
            roundScore += dice[0] + dice[1];
            document.getElementById('player-' + activePlayer + '__currentscore').textContent = roundScore;
        }
        else{
            //change activeplayer
            changePlayer();
        }
        }
    }
    

    

   
}); 

//setting up the hold working
document.getElementsByClassName('btn-hold')[0].addEventListener('click',function(){
    if(document.getElementById('player-0').textContent === 'Winner' || document.getElementById('player-1').textContent === 'Winner'){
        newGame();
    }
    else{
        //reading and setting the winning score!!!
        var win_score = document.getElementsByClassName('main-div__winscore')[0].value;
        if(win_score != ''){
            winning_number = win_score;
        }else{
            winning_number = 100;
        }

        score[activePlayer] += roundScore;
        document.getElementById('player-' + activePlayer + '__score').textContent = score[activePlayer];
        //when the player hits 100
        if(score[activePlayer] >= winning_number){
            document.getElementById('player-' + activePlayer).textContent = 'Winner';
            document.getElementsByClassName('main-div__child')[activePlayer].classList.add('winner');
            document.getElementsByClassName('main-div__child')[activePlayer].classList.remove('active');
        }else{
        changePlayer();
        }
    }

});


//new game
//you can also use newGame() instead of newGame to run the function once when the page loads :)
document.getElementsByClassName('btn-new')[0].addEventListener('click',newGame);



/*getElementsbyTagName stores the result in an array for fucks sake!!! (no it does not it is an HTMLCollections)!!!
document.getElementsByTagName('IMG')[0].src = 'resources/img/dice-3.png';*/

/*
document.querySelector('#player-' + activePlayer +'__currentscore').innerHTML = '';  //can be used to write html code
document.querySelector('#player-' + activePlayer +'__currentscore').textContent = ''; //can be used to write only plain text
document.querySelector('#player-' + activePlayer +'__currentscore').style.display = 'none'; //style property can be used to set css properties
  
console.log(dice);
document.querySelector('#player-' + activePlayer +'__currentscore').textContent = dice;*/


