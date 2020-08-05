
 (function(window){
 var helloSpeaker ={};
  helloSpeaker.name ;

var SpeakWord = "Hello";

helloSpeaker.speak=function () {
	
  console.log(SpeakWord + " " + helloSpeaker.name);
  
}
 window.helloSpeaker = helloSpeaker;
})(window);
