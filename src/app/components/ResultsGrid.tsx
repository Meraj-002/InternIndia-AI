"use client";
import { forwardRef, useState } from "react";
import { Internship } from "@/app/utils/types";
import MatchCard from "./MatchCard";
import DetailsCard from "./DetailsCard";

type ResultsGridProps = {
  items: Array<{ job: Internship; score: number }>;
};

const ResultsGrid = forwardRef<HTMLDivElement, ResultsGridProps>(
  ({ items }, ref) => {
    const [selectedInternship, setSelectedInternship] = useState<Internship | null>(null);
    const [open, setOpen] = useState(false);

    const handleViewDetails = (job: Internship) => {
      setSelectedInternship(job);
      setOpen(true);
    };

    return (
      <section ref={ref} className="max-w-7xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Matches</h2>

        {items.length === 0 ? (
          <p className="text-gray-600">No matches found. Try adjusting your filters.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map(({ job, score }) => (
              <MatchCard
                key={job.id}
                job={job}
                score={score}
                onViewDetails={() => handleViewDetails(job)}
              />
            ))}
          </div>
        )}

        {/* Details Modal */}
        <DetailsCard
          open={open}
          onClose={() => setOpen(false)}
          internship={selectedInternship}
        />
      </section>
    );
  }
);

ResultsGrid.displayName = "ResultsGrid";
export default ResultsGrid;
