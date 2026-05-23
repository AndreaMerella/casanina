"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";

const QA: { keywords: string[]; answer: string }[] = [
  {
    keywords: ["check-in", "checkin", "arrive", "arrival", "key", "access"],
    answer: "Check-in is from 15:00. You'll receive a smart lock code by email — no key handover needed. You can arrive at any time after 15:00.",
  },
  {
    keywords: ["check-out", "checkout", "leave", "departure"],
    answer: "Check-out is by 10:00. Just leave the key code as is — the door locks automatically.",
  },
  {
    keywords: ["wifi", "internet", "password", "wi-fi"],
    answer: "The apartment has fast fibre Wi-Fi. You'll find the network name and password on the welcome card inside the apartment.",
  },
  {
    keywords: ["parking", "car", "park"],
    answer: "The host provides a free parking permit for the area. You'll receive it with your check-in details.",
  },
  {
    keywords: ["ebike", "e-bike", "bike", "bicycle", "cycle"],
    answer: "We offer 2 e-bikes for guests! Just contact us at casaninacarignano@gmail.com to include them in your stay.",
  },
  {
    keywords: ["boccadasse"],
    answer: "Boccadasse is a beautiful little fishing village about 2 km from the apartment — a 25 min walk along Corso Italia or a short bus ride. Perfect for a sunset stroll.",
  },
  {
    keywords: ["porto antico", "old port", "acquario", "aquarium"],
    answer: "The Porto Antico (old port) and Acquario di Genova are about 2 km away — 10 min by bus or a 25 min walk through the historic centre.",
  },
  {
    keywords: ["corso italia"],
    answer: "Corso Italia is Genova's beautiful seafront promenade, just 10 min walk from the apartment. Great for morning runs or evening walks.",
  },
  {
    keywords: ["train", "station", "brignole", "principe"],
    answer: "Brignole station is about 1.5 km away (20 min walk or 5 min by bus). Principe station is about 3 km away.",
  },
  {
    keywords: ["beach", "sea", "swim", "swimming"],
    answer: "The nearest beach is along Corso Italia, about 10-15 min walk. Boccadasse also has a small pebble beach, 25 min walk away.",
  },
  {
    keywords: ["restaurant", "eat", "food", "dinner", "lunch"],
    answer: "Carignano has great local trattorias. For pesto try Trattoria da Maria in the caruggi (historic centre). For seafood, Boccadasse has excellent spots right by the water.",
  },
  {
    keywords: ["supermarket", "grocery", "shop", "shopping"],
    answer: "There's a Carrefour Express 5 min walk from the apartment, and a larger Coop supermarket 10 min walk away.",
  },
  {
    keywords: ["pesto", "food", "typical", "local"],
    answer: "Genova is the home of pesto! Must-tries: focaccia genovese, farinata (chickpea flatbread), trofie al pesto, and pansoti pasta. You'll find all of these in the caruggi.",
  },
  {
    keywords: ["bus", "transport", "public", "metro"],
    answer: "Bus stops are 2 min walk from the apartment. Lines 31, 35 and 41 connect to the centre. Buy tickets at any tabacchi (tobacconist) or use the AMT app.",
  },
  {
    keywords: ["cancel", "refund", "cancellation"],
    answer: "Full refund if cancelled 7+ days before check-in. 50% refund 3-7 days before. No refund within 72 hours of check-in.",
  },
  {
    keywords: ["price", "cost", "rate", "night", "how much"],
    answer: "You can check live availability and pricing directly on our booking page. Click 'Book Now' above!",
  },
  {
    keywords: ["pet", "dog", "cat", "animal"],
    answer: "Sorry, we don't allow pets at Casa Nina.",
  },
  {
    keywords: ["smoke", "smoking"],
    answer: "Casa Nina is a non-smoking property. No smoking anywhere on the premises.",
  },
  {
    keywords: ["guest", "people", "capacity", "max"],
    answer: "The apartment accommodates up to 4 guests.",
  },
  {
    keywords: ["hello", "hi", "ciao", "hey", "buongiorno"],
    answer: "Ciao! Welcome to Casa Nina. I can help with check-in, directions, local tips, amenities and more. What would you like to know?",
  },
];

function getAnswer(input: string): string {
  const lower = input.toLowerCase();
  for (const { keywords, answer } of QA) {
    if (keywords.some((k) => lower.includes(k))) return answer;
  }
  return "I'm not sure about that one! For anything specific, just email us at casaninacarignano@gmail.com and we'll get back to you quickly.";
}

type Message = { from: "user" | "bot"; text: string };

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { from: "bot", text: "Ciao! I'm Nina, your virtual host. Ask me anything about the apartment or Genova." },
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function send() {
    const text = input.trim();
    if (!text) return;
    const userMsg: Message = { from: "user", text };
    const botMsg: Message = { from: "bot", text: getAnswer(text) };
    setMessages((m) => [...m, userMsg, botMsg]);
    setInput("");
  }

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-24 right-5 z-50 w-14 h-14 rounded-full bg-foreground text-background shadow-lg flex items-center justify-center hover:opacity-90 transition-opacity"
        aria-label="Chat with Nina"
      >
        {open ? <X className="w-5 h-5" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {/* Chat window */}
      {open && (
        <div className="fixed bottom-44 right-5 z-50 w-80 bg-background border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          <div className="bg-foreground text-background px-4 py-3 flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-sm font-bold text-white">N</div>
            <div>
              <p className="text-sm font-semibold">Nina</p>
              <p className="text-xs opacity-60">Casa Nina virtual host</p>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-72">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                  m.from === "user"
                    ? "bg-foreground text-background rounded-br-sm"
                    : "bg-card text-foreground rounded-bl-sm"
                }`}>
                  {m.text}
                </div>
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
