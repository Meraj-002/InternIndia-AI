export default function WhyChoose() {
  return (
    <section className="py-16 bg-gray-50" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Why Choose InternIndia-AI?
        </h2>
        
        {/* Paragraph */}
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Our platform combines cutting-edge AI technology with deep understanding
          of the Indian job market.
        </p>

        {/* Top 4 Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: "🧠",
              color: "bg-blue-100 text-blue-600",
              title: "Smart AI Matching",
              desc: "Our advanced AI analyzes your skills, education, and preferences to find the perfect internship matches.",
            },
            {
              icon: "🌐",
              color: "bg-green-100 text-green-600",
              title: "Multilingual Support",
              desc: "Available in 20+ Indian languages including Hindi, Bengali, Tamil, Telugu, and more.",
            },
            {
              icon: "🏢",
              color: "bg-purple-100 text-purple-600",
              title: "Top Industry Partners",
              desc: "Connected with leading Indian companies across technology, finance, healthcare, and more.",
            },
            {
              icon: "📊",
              color: "bg-orange-100 text-orange-600",
              title: "Personalized Internships",
              desc: "Get personalized top 3-5 internships that perfectly matches your interests",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md p-6 text-left transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out"
            >
              {/* Emoji Background */}
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-xl ${item.color} mb-4`}
              >
                <span className="text-2xl">{item.icon}</span>
              </div>

              <h3 className="text-lg font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom 3 Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: "⏱️",
              color: "bg-pink-100 text-pink-600",
              title: "Real-life Experience",
              desc: "12 months real-life experience in India's top companies",
            },
            {
              icon: "✅",
              color: "bg-teal-100 text-teal-600",
              title: "Govt Benefits",
              desc: "One-time Grant of ₹6000 for incidentals",
            },
            {
              icon: "🤝",
              color: "bg-yellow-100 text-yellow-600",
              title: "Paid Internships",
              desc: "Monthly assistance of ₹4500 by Government of India and ₹500 by Industry",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md p-6 text-left transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out"
            >
              {/* Emoji Background */}
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-xl ${item.color} mb-4`}
              >
                <span className="text-2xl">{item.icon}</span>
              </div>

              <h3 className="text-lg font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
