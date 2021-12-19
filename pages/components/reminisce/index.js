import React, { useState, useRef } from 'react'
import { useRouter } from 'next/router'

import styles from "./Reminisce.module.css";


const optionsData = [
    ["",  ["Make Tea",  "/VIDEO 1_OPTION_MAKE TEA.mp4"], ["Do Chores",  "/VIDEO_1_OPTION_DO CHORES.mp4"]] ,
    ["It's time to sleep.",  ["Open Window",  "/VIDEO 2_OPTION_OPEN WINDOW.mp4"], ["Close Window",  "/VIDEO 2_OPTION_CLOSE WINDOW.mp4"]],
    ["someone's knocking.",  ["Check",  "/VIDEO 3_OPTION_CHECK THE DOOR.mp4"]],
    ["still knocking.",  ["Answer",  "/VIDEO 4_OPTION_ANSWER.mp4"], ["Ignore",  "/VIDEO 4_OPTION_IGNORE.mp4"]]
]

const Reminisce = () => {
    const [playbackButton, setPlaybackButton] = useState("play");
    const [video, setVideo] = useState("/VIDEO 0_0.mp4");
    const [options, setOptions] = useState("");
    const [optionsOrder, setOptionsOrder] = useState(0);

    const router = useRouter()

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

    const onCanPlay = () => {
        console.log("Ready")
        player.current.play();
        setPlaybackButton("pause");
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
        let threeSecondsBeforeEnd = player.current.duration - player.current.currentTime <= 3 && options === ""
        
        if (threeSecondsBeforeEnd && optionsOrder !== 5) {
            player.current.pause()
            setOptions(optionsData[optionsOrder])
            setOptionsOrder(optionsOrder => optionsOrder + 1)
        }

    }

    const changeOption = e => {
        setVideo(e.target.id)
        setOptions("")
        player.current.currentTime = 0;
        player.current.load();
        player.current.play()
    }

    const onEnded = () => {
        router.push("/")
    }

    return (
        <div className={styles.container}>
            <video className={styles.video} ref={player}
                onPlay={onPlayerPlay}
                onPause={onPlayerPause}
                onTimeUpdate={showOptions}
                onEnded={onEnded}
                autoPlay
            >
                <source src={video} type='video/mp4' />
            </video>

            {
                options && options !== "" &&
                <div className={styles.question}>
                    <div>
                        {options[0]}
                    </div>
                    <hr className={styles.hr} />
                    <div className={styles.options}>
                        <div id={options[1][1]} onClick={changeOption} className={styles.optionsMargin}>
                            {options[1][0]}
                        </div>
                        {
                            options[2] &&
                            <div id={options[2][1]} onClick={changeOption} className={styles.optionsMargin} >
                                {options[2][0]}
                            </div>
                        }
                    </div>
                </div>
            }

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
