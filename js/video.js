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

	replayVideo()
	{
		//rewind vid
		video.videoPlayer.currentTIme = 0; //playhead back to begining
		video.videoPlayer.play();

		let overlay = document.querySelector('.vid-overlay');
		overlay.classList.remove('show-overlay');
		overlay.querySelector('i').removeEventListener('click', video.replayVideo);
	},

	fetchVideoThumbs()
	{
		//debugger;
		const url = './includes/functions.php?getVideos=true'; //the true just needs any value to be set, can be yes or something
		
		fetch(url)//make an ajax call for vid thumbs
		  .then((resp) => resp.json())//convert result to json
		  .then((data) => { video.loadVideoThumbs(data); })
		  .catch(function(error) 
		  	{
		  	console.log(error);
		  	});
	},

	loadVideoThumbs(data)
	{
		let thumbHolder = document.querySelector('.video-thumbs');
		data.forEach(thumb => {
			//create a listitem element for each new vid
		let docFrag = 
		`<li class="vid-thumb" role="button" data-videopath="${thumb.path}">
          <img src="images/${thumb.placeholder}" alt="mini commercial" class="responsive"> 
        </li>`;
        thumbHolder.innerHTML += docFrag;	
         //thumb.path is a field in the db
         // now instead of in html its 2lines in here
		});
		thumbHolder.querySelectorAll('li').forEach((thumb) => thumb.addEventListener('click', video.loadNewVideo));

	},

	loadNewVideo()
	{
		let videoPath = "video/" + this.dataset.videopath;
		video.videoPlayer.src = videoPath;
		video.videoPlayer.load();
		video.videoPlayer.play();

		let overlay = document.querySelector('.vid-overlay');
		overlay.classList.remove('show-overlay');

		video.volOn(); //so you can hear it
	},

	init()
	{
		console.log('video module added');
		//add event handling
		video.videoPlayer.addEventListener('mouseover', video.volOn);
		video.videoPlayer.addEventListener('mouseout', video.volOff);
		video.videoPlayer.addEventListener('ended', video.popOverlay);
		
		video.fetchVideoThumbs();//May not work without fetch
	},
}

video.init();
