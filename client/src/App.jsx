import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const addCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const [text, setText] = useState("");

  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={addCount}>Add value</button>
      <button onClick={decreaseCount}>Decrease value</button>
      <hr />
      <h2>Type something</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text"
      />
      <p>You typed: {text}</p>
      <hr />
      <h2>Show/Hide</h2>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"} Text
      </button>
      {isVisible && <p>This text can be hidden or shown!</p>}
    </div>
  );
};

export default App;
