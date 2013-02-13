// Copyright Cliff Brake <cbrake@bec-systems.com>, GPL v3

function AudioCtrl($scope) {
  $scope.audio = new Howl({
    urls: ['DingDong.mp3', 'DingDong.ogg']
  })

  $scope.schedule_next_ding = function() {
    var d = new Date();
    var min = d.getMinutes()
    var next_15m_time = Math.floor((min + 15)/15) * 15
    setTimeout($scope.timeout, (next_15m_time - min)*60*1000)
  }

  $scope.timeout = function() {
    $scope.audio.play()
    $scope.schedule_next_ding();
  }

  $scope.playAudio = function() {
    $scope.audio.play()
  };

  $scope.schedule_next_ding()
}

