window.addEventListener('load', (event) => initialiser());
document.addEventListener("keydown",event => menuToggle(event.key));
document.addEventListener("keydown",event => update(event.key));
document.getElementById("snack").addEventListener("click", eatSnack);
document.getElementById("meal").addEventListener("click", eatMeal);
document.getElementById("excercise").addEventListener("click", doExcersise);
document.getElementById("fitness").addEventListener("click", doFitness);
document.getElementById("buyOne").addEventListener("click", buyCake);
document.getElementById("buyTwo").addEventListener("click", buyBagel);
document.getElementById("buyThree").addEventListener("click", buybirb);
document.getElementById("buyFour").addEventListener("click", buyUku);
setInterval(timming, 2000); 
var t = 0;

function timming(){
  petMove();
  birbMove();
  if(t >= 1){
    deathCounter();
  }
    //add a 450 interval for hunger-- bc he get HUNGY :(
  else{
    t++;
  }
}

//Variables-------------------
let openMenu = false;
const poop = ['div.poo.poopDivA','div.poo.poopDivB','div.poo.poopDivC','div.poo.poopDivD','div.poo.poopDivE','div.poo.poopDivF'];
var poopCount = -1;
var happiness = 2;
var weight = 10;
var hunger = 2;
var life = 5;
var shmoney = 100;
const itemArray = [0,0,0,0];
const itemsIds = ['cakeItemId','bagelItemId','birbItemId','ukuItemId'];
const soldIds = ['buyOne','buyTwo','buyThree','buyFour'];
var latitude = 35;
var longitude = 45;
var longitudeBirb = 58;
var latitudeBirb = 60;
var move = 0;
var dir = 1;
var death = 10;

//----------------------------

function hideMenus(){
  element = document.querySelector('div.home_menu');
  element.style.visibility = 'hidden';
  element = document.querySelector('div.health_menu');
  element.style.visibility = 'hidden';
  element = document.querySelector('div.food_menu');
  element.style.visibility = 'hidden';
  element = document.querySelector('div.shop_menu');
  element.style.visibility = 'hidden';
  element = document.querySelector('div.wc_menu');
  element.style.visibility = 'hidden';
  openMenu = false;
}

function clearShit(){
  for(var i = 0; i <= 5; i++){
    element = document.querySelector(poop[i]);
    element.style.visibility = 'hidden';
  }
  poopCount = -1;
}

const cursor = document.getElementById('cursor');
let x = 50;
let w = 6;
function update(key){
  const s = cursor.style;
  const d = 10;
  if (key == 'ArrowRight' && x < 70) {
    x += d;
  }
  if (key == 'ArrowLeft' && x > 30) {
    x -= d;
  }
  s.left = "calc(" + x + '% + ' + (w / 3) + "vw)";
}

function menuToggle(key){
  if(key == 'Enter' && openMenu == false){
    if(x == 30){
      element = document.querySelector('div.home_menu');
      element.style.visibility = 'visible';
      openMenu = true;
    }
    if(x == 40){
      element = document.querySelector('div.health_menu');
      element.style.visibility = 'visible';
      openMenu = true;
    }
    if(x == 50){
      element = document.querySelector('div.food_menu');
      element.style.visibility = 'visible';
      openMenu = true;
    }
    if(x == 60){
      element = document.querySelector('div.shop_menu');
      element.style.visibility = 'visible';
      openMenu = true;
    }
    if(x == 70){
      //clear poop
      clearShit();
      openMenu = false;
    }
    
  }
  if(key == 'Escape' && openMenu == true){
    hideMenus();
  }
}

//Food + Excersise-----------------------------------------
function eatSnack() {
  //add 1 poop
  poopCount = poopCount + 1;
  for(var i = 0; i <= poopCount; i++){
    element = document.querySelector(poop[i]);
    element.style.visibility = 'visible';
  }
  //add happy
  happiness+=2;
  happinessBarAdjust();
  //add wieght
  weight+=4;
  weightChange();
  //add hunger
  hunger++;
  hungerBarAdjust();
}

function eatMeal() {
  //add 2 poop
  poopCount = poopCount + 2;
  //if(poopCount => 5){poopCount = 5;}
  for(var i = 0; i <= poopCount; i++){
    element = document.querySelector(poop[i]);
    element.style.visibility = 'visible';
  }
  //add happy
  happiness++;
  happinessBarAdjust();
  //add wieght
  weight+=2;
  weightChange();
  //add hunger
  hunger+=2;
  hungerBarAdjust();
  //add life
  life+=2;
  lifeBarAdjust();
}

function doExcersise() {
  //sub weight
  weight-=2;
  weightChange();
  //sub hunger
  hunger-=2;
  hungerBarAdjust();
  //add happy
  happiness-=1;
  happinessBarAdjust();
  //add life
  life++;
  lifeBarAdjust();
}

