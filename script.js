//set variables 
var fire = document.createElement("button");
var ice = document.createElement("button");
var poison = document.createElement("button");
var dragonEle = document.createElement("div");
var winnerEle = document.createElement("div");
var dragonDamage = 0;

//Display 
fire.innerHTML = "Fire Attack";
ice.innerHTML = "Ice Attack";
poison.innerHTML = "Poison Attack";
dragonEle.innerHTML = "Dragon Damage: " + dragonDamage;

document.body.appendChild(fire);
document.body.appendChild(ice);
document.body.appendChild(poison);
document.body.appendChild(dragonEle);
document.body.appendChild(winnerEle);

//function for clicking buttons
fire.addEventListener("click", function () {
  attack(3, "fire");
});
ice.addEventListener("click", function () {
  attack(1, "ice");
});
poison.addEventListener("click", function () {
  attack(4, "poison");
});

//create output after clicking buttons
function attack(damage, attackType) {
  if (attackType == "fire") {
    dragonDamage = dragonDamage + (damage - 1);
  } else if (attackType == "ice") {
    dragonDamage = dragonDamage + (damage + 1);
  } else {
    dragonDamage = dragonDamage + damage;
  }
  
  //display numbers
  dragonEle.innerHTML = "Dragon Damage: " + dragonDamage;

  //create final output
  if (dragonDamage >= 10) {
    winnerEle.innerHTML = "You defeated the Dragon!";
  }
}