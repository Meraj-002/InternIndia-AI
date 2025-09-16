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
          src="https://res.cloudinary.com/dfhiyvm2x/image/upload/v1758031348/1758030322652.Screenshot_20250916-191229_ppylsi.jpg"
          alt="Meraj Alam"
          className="w-28 h-28 mx-auto rounded-full object-cover mb-4"
        />
        <h3 className="text-lg font-semibold">Meraj Alam</h3>
        <p className="text-blue-600 font-medium">Team Leader</p>
        <p className="text-sm text-gray-500"> Next.js + TypeScript + Tailwind CSS
        </p>
      </div>

      {/* Member 2 */}
      <div className="text-center">
        <img
          src="https://res.cloudinary.com/dfhiyvm2x/image/upload/v1758031346/WhatsApp_Image_2025-09-16_at_6.51.01_PM_3_dvh4zc.jpg"
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
          src="https://res.cloudinary.com/dfhiyvm2x/image/upload/v1758032949/WhatsApp_Image_2025-09-16_at_6.51.08_PM_nvnnj2.jpg"
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
          src="https://res.cloudinary.com/dfhiyvm2x/image/upload/v1758031347/WhatsApp_Image_2025-09-16_at_6.51.01_PM_rxlswr.jpg"
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
          src="https://res.cloudinary.com/dfhiyvm2x/image/upload/v1758031346/WhatsApp_Image_2025-09-16_at_6.51.01_PM_2_oz6smz.jpg"
          alt="Aiman Nishat"
          className="w-28 h-28 mx-auto rounded-full object-cover mb-4"
        />
        <h3 className="text-lg font-semibold">Aiman Nishat</h3>
        <p className="text-red-600 font-medium">CSE Core</p>
        <p className="text-sm text-gray-500">Deployment+ Backend API</p>
      </div>

      {/* Member 6 */}
      <div className="text-center">
        <img
          src="https://res.cloudinary.com/dfhiyvm2x/image/upload/v1758031347/WhatsApp_Image_2025-09-16_at_6.51.01_PM_1_vqxxup.jpg"
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