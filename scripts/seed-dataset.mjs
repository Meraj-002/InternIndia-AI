// scripts/seed-dataset.mjs
import fs from "fs";
import path from "path";
import "dotenv/config";
import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import { internshipTable } from "../config/schema.js"; // adjust path

async function main() {
  const filePath = path.join(process.cwd(), "src", "data", "dataset.json");
  if (!fs.existsSync(filePath)) {
    console.error("❌ dataset.json not found at", filePath);
    process.exit(1);
  }

  const raw = fs.readFileSync(filePath, "utf8");
  const arr = JSON.parse(raw);

  if (!Array.isArray(arr) || arr.length === 0) {
    console.error("❌ dataset.json is empty or not an array");
    process.exit(1);
  }

  const pool = new Pool({ connectionString: process.env.DATABASE_URL });
  const db = drizzle(pool);

  try {
    console.log("🗑️ Clearing old data...");
    await db.delete(internshipTable);

    let inserted = 0;
    for (const rec of arr) {
      const row = {
        title: rec.title ?? "",
        sector: rec.Sector ?? rec.sector ?? "",
        state: rec.State ?? rec.state ?? "",
        district: rec.District ?? rec.district ?? "",
        benefits: Array.isArray(rec.Benefits)
          ? rec.Benefits
          : typeof rec.Benefits === "string"
          ? rec.Benefits.split(",").map((s) => s.trim())
          : [],
        candidatesApplied: rec.Candidatesapplied ?? rec.candidatesApplied ?? 0,
        companyLogo: rec.companylogo ?? rec.companyLogo ?? null,
        companyName: rec.companyname ?? rec.companyName ?? null,
        noOfOpportunities: rec.noofopportunities ?? rec.noOfOpportunities ?? null,
        description: rec.Description ?? rec.description ?? null,
        addressLine1: rec.addressline1 ?? rec.addressLine1 ?? null,
        addressLine2: rec.addrssline2 ?? rec.addressLine2 ?? null,
        zip: rec.zip ?? null,
        village: rec.village ?? null,
        minimumQualification:
          rec.MinimumQualification ?? rec.minimumQualification ?? null,
        course: rec.course ?? null,
        specialization: rec.specialization ?? null,
        certifications: rec.certifications ?? null,
        skills: rec.skills ?? null, // keep as string
        specialRequirements: rec.spclrequirements ?? rec.specialRequirements ?? null,
        stipend: rec.stipend ?? null,
        duration: rec.duration ?? null,
      };

      await db.insert(internshipTable).values(row);
      inserted++;
    }

    console.log(`✅ Inserted ${inserted} rows into InternshipDetails`);
  } catch (err) {
    console.error("❌ Error inserting:", err);
  } finally {
    await pool.end();
  }
}

main().catch((e) => {
  console.error("❌ Fatal:", e);
  process.exit(1);
});
