// src/app/api/internships/route.ts
import { NextResponse } from "next/server";
import { db } from "../../../../config/db";                // your existing Drizzle/Neon db export
import { internshipTable } from "../../../../config/schema"; // your schema

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const page = Math.max(1, Number(url.searchParams.get("page") ?? 1));
    const pageSize = Math.min(100, Number(url.searchParams.get("pageSize") ?? 10));
    const offset = (page - 1) * pageSize;

    // simple paginated fetch
    const rows = await db.select().from(internshipTable).limit(pageSize).offset(offset);

    return NextResponse.json({
      data: rows,
      page,
      pageSize,
      hasMore: rows.length === pageSize,
    });
  } catch (err: any) {
    console.error("API /api/internships error:", err);
    return NextResponse.json({ error: String(err?.message ?? err) }, { status: 500 });
  }
}
