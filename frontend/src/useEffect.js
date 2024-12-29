import React, { useState, useEffect, useRef } from "react";
import "./App.css";

const App = () => {
  const [version, setVersion] = useState(1);
  const [content, setContent] = useState("");
  const containerRef = useRef(null);

  useEffect(() => {
    const scrollPosition = containerRef.current?.scrollTop;
    
    fetch(`/documents/version-${version}.html`)
      .then((response) => response.text())
      .then((data) => {
        setContent(data);
        if (containerRef.current && scrollPosition) {
          containerRef.current.scrollTop = scrollPosition;
        }
      });
  }, [version]);

  const handleSliderChange = (event) => {
    setVersion(event.target.value);
  };

  return (
    <div className="App">
      <div className="slider-container">
        <input
          type="range"
          min="1"
          max="5"
          value={version}
          onChange={handleSliderChange}
          className="slider"
        />
        <span>Version: {version}</span>
      </div>
      <div className="document-container" ref={containerRef}>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
};

export default App;
