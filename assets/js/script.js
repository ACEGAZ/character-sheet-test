function numberGenerator() {
    return Math.floor(Math.random() * 10) + 1;
 
}

function diceRoll() {
  return document.getElementById("strength").valueAsNumber + numberGenerator()
}

function result() {
  
  document.getElementById("result").innerHTML = diceRoll()
}





 
 







