import React, { useState, useRef } from 'react'
import styles from "./Reminisce.module.css";

const Reminisce = () => {
    const [playbackButton, setPlaybackButton] = useState("pause");
    // const [video, setVideo] = useState("/VIDEO 0_0.mp4")
    const [video, setVideo] = useState("https://www.w3schools.com/html/mov_bbb.mp4")

    // Get a handle to the player
	const player       = useRef(null);
    const volumeBar    = useRef(null);

    // Update the video volume
    const onVolumeChange = e => {
        player.current.volume = e.target.value;
    }
	
	// Add a listener for the play and pause events so the buttons state can be updated
	const onPlayerPlay = () => {
		setPlaybackButton("pause")
    }
  
    const onPlayerPause = () => {
		setPlaybackButton("play")
    }

    const onPlayerEnded = () => {
        player.current.pause()
    }	

  function playPauseVideo() {
  	if (player.current.paused || player.current.ended) {
  		// Change the button to a pause button
  		setPlaybackButton("pause")
  		player.current.play();
  	}
  	else {
  		// Change the button to a play button
  		setPlaybackButton("play")
  		player.current.pause();
  	}
  }

    function showOptions() {
        // Work out how much of the media has played via the duration and currentTime parameters
        var percentage = Math.floor((100 / player.current.duration) * player.current.currentTime);
        // Update the progress bar's value
        console.log(percentage)
        // progressBar.value = percentage;
        // // Update the progress bar's text (for browsers that don't support the progress element)
        // progressBar.innerHTML = percentage + '% played';
    }

    return (
        <div className={styles.container}>
            <video className={styles.video} ref={player}
                onPlay={onPlayerPlay}
                onPause={onPlayerPause}
                onEnded={onPlayerEnded}
                onTimeUpdate={showOptions}
            >
                <source src={video} type='video/mp4' />
            </video>
            <div className={styles.question}>
                <div>
                    It's time to sleep.
                </div>
                <hr className={styles.hr} />
                <div className={styles.options}>
                    <div className={styles.optionsMargin}>
                        Open Window
                    </div>
                    <div className={styles.optionsMargin}>
                        Close Window
                    </div>
                </div>
            </div>

            <br/>
            <br/>
            <br/>
            <br/>
            
            <div className={styles.controls}>
                <div>
                    {
                        playbackButton === "pause" 
                        ?
                        
                        <img src="/pause.png" onClick={playPauseVideo} className={styles.pausePlayIcon}/>

                        :

                        <img src="/PLAY.png" onClick={playPauseVideo} className={styles.pausePlayIcon}/>
                        
                    }
                </div>
                <div className={styles.volumeControls}>
                    <img src="/vOluME.png" onClick={playPauseVideo} className={styles.volumeIcon}/>
                    <input type="range" min="0" max="1" step="0.1" ref={volumeBar} onChange={onVolumeChange} />
                </div>
            </div>
        </div>
    )
}

export default Reminisce
