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

//adds longsword input and strength value to a 10 sided die roll
function longswordDiceRoll() {
  return document.getElementById("longsword").valueAsNumber + document.getElementById("strength").valueAsNumber + numberGenerator()
}

// prints results of longsword + strength + a 10 sided dice roll to a html span
function longswordResult() {
  
  document.getElementById("longsword-roll").innerHTML = longswordDiceRoll()
}


//adds heavy axe input and strength value to a 10 sided die roll
function heavyAxeDiceRoll() {
  return document.getElementById("heavy-axe").valueAsNumber + document.getElementById("strength").valueAsNumber + numberGenerator()
}

// prints results of heavy axe + strength + a 10 sided dice roll to a html span
function heavyAxeResult() {
  
  document.getElementById("heavy-axe-roll").innerHTML = heavyAxeDiceRoll()
}

//adds great bow input and strength value to a 10 sided die roll
function greatBowDiceRoll() {
  return document.getElementById("great-bow").valueAsNumber + document.getElementById("strength").valueAsNumber + numberGenerator()
}

// prints results of great bow + strength + a 10 sided dice roll to a html span
function greatBowResult() {
  
  document.getElementById("great-bow-roll").innerHTML = greatBowDiceRoll()
}

//adds throwing axes input and strength value to a 10 sided die roll
function throwingAxesDiceRoll() {
  return document.getElementById("throwing-axes").valueAsNumber + document.getElementById("strength").valueAsNumber + numberGenerator()
}

// prints results of throwing axes + strength + a 10 sided dice roll to a html span
function throwingAxesResult() {
  
  document.getElementById("throwing-axes-roll").innerHTML = throwingAxesDiceRoll()
}

//adds slugging input and strength value to a 10 sided die roll
function sluggingDiceRoll() {
  return document.getElementById("slugging").valueAsNumber + document.getElementById("strength").valueAsNumber + numberGenerator()
}

// prints results of throwing axes + strength + a 10 sided dice roll to a html span
function sluggingResult() {
  
  document.getElementById("slugging-roll").innerHTML = sluggingDiceRoll()
}

//adds might input and strength value to a 10 sided die roll
function mightDiceRoll() {
  return document.getElementById("might").valueAsNumber + document.getElementById("strength").valueAsNumber + numberGenerator()
}

// prints results of might + strength + a 10 sided dice roll to a html span
function mightResult() {
  
  document.getElementById("might-roll").innerHTML = mightDiceRoll()
}

//adds climbing input and strength value to a 10 sided die roll
function climbingDiceRoll() {
  return document.getElementById("climbing").valueAsNumber + document.getElementById("strength").valueAsNumber + numberGenerator()
}

// prints results of climbing + strength + a 10 sided dice roll to a html span
function climbingResult() {
  
  document.getElementById("climbing-roll").innerHTML = climbingDiceRoll()
}

//adds jumping input and strength value to a 10 sided die roll
function jumpingDiceRoll() {
  return document.getElementById("jumping").valueAsNumber + document.getElementById("strength").valueAsNumber + numberGenerator()
}

// prints results of jumping + strength + a 10 sided dice roll to a html span
function jumpingResult() {
  
  document.getElementById("jumping-roll").innerHTML = jumpingDiceRoll()
}

//adds blocking input and strength value to a 10 sided die roll
function blockingDiceRoll() {
  return document.getElementById("blocking").valueAsNumber + document.getElementById("strength").valueAsNumber + numberGenerator()
}

// prints results of blocking + strength + a 10 sided dice roll to a html span
function blockingResult() {
  
  document.getElementById("blocking-roll").innerHTML = blockingDiceRoll()
}

//adds smithing input and strength value to a 10 sided die roll
function smithingDiceRoll() {
  return document.getElementById("smithing").valueAsNumber + document.getElementById("strength").valueAsNumber + numberGenerator()
}

// prints results of smithing + strength + a 10 sided dice roll to a html span
function smithingResult() {
  
  document.getElementById("smithing-roll").innerHTML = smithingDiceRoll()
}

//adds Intimidation input and strength value to a 10 sided die roll
function intimidationDiceRoll() {
  return document.getElementById("intimidation").valueAsNumber + document.getElementById("strength").valueAsNumber + numberGenerator()
}

// prints results of Intimidation + strength + a 10 sided dice roll to a html span
function intimidationResult() {
  
  document.getElementById("intimidation-roll").innerHTML = intimidationDiceRoll()
}

//adds daggers input and dexterity value to a 10 sided die roll
function daggersDiceRoll() {
  return document.getElementById("daggers").valueAsNumber + document.getElementById("dexterity").valueAsNumber + numberGenerator()
}

// prints results of daggers + dexterity + a 10 sided dice roll to a html span
function daggersResult() {
  
  document.getElementById("daggers-roll").innerHTML = daggersDiceRoll()
}

//adds swords input and dexterity value to a 10 sided die roll
function swordsDiceRoll() {
  return document.getElementById("swords").valueAsNumber + document.getElementById("dexterity").valueAsNumber + numberGenerator()
}

// prints results of swords + dexterity + a 10 sided dice roll to a html span
function swordsResult() {
  
  document.getElementById("swords-roll").innerHTML = swordsDiceRoll()
}

//adds throwing knives input and dexterity value to a 10 sided die roll
function throwingKnivesDiceRoll() {
  return document.getElementById("throwing-knives").valueAsNumber + document.getElementById("dexterity").valueAsNumber + numberGenerator()
}

