"use client";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-2">
          <div className="w-9 h-9 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
          <div>
            <h1 className="text-lg font-bold text-gray-800">InternIndia-AI</h1>
            <p className="text-xs text-gray-500 -mt-1">Smart Internship Matching</p>
          </div>
        </div>
        <div className="flex items-center space-x-6 ml-auto">
          <nav className="hidden md:flex space-x-8 text-gray-700 font-medium pr-10">
            <a href="#how-it-works" className="hover:text-blue-600 hover:scale-110 transform transition duration-200">How It Works</a>
            <a href="#features" className="hover:text-blue-600 hover:scale-110 transform transition duration-200">Features</a>
            <a href="#about" className="hover:text-blue-600 hover:scale-110 transform transition duration-200">About</a>
            <a href="#footer" className="hover:text-blue-600 hover:scale-110 transform transition duration-200">Contact</a>
          </nav>
          <div className="flex flex-col items-end space-y-1">
            <span className="text-xs text-gray-500">Choose Your Language</span>
            <select className="border border-gray-300 rounded-md px-2 py-1 text-sm">
              <option>GB English</option>
              <option>हिन्दी</option>
              <option>বাংলা</option>
            </select>
          </div>
        </div>

      </div>
    </header>
  );
}
