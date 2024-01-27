"use client"

import YouTube from "react-youtube"
import { useState } from "react"
import { XCircle, ArrowsOutCardinal } from "@phosphor-icons/react"
import Draggable from "react-draggable"

const VideoTrailer = ({ youtubeId }) => {
  const [isOpen, setIsOpen] = useState(true)

  const handleVideoPlayer = () => {
    setIsOpen((prevState) => !prevState)
  }

  const handleVideoMovement = (event) => {
    const x = event.clientX
    const y = event.clientY
    console.log(x, y)
  }

  const optionVideo = {
    width: "250",
    height: "200",
  }

  const Video = () => {
    return (
      <Draggable>
        <div>
          <button className="sticky top-0" onClick={handleVideoPlayer}>
            <XCircle size={24} color="#fcfcfc" weight="fill" />
          </button>
          <button className="sticky top-5" onDrag={handleVideoMovement}>
            <ArrowsOutCardinal size={24} color="#faf6ef" weight="fill" />
          </button>
          <YouTube
            videoId={youtubeId}
            onReady={(event) => event.target.pauseVideo()}
            opts={optionVideo}
          />
        </div>
      </Draggable>
    )
  }

  const ButtonVideo = () => {
    return (
      <button
        onClick={handleVideoPlayer}
        className="rounded fixed top-10 left-5 w-32 bg-color-primary text-black hover:bg-color-lighto"
      >
        Open Trailer
      </button>
    )
  }

  return isOpen ? <Video /> : <ButtonVideo />
}

export default VideoTrailer
