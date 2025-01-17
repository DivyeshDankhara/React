import React, { useRef } from "react";

const Focus_on_input = () => {
  const inputRef = useRef(null);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="flex flex-col items-center p-28">
      <input
        type="text"
        ref={inputRef}
        className="border border-gray-300 rounded-md  p-5 mb-4"
        placeholder="Click the button to focus me"
      />
      <button
        onClick={focusInput}
        className="bg-yellow-500 text-white rounded-md px-4 py-2 "
      >
        Focus Input
      </button>
    </div>
  );
};

export default Focus_on_input;