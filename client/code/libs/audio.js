function AudioCtrl($scope) {
  console.log('AudioCtrl')

  var audio = new Audio();

  $scope.playAudio = function() {
    console.log("Play Audio")
    // mp3 does not work in firefox
    audio.type = "audio/mpeg"
    audio.src = "/DingDong.mp3"
    // ogg works in both firefox and chrome
    //audio.type = "audio/ogg"
    //audio.src = "/beepbeep.ogg"
    audio.play()
  };
}
