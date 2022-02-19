for(var i=0;i<document.querySelectorAll(".drum").length;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var buttonInnerHTML=this.innerHTML;
    makeSound(buttonInnerHTML);
    animationOnClick(buttonInnerHTML);
  });
}

  // onClicking(buttonInnerHTML);

document.addEventListener("keypress",function(event){
  makeSound(event.key);
  animationOnClick(event.key);
});
// function onClicking()
function makeSound(key)
{

  switch(key){
  case "w":
  var w=new Audio("sounds/crash.mp3");
  w.play();
  break;
  case "a":
  var a=new Audio("sounds/kick-bass.mp3")
  a.play();
  break;
  case "s":
  var s=new Audio("sounds/snare.mp3");
  s.play();
  break;
  case "d":
  var d=new Audio("sounds/tom-1.mp3");
  d.play()
  break;
  case "j":
  var j=new Audio("sounds/tom-2.mp3");
  j.play();
  break;
  case "k":
  var k=new Audio("sounds/tom-3.mp3");
  k.play();
  break;
  case "l":
  var l=new Audio("sounds/tom-4.mp3");
  l.play();
  break;
  default: console.log(event);

}
}
function animationOnClick(activeKey){
  var clickedKey=document.querySelector("."+activeKey);
  // var element=document.getElementByClass("pressed")
  clickedKey.classList.add("pressed");
  setTimeout(function(){
    clickedKey.classList.remove("pressed");
  },200)
  // document.querySelectorAll(".pressed");
}
// document.addEventListener("keypress", function(event){
//   console.log(event);
  // alert("I was pressed");
// });
// switch (expression) {
//   case expression:
//
//     break;
//   default:
//
// }
