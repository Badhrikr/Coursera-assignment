(function(window){
    var speakWord = "Hello";
    function helloSpeaker(name) {
      console.log(speakWord + " " + name);
    }
    window.helloSpeaker=helloSpeaker;
})(window);


