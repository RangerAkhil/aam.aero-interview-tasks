import { useEffect, useRef } from "react";

export default function RowActionMenu({ open, onOpen, onClose, onDelete }) {
    const ref = useRef()

    useEffect(() => {
        function handleClick(event) {
            if (open && ref.current && !ref.current.contains(event.target)) {
                onClose()
            }
        }
        document.addEventListener("mousedown", handleClick)
        return () => document.removeEventListener("mousedown", handleClick)
    }, [open, onClose])

    return (
        <div className="relative" ref={ref}>
            <button
                className="flex items-center justify-center h-8 w-8 rounded hover:bg-gray-200"
                onClick={open ? onClose : onOpen}
                tabIndex={0}
                aria-label="Open row menu"
            >
                <svg width="20" height="20" fill="currentColor" className="text-gray-500">
                    <circle cx="4" cy="10" r="2" />
                    <circle cx="10" cy="10" r="2" />
                    <circle cx="16" cy="10" r="2" />
                </svg>
            </button>
            {open && (
                <div className="absolute z-10 left-0 mt-0">
                    <button
                        onClick={onDelete}
                        type="button"
                        className="focus:outline-none text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-900 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                    >
                        Delete
                    </button>

                </div>
            )}
        </div>
    );
}