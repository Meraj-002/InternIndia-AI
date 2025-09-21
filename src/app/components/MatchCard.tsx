"use client";
import React, { useState } from "react";
import { Internship } from "@/app/utils/types";
import { MapPin, Building2, Star } from "lucide-react";
import { toList } from "@/app/utils/scoring";

const lightColors = [
  "bg-blue-100 text-blue-700",
  "bg-green-100 text-green-700",
  "bg-yellow-100 text-yellow-700",
  "bg-purple-100 text-purple-700",
  "bg-pink-100 text-pink-700",
  "bg-indigo-100 text-indigo-700",
  "bg-red-100 text-red-700",
];

export default function MatchCard({
  job,
  score,
  onViewDetails,
}: {
  job: Internship;
  score: number;
  onViewDetails: () => void;
}) {
  const [imgError, setImgError] = useState(false);

  // ✅ Ensure skills is always string[]
  const skills = toList(job.skills).slice(0, 3);

  // ✅ Specialization can be array or string
  const specialization = Array.isArray(job.specialization)
    ? job.specialization.join(", ")
    : job.specialization || "General";

  const paid = /\d/.test(job.stipend || "");

  // Pick random fallback style
  const fallbackStyle =
    lightColors[job.companyName?.charCodeAt(0) % lightColors.length];

  return (
    <div className="relative bg-white rounded-2xl shadow-lg p-5 transition-transform transform hover:scale-101 hover:shadow-2xl duration-300 ease-in-out">
      <div className="flex items-start justify-between">
        {/* Company info */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full grid place-items-center overflow-hidden">
            {job.companyLogo && !imgError ? (
              <img
                src={job.companyLogo}
                alt={job.companyName || "Company"}
                className="w-full h-full object-cover rounded-full"
                onError={() => setImgError(true)}
              />
            ) : (
              <div
                className={`w-full h-full flex items-center justify-center font-bold text-lg rounded-full ${fallbackStyle}`}
              >
                {job.companyName?.[0]?.toUpperCase() || "?"}
              </div>
            )}
          </div>
          <div>
            <p className="text-lg font-bold text-gray-900">
              {job.companyName || "Unknown Company"}
            </p>
          </div>
        </div>

        {/* Match Score */}
        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
          <Star size={14} /> {Math.round(score)}% Match
        </span>
      </div>

      {/* Job title + sector */}
      <h3 className="mt-3 text-xl font-semibold text-gray-900">{job.title}</h3>
      <p className="text-sm text-gray-500 -mt-0.5">{job.sector}</p>

      {/* Location + specialization */}
      <div className="mt-3 flex flex-col gap-1 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <Building2 size={16} /> {specialization}
        </div>
        <div className="flex items-center gap-2">
          <MapPin size={16} /> {job.state}, {job.district}
        </div>
      </div>

      {/* Tags */}
      <div className="mt-3 flex flex-wrap gap-2 text-sm">
        {skills.length > 0 && (
          <div className="flex gap-2 flex-wrap">
            <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 font-semibold">
              Skills:
            </span>
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 rounded-full bg-blue-100 text-blue-700"
              >
                {skill}
              </span>
            ))}
          </div>
        )}

        <span
          className={`px-3 py-1 rounded-full ${
            paid ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600"
          } font-semibold`}
        >
          Stipend: <span className="font-normal">{job.stipend || "Unpaid"}</span>
        </span>
        <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-600 font-semibold">
          Duration: <span className="font-normal">{job.duration || "N/A"}</span>
        </span>
      </div>

      {/* Description */}
      <p className="mt-3 text-gray-600 text-sm line-clamp-3">
        {job.description || "No description available."}
      </p>

      {/* Actions */}
      <div className="mt-5 flex gap-3">
        <button
          className="flex-1 border border-gray-300 bg-white text-gray-800 py-2 rounded-lg font-medium transition-transform transform hover:scale-101 hover:shadow-xl bg-gray-100 duration-300 ease-in-out"
          onClick={onViewDetails}
        >
          View Details
        </button>
        <button
  className="flex-1 bg-indigo-600 text-white py-2 rounded-lg font-semibold transition-transform transform hover:scale-102 hover:shadow-2xl duration-300 ease-in-out"
  onClick={() => window.open("https://pminternship.mca.gov.in/login/#", "_blank")}
>
  Apply Now
</button>

      </div>
    </div>
  );
}
