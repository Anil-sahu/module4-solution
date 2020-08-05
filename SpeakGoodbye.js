
(function(window){
 var byeSpeaker ={};
 byeSpeaker.name; 

var SpeakWord = "Good Bye";

byeSpeaker.speak=function () {
  console.log(SpeakWord + " " + byeSpeaker.name);

}

  window.byeSpeaker = byeSpeaker;
})(window);
