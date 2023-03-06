import React, { createContext, useContext, useState } from "react";

const CoderContext = createContext();
export const useCoder = () => useContext(CoderContext);

export const CoderProvider = ({ children }) => {
  const alphabetENG = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const [key, setKey] = useState(3);
  const [userMessage, setUserMessage] = useState("hi guys");

  function encoder(message, alphabet, shift) {
    let result = "";

    for (let i = 0; i < message.length; i++) {
      const letter = message[i];
      let position = (alphabet.indexOf(letter) + shift) % alphabet.length;
      result += message[i] === " " ? " " : alphabet[position];
    }

    return result;
  }

  function decoder(func, message, alphabet, shift) {
    return func(message, alphabet, -shift);
  }

  return (
    <CoderContext.Provider
      value={{
        key,
        setKey,
        userMessage,
        setUserMessage,
        alphabetENG,
        encoder,
        decoder,
      }}
    >
      {children}
    </CoderContext.Provider>
  );
};