// prints results of throwing knives + dexterity + a 10 sided dice roll to a html span
function throwingKnivesResult() {
  
  document.getElementById("throwing-knives-roll").innerHTML = throwingKnivesDiceRoll()
}

//adds spears input and dexterity value to a 10 sided die roll
function spearsDiceRoll() {
  return document.getElementById("spears").valueAsNumber + document.getElementById("dexterity").valueAsNumber + numberGenerator()
}

// prints results of spears + dexterity + a 10 sided dice roll to a html span
function spearsResult() {
  
  document.getElementById("spears-roll").innerHTML = spearsDiceRoll()
}

//adds war axes input and dexterity value to a 10 sided die roll
function warAxesDiceRoll() {
  return document.getElementById("war-axes").valueAsNumber + document.getElementById("dexterity").valueAsNumber + numberGenerator()
}

// prints results of war axes + dexterity + a 10 sided dice roll to a html span
function warAxesResult() {
  
  document.getElementById("war-axes-roll").innerHTML = warAxesDiceRoll()
}

//adds short bows input and dexterity value to a 10 sided die roll
function shortBowsDiceRoll() {
  return document.getElementById("short-bows").valueAsNumber + document.getElementById("dexterity").valueAsNumber + numberGenerator()
}

// prints results of short bows + dexterity + a 10 sided dice roll to a html span
function shortBowsResult() {
  
  document.getElementById("short-bows-roll").innerHTML = shortBowsDiceRoll()
}

//adds long bows input and dexterity value to a 10 sided die roll
function longBowsDiceRoll() {
  return document.getElementById("long-bows").valueAsNumber + document.getElementById("dexterity").valueAsNumber + numberGenerator()
}

// prints results of long bows + dexterity + a 10 sided dice roll to a html span
function longBowsResult() {
  
  document.getElementById("long-bows-roll").innerHTML = longBowsDiceRoll()
}

//adds throwing input and dexterity value to a 10 sided die roll
function throwingDiceRoll() {
  return document.getElementById("throwing").valueAsNumber + document.getElementById("dexterity").valueAsNumber + numberGenerator()
}

// prints results of throwing + dexterity + a 10 sided dice roll to a html span
function throwingResult() {
  
  document.getElementById("throwing-roll").innerHTML = throwingDiceRoll()
}

//adds martial arts input and dexterity value to a 10 sided die roll
function martialArtsDiceRoll() {
  return document.getElementById("martial-arts").valueAsNumber + document.getElementById("dexterity").valueAsNumber + numberGenerator()
}

// prints results of martial arts + dexterity + a 10 sided dice roll to a html span
function martialArtsResult() {
  
  document.getElementById("martial-arts-roll").innerHTML = martialArtsDiceRoll()
}

//adds metal claws input and dexterity value to a 10 sided die roll
function metalClawsDiceRoll() {
  return document.getElementById("metal-claws").valueAsNumber + document.getElementById("dexterity").valueAsNumber + numberGenerator()
}

// prints results of metal claws + dexterity + a 10 sided dice roll to a html span
function metalClawsResult() {
  
  document.getElementById("metal-claws-roll").innerHTML = metalClawsDiceRoll()
}

//adds stealth input and dexterity value to a 10 sided die roll
function stealthDiceRoll() {
  return document.getElementById("stealth").valueAsNumber + document.getElementById("dexterity").valueAsNumber + numberGenerator()
}

// prints results of stealth + dexterity + a 10 sided dice roll to a html span
function stealthResult() {
  
  document.getElementById("stealth-roll").innerHTML = stealthDiceRoll()
}

//adds lockpicking input and dexterity value to a 10 sided die roll
function lockpickingDiceRoll() {
  return document.getElementById("lockpicking").valueAsNumber + document.getElementById("dexterity").valueAsNumber + numberGenerator()
}

// prints results of lockpicking + dexterity + a 10 sided dice roll to a html span
function lockpickingResult() {
  
  document.getElementById("lockpicking-roll").innerHTML = lockpickingDiceRoll()
}

//adds dancing input and dexterity value to a 10 sided die roll
function dancingDiceRoll() {
  return document.getElementById("dancing").valueAsNumber + document.getElementById("dexterity").valueAsNumber + numberGenerator()
}

// prints results of dancing + dexterity + a 10 sided dice roll to a html span
function dancingResult() {
  
  document.getElementById("dancing-roll").innerHTML = dancingDiceRoll()
}

//adds riding input and dexterity value to a 10 sided die roll
function ridingDiceRoll() {
  return document.getElementById("riding").valueAsNumber + document.getElementById("dexterity").valueAsNumber + numberGenerator()
}

// prints results of riding + dexterity + a 10 sided dice roll to a html span
function ridingResult() {
  
  document.getElementById("riding-roll").innerHTML = ridingDiceRoll()
}

//adds dodge input and dexterity value to a 10 sided die roll
function dodgeDiceRoll() {
  return document.getElementById("dodge").valueAsNumber + document.getElementById("dexterity").valueAsNumber + numberGenerator()
}

// prints results of dodge + dexterity + a 10 sided dice roll to a html span
function dodgeResult() {
  
  document.getElementById("dodge-roll").innerHTML = dodgeDiceRoll()
}

//adds pickpocket input and dexterity value to a 10 sided die roll
function pickpocketDiceRoll() {
  return document.getElementById("pickpocket").valueAsNumber + document.getElementById("dexterity").valueAsNumber + numberGenerator()
}

// prints results of pickpocket + dexterity + a 10 sided dice roll to a html span
function pickpocketResult() {
  
  document.getElementById("pickpocket-roll").innerHTML = pickpocketDiceRoll()
}

 
 







