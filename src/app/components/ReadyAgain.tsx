
export default function ReadyAgain({
  videoRef,
}: {
  videoRef: React.RefObject<HTMLIFrameElement | null>;
}){
    return (
<section className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 py-16 px-6 text-white text-center">
  <div className="max-w-4xl mx-auto">
    {/* Title */}
    <h2 className="text-3xl md:text-4xl font-bold mb-6">
      Ready to Find Your{" "}
      <span className="text-yellow-400">Dream Internship?</span>
    </h2>

    {/* Paragraph */}
    <p className="text-lg md:text-xl text-gray-100 mb-10 leading-relaxed">
      Join 50,000+ students who have already discovered their perfect internships 
      through our AI-powered platform. Start your journey today and take the first 
      step towards your dream career.
    </p>

    {/* Buttons */}
    <div className="flex justify-center gap-4 mb-10 flex-wrap">
      <button onClick={(e) => {
    e.preventDefault();
    document.getElementById("education-input")?.focus();
  }}
  className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-lg shadow-md transition-transform transform hover:scale-102 hover:shadow-xl duration-300 ease-in-out"
> 🚀 Get Started for Free
      </button>
      <button onClick={() => {
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
            > ▶ Watch Demo
      </button>
    </div>

    {/* Info Section */}
    <div className="flex justify-center gap-6 flex-wrap text-sm font-medium">
      <div className="flex items-center gap-2">
        ✅ <span>100% Free to Use</span>
      </div>
      <div className="flex items-center gap-2">
        ✅ <span>No Hidden Charges</span>
      </div>
      <div className="flex items-center gap-2">
        ✅ <span>Instant AI Matching</span>
      </div>
    </div>
  </div>
</section>

    );
}