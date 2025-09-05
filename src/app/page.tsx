"use client";

import React, { useState, useRef, useEffect } from "react";
import { Internship } from "@/app/utils/types";
import Header from "@/app/components/Header";
import HeroForm from "@/app/components/HeroForm";
import ResultsGrid from "@/app/components/ResultsGrid";
import HowItWorks from "@/app/components/HowItWorks";
import { getMatches } from "@/app/utils/scoring";
import WhyChoose from "./components/WhyChoose";
import Impacts from "./components/Impacts";
import MeetTeam from "./components/MeetTeam";
import ReadyAgain from "./components/ReadyAgain";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";

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

  const [internships, setInternships] = useState<Internship[]>([]);
  const [results, setResults] = useState<Array<{ job: Internship; score: number }>>([]);
  const resultsRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLIFrameElement | null>(null);

  // Fetch internships from API instead of dataset.json
  useEffect(() => {
    async function fetchInternships() {
      try {
        const res = await fetch("/api/internships");
        if (!res.ok) throw new Error("Failed to fetch internships");
        const data: Internship[] = await res.json();
        setInternships(data);
      } catch (err) {
        console.error("Error fetching internships:", err);
      }
    }
    fetchInternships();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      education: form.education ? "" : "Education is required",
      skills: form.skills.length ? "" : "At least one skill is required",
      location: form.location.length ? "" : "Location is required",
      career: form.career.length ? "" : "Career interest is required",
    };

    setErrors(newErrors);

    if (!Object.values(newErrors).some((err) => err)) {
      // Pass internships from DB to matching function
      const matches = getMatches(form, internships);
      setResults(matches);
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      <Header />
      <HeroForm
        form={form}
        setForm={setForm}
        errors={errors}
        handleSubmit={handleSubmit}
        videoRef={videoRef}
      />
      {results.length > 0 && (
        <div id="match-results" ref={resultsRef}>
          <ResultsGrid items={results} />
        </div>
      )}
      <HowItWorks videoRef={videoRef} />
      <WhyChoose />
      <Impacts />
      <AboutUs />
      <MeetTeam />
      <ReadyAgain videoRef={videoRef} />
      <Footer />
    </div>
  );
}
