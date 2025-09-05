export default function Impacts() {
    return(

        <section className="w-full bg-gradient-to-r from-blue-500 to-green-400 text-white py-16 px-6" id="impacts">
  <div className="max-w-7xl mx-auto text-center">
    {/* Title */}
    <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact in Numbers</h2>
    <p className="text-lg text-white/90 mb-12">
      Transforming internship discovery for students across India
    </p>

    {/* Top 4 Info Sections */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
      {/* Card 1 */}
      <div className="flex flex-col items-center text-center">
        <div className="bg-white/20 p-4 rounded-xl mb-4">
          <span className="text-4xl">👥</span>
        </div>
        <h3 className="text-2xl font-bold">1,19,000+</h3>
        <p className="text-sm mt-1">Active Internships</p>
        <p className="text-xs text-white/80">Across 500+ companies</p>
      </div>

      {/* Card 2 */}
      <div className="flex flex-col items-center text-center">
        <div className="bg-white/20 p-4 rounded-xl mb-4">
          <span className="text-4xl">🚧</span>
        </div>
        <h3 className="text-2xl font-bold">734+</h3>
        <p className="text-sm mt-1">Districts Covered</p>
        <p className="text-xs text-white/80">Almost all</p>
      </div>

      {/* Card 3 */}
      <div className="flex flex-col items-center text-center">
        <div className="bg-white/20 p-4 rounded-xl mb-4">
          <span className="text-4xl">🏢</span>
        </div>
        <h3 className="text-2xl font-bold">500+</h3>
        <p className="text-sm mt-1">Partner Companies</p>
        <p className="text-xs text-white/80">Top Indian brands</p>
      </div>

      {/* Card 4 */}
      <div className="flex flex-col items-center text-center">
        <div className="bg-white/20 p-4 rounded-xl mb-4">
          <span className="text-4xl">📈</span>
        </div>
        <h3 className="text-2xl font-bold">25</h3>
        <p className="text-sm mt-1">Sectors Available</p>
        <p className="text-xs text-white/80">Student satisfaction</p>
      </div>
    </div>

    {/* Bottom 3 Info Sections */}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
      <div className="text-center">
        <h3 className="text-2xl font-bold">₹5,000</h3>
        <p className="text-sm">Average Monthly Stipend</p>
      </div>
      <div className="text-center">
        <h3 className="text-2xl font-bold">36+</h3>
        <p className="text-sm">States Covered</p>
      </div>
      <div className="text-center">
        <h3 className="text-2xl font-bold">20+</h3>
        <p className="text-sm">Indian Languages Supported</p>
      </div>
    </div>
  </div>
</section>


    );
}