function doFitness() {
  //sub weight
  weight-=1;
  weightChange();
  //sub hunger
  hunger-=1;
  hungerBarAdjust();
  //add happy
  happiness-=1;
  happinessBarAdjust();
  //add life
  life++;
  lifeBarAdjust();
}
//---------------------------------------------
//shop Shit------------------------------------
function buyCake() {
    if(shmoney > 19){
      if(itemArray[0] < 1){
        shmoney-=20;
        itemArray[0] = 1;
      }
    }
    shopShit();
}
function buyBagel() {
    if(shmoney > 19){
      if(itemArray[1] < 1){
        shmoney-=20;
        itemArray[1] = 1;
      }
    }
    shopShit();

}
function buybirb() {
    if(shmoney > 49){
      if(itemArray[2] < 1){
        shmoney-=50;
        itemArray[2] = 1;
      }
    }
    shopShit();

}
function buyUku() {
  if(shmoney > 50){
      if(itemArray[3] < 1){
        shmoney-=50;
        itemArray[3] = 1;
      }
    }
    shopShit();

}
function shopShit() {
  for(var i = 0; i <= 3; i++){
      if(itemArray[i] == 1){
        const element = document.getElementById(itemsIds[i]);
        element.style.visibility = 'visible';
        var elementTwo = document.getElementById(soldIds[i]);
        element.style.visibility = 'visible';
        happiness+=10;
        happinessBarAdjust();
      }
      else{
        const element = document.getElementById(itemsIds[i]);
        element.style.visibility = 'hidden';
        var elementTwo = document.getElementById(soldIds[i]);
        element.style.visibility = 'hidden';
      }
  }
  shmoneyChange();
}



//---------------------------------------------
//bars-----------------------------------------
function happinessBarAdjust() {
  if(happiness >= 10){happiness = 10;}
  if(happiness <= 0){happiness = 0;}
  const element = document.getElementById('happyBarId');
  element.style.width = "calc("+ (happiness * 3) +"vw - 6px)";
  if(happiness == 0){
    document.getElementById("petId").src = 'Pet%20Images/petSad.png';
  }
  else{
    document.getElementById("petId").src = 'Pet%20Images/petNormal.png';
  }
}

function hungerBarAdjust() {
  if(hunger >= 10){hunger = 10;}
  if(hunger <= 0){hunger = 0;}
  const element = document.getElementById('hungerBarId');
  element.style.width = "calc("+ (hunger * 3) +"vw - 6px)";
}

function lifeBarAdjust() {
  if(life >= 10){life = 10;}
  if(life <= 0){life = 0;}
  else{life = life;}
  const element = document.getElementById('lifeBarId');
  element.style.width = "calc("+ (life * 3) +"vw - 6px)";
  if(life >=1){death = 10;}
  else{death = death;}
}

function weightChange() {
  if(weight <= 0){weight = 0;}
  document.getElementById("weightId").innerHTML = "Weight: " + weight;
}

function shmoneyChange() {
  document.getElementById("shmoney").innerHTML = "€ " + shmoney;
  document.getElementById("smoney").innerHTML = "coin €: " + shmoney;

}

function initialiser() {
  happinessBarAdjust();
  hungerBarAdjust();
  lifeBarAdjust();
  weightChange();
  shmoneyChange();
  shopShit();
}

function petMove() {
  if(move == 2 && death != 0){
    const object = document.getElementById('petId');
    object.style.top = latitude + 5 + '%';
    move = 0;
  }
  else{}
  if(move == 1 && death != 0) {
    const object = document.getElementById('petId');
    object.style.top = latitude - 5 + '%';
    move = 2;
  }
  else{}
  if(move == 0 && death != 0){
    const object = document.getElementById('petId');
    if(dir == -1){
      var x = Math.floor(Math.random()*-5);
      var y = Math.floor(Math.random()*-10);
    }
    if(dir == 1){
      var x = Math.floor(Math.random()*5);
      var y = Math.floor(Math.random()*10);
    }
    object.style.top = latitude + x + '%';
    object.style.left = longitude + y + '%';
    if(latitude <= 20){
        latitude = 20;
    }
    else{latitude = latitude;} 
    if(latitude >= 90){
        latitude = 90;
    }
    else{latitude = latitude;} 
    latitude = latitude + x;
    if(longitude <= 25){
        longitude = 25;
    }
    else{longitude = longitude;} 
    if(latitude >= 60){
        latitude = 60;
    }
    else{longitude = longitude;}
    longitude = longitude + y;
    move = 1;
    dir = dir * -1;
  }
  else{}
}

function birbMove(){
    const objectBirb = document.getElementById('birbItemId');
    
    var xB = Math.floor(Math.random()*5*dir);
    var yB = Math.floor(Math.random()*5*dir);
    objectBirb.style.top = latitudeBirb + xB + '%';
    objectBirb.style.left = longitudeBirb + yB + '%';
    
    /*if(latitudeBirb <= 20){
        latitudeBirb = 20;
    }
    else{latitudeBirb = latitudeBirb;} 
    if(latitudeBirb >= 90){
        latitudeBirb = 90;
    }
    else{latitudeBirb = latitudeBirb;} 
    latitudeBirb = latitudeBirb + xB;
    if(longitudeBirb <= 25){
        longitudeBirb = 25;
    }
    else{longitudeBirb = longitudeBirb;} 
    if(longitudeBirb >= 60){
        longitudeBirb = 60;
    }
    else{longitudeBirb = longitudeBirb;}
    longitudeBirb = longitudeBirb + yB;*/
}

function ifDead(){
    //kill
  document.getElementById("petId").src = 'Pet%20Images/petDead.png';
    //add 1 to deathCount
  t = 0;
  
}

function deathCounter(){
  if(poopCount >= 2){
    happiness--;
    happinessBarAdjust();
    t = 0;
  }
  else{t = 0;}
  if(hunger == 0){
    life--;
    lifeBarAdjust();
    weight--;
    weightChange();
    t = 0;
  }
  else{t = 0;}
  if(life == 0){
    death--;
    if(death <= 0){
      death = 0;
      ifDead();
    }
    t = 0;
  }
  else{t = 0;}
  if(weight <= 5){
    hunger--;
    hungerBarAdjust();
    t = 0;
  }
  else{t = 0;}
  if(20 <= weight){
    life--;
    lifeBarAdjust();
    t = 0;
  }
  else{t = 0;}
}

