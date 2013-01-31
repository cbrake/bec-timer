// Copyright Cliff Brake <cbrake@bec-systems.com>, GPL v3

function AudioCtrl($scope) {
  console.log('AudioCtrl')

  //var audio = new Audio();
  var audio = document.createElement('audio');
  var source = document.createElement('source');
  if (audio.canPlayType('audio/mpeg;')) {
    console.log('MP3 support detected');
    source.type = "audio/mpeg"
    source.src = "/DingDong.mp3"
  } else {
    console.log('falling back to OGG support');
    source.type = "audio/ogg"
    source.src = "/DingDong.ogg"
  }
  audio.appendChild(source)
  $scope.audio = audio

  $scope.schedule_next_ding = function() {
    var d = new Date();
    var min = d.getMinutes()
    console.log("min = " + min)
    var next_15m_time = Math.floor((min + 15)/15) * 15
    console.log("next_15m_time = " + next_15m_time)
    setTimeout($scope.timeout, (next_15m_time - min)*60*1000)
  }

  $scope.timeout = function() {
    $scope.audio.play()
    $scope.schedule_next_ding();
  }

  $scope.playAudio = function() {
    console.log("Play Audio")
    $scope.audio.play()
  };

  $scope.schedule_next_ding()
}

