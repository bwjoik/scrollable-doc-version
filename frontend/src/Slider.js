import React from "react";

const Slider = ({ min, max, value, onChange }) => {
  return (
    <div className="slider-container">
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value))}
        className="slider"
      />
      <div className="slider-labels">
        {Array.from({ length: max - min + 1 }, (_, index) => (
          <span key={index} className="slider-label">
            {min + index}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Slider;
