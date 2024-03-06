// youtube iframe api 호출
function loadYoutubeIframeAPI() {
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

window.onload = function() {
    loadYoutubeIframeAPI();
};

let player;
let Submit = false;

videolist = ['x-Om0G8Dwis', 'l-jZOXa7gQY', 'kmD6JcAV_Rc', 'GAy1NSzjxYY', 's4Ow55AbdCg', 'JDh0CtosCXU']

// youtube iframe api 호출 후 player 설정 함수
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '360',
        width: '640',
        playerVars: {
            'autoplay': 0,    // 자동 재생 비활성화
            'controls': 1,    // 컨트롤 바 표시
            'rel': 0,         // 관련 동영상 표시 안 함
            'listType':'playlist',
            'list': 'PLpLT-NtaAE5izfhXx7YISgKEPVU_PMM0D' // 재생목록 ID
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

// 플레이어 준비가 완료되면 호출될 함수
function onPlayerReady() {
    player.setShuffle(true);
    player.playVideoAt(0);
    document.getElementById('startGame').addEventListener('click', function() {
        player.seekTo(0);
        player.playVideo();
        document.getElementById('startGame').style.display = "none"
        document.getElementById('onemoretime').style.display = "inline-block"
    });
    
    document.getElementById('onemoretime').addEventListener('click', function() {
        player.seekTo(0);
        player.playVideo();
    })
    
    document.getElementById('submitAnswer').addEventListener('click', function() {
        Submit = true;
        player.seekTo(0);
        player.playVideo();
    });
    
    
    document.getElementById('nextSong').addEventListener('click', function() {
        Submit = false;
        player.nextVideo();
        player.stopVideo();
        document.getElementById('startGame').style.display = "inline-block"
        document.getElementById('onemoretime').style.display = "none"
    });
}

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !Submit) {
        setTimeout(function() {
            player.pauseVideo();
        }, 1000);
    }
}