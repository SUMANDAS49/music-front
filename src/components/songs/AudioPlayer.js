import React, { useState, useRef, useEffect } from 'react'
import styles from "./AudioPlayer.module.css"

import { FiArrowLeft } from "react-icons/fi"
import { FiArrowRight } from "react-icons/fi"
import { BsPlayCircleFill } from "react-icons/bs"
import { BsFillPauseCircleFill } from "react-icons/bs"
const AudioPlayer = ({ songLink }) => {
    // states-----------------
    const [isPlaying, setIsPlaying] = useState(false)
    const [duration, setDuration] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)

    // refrences-----

    const audioPlayer = useRef() // for our audio component
    const progressBar = useRef();
    const animationRef = useRef();


    useEffect(() => {
        const seconds = Math.floor(audioPlayer.current.duration)
        progressBar.current.max = seconds;
        setDuration(seconds)
    }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState])

    // functions ------------

    const calculateTime = (time_in_seconds) => {
        const time_in_minutes = Math.floor(time_in_seconds / 60);
        time_in_seconds = time_in_seconds % 60;

        return `${time_in_minutes}:${time_in_seconds}`

    }


    const togglePlayPause = () => {
        const prevValue = isPlaying;
        setIsPlaying(!prevValue)
        if (!prevValue) {
            audioPlayer.current.play()
            animationRef.current = requestAnimationFrame(whilePlaying)
        }
        else {
            audioPlayer.current.pause()
            cancelAnimationFrame(animationRef.current)
        }
    }


    const whilePlaying = () => {
        progressBar.current.value = audioPlayer.current.currentTime;
        changePlayerCurrentTime();
        animationRef.current = requestAnimationFrame(whilePlaying);
    }

    const changeRange = () => {
        audioPlayer.current.currentTime = progressBar.current.value;
        changePlayerCurrentTime();
    }

    const changePlayerCurrentTime = () => {
        progressBar.
            current.
            style.
            setProperty('--seek-before-width', `${progressBar.current.value / duration * 100}%`)
        setCurrentTime(progressBar.current.value);
    }

    return (
        <div className={styles.audioPlayer}>
            <audio
                style={{ display: "none" }}
                ref={audioPlayer}
                controls src={songLink}
                preload='metadata'
            />

            <div className={styles.progressBarTimeContainer}>
                {/* current time */}
                <div className={styles.currentTime}>{calculateTime(currentTime)}</div>

                {/* progress bar */}
                <div>
                    <input className={styles.progressBar} defaultValue={0} type="range" ref={progressBar}
                        onChange={changeRange}
                    />
                </div>
                <div className={styles.duration}>
                    {duration && !isNaN(duration) && calculateTime(duration)}
                </div>
            </div>
            <button className={styles.forwardBackward}>
                <FiArrowLeft /> 30
            </button>

            <button className={styles.playPause} onClick={togglePlayPause} >
                {isPlaying ?
                    <BsFillPauseCircleFill />
                    :
                    <BsPlayCircleFill />

                }
            </button>

            <button className={styles.forwardBackward}>
                30 <FiArrowRight />
            </button>


        </div>
    )
}

export { AudioPlayer }