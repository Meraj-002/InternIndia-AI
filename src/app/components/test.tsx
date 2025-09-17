"use client";

export default function HowItWorks({
  videoRef,
  selectedLanguage,
}: {
  videoRef: React.RefObject<HTMLIFrameElement | null>;
  selectedLanguage: string;
}) {
  // ✅ Map each language to its video
  const videoMap: Record<string, string> = {
    en: "https://www.youtube.com/embed/p3i7jQNBfeg",
    hi: "https://www.youtube.com/embed/HindiVideoID",
    bn: "https://www.youtube.com/embed/BengaliVideoID",
    ta: "https://www.youtube.com/embed/TamilVideoID",
    te: "https://www.youtube.com/embed/TeluguVideoID",
    mr: "https://www.youtube.com/embed/MarathiVideoID",
    gu: "https://www.youtube.com/embed/GujaratiVideoID",
    ur: "https://www.youtube.com/embed/UrduVideoID",
    // add more...
  };

  const videoSrc = videoMap[selectedLanguage] || videoMap["en"];

  return (
    <div className="bg-white py-6" id="how-it-works">
      {/* ...steps content same as before */}
      <div className="flex justify-center px-3">
        <iframe
          ref={videoRef}
          className="rounded-2xl shadow-lg w-full h-64 md:h-80"
          src={videoSrc}
          title="YouTube video"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}


"use client";
import { useEffect } from "react";
import Image from "next/image";

export default function Header({
  setSelectedLanguage,
}: {
  setSelectedLanguage: (lang: string) => void;
}) {
  // ... existing useEffect code for Google Translate

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = e.target.value;
    setSelectedLanguage(lang); // ✅ notify parent
    const select = document.querySelector<HTMLSelectElement>(".goog-te-combo");
    if (select) {
      select.value = lang;
      select.dispatchEvent(new Event("change"));
    }
  };

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* logo and nav same as before */}
        <select
          onChange={handleLanguageChange}
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm font-medium"
        >
          <option value="en">English</option>
          <option value="hi">हिन्दी</option>
          <option value="bn">বাংলা</option>
          <option value="ta">தமிழ்</option>
          <option value="te">తెలుగు</option>
          <option value="mr">मराठी</option>
          <option value="gu">ગુજરાતી</option>
          <option value="ur">اردو</option>
          {/* add more */}
        </select>
      </div>
      <div id="google_translate_hidden" style={{ display: "none" }}></div>
    </header>
  );
}


// page.tsx
"use client";

import React, { useState, useRef } from "react";
import Header from "@/app/components/Header";
import HowItWorks from "@/app/components/HowItWorks";
// ... other imports

export default function Home() {
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const videoRef = useRef<HTMLIFrameElement | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      <Header setSelectedLanguage={setSelectedLanguage} />
      {/* pass selectedLanguage down */}
      <HowItWorks videoRef={videoRef} selectedLanguage={selectedLanguage} />
      {/* rest of your components */}
    </div>
  );
}
