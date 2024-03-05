function loadYoutubeIframeAPI() {
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

window.onload = function() {
    loadYoutubeIframeAPI();
};

// YouTube 플레이어를 생성하기 위한 변수 선언
let player;

videolist = ['x-Om0G8Dwis', 'l-jZOXa7gQY', 'kmD6JcAV_Rc', 'Zj9-RiEf4Og', 's4Ow55AbdCg', 'Bdzv7JBvkis']

// YouTube Iframe API가 준비되면 호출될 함수
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
        }
    });
}

// 플레이어 준비가 완료되면 호출될 함수
function onPlayerReady() {
    // 게임 시작 버튼에 이벤트 리스너 추가
    document.getElementById('startGame').addEventListener('click', function() {
        console.log(player)
        player.seekTo(0);
        player.playVideo();
        setTimeout(function() {
            player.pauseVideo();
        }, 1000); 
        document.getElementById('startGame').style.display = "none"
        document.getElementById('onemoretime').style.display = "inline-block"
    });
    
    document.getElementById('onemoretime').addEventListener('click', function() {
        player.seekTo(0);
        player.playVideo();
        setTimeout(function() {
            player.pauseVideo();
        }, 1000); 
    })

    // 제출 버튼에 이벤트 리스너 추가
    document.getElementById('submitAnswer').addEventListener('click', function() {
        // 여기에 정답 검증 로직 추가
        player.playVideo(); // 정답 제출 후 전체 노래 재생
    });

    // 다음 버튼에 이벤트 리스너 추가
    document.getElementById('nextSong').addEventListener('click', function() {
        // 다음 노래로 넘어가는 로직 추가
    });
}