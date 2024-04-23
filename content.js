const msg = 'Hello';
document.addEventListener('DOMContentLoaded', function() {
    
    const cssLink = document.createElement("link");
    cssLink.href = chrome.runtime.getURL('centering.css'); 
    cssLink.type = "text/css";
    cssLink.rel = "stylesheet";
    document.head.appendChild(cssLink);

    // ビデオコンテナを作成
    const videoContainer = document.createElement('div');
    videoContainer.className = 'video-container';
  
    // 背景画像を含むdiv（color-box）を作成
    const colorBox = document.createElement('div');
    colorBox.className = 'color-box';
    const backgroundImage = document.createElement('img');
    backgroundImage.src = chrome.runtime.getURL('images/backgraund.png');
    colorBox.appendChild(backgroundImage);
    videoContainer.appendChild(colorBox);
  
    // プレイボタンを作成
    const playButton = document.createElement('button');
    playButton.id = 'playButton';
    const playButtonImg = document.createElement('img');
    playButtonImg.src = chrome.runtime.getURL('images/githubbbutton.png'); 
    playButtonImg.alt = 'Play button';
    playButton.appendChild(playButtonImg);
    videoContainer.appendChild(playButton);
  
    // ビデオ要素を作成
    const videoPlayer = document.createElement('video');
    videoPlayer.id = 'videoPlayer';
    const videoSource = document.createElement('source');
    videoSource.src = chrome.runtime.getURL('images/Githubanime.mp4');
    videoSource.type = 'video/mp4';
    videoPlayer.appendChild(videoSource);
    videoContainer.appendChild(videoPlayer);
  
    // トグルビデオ機能をプレイボタンに追加
    playButton.onclick = function() {
      if (videoPlayer.paused) {
        videoPlayer.play();
        playButton.style.display = 'none'; // 再生時にボタンを非表示にする
      } else {
        videoPlayer.pause();
      }
    };
  
    // 作成したビデオコンテナをbodyの最初に追加
    document.body.insertBefore(videoContainer, document.body.firstChild);
  });
  