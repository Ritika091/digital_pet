

window.onload = function () {
  console.log("hh");
  fetch('data.json')
  .then(res=>res.json())
  .then(data=>{
    localStorage.setItem("data",JSON.stringify(data));
  })
  // Refer to the SVG object in the DOM ! MAKE SURE contentDocument is declared
  // for your parent
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
  let myStar = characterObj.getElementById("star");
  let c1 = characterObj.getElementById("cloud1");
  let c2 = characterObj.getElementById("cloud2");
  let c3 = characterObj.getElementById("cloud3");
  // * target buttons to trigger function
  let neutralBtn = document.getElementById("neutral");
  let happyBtn = document.getElementById("happy");
  let angryBtn = document.getElementById("angry");
  let sadBtn = document.getElementById("sad");
  let talkBtn = document.getElementById("start_talk");
  let stopBtn = document.getElementById("stop_talk");
  let sickBtn = document.getElementById("sick");
  let deadBtn = document.getElementById("dead");
  let angryBtn1 = document.getElementById("anger");
  let happyBtn1 = document.getElementById("happ");
  let sadBtn1 = document.getElementById("sed");
  let jokeyBtn = document.getElementById("joke");
let mood;
  // * Transition values
  let comDur = 0.25; // common Duration

  // **************** SET TRANSFORM ORIGIN OF TARGETS FOR ROTATION
  // **************** !Call the transform setup function!
  transformOriginSet();

  // **************** INTRO FADE ****************

  gsap.from(character, {
    duration: 2,
    autoAlpha: 0,
  });

  // **************** BUTTON EVENTS ****************

  //  * Add event listener and run function when we click
  neutralBtn.addEventListener("click", function () {
    console.log("Neutral");
    neutral();
  });

  happyBtn.addEventListener("click", function () {
    console.log("Happy");
    happy();
  });

  

  angryBtn.addEventListener("click", function () {
    console.log("Angry");
    angry();
  });
  sadBtn.addEventListener("click", function () {
    console.log("Sad");
    sad();
  });
  talkBtn.addEventListener("click", function () {
    console.log("Talk");
    starttalking(1);
    document.getElementById("tho").style.display='block';
    if(mood=="happy")
    {
      document.getElementById("thought").innerHTML="It's a great day!";
      document.getElementById("thought2").innerHTML="";

    }
    else if(mood=="angry")
    {
      document.getElementById("thought").innerHTML="Don't talk to me!";
      document.getElementById("thought2").innerHTML="";

    }
    else if(mood=="sad")
    {
      document.getElementById("thought").innerHTML="It's a bad day!";
      document.getElementById("thought2").innerHTML="";

    }
    else
    {
      document.getElementById("thought").innerHTML="What do you call a pig that does karate?";
      document.getElementById("thought2").innerHTML="A pork chop.";
    }
  });
  stopBtn.addEventListener("click", function () {
    console.log("Stop");
    starttalking(0);

    document.getElementById("tho").style.display='none';
   
   

  });
  angryBtn1.addEventListener("click", function () {
    console.log("Angry");
    angry();
  });
  happyBtn1.addEventListener("click", function () {
    console.log("Happy");
    happy();
  });
  sadBtn1.addEventListener("click", function () {
    console.log("Sad");
    sad();
  });
  jokeyBtn.addEventListener("click", function () {
    console.log("Jokey");
    jokey();
  });
  // **************** ANIMATION FUNCTIONS ****************
  function transformOriginSet() {
    gsap.set(hat, { transformOrigin: "bottom center" });
    gsap.set(leftLeg, { transformOrigin: "top right" });
    gsap.set(rightLeg, { transformOrigin: "top left" });
  }

  function neutral() {
    // * Default Values for fac
    mood="neutral";
    gsap.to(c1, { duration: 5, x: 50, repeat: 10, ease: "bounce" });
    gsap.to(c2, { duration: 5, x: 80, repeat: 10, ease: "ease.in" });
    gsap.to(c3, { duration: 5, x: 280, repeat: 10, ease: "ease.in" });

    //* hat
    gsap.to(hat, {
      duration: comDur,
      rotate: -360,
    });
    gsap.to(leftLeg, {
      duration: comDur,
      rotate: 0,
    });

    gsap.to(myPet, {
      duration: 2,
      ease: "bounce.in",
      y: 0,
    });

    gsap.to(rightLeg, {
      duration: comDur,
      rotate: 0,
    });

    gsap.to(lPupil, {
      duration: 0.1,
      opacity: 1,
      scaleX: 1,
    });

    gsap.to(rPupil, {
      duration: 0.1,
      opacity: 1,
    });

    gsap.to(leftEye, {
      duration: 0.3,
      opacity: 1,
      scale: 1,
    });

    gsap.to(rightEye, {
      duration: 0.3,
      opacity: 1,
      scale: 1,
    });

    gsap.to(lDead, {
      duration: 0,
      opacity: 0,
      scale: 1,
    });

    gsap.to(rDead, {
      duration: 0,
      opacity: 0,
      scale: 1,
    });

    //* Mouth
    gsap.to(mouth, {
      duration: 0.5,
      scaleY: 1,
    });
  }

  function sick() {
    // * Default Values for fac
    //* hat
    gsap.to(hat, {
      duration: comDur,
      rotate: -360,
    });
    gsap.to(leftLeg, {
      duration: comDur,
      rotate: 0,
    });

    gsap.to(rightLeg, {
      duration: comDur,
      rotate: 0,
    });
    gsap.to(lDead, {
      duration: 0,
      opacity: 0,
      scale: 1,
    });

    gsap.to(rDead, {
      duration: 0,
      opacity: 0,
      scale: 1,
    });
    gsap.to(lPupil, {
      duration: 0.1,
      opacity: 1,
      scaleX: 1,
    });

    gsap.to(rPupil, {
      duration: 0.1,
      opacity: 1,
    });

    gsap.to(leftEye, {
      duration: 0.3,
      opacity: 1,
      scaleY: 0.5,
    });

    gsap.to(rightEye, {
      duration: 0.3,
      opacity: 1,
      scaleY: 0.5,
    });
    gsap.to(myPet, {
      duration: 2,
      ease: "bounce.in",
      y: -50,
    });

    //* Mouth
    gsap.to(mouth, {
      duration: 0.5,
      scaleY: 0.2,
    });
  }

  function angry() {
    // * Default Values for fac
    //* hat
    mood="angry";
    gsap.to(hat, {
      duration: comDur,
      rotate: -360,
    });
    gsap.to(leftLeg, {
      duration: comDur,
      rotate: 0,
    });

    gsap.to(rightLeg, {
      duration: comDur,
      rotate: 0,
    });
    gsap.to(lDead, {
      duration: 0,
      opacity: 0,
      scale: 1,
    });

    gsap.to(rDead, {
      duration: 0,
      opacity: 0,
      scale: 1,
    });

    gsap.to(lPupil, {
      duration: 0.1,
      opacity: 0,
      scaleX: 1,
    });

    gsap.to(leftEye, {
      duration: 0.3,
      opacity: 1,
      scaleY: 1.5,
    });

    gsap.to(rightEye, {
      duration: 0.3,
      opacity: 1,
      scaleY: 1.5,
    });

    gsap.to(rPupil, {
      duration: 0.1,
      opacity: 0,
    });

    gsap.to(lPupil, {
      duration: 0.1,
      opacity: 0,
    });
    gsap.to(myPet, {
      duration: 2,
      ease: "bounce.in",
      y: -50,
    });

    //* Mouth
    gsap.to(mouth, {
      duration: 2.5,
      ease: "steps(5)",

      scaleY: 0.1,
    });
  }
function jokey(){
  mood="jokey";
  //  * Move Hat
  gsap.to(hat, {
    duration: comDur,
    rotate: 360,
    ease: "bounce", // Add easing to add finesse and personality
  });
  gsap.to(myStar, {
    scale: 1,
    y: 60,
    yoyo: true,
    repeat: 1,
    ease: "power1.inOut",
    delay: 0,
    stagger: {
      amount: 1.5,
      grid: "auto",
      from: "center",
    },
  });

  gsap.to(lDead, {
    duration: 0,
    opacity: 0,
    scale: 1,
  });

  gsap.to(rDead, {
    duration: 0,
    opacity: 0,
    scale: 1,
  });
  gsap.to(leftLeg, {
    duration: comDur,
    rotate: 20,
  });

  gsap.to(rightLeg, {
    duration: comDur,
    rotate: 20,
    opacity: 1,
  });

  gsap.to(lPupil, {
    duration: comDur,
    scaleX: 2,
    opacity: 1,
  });

  gsap.to(leftEye, {
    duration: 0.3,
    opacity: 1,
    scale: 1,
  });

  gsap.to(rightEye, {
    duration: 0.3,
    opacity: 1,
    scale: 1,
  });

  gsap.to(myPet, {
    duration: 2,
    ease: "bounce.in",
    y: -50,
  });

  gsap.to(rPupil, {
    duration: 0.1,
    opacity: 1,
  });

  // * Happy Mouth Height
  gsap.to(mouth, {
    duration: 0.1,
    // ! Add a delay duration of comDur so that it executes when finished Can also
    // use GSAP3 Timelines and/or GSAP3 onComplete method depending on scenario
    delay: comDur,
    scaleY: 2,
  });

}
  function happy() {
    mood="happy";
    //  * Move Hat
    gsap.to(hat, {
      duration: comDur,
      rotate: 360,
      ease: "bounce", // Add easing to add finesse and personality
    });
    gsap.to(myStar, {
      scale: 1,
      y: 60,
      yoyo: true,
      repeat: 1,
      ease: "power1.inOut",
      delay: 0,
      stagger: {
        amount: 1.5,
        grid: "auto",
        from: "center",
      },
    });

    gsap.to(lDead, {
      duration: 0,
      opacity: 0,
      scale: 1,
    });

    gsap.to(rDead, {
      duration: 0,
      opacity: 0,
      scale: 1,
    });
    gsap.to(leftLeg, {
      duration: comDur,
      rotate: 20,
    });

    gsap.to(rightLeg, {
      duration: comDur,
      rotate: 20,
      opacity: 1,
    });

    gsap.to(lPupil, {
      duration: comDur,
      scaleX: 2,
      opacity: 1,
    });

    gsap.to(leftEye, {
      duration: 0.3,
      opacity: 1,
      scale: 1,
    });

    gsap.to(rightEye, {
      duration: 0.3,
      opacity: 1,
      scale: 1,
    });

    gsap.to(myPet, {
      duration: 2,
      ease: "bounce.in",
      y: -50,
    });

    gsap.to(rPupil, {
      duration: 0.1,
      opacity: 1,
    });

    // * Happy Mouth Height
    gsap.to(mouth, {
      duration: 0.1,
      // ! Add a delay duration of comDur so that it executes when finished Can also
      // use GSAP3 Timelines and/or GSAP3 onComplete method depending on scenario
      delay: comDur,
      scaleY: 2,
    });
  }

  function sad() {
    mood="sad";
    //  * Move Hat
    gsap.to(hat, {
      duration: comDur,
      rotate: 0,
      ease: "bounce", // Add easing to add finesse and personality
    });
    gsap.to(leftEye, {
      duration: 0.3,
      opacity: 1,
      scale: 1,
    });

    gsap.to(rightEye, {
      duration: 0.3,
      opacity: 1,
      scale: 1,
    });

    gsap.to(lDead, {
      duration: 0,
      opacity: 0,
      scale: 1,
    });

    gsap.to(rDead, {
      duration: 0,
      opacity: 0,
      scale: 1,
    });
    gsap.to(leftLeg, {
      duration: comDur,
      rotate: 20,
    });
    gsap.to(myPet, {
      duration: 2,
      ease: "bounce.in",
      y: -50,
    });
    gsap.to(rightLeg, {
      duration: comDur,
      rotate: -20,
      opacity: 1,
    });

    gsap.to(lPupil, {
      duration: comDur,
      scaleX: 1,
      opacity: 1,
    });

    gsap.to(rPupil, {
      duration: 0.1,
      opacity: 1,
    });

    // * Happy Mouth Height
    gsap.to(mouth, {
      duration: 0.1,
      // ! Add a delay duration of earDur so that it executes when finished Can also
      // use GSAP3 Timelines and/or GSAP3 onComplete method depending on scenario
      delay: comDur,
      scaleY: -1.5,
    });
  }

  function dead() {
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
  function starttalking(cancel){
    if(cancel==1){
    gsap.to(lDead, {
      duration: 0,
      opacity: 0,
      scale: 1,
    });

    gsap.to(rDead, {
      duration: 0,
      opacity: 0,
      scale: 1,
    });
    gsap.to(mouth, {
      duration: 0.95,
      repeat: 5,
      scaleY: 2.5,
    });
     gsap.to(mouth, {
       duration: 0.95,
       // ! Add a delay duration of comDur so that it executes when finished Can also
       // use GSAP3 Timelines and/or GSAP3 onComplete method depending on scenario
        delay: comDur,
       scaleY: 2,
     });  
    }
    if(cancel==0)
{
 neutral();

    
}
  }
 
 
};
