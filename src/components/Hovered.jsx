import React, { useState } from "react";

const Hovered = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ margin: 200 }}>
      <button onMouseOver={increment}>Hovered {count} times</button>
    </div>
  );
};

export default Hovered;
