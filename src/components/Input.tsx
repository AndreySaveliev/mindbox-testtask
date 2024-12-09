import React, { useState } from "react";

function Input({ dispatch }: { dispatch: React.Dispatch<{ type: string; payload: string }> }) {
  const [input, setInput] = useState("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: "addTask", payload: input });
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="p-3 border-slate-700 focus:outline-none border-2 w-full mt-4"
        type="text"
        placeholder="Что надо сделать?"
        value={input}
        onChange={handleInput}
      />
    </form>
  );
}

export default Input;
