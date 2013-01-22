function AudioCtrl($scope) {
  console.log('AudioCtrl')

  var audio = new Audio();
  audio.type = "audio/mpeg"
  audio.src = "/DingDong.mp3"

  $scope.schedule_next_ding = function() {
    var d = new Date();
    var min = d.getMinutes()
    console.log("min = " + min)
    var next_15m_time = Math.floor((min + 15)/15) * 15
    console.log("next_15m_time = " + next_15m_time)
    setTimeout($scope.timeout, (next_15m_time - min)*60*1000)
  }

  $scope.timeout = function() {
    audio.play()
    $scope.schedule_next_ding();
  }

  $scope.playAudio = function() {
    console.log("Play Audio")
    audio.play()
  };

  $scope.schedule_next_ding()
}
