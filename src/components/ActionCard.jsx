import React from "react";

export default function ActionCard({ title, subtitle, icon: Icon, featured = false }) {
    let ActiveAction = null;
    return (
        <div
            className={[
                "rounded-[20px] group hover:bg-indigo-500 group-hover:text-white transition  border border-black-200 bg-white p-8 flex items-center gap-4",
                featured ? "shadow-sm " : "",
            ].join(" ")}
        >
            <span className="inline-flex h-11 w-11 text-white bg-amber-500 items-center justify-center border-black-200 rounded-full border">
                {Icon ? <Icon className="h-5 w-5 group-hover:text-white" /> : null}
            </span>

            <div className="min-w-0  group-hover:text-white   ">
                <p className="font-bold text-[18px]   ">{title}</p>
                <p className="text-sm ">{subtitle}</p>
            </div>
        </div>
    );
}
