"use client";
import { useState } from "react";

export default function AutocompleteSingle({
  id,
  label,
  options,
  value,
  onChange,
  placeholder,
  error,
}: {
  id: string;
  label: string;
  options: string[];
  value: string;
  onChange: (val: string) => void;
  placeholder: string;
  error?: string;
}) {
  const [showOptions, setShowOptions] = useState(false);
  const filtered = options.filter((opt) => opt.toLowerCase().includes(value.toLowerCase()));

  return (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
      <input
      id={id}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setShowOptions(true)}
        onBlur={() => setTimeout(() => setShowOptions(false), 100)}
        placeholder={placeholder}
        className={`w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      />
      {showOptions && filtered.length > 0 && (
        <ul className="absolute z-10 w-full bg-white border rounded-xl mt-1 max-h-40 overflow-y-auto shadow-lg">
          {filtered.map((opt, idx) => (
            <li
              key={idx}
              className="px-3 py-2 hover:bg-blue-100 cursor-pointer"
              onMouseDown={() => onChange(opt)}
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
