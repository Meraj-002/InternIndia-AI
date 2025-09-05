"use client";

import AutocompleteSingle from "./AutocompleteSingle";
import AutocompleteMulti from "./AutocompleteMulti";
import { Search } from "lucide-react";

export default function HeroForm({
  form,
  setForm,
  errors,
  handleSubmit,
  videoRef,
}: {
  form: {
    education: string;
    skills: string[];
    location: string[];
    career: string[];
  };
  setForm: React.Dispatch<
    React.SetStateAction<{
      education: string;
      skills: string[];
      location: string[];
      career: string[];
    }>
  >;
  errors: { education: string; skills: string; location: string; career: string };
  handleSubmit: (e: React.FormEvent) => void;
  videoRef: React.RefObject<HTMLIFrameElement | null>;
}) {
  return (
    <main className="pt-30 max-w-7xl mx-auto px-6 pb-8" id="home">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
            AI-Powered Matching Technology
          </span>

          <h1 className="mt-6 text-4xl md:text-5xl font-extrabold text-gray-900 leading-snug">
            Find Your Perfect{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
              Internship
            </span>{" "}
            with AI
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            Discover internship opportunities tailored to your skills,
            education, and career goals. Our AI matches you with the perfect
            internships from top Indian companies.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex space-x-4">
            <a
  href="#"
  onClick={(e) => {
    e.preventDefault();
    document.getElementById("education-input")?.focus();
  }}
  className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-lg shadow-md transition-transform transform hover:scale-102 hover:shadow-xl duration-300 ease-in-out"
>
  <Search className="text-white w-6 h-4 font-bold pr-2" strokeWidth={3}/>   Find My Internship
</a>
            <button
              onClick={() => {
                if (videoRef.current) {
                  videoRef.current.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                  const iframe = videoRef.current;
                  const src = iframe.src;
                  if (!src.includes("autoplay=1")) {
                    iframe.src = src.includes("?")
                      ? `${src}&autoplay=1`
                      : `${src}?autoplay=1`;
                  }
                }
              }}
              className="px-6 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-100 transition-transform transform hover:scale-102 hover:shadow-2xl duration-300 ease-in-out"
            >
              ▶ Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="mt-8 flex space-x-10 text-center">
            <div>
              <p className="text-2xl font-bold text-blue-600">119K+</p>
              <p className="text-gray-600 text-sm">Internships</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-green-600">734</p>
              <p className="text-gray-600 text-sm">Districts</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-purple-600">4cr+</p>
              <p className="text-gray-600 text-sm">Total Visitors</p>
            </div>
          </div>
        </div>

        {/* Right Side form */}
        <div className="flex justify-center md:justify-end">
          <section className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              Find Your Perfect Match
            </h1>

            <form onSubmit={handleSubmit} className="space-y-5">
              <AutocompleteSingle
              id="education-input"
                label="Education Level"
                options={[
                  "12th Pass",
                  "Diploma Holder",
                  "Graduate",
                  "Post Graduate",
                  "PhD",
                ]}
                value={form.education}
                onChange={(val) => setForm({ ...form, education: val })}
                placeholder="Type or select education"
                error={errors.education}
              />

              <AutocompleteMulti
                label="Skills & Expertise"
                options={[
                  "Web Development",
                  "Data Science",
                  "AI & ML",
                  "UI/UX Design",
                  "Cybersecurity",
                  "Cloud Computing",
                  "JavaScript",
                  "React",
                  "Python",
                  "SQL",
                  "Excel",
                  "AWS",
                  "Figma",
                  "Django",
                ]}
                values={form.skills}
                onChange={(val) => setForm({ ...form, skills: val })}
                placeholder="Type or select skills (up to 3)"
                error={errors.skills}
              />

              <AutocompleteMulti
                label="Location Preference"
                options={[
                  "Remote",
                  "Delhi",
                  "Maharashtra",
                  "Uttar Pradesh",
                  "Gujarat",
                ]}
                values={form.location}
                onChange={(val) => setForm({ ...form, location: val })}
                placeholder="Type or select location (up to 3)"
                error={errors.location}
              />

              <AutocompleteMulti
                label="Career Interests"
                options={[
                  "Software Engineering",
                  "Data Analytics",
                  "Research",
                  "Marketing",
                  "Product Management",
                  "UI/UX",
                  "Cloud",
                  "AI",
                ]}
                values={form.career}
                onChange={(val) => setForm({ ...form, career: val })}
                placeholder="Type or select interests (up to 3)"
                error={errors.career}
              />

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold py-3 rounded-lg transition-transform transform hover:scale-102 hover:shadow-xl duration-300 ease-in-out"
              >
                🔍 Find Matching Internships
              </button>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}
