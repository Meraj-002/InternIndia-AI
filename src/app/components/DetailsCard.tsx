"use client";
import React, { useEffect } from "react";
import {
    MapPin,
    Users,
    Building2,
    Briefcase,
    FileText,
    GraduationCap,
    X,
} from "lucide-react";
import { Internship } from "@/app/utils/types";

type Props = {
    open: boolean;
    onClose: () => void;
    internship: Internship | null;
};

const DetailsCard: React.FC<Props> = ({ open, onClose, internship }) => {
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden"; // prevent background scroll
        } else {
            document.body.style.overflow = "auto"; // restore scroll
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [open]);

    if (!open || !internship) return null;

    // ✅ Normalize DB values
    const skills = internship.skills
        ? internship.skills.split(",").map((s) => s.trim())
        : [];

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Overlay */}
            <div
                className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                onClick={onClose}
            />
            <div className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-2xl shadow-lg overflow-hidden z-50 flex flex-col">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                >
                    <X size={22} />
                </button>

                <div className="overflow-y-auto px-7 pt-6 pb-4 flex-1">
                    {/* Internship Title */}
                    <div className="px-7 pt-6 pb-4">
                        <h2 className="text-2xl font-bold text-gray-900">
                            {internship.title}
                        </h2>
                    </div>

                    <div className="border-t border-gray-200" />

                    {/* Company Info */}
                    <div className="px-7 pt-6">
                        <div className="flex items-center gap-2 text-gray-900 font-semibold">
                            <span className="h-5 w-5 rounded-md bg-blue-600 grid place-items-center text-white">
                                <Building2 size={14} />
                            </span>
                            <span>Company Information</span>
                        </div>

                        <div className="mt-4 rounded-xl bg-gray-50 p-5">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                                {/* LEFT */}
                                <div className="flex items-start gap-4">
                                    {internship.companyLogo && (
                                        <img
                                            src={internship.companyLogo}
                                            alt={internship.companyName}
                                            className="h-14 w-14 rounded-full bg-white border shadow-sm"
                                        />
                                    )}
                                    <div>
                                        <p className="font-medium text-gray-900">
                                            {internship.companyName}
                                        </p>
                                        <p className="text-sm text-gray-500">{internship.sector}</p>
                                        <p className="mt-1 text-sm text-blue-600">
                                            {internship.noOfOpportunities} opportunities available
                                        </p>
                                    </div>
                                </div>

                                {/* RIGHT */}
                                <div className="flex flex-col gap-3 text-gray-700">
                                    <div className="flex items-center gap-2">
                                        <MapPin size={16} />
                                        <span>
                                            {internship.village}, {internship.state}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MapPin size={16} />
                                        <span>{internship.district}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Users size={16} />
                                        <span>{internship.candidatesApplied} candidates applied</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Position Details */}
                    <div className="px-7 pt-8">
                        <div className="flex items-center gap-2 text-gray-900 font-semibold">
                            <span className="h-5 w-5 rounded-md bg-green-600 grid place-items-center text-white">
                                <Briefcase size={14} />
                            </span>
                            <span>Position Details</span>
                        </div>
                    </div>

                    <div className="px-7 py-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* LEFT SIDE */}
                        <div className="space-y-5">
                            <div>
                                <p className="text-sm text-gray-500">Position ID</p>
                                <p className="font-medium text-gray-900">{internship.id}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Duration</p>
                                <p className="font-medium text-gray-900">{internship.duration}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Stipend</p>
                                <p className="font-medium text-gray-900">{internship.stipend}</p>
                            </div>
                        </div>

                        {/* RIGHT SIDE */}
                        <div className="space-y-5">
                            <div>
                                <p className="text-sm text-gray-500 mb-2">Benefits</p>
                                <div className="flex flex-wrap gap-2">
                                    {internship.benefits.map((benefit: string, index: number) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm"
                                        >
                                            {benefit}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <p className="text-sm text-gray-500 mb-2">Specialization</p>
                                <div className="flex flex-wrap gap-2">
                                    {internship.specialization && (
                                        <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm">
                                            {internship.specialization}
                                        </span>
                                    )}
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Description */}
                    <div className="px-7 pt-2 pb-8">
                        <div className="flex items-center gap-2 text-gray-900 font-semibold mb-3">
                            <span className="h-5 w-5 rounded-md bg-purple-600 grid place-items-center text-white">
                                <FileText size={14} />
                            </span>
                            <span>Description</span>
                        </div>
                        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                            {internship.description}
                        </p>
                    </div>

                    {/* Requirements */}
                    <div className="px-7 pb-8">
                        <div className="flex items-center gap-2 text-gray-900 font-semibold mb-6">
                            <span className="h-5 w-5 rounded-md bg-orange-600 grid place-items-center text-white">
                                <GraduationCap size={14} />
                            </span>
                            <span>Requirements</span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-800">
                            {/* LEFT */}
                            <div className="space-y-5">
                                <div>
                                    <p className="text-sm text-gray-500">Minimum Qualification</p>
                                    <p className="font-medium">{internship.minimumQualification}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Course & Specialization</p>
                                    <p className="font-medium">
                                        {internship.course} - {internship.specialization}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Certifications</p>
                                    <p className="font-medium">{internship.certifications}</p>
                                </div>
                            </div>

                            {/* RIGHT */}
                            <div className="space-y-5">
                                <div>
                                    <p className="text-sm text-gray-500 mb-2">Required Skills</p>
                                    <div className="flex flex-wrap gap-2">
                                        {skills.map((skill, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <p className="text-sm text-gray-500">Special Requirements</p>
                                    <p className="font-medium">
                                        {internship.specialRequirements}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Office Location */}
                    <div className="px-7 pb-10">
                        <div className="flex items-center gap-2 text-gray-900 font-semibold mb-4">
                            <span className="h-5 w-5 rounded-md bg-red-600 grid place-items-center text-white">
                                <MapPin size={14} />
                            </span>
                            <span>Office Location</span>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-5 text-gray-800">
                            <p>{internship.addressLine1}</p>
                            <p>{internship.addressLine2}</p>
                            <p>
                                {internship.village}, {internship.state}
                            </p>
                            <p>{internship.zip}</p>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="border-t border-gray-200 px-7 py-4 flex items-center justify-between">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100"
                    >
                        Close
                    </button>
                    <button
                        onClick={() => window.open("https://www.google.com", "_blank")}
                        className="px-5 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700"
                    >
                        Apply Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DetailsCard;
