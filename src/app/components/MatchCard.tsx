"use client";
import React from "react";
import { Internship } from "@/app/utils/types";
import { MapPin, Building2, Star } from "lucide-react";
import { toList } from "@/app/utils/scoring";

export default function MatchCard({
  job,
  score,
  onViewDetails,
}: {
  job: Internship;
  score: number;
  onViewDetails: () => void;
}) {
  // ✅ Ensure skills is always string[]
  const skills = toList(job.skills).slice(0, 4);

  // ✅ Specialization can be array or string
  const specialization = Array.isArray(job.specialization)
    ? job.specialization.join(", ")
    : job.specialization || "General";

  const paid = /\d/.test(job.stipend || "");

  return (
    <div className="relative bg-white rounded-2xl shadow-lg p-5 hover:shadow-xl transition">
      <div className="flex items-start justify-between">
        {/* Company info */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-100 grid place-items-center">
            {job.companyLogo ? (
              <img
                src={job.companyLogo}
                alt={job.companyName || "Company"}
                className="w-8 h-8 object-contain"
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
          <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 font-semibold">
            Skills: <span className="font-normal">{skills.join(", ")}</span>
          </span>
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
          className="flex-1 border border-gray-300 bg-white text-gray-800 py-2 rounded-lg font-medium hover:bg-gray-50"
          onClick={onViewDetails}
        >
          View Details
        </button>
        <button className="flex-1 bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:opacity-90">
          Apply Now
        </button>
      </div>
    </div>
  );
}
