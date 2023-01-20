/**
 * This code adds event listeners to the DOM. It does everything inside
 * an anonymous function when the load event triggers. This is to make sure
 * that the DOM is fully built before we begin to add our listeners to it.
 * 
 * Bello Olaseni 2022
 */


const player1 = document.getElementById("player1");   

const player2 = document.getElementById("player2");

const pt1 = document.getElementById("pt1");

const pt2 = document.getElementById("pt2");

// The variables to count the scores of the players
let winCount1 = 0;
let winCount2 = 0;

// The variables to store the scores of the two players
const score1 = document.getElementById("score1");
const score2 = document.getElementById("score2");

/** 
* This Method adds the Event Listener to the document and performs 
* the functions in it  .
* @param load
*/ 
 window.addEventListener("load", function() {

    let msg = document.getElementById("submit");
    msg.addEventListener("click",setPlayerNames);
    
 });

 /** 
* This Method adds the Event Listener to the document and performs 
* the functions in it  .
* @param load
*/ 

// the roll Fuction for the start button (Main function)
 function roll(){
    // This Selects the random images as the images source and sets it as the images attribute.
    var randomNumber1 = Math.floor(Math.random()*6) + 1;

    var randomDiceImage = "dice" + randomNumber1 + ".png"; // dice 1 to 6
    
    var randomImageSource = "images/" + randomDiceImage;   
    
    var image1 = document.querySelectorAll("img")[0];
    
    image1.setAttribute("src", randomImageSource);
    
    var randomNumber2 = Math.floor(Math.random()*6) + 1;
    
    var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
    
    document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);
    
    // This Sets the condition for the winner and loser and displays it.
    if (randomNumber1 > randomNumber2 ){
        document.getElementById("hey").innerHTML = userid1 + " Wins";
        winCount1 ++;
        score1.innerText= winCount1;
    } else if (randomNumber2 > randomNumber1) {
        document.getElementById("hey").innerHTML = userid2 + " Wins";
        winCount2 ++;
        score2.innerText= winCount2;
    }
    else {
        document.getElementById("hey").innerHTML = " 🎉 It is a Draw!"
    }
       
    }
    /** End of the roll function */

    /** The setPlayers Function */  

/** 
* This Method changes the message and the player names 
* when it is Clicked.
*/   
    function setPlayerNames(){
        let node = document.getElementById("message");
        node.innerHTML = "Congratulations!";

        userid1= document.forms.form1.userid1.value;
        userid2= document.forms.form1.userid2.value;

        player1.innerText = userid1;
        player2.innerText = userid2;

        event.preventDefault();

        pt1.innerText= userid1 + " Win count";
        pt2.innerText= userid2 + " Win count";

        form1.style.display = 'none';

        document.getElementById("button").addEventListener("click", roll);
    }
    /** End of the setPlayers function */
