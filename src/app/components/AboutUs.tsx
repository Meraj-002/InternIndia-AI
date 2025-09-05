import { Trophy,Heart,Eye,HelpCircle } from "lucide-react";

export default function AboutUs() {
    return (
        <section className="w-full py-16 px-6 bg-white" id="about">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

                {/* LEFT SIDE */}
                <div>
                    {/* Title */}
                    <h2 className="text-3xl font-bold mb-6">About InternIndia-AI</h2>

                    {/* Paragraphs */}
                    <p className="text-gray-500 mb-4 leading-relaxed">
                        We are building an AI-powered Internship Recommendation Engine for the PM Internship Scheme to help students discover the right opportunities. By analyzing education, skills, interests, and location, our lightweight platform suggests 3–5 personalized internships best suited for each candidate.
                        </p>
                    <p className="text-gray-500 mb-8 leading-relaxed">
                        With a simple, mobile-friendly, and multilingual interface, it ensures accessibility for all, especially first-time digital users. Our solution reduces confusion, saves time, and helps youth make informed choices. It is designed to integrate seamlessly with the existing portal for maximum impact.</p>

                    {/* Info Sections */}
                    <div className="space-y-4">
                        {/* Mission */}
                        <div className="flex items-start gap-3">
                            <div className="p-3 bg-blue-100 rounded-xl"> <HelpCircle className="w-6 h-6 text-blue-500" />
</div>
                            <div>
                                <h4 className="font-semibold">Our Mission</h4>
                                <p className="text-gray-600 text-sm">Help every student find the right internship with AI</p>
                            </div>
                        </div>
                        {/* Vision */}
                        <div className="flex items-start gap-3">
                            <div className="p-3 bg-green-100 rounded-xl"><Eye className="w-6 h-6 text-green-500" /></div>
                            <div>
                                <h4 className="font-semibold">Our Vision</h4>
                                <p className="text-gray-600 text-sm">Make internships easy and fair for all in India</p>
                            </div>
                        </div>
                        {/* Values */}
                        <div className="flex items-start gap-3">
                            <div className="p-3 bg-purple-100 rounded-xl"><Heart className="w-6 h-6 text-violet-500 fill-violet-500" /></div>
                            <div>
                                <h4 className="font-semibold">Our Values</h4>
                                <p className="text-gray-600 text-sm">
                                    Inclusivity, Innovation, and Student-first approach
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="relative w-full">
                    <img
                        src="https://storage.googleapis.com/uxpilot-auth.appspot.com/27c17b8cb4-95cd4c2db005f9b58369.png"
                        alt="Students working"
                        className="rounded-2xl shadow-lg w-full h-[320px] object-cover"
                    />

                    {/* Award Card */}
                    <div className="absolute -bottom-6 -left-6 bg-white shadow-lg rounded-xl px-6 py-4 flex items-center gap-3">
                        <div className="p-3 bg-gradient-to-r from-blue-500 to-green-500 rounded-xl text-lg">
                            <Trophy className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <h4 className="font-semibold">Award Winner</h4>
                            <p className="text-gray-500 text-sm">Best Solution SIH 2025</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>

    )
}