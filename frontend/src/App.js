import React, { useState, useRef, useEffect } from "react";
import "./App.css";

const App = () => {
  const [version, setVersion] = useState(1);
  const iframeRef = useRef(null);

  const handleSliderChange = (event) => {
    const newVersion = event.target.value;
    const iframe = iframeRef.current;
    const scrollPosition = iframe ? iframe.contentWindow.scrollY : 0;

    setVersion(newVersion);

    // Restore scroll position after iframe reloads
    if (iframe) {
      iframe.onload = () => {
        iframe.contentWindow.scrollTo(0, scrollPosition);
      };
    }
  };

  return (
    <div className="App">
      <div className="slider-container">
        <input
          type="range"
          min="1"
          max="3"
          value={version}
          onChange={handleSliderChange}
          className="slider"
        />
        <span>Version: {version}</span>
      </div>
      <div className="document-container">
        <iframe
          ref={iframeRef}
          src={`/documents/version-${version}.html`}
          title={`Document Version ${version}`}
          className="document-viewer"
        />
      </div>
    </div>
  );
};

export default App;
