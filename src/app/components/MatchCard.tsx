"use client";
import React, { useState, useEffect } from "react";
import { Internship } from "@/app/utils/types";
import { MapPin, Building2, Star } from "lucide-react";
import { toList } from "@/app/utils/scoring";

// Random platforms
const PLATFORMS = ["LinkedIn", "Internshala", "PMInternship"];

export default function MatchCard({
  job,
  score,
  onViewDetails,
}: {
  job: Internship;
  score: number;
  onViewDetails: () => void;
}) {
  const skills = toList(job.skills).slice(0, 3);

  const specialization = Array.isArray(job.specialization)
    ? job.specialization.join(", ")
    : job.specialization || "General";

  const paid = /\d/.test(job.stipend || "");

  // pick a random platform ONCE per card instance and keep it stable
  const [platform] = useState<string>(() =>
    PLATFORMS[Math.floor(Math.random() * PLATFORMS.length)]
  );

  const [showPopup, setShowPopup] = useState(false);

  // close modal on Escape
  useEffect(() => {
    if (!showPopup) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowPopup(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [showPopup]);

  return (
    <>
      <div className="relative bg-white rounded-2xl shadow-lg p-5 transition-transform transform hover:scale-101 hover:shadow-2xl duration-300 ease-in-out">
        <div className="flex items-start justify-between">
          {/* Company info */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl grid place-items-center">
              {job.companyLogo ? (
                <img
                  src={job.companyLogo}
                  alt={job.companyName || "Company"}
                  className="w-full h-full object-cover rounded-full"
                />
              ) : (
                <span className="text-xl">💼</span>
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
                Skills :
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
            onClick={() => setShowPopup(true)}
          >
            Available on {platform}
          </button>
        </div>
      </div>

      {/* Modal with blur overlay */}
      {showPopup && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm"
          onClick={() => setShowPopup(false)}
        >
          <div
            className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold text-gray-800 mb-3">
              Apply from {platform}
            </h2>
            <p className="text-gray-600 mb-6">
              This internship is listed as <strong>Available on {platform}</strong>.
               </p>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowPopup(false)}
                className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700"
              >
                Close
              </button>
              
            </div>
          </div>
        </div>
      )}
    </>
  );
}
