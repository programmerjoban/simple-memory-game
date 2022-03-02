// global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global variables

var pattern = []; // array which will be randomly genrated by the randomPattern function
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var strikes = 0;

function startGame(){
  // create a random pattern
  createRandomPattern();
  
  //initialize game variables
  progress = 0;
  gamePlaying = true;
  
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence()
}

function stopGame(){
  //initialize game variables
  gamePlaying = false;
  clueHoldTime = 1000;
  strikes = 0;
  document.getElementById("strikesCounter").innerHTML = "Strikes: " + strikes;
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 500.0,
  6: 250.4
}

function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}

function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}

function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

// add the colors when button clicked
function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}

// remove the dark colors when button not presssed
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

//play the sequence and the pattern gets faster each round
function playClueSequence(){
  guessCounter = 0;
  context.resume();
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    clueHoldTime -= 200/(pattern.length)
    delay += clueHoldTime; 
    delay += cluePauseTime;
  }
  
}

//function will stop the game and show a alert that you lost
function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

//function will stop the game and show a alert that you won
function winGame(){
  stopGame();
  alert("You Win!!!");
}

// keep track of the guessed button
function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  
  if(pattern[guessCounter] == btn)
  {
    if(guessCounter == progress)
    {
      if(progress == pattern.length - 1)
      {
        winGame();
      }
      else
      {
        progress++;
        playClueSequence();
      }
    }
    else
    {
      guessCounter++;
    }
  }
  else
  {
    // if wrong guess increament the strikes
    strikes++;
    
    // change the strikes numeber on the screen
    document.getElementById("strikesCounter").innerHTML = "Strikes: " + strikes;
    
    // if three mistakes have been made then the user loses
    if(strikes == 3)
      {
        strikes = 0;
        document.getElementById("strikesCounter").innerHTML = "Strikes: " + strikes;
        loseGame();
      }
    
  }
}

//generate a random pattern each time the game starts
function createRandomPattern()
{
  // pattern will have 8 numbers
  for(let i=0; i < 8; i++)
    {
      // add random number in between 1 - 6
      pattern[i] = Math.floor(Math.random() * 6 + 1);
    }
  // logging sucesss for debug purposes
  console.log("Finished creating the pattern!");
}
