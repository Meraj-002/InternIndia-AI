"use client";

import React, { useState, useRef, useEffect } from "react";
import { Internship } from "@/app/utils/types";
import Header from "@/app/components/Header";
import HeroForm from "@/app/components/HeroForm";
import ResultsGrid from "@/app/components/ResultsGrid";
import HowItWorks from "@/app/components/HowItWorks";
import WhyChoose from "./components/WhyChoose";
import Impacts from "./components/Impacts";
import MeetTeam from "./components/MeetTeam";
import ReadyAgain from "./components/ReadyAgain";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import { apiFetch } from "./utils/api";
import internships from "@/data/dataset.json";
import { getMatches } from "./utils/scoring";

// ----------------------
// Normalize raw data
// ----------------------
function normalizeInternship(raw: any): Internship {
  return {
    id: Number(raw.id || raw.ID),
    title: raw.title || raw["Job Title"],
    sector: raw.sector || raw.Sector,
    state: raw.state,
    district: raw.district,
    // benefits:
    //   typeof raw.Benefits === "string"
    //     ? JSON.parse(raw.Benefits.replace(/'/g, '"'))
    //     : [],
    benefits: Array.isArray(raw.benefits) ? raw.benefits : [],
    candidatesApplied: Number(raw.candidatesapplied || 0),
    companyLogo: raw.companylogo,
    companyName: raw.companyname || raw["Company Name"],
    noOfOpportunities: Number(raw.noofopportunities || 1),
    description: raw.description,
    addressLine1: raw.addressline1,
    addressLine2: raw.addrssline2,
    zip: Number(raw.zip || 0),
    village: raw.village,
    minimumQualification: raw.minimumqualification,
    course: raw.course,
    specialization: Array.isArray(raw.specialization)
      ? raw.specialization
      : [raw.specialization],
    certifications: raw.certifications,
    skills: raw.skills,
    specialRequirements: raw.spclrequirements,
    stipend: raw.stipend,
    duration: raw.duration,
  };
}

// ----------------------
// Main component
// ----------------------
export default function Home() {
  const [form, setForm] = useState({
    education: "",
    skills: [] as string[],
    location: [] as string[],
    career: [] as string[],
  });

  const [errors, setErrors] = useState({
    education: "",
    skills: "",
    location: "",
    career: "",
  });

  const [results, setResults] = useState<
    Array<{ job: Internship; score: number }>
  >([]);
  const [allInternships, setAllInternships] = useState<Internship[]>([]);
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const resultsRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLIFrameElement | null>(null);

  const useBackend = false; // toggle backend recommendations

  // ----------------------
  // Load dataset client-side
  // ----------------------
  useEffect(() => {
    const normalized = internships.map(normalizeInternship);
    setAllInternships(normalized);
  }, []);

  // ----------------------
  // Form submission
  // ----------------------
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const newErrors = {
      education: form.education ? "" : "Education is required",
      skills: form.skills.length ? "" : "At least one skill is required",
      location: form.location.length ? "" : "Location is required",
      career: form.career.length ? "" : "Career interest is required",
    };
    setErrors(newErrors);

    if (Object.values(newErrors).some((err) => err)) return;

    try {
      let normalized: Array<{ job: Internship; score: number }> = [];

      if (useBackend) {
        // ----------------------
        // Backend recommendations
        // ----------------------
        const data = await apiFetch<{ recommendations: any[] }>("/recommend", {
          method: "POST",
          body: JSON.stringify({
            education: form.education,
            skills: form.skills,
            locations: form.location,
            interests: form.career,
            top_k: 10,
          }),
        });

        normalized = (data.recommendations || []).map((rec) => ({
          job: normalizeInternship(rec),
          score: rec.score ?? 50,
        }));

        // Deduplicate frontend side (title + company)
        const seen = new Set<string>();
        normalized = normalized.filter((r) => {
          const key = `${r.job.title}-${r.job.companyName}`;
          if (seen.has(key)) return false;
          seen.add(key);
          return true;
        });

        // Ensure min 3, max 5
        if (normalized.length < 3) {
          const missing = 3 - normalized.length;
          const fallback = allInternships
            .filter(
              (job) =>
                !normalized.some(
                  (r) =>
                    r.job.title === job.title &&
                    r.job.companyName === job.companyName
                )
            )
            .sort(() => 0.5 - Math.random())
            .slice(0, missing)
            .map((job) => ({ job, score: 30 }));
          normalized = [...normalized, ...fallback];
        }
        normalized = normalized.slice(0, 5);
      } else {
        // ----------------------
        // Frontend scoring logic
        // ----------------------
        normalized = getMatches(form, allInternships);
      }

      setResults(normalized);

      setTimeout(() => {
        resultsRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 50);

      console.log("Normalized recommendations:", normalized);
    } catch (err) {
      console.error("Error submitting form:", err);
    }
  }

  // ----------------------
  // Render
  // ----------------------
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      <Header setSelectedLanguage={setSelectedLanguage} />
      <HeroForm
        form={form}
        setForm={setForm}
        errors={errors}
        handleSubmit={handleSubmit}
        videoRef={videoRef}
      />
            {/* pass selectedLanguage down */}
            <HowItWorks videoRef={videoRef} selectedLanguage={selectedLanguage} />
      {/* <Header /> */}
      
      {results.length > 0 && (
        <div id="match-results" ref={resultsRef}>
          <ResultsGrid items={results} />
        </div>
      )}
      {/* <HowItWorks videoRef={videoRef} /> */}
      <WhyChoose />
      <Impacts />
      <AboutUs />
      <MeetTeam />
      <ReadyAgain videoRef={videoRef} />
      <Footer />
    </div>
  );
}
