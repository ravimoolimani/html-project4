document.getElementById("btn-rule").addEventListener("click", function()
 {
    document.getElementById("box").style.display = "block";
  });
  document.getElementById("close").addEventListener("click", function() {
    document.getElementById("box").style.display = "none";
  });
  document.getElementById("btn-rule1").addEventListener("click", function()
 {
    document.getElementById("box1").style.display = "block";
  });
  document.getElementById("close1").addEventListener("click", function() {
    document.getElementById("box1").style.display = "none";
  });

  let ply = document.querySelectorAll(".ply");
  let computer = document.querySelectorAll(".computer");
  let you_picked = document.querySelector(".you_picked");
  let pc_picked = document.querySelector(".pc_picked");
  let winmodal = document.querySelector(".win-modal");
  let winner = document.querySelector(".winner");
  let pclost = document.querySelector(".pclost");
  let tiemodal = document.querySelector(".tie-modal");
  let play = document.querySelector(".play");
  let playagain = document.querySelector(".playagain");
  let same = document.querySelector(".same");
  let circle1 = document.querySelector(".circle1");
  let circle2 = document.querySelector(".circle2");
  let circle3 = document.querySelector(".circle3");
  let circle4 = document.querySelector(".circle4");
  let circle5 = document.querySelector(".circle5");
  let circle6 = document.querySelector(".circle6");
  let tie = document.querySelector(".tie");
  let btndiv1 = document.querySelector(".btn-div1");
  let nextdiv = document.querySelector(".nextdiv");
  let btndiv = document.querySelector(".btn-div");
  

 let gamescore =JSON.parse(localStorage.getItem("sc"))
 let scoreElem = document.getElementById("your_points");
 if(gamescore)
 {
   scoreElem.innerText=gamescore;
}
 let count = 0;
//  computer score
let Cgamescore =JSON.parse(localStorage.getItem("scr"))
 let scoreElem2 = document.getElementById("comp_points");
 if(Cgamescore)
 {
   scoreElem2.innerText=Cgamescore;
}
 let countcomp = 0;

  let random = Math.floor(Math.random()*3);
  let join1 = document.querySelector(".join1");
  let join2 = document.querySelector(".join2");
  let join3 = document.querySelector(".join3");


  
  ply.forEach((element,index)=>{
    element.addEventListener("click",()=>{
      you_picked.style.opacity="1";
      join1.style.display = "none";
      join2.style.display = "none";
      join3.style.display = "none";
     ply.forEach(item =>{
      item.style.display = "none";
     });
     element.style.display="block";
     element.classList.add("show")
     setTimeout(() =>{
      pc_picked.style.opacity="1";
setTimeout(() =>{
  computer[random].style.display="block";
  computer[random].classList.add("right")
},2);
setTimeout(() =>{
if( index==0 && random==2 || index==1 && random==0 ||index==2 && random==1 ){
 winmodal.style.display="flex";
 winner.innerText="YOU WIN";
 pclost.innerText="AGAINST PC";
 circle1.style.opacity="1";
 circle2.style.opacity="1";
 circle3.style.opacity="1";
 count = gamescore;
 count ++;
 scoreElem.innerText=count;
 localStorage.setItem("sc", JSON.stringify(count));
 btndiv1.style.display="block";
 nextdiv.style.display="block";
 btndiv.style.display="none";
 }

else if(index == random){
  tiemodal.style.display="flex";
  element.style.display="block";
  tie.innerText="TIE UP";
}
else{
  winmodal.style.display="flex";
  winner.innerText="YOU LOST";
  pclost.innerText="AGAINST PC";
  circle4.style.opacity="1";
  circle5.style.opacity="1";
  circle6.style.opacity="1";
  countcomp = Cgamescore;
  countcomp ++;
  scoreElem2.innerText=countcomp;
  localStorage.setItem("scr", JSON.stringify(countcomp));
}
}, 400);
     },200);
    })
  });
  play.addEventListener("click",() =>{
    window.location.reload();
  })
  same.addEventListener("click",() =>{
    window.location.reload();
  })
  playagain.addEventListener("click",() =>{
    window.location.reload();
  })
  