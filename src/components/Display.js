import React, { useState } from "react";
import "./Display.css";

const Display = () => {
  const [result, setResult] = useState(0);

  return (
    <div className="display">
      <p className="display_content">{result}</p>
    </div>
  );
};

export default Display;
