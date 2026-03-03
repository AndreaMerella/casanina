import { NextResponse } from "next/server";
import { fetchBlockedDates } from "@/lib/ical";

export async function GET() {
  const icalUrl = process.env.ICAL_URL;

  if (!icalUrl) {
    return NextResponse.json({ blockedDates: [] });
  }

  try {
    const blockedDates = await fetchBlockedDates(icalUrl);
    return NextResponse.json({
      blockedDates: blockedDates.map((d) => d.toISOString()),
    });
  } catch {
    return NextResponse.json({ blockedDates: [] });
  }
}
