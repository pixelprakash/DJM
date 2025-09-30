import React from "react";
import myVideo from "./media/sample.mp4"; // Place the video in public/media or src/media and adjust path

import "./App.css";

function App() {
  return (
    <div>
      <video
        autoPlay
        muted
        loop
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -2,
        }}
      >
        <source src={myVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay div */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: -1,
        }}
      ></div>

      <div
        style={{
          position: "relative",
          zIndex: 1,
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          textAlign: "center",
          padding: "0 20px",
        }}
      >
        <h1>DJM Photography</h1>
        <div className="navbar">
          <button>ENTER SITE</button>
          <a href="https://deepakjohnmathew.net" target="_blank" rel="noopener noreferrer"><button>BLOG</button></a>
          <a href="https://iith.ac.in/des/djm" target="_blank" rel="noopener noreferrer"><button>DIC</button></a>
          <a href="https://design.iith.ac.in/iitdesign_peoples/deepak-john-mathew-phd" target="_blank" rel="noopener noreferrer"><button>DOD-IITH</button></a>
        </div>
      </div>
    </div>
  );
}

export default App;
