function Tamogotchi() {
  
  tamoName = document.getElementById("name_pet").value;
  console.log(tamoName, "tamoName");
  this.petName;
  this.initialFood = 60;
  this.metabolismRate = 1000;
  

  this.init = () => {
    this.petName = tamoName;
   
    console.log(`Hi!  I'm ${this.petName}`);
    document.getElementById('demo').innerHTML="Hi!  I'm " + tamoName;
    hatch();
  };
  this.init();
}

function resetFood() {
  this.food = this.initialFood;
  this.point = 0;
  console.log(`${this.point}`);
    document.getElementById('point').innerHTML="0 points";
}

function hatch() {
  this.resetFood();
  this.startMetabolism();
}
function die () {
  clearInterval(this.metabolism);
  console.log("I am dead!");
  document.getElementById('time').innerHTML="I am dead!";
  document.getElementById('point').innerHTML= "0 points";
};
function startMetabolism() {
  this.metabolism = setInterval(() => {
    this.food -= 1;
    console.log(`${this.food} until I starve`);
    document.getElementById('time').innerHTML=`${this.food} until I starve` ;
    if (this.food <= 0) {
      this.die();

      let characterObj = document.getElementById("characterObj").contentDocument;

      // * refers to the parent layer (characterObj) of our SVG
      let character = characterObj.getElementById("character");
      let rightLeg = characterObj.getElementById("right_leg");
      let hat = characterObj.getElementById("hat");
      let leftLeg = characterObj.getElementById("left_leg");
      let leftEye = characterObj.getElementById("leftEye");
      let rightEye = characterObj.getElementById("rightEye");
      let lDead = characterObj.getElementById("leftDeadEye");
      let rDead = characterObj.getElementById("rightDeadEye");
      let rPupil = characterObj.getElementById("rPupil");
      let lPupil = characterObj.getElementById("lPupil");
      let mouth = characterObj.getElementById("neutral");
      let myPet = characterObj.getElementById("pet");
      gsap.to(lPupil, {
        duration: 0.1,
        opacity: 0,
      });
  
      gsap.to(rPupil, {
        duration: 0.1,
        opacity: 0,
      });
  
      gsap.to(leftLeg, {
        duration: 0.1,
        rotate: 70,
      });
  
      gsap.to(rightLeg, {
        duration: 0.1,
        rotate: -70,
      });
  
      gsap.to(mouth, {
        duration: 0.1,
        ease: "steps(5)",
        scaleY: 0.1,
      });
      gsap.to(leftEye, {
        duration: 0.3,
        opacity: 1,
        scale: 1,
      });
  
      gsap.to(lDead, {
        duration: 0,
        opacity: 1,
        scale: 1,
      });
  
      gsap.to(rDead, {
        duration: 0,
        opacity: 1,
        scale: 1,
      });
  
      gsap.to(rightEye, {
        duration: 0.3,
        opacity: 1,
        scale: 1,
      });
      gsap.to(myPet, {
        duration: 0.5,
        ease: "bounce.in",
        y: 0,
      });
    }
  }, this.metabolismRate);
}



function eatLasagna () {
  function getText( obj ) {
    return obj.textContent ? obj.textContent : obj.innerText;
}
  console.log(getText( document.getElementById('time') ) , "eats" , typeof getText( document.getElementById('time') ))
if(getText( document.getElementById('time') )!="I am dead!"){
  console.log(`can I see the food? ${this.food}`);
  this.food += 20;

  
let foodparse=JSON.parse(localStorage.getItem("data"));
console.log(foodparse,"foodparse");
let random=Math.floor(Math.random() * foodparse.length);
 let food = foodparse[random];
 this.point = food.Points;
 this.poison = food.Chance;
 this.quantity=food.Quantity-1;

 console.log(food);
for(let i=0;i<foodparse.length;i++){
  if(i==random){
    food.Quantity= food.Quantity-1;
    console.log(food,"foodinsideif");
    foodparse[i]=food;
    if(food.Quantity==0){
      foodparse.splice(i,1);
      localStorage.setItem("data",JSON.stringify(foodparse));
      alert(`${JSON.stringify(food.Name)}'s quantity has reached zero. Updated food list is ${JSON.stringify(foodparse)}`);
    }
    localStorage.setItem("data",JSON.stringify(foodparse));
    // console.log(foodparse[i]);
    console.log(localStorage.getItem("data"),"localsto");

  }
}


 let num =(Math.random());
 let n = num.toPrecision(1);
 console.log(n)
 if (this.poison==n){
   console.log("Poison");

   document.getElementById('point').innerHTML=`I am food poisoned. I got -${this.point} of my food point`;
 }
 else{
  console.log(this.point);
  document.getElementById('point').innerHTML=`I am feelin good. I got +${this.point} of my food point`;
 }

  


}
 else{
   alert("I am dead. Please start again!")
   
 } 
};

function makecompliment(){
  var todayContainer = document.querySelector("#demo");
  var randomWordArray = Array(
    "You look great today.",
    "You have the best laugh.",
    "You're an awesome friend.",
    "You have a great sense of humor. ",
    "Any team would be lucky to have you on it.",
    "You're inspiring.",
    "I love your perspective on life.",
    "You have such a great heart.",
    "You're so unique.",
    "You are a ray of sunshine.",
  );
  var randomWord = randomWordArray[Math.floor(Math.random() * randomWordArray.length)];
  todayContainer.innerHTML = randomWord;
};

