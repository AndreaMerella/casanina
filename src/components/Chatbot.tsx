"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";

const WA_LINK = "https://wa.me/393480048427?text=Hi%2C%20I%20have%20a%20question%20about%20Casa%20Nina%20Carignano";

const QA: { keywords: string[]; answer: string }[] = [
  {
    keywords: ["what to do", "things to do", "today", "activities", "visit", "see", "where to go", "tips", "recommend", "suggestion", "explore", "sightseeing", "must see", "must-see", "genova", "genoa"],
    answer: "Top picks for Genova: walk the caruggi (medieval alleys), visit Porto Antico and the Aquarium, stroll Corso Italia at sunset, and end with a glass of Pigato wine in Boccadasse. Don't miss Palazzo Reale or the view from Castelletto. And eat focaccia for breakfast like a true Genovese!",
  },
  {
    keywords: ["check-in", "checkin", "arrive", "arrival", "key", "access", "enter", "door"],
    answer: "Check-in is from 15:00. You'll receive a smart lock code by email before arrival. No key handover needed — arrive whenever you like after 15:00.",
  },
  {
    keywords: ["check-out", "checkout", "leave", "departure", "when do i leave"],
    answer: "Check-out is by 10:00. Just leave the door closed — it locks automatically. No need to return any keys.",
  },
  {
    keywords: ["wifi", "internet", "password", "wi-fi", "connection"],
    answer: "Fast fibre Wi-Fi is included. You'll find the network name and password on the welcome card inside the apartment.",
  },
  {
    keywords: ["parking", "car", "park", "parcheggio"],
    answer: "The host provides a free parking permit for the neighbourhood. You'll receive it with your check-in details — no need to pay for street parking.",
  },
  {
    keywords: ["ebike", "e-bike", "bike", "bicycle", "cycle", "cycling"],
    answer: "We have 2 e-bikes available for guests! Helmets and locks included. Just contact us to arrange. You can reach Boccadasse in 10 minutes along Corso Italia.",
  },
  {
    keywords: ["boccadasse"],
    answer: "Boccadasse is a gorgeous little fishing village 2 km away. Walk there in 25 min along Corso Italia, or take bus 31. Beautiful at sunset — grab a gelato and watch the boats.",
  },
  {
    keywords: ["porto antico", "old port", "acquario", "aquarium", "port"],
    answer: "Porto Antico is about 2 km away — 10 min by bus or 25 min walk through the historic centre. The Aquarium of Genova is right there and is the largest in Italy.",
  },
  {
    keywords: ["corso italia", "promenade", "seafront", "sea walk"],
    answer: "Corso Italia is Genova's gorgeous 5 km seafront promenade, just 10 min walk from the apartment. Perfect for morning runs, sunset walks, or cycling with the e-bikes.",
  },
  {
    keywords: ["caruggi", "old town", "historic", "centre", "center", "medieval", "alleys"],
    answer: "The caruggi — Genova's medieval maze of alleyways — is one of the largest preserved historic centres in Europe. Take the bus 5 min from the apartment and get lost in there. Absolutely stunning.",
  },
  {
    keywords: ["train", "station", "brignole", "principe", "airport", "taxi"],
    answer: "Brignole station is 1.5 km away (20 min walk or 5 min by bus). Principe station is 3 km away. Cristoforo Colombo Airport is 10 km — about €25 by taxi or take the AMT Volabus.",
  },
  {
    keywords: ["beach", "sea", "swim", "swimming", "sunbathe"],
    answer: "The nearest beach is along Corso Italia, about 10-15 min walk. Boccadasse has a lovely little pebble cove. Further east, Nervi has beautiful rocky walks and coves accessible by train.",
  },
  {
    keywords: ["restaurant", "eat", "food", "dinner", "lunch", "trattoria", "ristorante"],
    answer: "For pesto try Trattoria da Maria in the caruggi — iconic and cheap. For seafood, Boccadasse has wonderful spots by the water. For a special dinner, Il Marin at Porto Antico has stunning views.",
  },
  {
    keywords: ["pesto", "focaccia", "farinata", "typical", "local food", "genovese"],
    answer: "Genova is the birthplace of pesto! Must-eats: focaccia genovese (eat it for breakfast!), farinata (chickpea flatbread), trofie al pesto, pansoti con salsa di noci. Find all of these in the caruggi.",
  },
  {
    keywords: ["supermarket", "grocery", "shop", "market"],
    answer: "There's a Carrefour Express 5 min walk from the apartment, and a larger Coop supermarket 10 min away. A small market happens on Tuesday mornings nearby.",
  },
  {
    keywords: ["bus", "transport", "public", "metro", "amt", "tram"],
    answer: "Bus stops are 2 min walk away. Lines 31, 35 and 41 connect to the centre. Buy tickets at any tabacchi or use the AMT app. A single ticket costs €1.60.",
  },
  {
    keywords: ["cancel", "refund", "cancellation", "change dates"],
    answer: "Full refund if cancelled 7+ days before check-in. 50% refund 3 to 7 days before. No refund within 72 hours of check-in.",
  },
  {
    keywords: ["price", "cost", "rate", "night", "how much", "pricing"],
    answer: "Check live availability and pricing directly on our booking page — just click 'Book Now' at the top. Best rate guaranteed by booking direct.",
  },
  {
    keywords: ["whatsapp", "call", "phone", "contact", "speak", "talk", "message", "chat", "human", "person", "real", "someone"],
    answer: "WHATSAPP",
  },
  {
    keywords: ["pet", "dog", "cat", "animal"],
    answer: "Sorry, no pets at Casa Nina.",
  },
  {
    keywords: ["smoke", "smoking"],
    answer: "Casa Nina is strictly non-smoking. No smoking anywhere on the premises.",
  },
  {
    keywords: ["guest", "people", "capacity", "max", "how many"],
    answer: "The apartment sleeps up to 4 guests comfortably.",
  },
  {
    keywords: ["hello", "hi", "ciao", "hey", "buongiorno", "hola", "bonjour"],
    answer: "Ciao! I'm Nina, your virtual host at Casa Nina Carignano. Ask me anything about the apartment, check-in, or what to do in Genova. Or tap the WhatsApp button to reach us directly!",
  },
];

