var video = {
	// var at top
	videoPlayer : document.querySelector('video'),
	vidThumbs : document.querySelector('.vid-thumb'),
	volumeIndicator: document.querySelector('.vol-indicator'),
	
	volOn(){
		video.videoPlayer.muted = false; //turns volume on
		video.volumeIndicator.classList.replace('fa-volume-off', 'fa-volume-up')//changes vol icon
	},//put , no ; because inside object

	volOff(){
		video.videoPlayer.muted = true; //turns volume on
		video.volumeIndicator.classList.replace('fa-volume-up', 'fa-volume-off')//changes vol icon
	},
	popOverlay(){
		let overlay = document.querySelector('.vid-overlay');
		overlay.classList.add('show-overlay');
		overlay.querySelector('i').addEventListener('click', video.replayVideo);
	},

	replayVideo(){
		//rewind vid
		video.videoPlayer.currentTIme = 0; //playhead back to begining
		video.videoPlayer.play();

		let overlay = document.querySelector('.vid-overlay');
		overlay.classList.remove('show-overlay');
		overlay.querySelector('i').removeEventListener('click', video.replayVideo);
	},

	init(){
		console.log('video module added');
		//add event handling
		video.videoPlayer.addEventListener('mouseover', video.volOn);
		video.videoPlayer.addEventListener('mouseout', video.volOff);
		video.videoPlayer.addEventListener('ended', video.popOverlay);
	},

}


video.init();
