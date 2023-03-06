import React from "react";
import { useCoder } from "../hook/useCoder";

export const Box = () => {
  const {
    userMessage,
    setUserMessage,
    key,
    setKey,
    result,
    alphabetENG,
    revers,
    setRevers,
    encoder,
    decoder,
  } = useCoder();
  return (
    <div>
      {revers ? "true" : "false"}
      <div>
        <input
          type="text"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value.toUpperCase())}
        />
        <button onClick={setRevers}>
          <span className="material-symbols-outlined">sync</span>
        </button>
        <input type="text" defaultValue={result} disabled />
        <label>{key}</label>
        <input
          type="range"
          min={0}
          max={alphabetENG.length}
          value={key}
          onChange={(e) => setKey(e.target.value)}
        />
        <button onClick={revers ? decoder : encoder}>Generate</button>
      </div>
    </div>
  );
};
