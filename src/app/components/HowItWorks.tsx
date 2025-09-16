"use client";

export default function HowItWorks({
  videoRef,
}: {
  videoRef: React.RefObject<HTMLIFrameElement | null>;
}) {
  return (
    <div className="bg-white py-6" id="how-it-works">
      <h2
        id="how-it-works"
        className="text-3xl font-bold text-center mb-4"
      >
        How It Works
      </h2>
      <p className="text-center text-gray-600 mb-12">
        Get matched with your ideal internship in just three simple steps
      </p>
      <section className="w-full px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Content (Steps) */}
          <section className="w-full py-4">
            <div className="max-w-6xl mx-auto px-6 relative">
              {/* Center Line */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-green-500 to-purple-500 hidden md:block"></div>

              {/* Step 1 */}
              <div className="grid md:grid-cols-2 gap-12 items-center mb-10 relative">
                <div className="text-right pr-8">
                  <span className="inline-block px-3 py-1 text-sm font-semibold bg-blue-100 text-blue-600 rounded-full mb-3">
                    Step 1
                  </span>
                  <h3 className="text-xl font-bold mb-3">Fill Your Details</h3>
                  <p className="text-gray-600 mb-4 text-md">
                    Share your education background, skills, location preferences, and career
                    interests. Our AI will analyze your profile to understand your unique strengths
                    and goals.
                  </p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>✅ Select Education Level</li>
                    <li>✅ Select Career Interests</li>
                    <li>✅ Select Skills & Expertise</li>
                  </ul>
                </div>
                <div className="hidden md:block">
                  <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/c9b11eab41-570c42c03e3e45d2a613.png" alt="Step 1" className="rounded-2xl shadow-lg" />
                </div>
              </div>

              {/* Step 2 */}
              <div className="grid md:grid-cols-2 gap-12 items-center mb-10 relative">
                <div className="hidden md:block">
                  <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/340204300c-710cde7fae0522df62bc.png" alt="Step 2" className="rounded-2xl shadow-lg" />
                </div>
                <div className="pl-8">
                  <span className="inline-block px-3 py-1 text-sm font-semibold bg-green-100 text-green-600 rounded-full mb-3">
                    Step 2
                  </span>
                  <h3 className="text-xl font-bold mb-3">AI Matches You</h3>
                  <p className="text-gray-600 mb-4 text-md">
                    Our advanced AI algorithm processes your profile and matches you with the
                    best-fit opportunities from our database of 2,500+ internships.
                  </p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>✅ Top 3-5 Internships</li>
                    <li>✅ Location-Based Filtering</li>
                    <li>✅ Industry Trend Analysis</li>
                  </ul>
                </div>
              </div>

              {/* Step 3 */}
              <div className="grid md:grid-cols-2 gap-12 items-center relative">
                <div className="text-right pr-8">
                  <span className="inline-block px-3 py-1 text-sm font-semibold bg-purple-200 text-purple-600 rounded-full mb-3">
                    Step 3
                  </span>
                  <h3 className="text-xl font-bold mb-3">View Details & Select</h3>
                  <p className="text-gray-600 mb-4 text-md">
                    Review your personalized internship recommendations, view all details
                    about that internship with one click, and if you like tthen click
                    on apply now button.
                  </p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>✅ One-Click Details</li>
                    <li>✅ Each & Everything</li>
                    <li>✅ Best For Your Career</li>
                  </ul>
                </div>
                <div className="hidden md:block">
                  <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/d64b79fe72-deb5e6169149667d846d.png" alt="Step 3" className="rounded-2xl shadow-lg" />
                </div>
              </div>
            </div>
          </section>

          {/* Right Side (YouTube Video) */}
          <div className="flex justify-center px-3">
            <iframe
              ref={videoRef}
              className="rounded-2xl shadow-lg w-full h-64 md:h-80"
              src="https://www.youtube.com/embed/p3i7jQNBfeg"
              title="YouTube video"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
