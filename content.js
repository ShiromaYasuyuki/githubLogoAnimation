
window.addEventListener('DOMContentLoaded', function(){
    fetch('popup.html') //���[�h��URL
    .then(data => data.text())
    .then(html => document.getElementById('playButton').innerHTML = html) //���[�h��ID�w��
    .then(() => {
            //���[�h��̏������L�q    
            function toggleVideo() {
                var video = document.getElementById("videoPlayer");
                var button = document.getElementById("playButton");
          
                if (video.paused) {
                  video.play();
                  button.style.display = "none"; // �Đ����Ƀ{�^�����\���ɂ���
                } else {
                  video.pause();
                }
              }             
        });
});