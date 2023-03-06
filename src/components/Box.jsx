import React from "react";
import { useCoder } from "../hook/useCoder";
import { CoderForm } from "./CoderForm";

export const Box = () => {
  const { revers } = useCoder();

  return (
    <div className="bg-pharlap p-[30px] pt-[20px] rounded-[20px] shadow-lg">
      <h1 className="text-[25px] font-bold mb-[20px]">
        {revers ? "Encoder" : "Decoder"}
      </h1>
      <CoderForm />
    </div>
  );
};
