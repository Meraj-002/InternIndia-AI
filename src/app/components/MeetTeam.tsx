export default function MeetTeam(){
    return(
        <section className="w-full bg-white py-16 px-6" id="meetteam">
  <div className="max-w-7xl mx-auto text-center">
    {/* Title */}
    <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
    <p className="text-lg text-gray-600 mb-12">
      Passionate individuals working to transform internship discovery
    </p>

    {/* Team Members */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
      {/* Member 1 */}
      <div className="text-center">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="Meraj Alam"
          className="w-28 h-28 mx-auto rounded-full object-cover mb-4"
        />
        <h3 className="text-lg font-semibold">Meraj Alam</h3>
        <p className="text-blue-600 font-medium">Team Leader</p>
        <p className="text-sm text-gray-500"> Next.js + Tailwind CSS
        </p>
      </div>

      {/* Member 2 */}
      <div className="text-center">
        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="Fauzia Nishat"
          className="w-28 h-28 mx-auto rounded-full object-cover mb-4"
        />
        <h3 className="text-lg font-semibold">Fauzia Nishat</h3>
        <p className="text-green-600 font-medium">CSE Core</p>
        <p className="text-sm text-gray-500">Database + UI</p>
      </div>

      {/* Member 3 */}
      <div className="text-center">
        <img
          src="https://randomuser.me/api/portraits/men/12.jpg"
          alt="Sameer Sadar"
          className="w-28 h-28 mx-auto rounded-full object-cover mb-4"
        />
        <h3 className="text-lg font-semibold">Sameer Sadar</h3>
        <p className="text-purple-600 font-medium">CSE - AI/ML</p>
        <p className="text-sm text-gray-500">AI Model</p>
      </div>

      {/* Member 4 */}
      <div className="text-center">
        <img
          src="https://randomuser.me/api/portraits/women/65.jpg"
          alt="Md Hashim"
          className="w-28 h-28 mx-auto rounded-full object-cover mb-4"
        />
        <h3 className="text-lg font-semibold">Md Hashim</h3>
        <p className="text-orange-600 font-medium">CSE - AI/ML</p>
        <p className="text-sm text-gray-500">PPT Expert</p>
      </div>

      {/* Member 5 */}
      <div className="text-center">
        <img
          src="https://randomuser.me/api/portraits/men/67.jpg"
          alt="Aiman Nishat"
          className="w-28 h-28 mx-auto rounded-full object-cover mb-4"
        />
        <h3 className="text-lg font-semibold">Aiman Nishat</h3>
        <p className="text-red-600 font-medium">CSE Core</p>
        <p className="text-sm text-gray-500">Project Deployment</p>
      </div>

      {/* Member 6 */}
      <div className="text-center">
        <img
          src="https://randomuser.me/api/portraits/women/72.jpg"
          alt="Sabik Azmi"
          className="w-28 h-28 mx-auto rounded-full object-cover mb-4"
        />
        <h3 className="text-lg font-semibold">Sabik Azmi</h3>
        <p className="text-pink-600 font-medium">CSE - Data Science</p>
        <p className="text-sm text-gray-500">Idea + Presentation</p>
      </div>
    </div>
  </div>
</section>

    );
}