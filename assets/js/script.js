//generates number from one to 10 to simulate a 10 sided die

function numberGenerator() {
    return Math.floor(Math.random() * 10) + 1;
 
}

//adds strength input value to a 10 sided die roll 
function strengthDiceRoll() {
  return document.getElementById("strength").valueAsNumber + numberGenerator()
}

// prints results of strength + 10 sided dice roll to a html span
function strengthResult() {
  
  document.getElementById("strength-roll").innerHTML = strengthDiceRoll()
}

//adds dexterity input value to a 10 sided die roll
function dexDiceRoll() {
  return document.getElementById("dexterity").valueAsNumber + numberGenerator()
}

// prints results of dexterity + 10 sided dice roll to a html span
function dexResult() {
  
  document.getElementById("dex-roll").innerHTML = dexDiceRoll()
}

//adds perception input value to a 10 sided die roll
function perDiceRoll() {
  return document.getElementById("perception").valueAsNumber + numberGenerator()
}

// prints results of perception + 10 sided dice roll to a html span
function perResult() {
  
  document.getElementById("per-roll").innerHTML = perDiceRoll()
}

//adds vitality input value to a 10 sided die roll
function vitDiceRoll() {
  return document.getElementById("vitality").valueAsNumber + numberGenerator()
}

// prints results of vitality + 10 sided dice roll to a html span
function vitResult() {
  
  document.getElementById("vit-roll").innerHTML = vitDiceRoll()
}

//adds stamina input value to a 10 sided die roll
function staDiceRoll() {
  return document.getElementById("stamina").valueAsNumber + numberGenerator()
}

// prints results of stamina + 10 sided dice roll to a html span
function staResult() {
  
  document.getElementById("sta-roll").innerHTML = staDiceRoll()
}

//adds charisma input value to a 10 sided die roll
function chaDiceRoll() {
  return document.getElementById("charisma").valueAsNumber + numberGenerator()
}

// prints results of charisma + 10 sided dice roll to a html span
function chaResult() {
  
  document.getElementById("cha-roll").innerHTML = chaDiceRoll()
}

//adds intelligence input value to a 10 sided die roll
function intDiceRoll() {
  return document.getElementById("intelligence").valueAsNumber + numberGenerator()
}

// prints results of intelligence + 10 sided dice roll to a html span
function intResult() {
  
  document.getElementById("int-roll").innerHTML = intDiceRoll()
}

//adds willpower input value to a 10 sided die roll
function willDiceRoll() {
  return document.getElementById("willpower").valueAsNumber + numberGenerator()
}

// prints results of willpower + 10 sided dice roll to a html span
function willResult() {
  
  document.getElementById("will-roll").innerHTML = willDiceRoll()
}

//adds vasara input and strength value to a 10 sided die roll
function vasaraDiceRoll() {
  return document.getElementById("vasara").valueAsNumber + document.getElementById("strength").valueAsNumber + numberGenerator()
}

// prints results of vasara + strength + a 10 sided dice roll to a html span
function vasaraResult() {
  
  document.getElementById("vasara-roll").innerHTML = vasaraDiceRoll()
}




 
 







