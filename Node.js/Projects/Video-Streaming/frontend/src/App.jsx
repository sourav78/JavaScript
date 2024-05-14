import "./App.css";
import VideoPlayer from "./VideoPlayer";
import { useRef } from "react";
import videojs from "video.js";

function App() {
  const playerRef = useRef(null);
  const videoLink = "http://localhost:3000/uploads/courses/e20c4e2e-7675-482c-b0cf-b5523f00ed25/index.m3u8";
  const videoPlayerOptions = {
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: videoLink,
        type: "application/x-mpegURL",
      },
    ],
  };
  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };
  return (
    <>
      <div>
        <h1>Video player</h1>
      </div>

      <VideoPlayer
        options={videoPlayerOptions}
        onReady={handlePlayerReady}
      />
    </>
  );
}

export default App
