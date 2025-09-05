import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-gray-300 py-12" id="footer">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Column 1 - Logo & Socials */}
        <div>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-500 rounded-lg">
              <span className="text-white font-bold">AI</span>
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">InternIndia-AI</h2>
              <p className="text-sm">Smart Internship Matching</p>
            </div>
          </div>

          <p className="mt-4 text-sm leading-relaxed">
            Empowering Indian students to discover their perfect internships 
            through AI-powered matching technology.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3 mt-4">
            <a href="https://www.youtube.com/channel/UCZqVuyZcSBA6oPB9YAm-cYg/videos" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700">
              <Youtube className="w-5 h-5 text-white" />
            </a>
            <a href="https://x.com/MCA21India" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700">
              <Twitter className="w-5 h-5 text-white" />
            </a>
            <a href="https://www.linkedin.com/company/mca21india/" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700">
              <Linkedin className="w-5 h-5 text-white" />
            </a>
            <a href="https://www.instagram.com/mca21india/" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700">
              <Instagram className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-white">Home</a></li>
            <li><a href="#features" className="hover:text-white">Features</a></li>
            <li><a href="#how-it-works" className="hover:text-white">How It Works</a></li>
            <li><a href="#impacts" className="hover:text-white">Impacts</a></li>
            <li><a href="#meetteam" className="hover:text-white">Meet Our Team</a></li>
            <li><a href="#about" className="hover:text-white">About Us</a></li>
          </ul>
        </div>

        {/* Column 3 - Support */}
        <div>
          <h3 className="text-white font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Help Center</a></li>
            <li><a href="#" className="hover:text-white">Contact Support</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            <li><a href="#" className="hover:text-white">Cookie Policy</a></li>
            <li><a href="#" className="hover:text-white">Safety Guidelines</a></li>
          </ul>
        </div>

        {/* Column 4 - Get in Touch */}
        <div>
          <h3 className="text-white font-semibold mb-3">Get in Touch</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-blue-400" />
              pminternship[at]mca.gov.in
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-green-400" />
              1800 11 6090
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-red-400" />
              A Wing, 5th Floor, Shastri Bhawan,  <br /> Dr Rajendra Prasad Rd, <br /> New Delhi-110001
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-400">
       Made with <span className="text-red-500">❤️</span> for Indian students by Team Infinixor.
      </div>
    </footer>
  );
}
