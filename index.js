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

videolist = ['x-Om0G8Dwis', 'l-jZOXa7gQY', 'kmD6JcAV_Rc', 'Zj9-RiEf4Og', 's4Ow55AbdCg', 'Bdzv7JBvkis']

// youtube iframe api 호출 후 player 설정 함수
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '0',
        width: '0',
        videoId: videolist[2], // 첫 번째 노래의 YouTube Video ID
        playerVars: {
            'autoplay': 0, // 자동 재생 비활성화
            'controls': 1, // 컨트롤 바 표시
            'rel': 0, //관련 동영상 표시 안 함
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

// 플레이어 준비가 완료되면 호출될 함수
function onPlayerReady() {
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
        player.seekTo(0);
        player.playVideo();
    });


    document.getElementById('nextSong').addEventListener('click', function() {
        // 다음 노래로 넘어가는 로직 추가
    });
}

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING) {
        setTimeout(function() {
            player.stopVideo();
        }, 1000);
    }
}