function getAnswer(input: string): string {
  const lower = input.toLowerCase();
  for (const { keywords, answer } of QA) {
    if (keywords.some((k) => lower.includes(k))) return answer;
  }
  return "UNKNOWN";
}

type Message = { from: "user" | "bot"; text: string; isWA?: boolean };

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { from: "bot", text: "Ciao! I'm Nina. Ask me about the apartment, Genova, or anything else about your stay." },
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  function send() {
    const text = input.trim();
    if (!text) return;
    const raw = getAnswer(text);
    const isWA = raw === "WHATSAPP";
    const isUnknown = raw === "UNKNOWN";
    const botText = isUnknown
      ? "I'm not sure, but you can ask us directly on WhatsApp!"
      : isWA
      ? "Of course! Tap below to message us on WhatsApp and we'll reply as soon as possible."
      : raw;
    setMessages((m) => [
      ...m,
      { from: "user", text },
      { from: "bot", text: botText, isWA: isWA || isUnknown },
    ]);
    setInput("");
  }

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-24 right-5 z-50 w-14 h-14 rounded-full bg-foreground text-background shadow-lg flex items-center justify-center hover:opacity-90 transition-opacity"
        aria-label="Chat with Nina"
      >
        {open ? <X className="w-5 h-5" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {open && (
        <div className="fixed bottom-44 right-5 z-50 w-80 bg-background border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          <div className="bg-foreground text-background px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-sm font-bold text-white">N</div>
              <div>
                <p className="text-sm font-semibold">Nina</p>
                <p className="text-xs opacity-60">Casa Nina virtual host</p>
              </div>
            </div>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs bg-green-500 hover:bg-green-400 text-white px-3 py-1.5 rounded-lg font-medium transition-colors"
            >
              WhatsApp
            </a>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-72">
            {messages.map((m, i) => (
              <div key={i} className={`flex flex-col ${m.from === "user" ? "items-end" : "items-start"}`}>
                <div className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                  m.from === "user"
                    ? "bg-foreground text-background rounded-br-sm"
                    : "bg-card text-foreground rounded-bl-sm"
                }`}>
                  {m.text}
                </div>
                {m.isWA && (
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white text-xs font-medium px-4 py-2 rounded-xl transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    Message us on WhatsApp
                  </a>
                )}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          <div className="border-t border-border p-3 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Ask me anything..."
              className="flex-1 text-sm bg-card rounded-xl px-3 py-2 outline-none border border-border focus:border-accent"
            />
            <button onClick={send} className="w-9 h-9 rounded-xl bg-foreground text-background flex items-center justify-center hover:opacity-90 transition-opacity">
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
