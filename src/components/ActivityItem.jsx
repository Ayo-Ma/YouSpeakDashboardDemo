import React from "react";

export default function ActivityItem({ text, meta, icon: Icon, tone = "soft" }) {
  const bg = tone === "tint" ? "bg-slate-90 border-slate-200" : "bg-white border-slate-200";

  return (
    <li className={`flex items-start gap-3 rounded-2xl border ${bg} p-3`}>
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border bg-white">
        {Icon ? <Icon className="h-4 w-4" /> : null}
      </span>

      <div className="min-w-0">
        <p className="text-sm font-medium text-slate-900">{text}</p>
        <p className="mt-1 text-xs text-slate-500">{meta}</p>
      </div>
    </li>
  );
}
