import { useState } from "react";

export default function Accordion({ title, count, children }) {
    const [open, setOpen] = useState(false)

    return (
        <div className="mb-4 border border-gray-200 rounded-xl">
            <h2>
                <button
                    type="button"
                    className={`flex items-center justify-between w-full p-5 font-medium text-gray-700 border-b border-gray-200 rounded-t-xl focus:ring-2 focus:ring-gray-200 hover:bg-gray-100 gap-3`}
                    aria-expanded={open}
                    onClick={() => setOpen(() => !open)}
                >
                    <span className="flex items-center gap-2">
                        {title}
                        <span className="ml-3 bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded">{count} Items</span>
                    </span>
                    <svg
                        className={`w-3 h-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5 5 1 1 5"
                        />
                    </svg>
                </button>
            </h2>
            {open && (
                <div className="p-5 border-t border-gray-200 bg-white rounded-b-xl">
                    {children}
                </div>
            )}
        </div>
    );
}