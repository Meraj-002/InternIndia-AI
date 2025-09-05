import { pgTable, serial, text, integer } from "drizzle-orm/pg-core";

export const internshipTable = pgTable("InternshipDetails", {
  id: serial("ID").primaryKey(),

  title: text("title").notNull(),
  sector: text("sector").notNull(),
  state: text("state").notNull(),
  district: text("district").notNull(),

  benefits: text("benefits").array(), // JSON/text array
  candidatesApplied: integer("candidatesapplied").notNull(),

  companyLogo: text("companylogo"),
  companyName: text("companyname"),
  noOfOpportunities: integer("noofopportunities"),

  description: text("description"),
  addressLine1: text("addressline1"),
  addressLine2: text("addrssline2"),
  zip: integer("zip"),
  village: text("village"),

  minimumQualification: text("minimumqualification"),
  course: text("course"),
  specialization: text("specialization"),
  certifications: text("certifications"),

  skills: text("skills"), // JSON/text array

  specialRequirements: text("spclrequirements"),
  stipend: text("stipend"),
  duration: text("duration"),
});
