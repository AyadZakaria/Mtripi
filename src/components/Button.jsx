import React from "react";

const Button = ({ styles }) => (
  <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-white bg-emerald-600 p-3 xs:hidden lg:block  rounded-[10px] outline-none ${styles}`}>
    feel free to ask 
  </button>
);

export default Button;
