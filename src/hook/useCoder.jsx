import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

const CoderContext = createContext();
export const useCoder = () => useContext(CoderContext);

export const CoderProvider = ({ children }) => {
  const alphabetENG = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const [key, setKey] = useState(3);
  const [userMessage, setUserMessage] = useState("Hello".toUpperCase());
  const [result, setResult] = useState("");
  const [revers, setRevers] = useReducer((r) => !r, false);

  function coder(str, shift) {
    let res = "";

    for (let i = 0; i < str.length; i++) {
      const letter = str[i];
      let position = (alphabetENG.indexOf(letter) + shift) % alphabetENG.length;
      res +=
        str[i] === " "
          ? " "
          : alphabetENG[
              position < 0 ? alphabetENG.length + position : position
            ];
    }

    setResult(res);
  }

  function decoder() {
    coder(userMessage, -key);
  }

  function encoder() {
    coder(userMessage, key);
  }

  useEffect(() => {
    revers ? encoder() : decoder();
  }, [key, userMessage]);

  return (
    <CoderContext.Provider
      value={{
        key,
        setKey,
        userMessage,
        setUserMessage,
        alphabetENG,
        result,
        revers,
        setRevers,
        encoder,
        decoder,
      }}
    >
      {children}
    </CoderContext.Provider>
  );
};
