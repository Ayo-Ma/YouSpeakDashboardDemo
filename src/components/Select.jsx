import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Select({ label }) {
  return (
    <button className="inline-flex h-10 items-center gap-2 rounded-xl border border-primary-200 px-3 text-base  text-black-600 outline-none  bg-soft-blue">
      {label}
      <MdKeyboardArrowDown className="h-5 w-5" />
    </button>
  );
}
