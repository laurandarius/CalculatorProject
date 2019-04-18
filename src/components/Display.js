import React, { useState } from "react";

const Display = () => {
  const [result, setResult] = useState(0);

  return (
    <div className="display">
      <div className="display_content">{result}</div>
    </div>
  );
};

export default Display;
