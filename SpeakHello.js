
 (function(window){
 var helloSpeaker =new Object();

var SpeakWord = "Hello";

helloSpeaker.speak=function (name) {
	
  console.log(SpeakWord + " " +name);
  
}
 window.helloSpeaker = helloSpeaker;
})(window);
