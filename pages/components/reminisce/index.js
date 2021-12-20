import React, { useState, useRef, useEffect } from 'react'
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
    const [trigger, setTrigger] = useState(true);
    const [desktopMode, setDesktopMode] = useState(true);
    const [showInstruction, setShowInstruction] = useState(true);

    const router = useRouter()

    // Get a handle to the player
	const player       = useRef(null);
    const volumeBar    = useRef(null);

    // console.log(screen)
    
    // Update the video volume
    const onVolumeChange = e => {
        player.current.volume = e.target.value;
        // volumeBar.current = e.target.value;
        console.log(volumeBar)
    }
	
	// Add a listener for the play and pause events so the buttons state can be updated
	const onPlayerPlay = () => {
		setPlaybackButton("pause")
    }
  
    const onPlayerPause = () => {
		setPlaybackButton("play")
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

  function muteUnmuteVideo() {
    if (player.current.volume === 0) {
        player.current.volume = 1;
        // volumeBar.current.value = 1;
        
        volumeBar.current.value = 1
    }
    else {
        player.current.volume = 0;
        // volumeBar.current.value = 0;
        volumeBar.current.value = 0
    }
  }

    function showOptions() {
        let threeSecondsBeforeEnd = player.current.duration - player.current.currentTime <= 3 && options === ""
        if (threeSecondsBeforeEnd && optionsOrder !== 4) {
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

    useEffect(() => {
        if (trigger) {
            if (screen.width >= screen.height) {
                setDesktopMode(true);
            }
            else {
                setDesktopMode(false);
            }
            setTrigger(false);
        }
    }, [])
    
    console.log(showInstruction)

    return (
        <>
            {(desktopMode === false && showInstruction === true) &&
                <div className={styles.mobileInstruction} onClick={() => setShowInstruction(false)}>
                    <p className={styles.instructionParagraph}>Please Rotate Your</p>
                    <p className={styles.instructionParagraph}>Mobile Device</p>
                </div>
            }
            <div className={desktopMode === true ? styles.container : styles.containerMobile}>
                
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
                    options && options !== "" ?
                    <div className={styles.question} style={{opacity: 1}}>
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
                : <div className={styles.question}></div>}

                <div className={styles.controls} style={{opacity: !options || options === "" ? 1 : 0}}>
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
                        <img src="/vOluME.png" onClick={muteUnmuteVideo} className={styles.volumeIcon}/>
                        <input className={styles.volumeBar} type="range" min="0" max="1" step="0.01" ref={volumeBar} onChange={onVolumeChange} />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Reminisce
