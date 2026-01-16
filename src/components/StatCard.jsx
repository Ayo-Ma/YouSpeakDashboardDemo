import React from "react";
import Card from "./Card";

export default function StatCard({ title, value, note, icon: Icon, progress }) {
  return (
    <Card className="p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[18px] font-semibold text-black-800">{title}</p>
          <p className="mt-2 text-[32px] font-medium text-primary-800">{value}</p>
          <p className="mt-2 text-sm text-black-800">{note}</p>
        </div>

        <span className="inline-flex h-10 w-10 items-center bg-amber-500 border-white text-white justify-center rounded-full border">
          {Icon ? <Icon className="h-5 w-5" /> : null}
        </span>
      </div>

      {typeof progress === "number" && (
        <div className="mt-4">
          <div className="h-2 rounded-full bg-slate-200">
            <div className="h-2 rounded-full bg-primary-400" style={{ width: `${progress}%` }} />
          </div>
        </div>
      )}
    </Card>
  );
}
