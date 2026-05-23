"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";

const WA_LINK = "https://wa.me/393480048427?text=Hi%2C%20I%20have%20a%20question%20about%20Casa%20Nina%20Carignano";

const QA: { keywords: string[]; answer: string }[] = [
  {
    keywords: ["hello", "hi", "ciao", "hey", "buongiorno", "hola", "bonjour", "salve"],
    answer: "Ciao! I'm Nina, your virtual host at Casa Nina Carignano. I can help with check-in, local tips, restaurants, transport and more. What would you like to know?",
  },
  {
    keywords: ["check-in", "checkin", "arrive", "arrival", "key", "access", "enter", "door", "lock"],
    answer: "Check-in is from 15:00. Before arrival you'll receive a secure smart lock code via email: no key handover, no waiting. Just walk in at your convenience. Early check-in may be possible on request.",
  },
  {
    keywords: ["check-out", "checkout", "leave", "departure", "when do i leave", "late checkout"],
    answer: "Check-out is by 10:00. Just close the door (it locks automatically) and you're done. Late check-out may be available on request: message us in advance.",
  },
  {
    keywords: ["wifi", "internet", "password", "wi-fi", "connection", "speed"],
    answer: "1 Gbps fibre Wi-Fi is included: one of the fastest connections available. The network name and password are on the welcome card inside the apartment.",
  },
  {
    keywords: ["parking", "car", "park", "parcheggio", "garage"],
    answer: "The host provides a free ZTL parking permit for the Carignano neighbourhood: no street parking fees. You'll receive it with your check-in info. There's also a covered garage nearby at Piazza Brignole.",
  },
  {
    keywords: ["ebike", "e-bike", "bike", "bicycle", "cycle", "cycling"],
    answer: "Two e-bikes are available for guests: helmets and locks included! Request them when booking. You can reach Boccadasse in 10 min along the flat Corso Italia seafront, or explore Nervi to the east.",
  },
  {
    keywords: ["boccadasse"],
    answer: "Boccadasse is a magical little fishing village frozen in time, just 2 km from the apartment. Walk 25 min along Corso Italia or take bus 31. Go at sunset: the coloured houses reflect on the water. Get a gelato at Bar Gelateria Davide, a local institution since 1967.",
  },
  {
    keywords: ["porto antico", "old port", "acquario", "aquarium", "port"],
    answer: "Porto Antico is the vibrant heart of Genova: about 2 km away, 10 min by bus or 25 min walk through the caruggi. The Aquarium of Genova is the largest in Italy and excellent for families. The Bigo crane offers a spectacular panoramic lift. Piazza Caricamento nearby has great aperitivo bars.",
  },
  {
    keywords: ["corso italia", "promenade", "seafront", "lungomare"],
    answer: "Corso Italia is Genova's elegant 5 km seafront promenade, just 10 min walk from the apartment. Perfect for morning runs, sunset strolls, or cycling with the e-bikes. The Bagni Vittoria beach club is a local favourite in summer.",
  },
  {
    keywords: ["caruggi", "old town", "historic", "centre", "center", "medieval", "alleys", "centro storico"],
    answer: "The caruggi: Genova's UNESCO-listed medieval labyrinth: is one of the largest and most intact historic centres in Europe. Take bus 35 (5 min) and get gloriously lost. Via San Luca, Via degli Orefici, and Piazza Matteotti are unmissable. Go off the tourist trail into Via del Campo, immortalised by De André.",
  },
  {
    keywords: ["palazzo reale", "palazzo ducale", "rolli", "museum", "gallery", "art", "churches", "cattedrale"],
    answer: "Genova has extraordinary art and architecture. Don't miss: Palazzo Reale (royal palace, stunning frescoes), Palazzo Ducale (great exhibitions), the Rolli palaces (UNESCO heritage), and Cattedrale di San Lorenzo. The Galata Museo del Mare is the best maritime museum in the Mediterranean.",
  },
  {
    keywords: ["castelletto", "spianata", "view", "panorama", "viewpoint", "belvedere"],
    answer: "The Spianata di Castelletto is the finest viewpoint in Genova: free and magical at dusk. Take the historic Ascensore di Castelletto (lift) from Via Bixio, just a 10 min walk from the apartment. Highly recommended at golden hour.",
  },
  {
    keywords: ["cinque terre", "portofino", "nervi", "day trip", "camogli", "riviera"],
    answer: "Casa Nina is perfectly placed for day trips! Cinque Terre: 1h by train from Brignole. Portofino: 40 min by boat from Porto Antico or 1h by bus. Camogli (beautiful fishing village): 30 min by train. Nervi (seaside promenade + cliff walks): 20 min by train. All spectacular.",
  },
  {
    keywords: ["train", "station", "brignole", "principe", "airport", "taxi", "bus station", "transport"],
    answer: "Brignole station is 1.5 km away: 20 min walk or 5 min by bus. Principe station is 3 km away. Cristoforo Colombo Airport (GOA) is 10 km: €25 by taxi or take the AMT Volabus directly to the city centre. Trains to Milan, Turin and Rome depart frequently from both stations.",
  },
  {
    keywords: ["beach", "sea", "swim", "swimming", "sunbathe", "lido"],
    answer: "The nearest beach is along Corso Italia, 10–15 min walk: several lidos with sun beds and bars. Boccadasse has a charming pebble cove. Further east, Nervi has beautiful rocky walks and crystal-clear water. In summer, Bagni Vittoria on Corso Italia is a superb beach club.",
  },
  {
    keywords: ["restaurant", "eat", "food", "dinner", "lunch", "trattoria", "ristorante", "osteria", "where to eat"],
    answer: "Top picks: **Da Maria** (caruggi, iconic cheap trattoria, cash only), **Il Marin** (Porto Antico, seafood with harbour views), **Trattoria Rosmarino** (Carignano, excellent local cooking, very near the apartment), **Osteria del Vico Palla** (historic centre, traditional Genovese), **Sa Pesta** (farinata specialists, unmissable).",
  },
  {
    keywords: ["pesto", "focaccia", "farinata", "typical", "local food", "genovese food", "trofie", "pansoti"],
    answer: "Genova is the birthplace of pesto DOP! Must-eats: focaccia genovese (eat it warm for breakfast: try Panificio Mario), farinata (crispy chickpea flatbread, best at Sa Pesta), trofie al pesto, pansoti con salsa di noci (pasta in walnut cream sauce), acciughe (anchovies), and local Pigato white wine.",
  },
  {
    keywords: ["aperitivo", "aperitif", "drinks", "bar", "wine", "cocktail", "nightlife"],
    answer: "For aperitivo: Piazza delle Erbe in the caruggi gets lively from 18:00: dozens of bars spill onto the square. Enoteca Sola (near Carignano) is excellent for Ligurian wines. Porto Antico has great bars with water views. In summer, the rooftop terrace of Hotel Bristol has a stunning panorama.",
  },
  {
    keywords: ["supermarket", "grocery", "shop", "market", "supermercato"],
    answer: "Carrefour Express: 5 min walk (open until 21:30). Coop supermarket: 10 min walk, better selection. Tuesday morning market in Via Carignano. For specialties: cured meats, cheese, pesto: try the historic Mercato Orientale, 15 min walk.",
  },
  {
    keywords: ["bus", "transport", "public", "metro", "amt", "ticket", "how to get"],
    answer: "Bus stops are 2 min walk. Lines 31, 35, and 41 connect to the centre in 5–10 min. Tickets: €1.60 single (90 min validity), €4.50 day pass: buy at any tabacchi or use the AMT app. Genova also has a small metro (1 line) and several historic funiculars and lifts worth riding.",
  },
  {
    keywords: ["events", "what's on", "concert", "festival", "tonight", "this week", "live", "show", "happening"],
    answer: "For current events in Genova: check **visitgenoa.it** (official tourism), **eventbrite.it**, and **comune.genova.it/turismo**. Genova Film Festival runs in October. Estate Genovese (summer open-air events) runs June–September along Porto Antico. Local neighbourhood festivals (sagre) happen throughout summer.",
  },
  {
    keywords: ["cancel", "refund", "cancellation", "change dates"],
    answer: "Full refund if cancelled 7+ days before check-in. 50% refund for cancellations 3–7 days before. No refund within 72 hours of check-in. Contact us directly: we always try to be flexible for genuine situations.",
  },
  {
    keywords: ["price", "cost", "rate", "night", "how much", "pricing", "minimum stay"],
    answer: "Prices vary by season: check live availability and best rates by clicking 'Book Now' at the top. Minimum stay is 2 nights. Booking direct guarantees the best rate with no OTA commission added.",
  },
  {
    keywords: ["whatsapp", "call", "phone", "contact", "speak", "talk", "message", "human", "person", "real", "someone", "help"],
    answer: "WHATSAPP",
  },
  {
    keywords: ["pet", "dog", "cat", "animal"],
    answer: "Unfortunately, pets are not allowed at Casa Nina. Sorry about that!",
  },
  {
    keywords: ["smoke", "smoking"],
    answer: "Casa Nina is strictly non-smoking indoors and on-premises. Thank you for respecting this.",
  },
  {
    keywords: ["guest", "people", "capacity", "max", "how many", "family"],
    answer: "The apartment sleeps up to 4 guests comfortably: perfect for couples, families with children, or a small group of friends.",
  },
  {
    keywords: ["amenities", "kitchen", "washing", "laundry", "ac", "air conditioning", "tv", "nespresso"],
    answer: "Full kitchen with induction hob, oven, Nespresso machine and all equipment. Air conditioning. Smart TV. Washing machine. Premium furnishings throughout. Smart lock entry. Everything you need for a comfortable stay.",
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

const SUGGESTIONS = [
  "What to do in Genova?",
  "Best restaurants nearby?",
  "How do I check in?",
  "Day trips from Genova?",
];

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { from: "bot", text: "Ciao! I'm Nina, your virtual host. Ask me about the apartment, Genova, restaurants, transport: anything for your stay!" },
  ]);
  const [input, setInput] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  function send(text?: string) {
    const txt = (text ?? input).trim();
    if (!txt) return;
    setShowSuggestions(false);
    const raw = getAnswer(txt);
    const isWA = raw === "WHATSAPP";
    const isUnknown = raw === "UNKNOWN";
    const botText = isUnknown
      ? "I'm not sure about that one: but our host Arcangelo is always happy to help directly!"
      : isWA
      ? "Of course! Tap below to message us on WhatsApp and we'll get back to you quickly."
      : raw;
    setMessages((m) => [
      ...m,
      { from: "user", text: txt },
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
        <div className="fixed bottom-44 right-5 z-50 w-80 bg-background border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden max-h-[70vh]">
          {/* Header */}
          <div className="bg-foreground text-background px-4 py-3 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-sm font-bold" style={{ color: "#0c1e2a" }}>N</div>
              <div>
                <p className="text-sm font-semibold">Nina</p>
                <p className="text-xs opacity-50">Casa Nina · virtual host</p>
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

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((m, i) => (
              <div key={i} className={`flex flex-col ${m.from === "user" ? "items-end" : "items-start"}`}>
                <div className={`max-w-[88%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
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

            {/* Quick suggestions */}
            {showSuggestions && (
              <div className="flex flex-wrap gap-1.5 pt-1">
                {SUGGESTIONS.map(s => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    className="text-xs bg-card border border-border text-muted hover:text-foreground hover:border-accent rounded-xl px-2.5 py-1.5 transition-colors"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="border-t border-border p-3 flex gap-2 shrink-0">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Ask anything about Genova..."
              className="flex-1 text-sm bg-card rounded-xl px-3 py-2 outline-none border border-border focus:border-accent text-foreground placeholder:text-muted/50 transition-colors"
            />
            <button
              onClick={() => send()}
              className="w-9 h-9 rounded-xl bg-foreground text-background flex items-center justify-center hover:opacity-90 transition-opacity shrink-0"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
