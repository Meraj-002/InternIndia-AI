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
              <Search className="text-white w-6 h-4 font-bold pr-2" strokeWidth={3} />   Find My Internship
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
                  "12th Pass / Higher Secondary",
                  "Diploma / Polytechnic",
                  "B.Tech / B.E",
                  "BCA",
                  "BBA",
                  "B.Com",
                  "B.Sc",
                  "B.A",
                  "M.Tech / M.E.",
                  "M.Com",
                  "M.Sc",
                  "M.A",
                  "MCA",
                  "MBA",
                ]}
                value={form.education}
                onChange={(val) => setForm({ ...form, education: val })}
                placeholder="Type or select education"
                error={errors.education}
              />

              <AutocompleteMulti
                label="Skills & Expertise"
                options={[
                  // 🔹 Development & Programming
                  "Web Development",
                  "Mobile App Development",
                  "Frontend Development",
                  "Backend Development",
                  "Full Stack Development",
                  "Software Development",
                  "JavaScript",
                  "TypeScript",
                  "React",
                  "Next.js",
                  "Angular",
                  "Vue.js",
                  "Node.js",
                  "Express.js",
                  "Python",
                  "Django",
                  "Flask",
                  "Java",
                  "Spring Boot",
                  "C",
                  "C++",
                  "C#",
                  "Go",
                  "PHP",
                  "Laravel",
                  "Ruby on Rails",
                  "Kotlin",
                  "Swift",
                  "Objective-C",
                  "Flutter",
                  "React Native",
                  "HTML",
                  "CSS",
                  "Tailwind CSS",
                  "Bootstrap",

                  // 🔹 Data, AI & Cloud
                  "Data Science",
                  "Data Analytics",
                  "Business Analytics",
                  "Artificial Intelligence",
                  "Machine Learning",
                  "Deep Learning",
                  "NLP",
                  "Computer Vision",
                  "Big Data",
                  "Hadoop",
                  "Spark",
                  "SQL",
                  "NoSQL",
                  "MongoDB",
                  "PostgreSQL",
                  "MySQL",
                  "Excel",
                  "Tableau",
                  "Power BI",
                  "Google Analytics",
                  "Cloud Computing",
                  "AWS",
                  "Microsoft Azure",
                  "Google Cloud Platform (GCP)",

                  // 🔹 Cybersecurity & DevOps
                  "Cybersecurity",
                  "Ethical Hacking",
                  "Penetration Testing",
                  "DevOps",
                  "CI/CD",
                  "Docker",
                  "Kubernetes",
                  "Jenkins",
                  "Git",
                  "GitHub",
                  "GitLab",

                  // 🔹 Design & Creative
                  "UI/UX Design",
                  "Wireframing",
                  "Prototyping",
                  "Design Thinking",
                  "Figma",
                  "Adobe XD",
                  "Sketch",
                  "Photoshop",
                  "Illustrator",
                  "Canva",
                  "Graphic Design",
                  "Animation",
                  "3D Design",
                  "Video Editing",

                  // 🔹 Business & Management
                  "Product Management",
                  "Project Management",
                  "Agile",
                  "Scrum",
                  "Jira",
                  "Trello",
                  "Notion",
                  "Asana",
                  "Business Strategy",
                  "Market Research",
                  "Financial Analysis",
                  "Digital Marketing",
                  "SEO",
                  "SEM",
                  "Content Writing",
                  "Copywriting",
                  "Social Media Marketing",
                  "Email Marketing",
                  "Sales",
                  "Negotiation",
                  "Consulting",

                  // 🔹 Soft Skills
                  "Communication",
                  "Leadership",
                  "Problem Solving",
                  "Critical Thinking",
                  "Creativity",
                  "Collaboration",
                  "Time Management",
                  "Adaptability",
                  "Presentation Skills",

                  // 🔹 Misc / Emerging Tech
                  "Blockchain",
                  "Cryptography",
                  "IoT",
                  "Embedded Systems",
                  "Game Development",
                  "Unity",
                  "Unreal Engine",
                  "AR/VR",
                  "Metaverse"
                ]
                }
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
                  "Mumbai",
                  "Pune",
                  "Nagpur",
                  "Maharashtra",
                  "Bengaluru",
                  "Mysuru",
                  "Karnataka",
                  "Hyderabad",
                  "Telangana",
                  "Chennai",
                  "Madurai",
                  "Tamil Nadu",
                  "Kolkata",
                  "West Bengal",
                  "Ahmedabad",
                  "Surat",
                  "Vadodara",
                  "Gujarat",
                  "Jaipur",
                  "Jodhpur",
                  "Rajasthan",
                  "Lucknow",
                  "Kanpur",
                  "Uttar Pradesh",
                  "Noida",
                  "Gurugram",
                  "Haryana",
                  "Chandigarh",
                  "Punjab",
                  "Bhopal",
                  "Indore",
                  "Madhya Pradesh",
                  "Patna",
                  "Bihar",
                  "Ranchi",
                  "Jharkhand",
                  "Raipur",
                  "Chhattisgarh",
                  "Bhubaneswar",
                  "Odisha",
                  "Guwahati",
                  "Assam",
                  "Shillong",
                  "Meghalaya",
                  "Gangtok",
                  "Sikkim",
                  "Aizawl",
                  "Mizoram",
                  "Imphal",
                  "Manipur",
                  "Agartala",
                  "Tripura",
                  "Itanagar",
                  "Arunachal Pradesh",
                  "Kohima",
                  "Nagaland",
                  "Leh",
                  "Jammu",
                  "Srinagar",
                  "Jammu & Kashmir",
                  "Shimla",
                  "Himachal Pradesh",
                  "Dehradun",
                  "Uttarakhand",
                  "Panaji",
                  "Goa",
                  "Thiruvananthapuram",
                  "Kochi",
                  "Kerala",
                  "Port Blair",
                  "Andaman & Nicobar Islands",
                  "Kavaratti",
                  "Lakshadweep",
                  "Daman",
                  "Diu",
                  "Dadra & Nagar Haveli",
                  "Puducherry",
                  "Andhra Pradesh",
                  "Amaravati",
                  "Visakhapatnam",
                  "Work From Home"
                ]
                }
                values={form.location}
                onChange={(val) => setForm({ ...form, location: val })}
                placeholder="Type or select location (up to 3)"
                error={errors.location}
              />

              <AutocompleteMulti
                label="Career Interests"
                options={[
                  "Software Engineering",
                  "Web Development",
                  "Mobile App Development",
                  "Frontend Development",
                  "Backend Development",
                  "Full Stack Development",
                  "Data Science",
                  "Data Analytics",
                  "Business Analytics",
                  "Machine Learning",
                  "Artificial Intelligence",
                  "Cloud Computing",
                  "Cybersecurity",
                  "Blockchain",
                  "DevOps",
                  "Internet of Things (IoT)",
                  "Embedded Systems",
                  "Game Development",
                  "AR/VR Development",
                  "Product Management",
                  "Project Management",
                  "UI/UX Design",
                  "Graphic Design",
                  "Animation & Multimedia",
                  "Research",
                  "Academic Research",
                  "Market Research",
                  "Marketing",
                  "Digital Marketing",
                  "Content Writing",
                  "SEO",
                  "Social Media Management",
                  "Public Relations",
                  "Sales",
                  "Business Development",
                  "Consulting",
                  "Finance",
                  "Investment Banking",
                  "Accounting",
                  "Human Resources (HR)",
                  "Operations Management",
                  "Supply Chain Management",
                  "Entrepreneurship",
                  "Law / Legal",
                  "Policy & Government",
                  "Education & Teaching",
                  "Healthcare Management",
                  "Biotechnology",
                  "Pharmaceuticals",
                  "Mechanical Engineering",
                  "Electrical Engineering",
                  "Civil Engineering",
                  "Electronics Engineering",
                  "Chemical Engineering",
                  "Architecture",
                  "Environmental Science",
                  "Energy & Sustainability",
                  "Hospitality & Tourism",
                  "Event Management",
                  "Journalism",
                  "Mass Communication",
                  "Film & Media",
                  "Photography",
                  "Music & Performing Arts",
                  "Sports Management",
                  "NGO / Social Work",
                  "Psychology",
                  "Other"
                ]
                }
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
