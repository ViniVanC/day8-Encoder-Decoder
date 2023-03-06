import React from "react";
import { useCoder } from "../hook/useCoder";
import { Input } from "./Input";

export const CoderForm = () => {
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
    <form
      className="flex flex-col gap-[10px] "
      onSubmit={(e) => {
        e.preventDefault();
        revers ? decoder() : encoder();
      }}
    >
      <Input
        placeholder={"Enter text..."}
        value={userMessage}
        handleChange={(e) => setUserMessage(e.target.value.toUpperCase())}
      />
      <div className="flex items-center justify-center" onClick={setRevers}>
        <span className="material-symbols-outlined cursor-pointer">sync</span>
      </div>

      <Input value={result} disabled={true} />

      <div className="mt-[10px] flex items-center justify-between">
        <p className="text-[23px] font-bold">Shear length</p>
        <label className="text-[20px]">{key}</label>
      </div>
      <input
        className="mb-[20px]"
        type="range"
        min={0}
        max={alphabetENG.length}
        value={key}
        onChange={(e) => setKey(e.target.value)}
      />
      <button className="p-[10px] bg-mortar text-linen text-[18px] font-bold rounded-[10px] shadow-lg transition duration-200 hover:scale-105 active:scale-90">
        Generate
      </button>
    </form>
  );
};
