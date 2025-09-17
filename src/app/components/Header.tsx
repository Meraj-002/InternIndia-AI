"use client";
import { useEffect } from "react";
import Image from "next/image";

export default function Header({
  setSelectedLanguage,
}:{
  setSelectedLanguage: (lang: string) => void;
} ) {
  
  
  useEffect(() => {
    // 🟢 Force reset to English every time page loads
    document.cookie =
      "googtrans=/en/en; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    localStorage.removeItem("googtrans");

    // Load Google Translate script
    const addScript = document.createElement("script");
    addScript.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.body.appendChild(addScript);

    // Init but do NOT render widget
    // @ts-ignore
    window.googleTranslateElementInit = () => {
      // just init with a hidden container
      // @ts-ignore
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          autoDisplay: false,
        },
        "google_translate_hidden"
      );
    };
  }, []);

  // Custom language switcher
  // const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   const lang = e.target.value;
  //   const select = document.querySelector<HTMLSelectElement>(".goog-te-combo");
  //   if (select) {
  //     select.value = lang;
  //     select.dispatchEvent(new Event("change"));
  //   }
  // };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const lang = e.target.value;
      setSelectedLanguage(lang); // ✅ notify parent
      const select = document.querySelector<HTMLSelectElement>(".goog-te-combo");
      if (select) {
        select.value = lang;
        select.dispatchEvent(new Event("change"));
      }
    };

  useEffect(() => {
    const removeBanner = () => {
      const iframe = document.querySelector("iframe.goog-te-banner-frame");
      if (iframe) iframe.remove(); // remove iframe completely

      const skiptranslate = document.querySelector(".skiptranslate");
      if (skiptranslate instanceof HTMLElement) {
        skiptranslate.style.display = "none";
      }

      document.body.style.top = "0px";
    };

    // run once
    removeBanner();

    // keep running every 300ms
    const interval = setInterval(removeBanner, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="relative w-12 h-12 rounded-lg overflow-hidden">
            <Image
              src="/logo.jpg"
              alt="logo"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h1 className="text-lg font-bold text-gray-800">InternIndia-AI</h1>
            <p className="text-xs text-gray-500 -mt-1">
              Smart Internship Matching
            </p>
          </div>
        </div>

        {/* Nav + Language */}
        <div className="flex items-center space-x-6 ml-auto">
          <nav className="hidden md:flex space-x-8 text-gray-700 font-medium pr-10">
            <a href="#how-it-works" className="hover:text-blue-600">
              How It Works
            </a>
            <a href="#features" className="hover:text-blue-600">
              Features
            </a>
            <a href="#about" className="hover:text-blue-600">
              About
            </a>
            <a href="#footer" className="hover:text-blue-600">
              Contact
            </a>
          </nav>

          {/* ✅ Custom Dropdown (no Google banner) */}
          <select
            onChange={handleLanguageChange}
            className="notranslate
    border border-gray-300 
    rounded-lg              /* more rounded */
    px-3 py-2 
    text-sm font-medium 
    text-gray-700 
    bg-white 
    shadow-sm 
    focus:outline-none 
    focus:ring-2 focus:ring-blue-400 focus:border-blue-400 
    transition duration-200 ease-in-out
    hover:border-blue-400 hover:shadow-md"
            translate="no"
          >
            <option value="en">Select Language</option>
            <option value="en">English</option>
            <option value="as">অসমীয়া</option>
            <option value="bn">বাংলা</option>
            <option value="brx">बड़ो</option>
            <option value="doi">डोगरी</option>
            <option value="gu">ગુજરાતી</option>
            <option value="hi">हिन्दी</option>
            <option value="kn">ಕನ್ನಡ</option>
            <option value="ks">कॉशुर</option>
            <option value="kok">कोंकणी</option>
            <option value="mai">मैथिली</option>
            <option value="ml">മലയാളം</option>
            <option value="mni">ꯃꯤꯇꯩꯂꯣꯟ</option>
            <option value="mr">मराठी</option>
            <option value="ne">नेपाली</option>
            <option value="or">ଓଡ଼ିଆ</option>
            <option value="pa">ਪੰਜਾਬੀ</option>
            <option value="sa">संस्कृतम्</option>
            <option value="sat">ᱥᱟᱱᱛᱟᱲᱤ</option>
            <option value="sd">سنڌي</option>
            <option value="ta">தமிழ்</option>
            <option value="te">తెలుగు</option>
            <option value="ur">اردو</option>
          </select>
        </div>
      </div>

      {/* Hidden Google Translate element */}
      <div id="google_translate_hidden" style={{ display: "none" }}></div>
    </header>
  );
}
