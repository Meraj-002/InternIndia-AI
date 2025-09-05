"use client";
import { useState } from "react";

export default function AutocompleteMulti({
  label,
  options,
  values,
  onChange,
  placeholder,
  error,
  max = 3,
}: {
  label: string;
  options: string[];
  values: string[];
  onChange: (val: string[]) => void;
  placeholder: string;
  error?: string;
  max?: number;
}) {
  const [input, setInput] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const [limitError, setLimitError] = useState("");

  const filtered = options.filter(
    (opt) => opt.toLowerCase().includes(input.toLowerCase()) && !values.includes(opt)
  );

  const addValue = (val: string) => {
    if (values.length >= max) {
      setLimitError(`You can select maximum ${max} options`);
      setTimeout(() => setLimitError(""), 2500);
      return;
    }
    if (!values.includes(val)) {
      onChange([...values, val]);
      setInput("");
    }
  };

  const removeValue = (val: string) => {
    onChange(values.filter((v) => v !== val));
  };

  return (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
      <div
        className={`w-full border rounded-lg p-2 flex flex-wrap items-center gap-2 focus-within:ring-2 focus-within:ring-blue-500 ${
          error || limitError ? "border-red-500" : "border-gray-300"
        }`}
      >
        {values.map((val, idx) => (
          <span
            key={idx}
            className="flex items-center bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
          >
            {val}
            <button
              type="button"
              className="ml-2 text-red-500 hover:text-red-700"
              onClick={() => removeValue(val)}
            >
              ✕
            </button>
          </span>
        ))}
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onFocus={() => setShowOptions(true)}
          onBlur={() => setTimeout(() => setShowOptions(false), 100)}
          placeholder={placeholder}
          className="flex-1 outline-none p-1 min-w-[120px]"
        />
      </div>

      {showOptions && filtered.length > 0 && (
        <ul className="absolute z-10 w-full bg-white border rounded-xl mt-1 max-h-40 overflow-y-auto shadow-lg">
          {filtered.map((opt, idx) => (
            <li
              key={idx}
              className="px-3 py-2 hover:bg-blue-100 cursor-pointer"
              onMouseDown={() => addValue(opt)}
            >
              {opt}
            </li>
          ))}
        </ul>
      )}

      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      {limitError && <p className="text-red-500 text-sm mt-1">{limitError}</p>}
    </div>
  );
}
