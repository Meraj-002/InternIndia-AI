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
    let inserted = 0;
    let updated = 0;

    for (const rec of arr) {
      const row = {
        id: rec.ID, // make sure your internshipTable has "id" column as primary key
        title: rec.title ?? "",
        sector: rec.sector ?? "",
        state: rec.state ?? "",
        district: rec.district ?? "",
        benefits: Array.isArray(rec.benefits)
          ? rec.benefits
          : typeof rec.benefits === "string"
          ? rec.benefits.split(",").map((s) => s.trim())
          : [],
        candidatesApplied: rec.candidatesapplied ?? 0,
        companyLogo: rec.companylogo ?? null,
        companyName: rec.companyname ?? null,
        noOfOpportunities: rec.noofopportunities ?? null,
        description: rec.description ?? null,
        addressLine1: rec.addressline1 ?? null,
        addressLine2: rec.addrssline2 ?? null,
        zip: rec.zip ?? null,
        village: rec.village ?? null,
        minimumQualification: rec.minimumqualification ?? null,
        course: rec.course ?? null,
        specialization: rec.specialization ?? null,
        certifications: rec.certifications ?? null,
        skills: rec.skills ?? null,
        specialRequirements: rec.spclrequirements ?? null,
        stipend: rec.stipend ?? null,
        duration: rec.duration ?? null,
      };

      // Upsert query
      await db
        .insert(internshipTable)
        .values(row)
        .onConflictDoUpdate({
          target: internshipTable.id, // assumes 'id' is primary key
          set: row,
        });

      inserted++;
    }

    console.log(`✅ Upserted ${inserted} rows into InternshipDetails`);
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
