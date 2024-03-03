import React from "react";

const Button = ({ onClick, children, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="
        inline-block
        px-6
        py-2
        text-sm
        font-semibold
        leading-5
        text-white
        uppercase
        transition-colors
        duration-150
        ease-in-out
        bg-black
        border-black
        rounded-md
        border
        disabled:opacity-50
        hover:bg-gray-900
        focus:outline-none
        focus:shadow-outline-gray
        focus:border-gray-300
        active:bg-gray-800
        "
    >
      {children}
    </button>
  );
};

export default Button;
