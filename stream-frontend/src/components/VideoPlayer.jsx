import React, { useEffect, useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import toast from "react-hot-toast";

function VideoPlayer({ src }) {
  const videoRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    playerRef.current = videojs(videoRef.current, {
      controls: true,
      autoplay: true,
      muted: true,
      preload: "auto",
      download: true,
    });

    if (videoRef.current.canPlayType("video/mp4")) {
      videoRef.current.src = src;
      videoRef.current.addEventListener("canplay", () => {
        videoRef.current.play();
      });
    } else {
      console.log("video format not supported");
      toast.error("Video format not supported");
    }
  }, [src]);

  return (
    <div>
      <div data-vjs-player>
        <video
          ref={videoRef}
          style={{
            width: "100%",
            height: "500px",
          }}
          className="video-js vjs-control-bar"
        ></video>
      </div>
    </div>
  );
}

export default VideoPlayer;
