import React, { useState } from "react";

const Button = props => {
  const [value, setValue] = useState(props.value);
  return (
    <div>
      <button>{value}</button>
    </div>
  );
};

export default Button;
