import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Select({ label }) {
  return (
    <button className="inline-flex h-10 items-center gap-2 rounded-xl border px-3 text-sm font-medium hover:bg-slate-50">
      {label}
      <MdKeyboardArrowDown className="h-5 w-5" />
    </button>
  );
}
