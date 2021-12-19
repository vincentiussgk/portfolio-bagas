import React, { useState, useRef } from 'react'
import styles from "./Reminisce.module.css";

const Reminisce = () => {
    const [playbackButton, setPlaybackButton] = useState("pause");
    const [video, setVideo] = useState("/VIDEO 0_0.mp4")

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
            <div>
                <div>
                    It's time to sleep.
                </div>
                <div>
                    <div>
                        Open Window
                    </div>
                    <div>
                        Close Window
                    </div>
                </div>
            </div>

            <br/>
            <br/>
            <br/>
            <br/>
            
            <div className={styles.controls}>
                {
                    playbackButton === "pause" 
                    ?
                    
                    <img src="/PAUSE-01.svg" onClick={playPauseVideo} className={styles.pausePlayIcon}/>

                    :

                    <img src="/PLAY.svg" onClick={playPauseVideo} className={styles.pausePlayIcon}/>
                    
                }
                <input type="range" className={styles.input} id="volume-bar" title="volume" min="0" max="1" step="0.1" value="1" ref={volumeBar} onChange={onVolumeChange} />
            </div>
        </div>
    )
}

export default Reminisce
