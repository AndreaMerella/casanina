export interface BlockedDateRange {
  start: Date;
  end: Date;
}

export function parseICal(icalText: string): Date[] {
  const events: BlockedDateRange[] = [];
  const lines = icalText.split(/\r?\n/);

  let inEvent = false;
  let dtStart: Date | null = null;
  let dtEnd: Date | null = null;

  for (const line of lines) {
    if (line === "BEGIN:VEVENT") {
      inEvent = true;
      dtStart = null;
      dtEnd = null;
    } else if (line === "END:VEVENT") {
      if (inEvent && dtStart && dtEnd) {
        events.push({ start: dtStart, end: dtEnd });
      }
      inEvent = false;
    } else if (inEvent) {
      const startMatch = line.match(
        /^DTSTART(?:;VALUE=DATE)?:(\d{4})(\d{2})(\d{2})/
      );
      const endMatch = line.match(
        /^DTEND(?:;VALUE=DATE)?:(\d{4})(\d{2})(\d{2})/
      );

      if (startMatch) {
        dtStart = new Date(
          +startMatch[1],
          +startMatch[2] - 1,
          +startMatch[3]
        );
      }
      if (endMatch) {
        dtEnd = new Date(+endMatch[1], +endMatch[2] - 1, +endMatch[3]);
      }
    }
  }

  const blockedDates: Date[] = [];
  for (const event of events) {
    const current = new Date(event.start);
    while (current < event.end) {
      blockedDates.push(new Date(current));
      current.setDate(current.getDate() + 1);
    }
  }

  return blockedDates;
}

export async function fetchBlockedDates(icalUrl: string): Promise<Date[]> {
  const response = await fetch(icalUrl, { next: { revalidate: 3600 } });
  const text = await response.text();
  return parseICal(text);
}
