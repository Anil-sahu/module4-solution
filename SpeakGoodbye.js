
(function(window){
 var byeSpeaker =new Object();
var SpeakWord = "Good Bye";
byeSpeaker.speak=function (name) {
  console.log(SpeakWord + " " +name);

}

  window.byeSpeaker = byeSpeaker;
})(window);
