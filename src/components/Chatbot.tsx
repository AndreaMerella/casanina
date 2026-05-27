"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";

const WA_LINK = "https://wa.me/393480048427?text=Hi%2C%20I%20have%20a%20question%20about%20Casa%20Nina%20Carignano";

const QA: { keywords: string[]; answer: string }[] = [
  {
    keywords: ["hello", "hi", "ciao", "hey", "buongiorno", "hola", "bonjour", "salve", "start", "begin"],
    answer: "Ciao! I'm Nina, your virtual host at Casa Nina Carignano. I can help with check-in, local tips, restaurants, transport, direct booking perks and more. What would you like to know?",
  },
  {
    keywords: ["check in", "checkin", "check-in", "arrive", "arrival", "key", "access", "enter", "door", "lock", "smart lock", "code", "how do i get in", "how to get in"],
    answer: "Check-in is from 15:00. You'll receive a personal smart lock code via email before arrival — no key handover, no waiting, no reception desk. Just walk straight in at your convenience. Need to arrive early? Ask us — we're flexible.",
  },
  {
    keywords: ["check out", "checkout", "check-out", "leave", "departure", "when do i leave", "late checkout", "late check out"],
    answer: "Check-out is by 10:00. Simply close the door (it locks automatically) and you're done — no formalities. Late check-out until 13:00 is often available if the calendar allows. Just message us the evening before.",
  },
  {
    keywords: ["wifi", "internet", "password", "wi-fi", "connection", "speed", "network"],
    answer: "1 Gbps fibre Wi-Fi is included — one of the fastest residential connections in Genova. The network name and password are on the welcome card inside the apartment.",
  },
  {
    keywords: ["parking", "car", "park", "parcheggio", "garage", "ztl", "zone", "permit", "vignette"],
    answer: "We provide a free ZTL parking permit for the Carignano neighbourhood — no fees, no fines. You'll receive it with your check-in details. There's also a covered garage at Piazza Brignole, 5 min away.",
  },
  {
    keywords: ["price", "cost", "rate", "night", "how much", "pricing", "minimum stay", "fee", "total", "charge", "direct", "best rate", "discount", "cheaper", "save"],
    answer: "Booking directly on casaninacarignano.com guarantees you the lowest rate — no Airbnb or Booking.com commission added (typically 15–20% extra). You also get: free parking permit, priority early check-in requests, and direct contact with Arcangelo. Use code NINA10 for an extra 10% off your first direct booking.",
  },
  {
    keywords: ["promo", "code", "coupon", "nina10", "discount code", "voucher", "offer"],
    answer: "Use promo code **NINA10** at checkout on casaninacarignano.com for 10% off. It's our thank-you for booking direct — no middlemen, no hidden fees.",
  },
  {
    keywords: ["ebike", "e-bike", "bike", "bicycle", "cycle", "cycling", "scooter"],
    answer: "Two e-bikes are available for guests — helmets and locks included! Request them when booking. Reach Boccadasse in 10 min along the flat Corso Italia seafront, or explore Nervi to the east. Perfect for an effortless city day.",
  },
  {
    keywords: ["boccadasse"],
    answer: "Boccadasse is a magical fishing village frozen in time, just 2 km from the apartment. Walk 25 min along Corso Italia or take bus 31. Go at sunset — the coloured houses reflect on the water. Get a gelato at Bar Gelateria Davide, a local institution since 1967.",
  },
  {
    keywords: ["porto antico", "old port", "acquario", "aquarium", "port"],
    answer: "Porto Antico is Genova's vibrant heart — about 2 km, 10 min by bus or 25 min walk through the caruggi. The Aquarium of Genova is the largest in Italy (great for families). The Bigo crane offers a panoramic lift. Piazza Caricamento nearby has great aperitivo bars.",
  },
  {
    keywords: ["corso italia", "promenade", "seafront", "lungomare"],
    answer: "Corso Italia is Genova's elegant 5 km seafront promenade, just 10 min walk. Perfect for morning runs, sunset strolls, or cycling. Grab the e-bikes from the apartment — it's one of the best urban rides in Liguria.",
  },
  {
    keywords: ["caruggi", "old town", "historic", "centre", "center", "medieval", "alleys", "centro storico", "unesco"],
    answer: "The caruggi — Genova's UNESCO-listed medieval labyrinth — is one of the largest historic centres in Europe. Take bus 35 (5 min). Via San Luca, Via degli Orefici, Piazza Matteotti are unmissable. Go off-trail into Via del Campo, immortalised by De André.",
  },
  {
    keywords: ["palazzo reale", "palazzo ducale", "rolli", "museum", "gallery", "art", "churches", "cattedrale", "cathedral"],
    answer: "Genova has extraordinary art. Don't miss: Palazzo Reale (royal palace, stunning frescoes), Palazzo Ducale (great exhibitions), the Rolli palaces (UNESCO heritage), Cattedrale di San Lorenzo, and the Galata Museo del Mare — the finest maritime museum in the Mediterranean.",
  },
  {
    keywords: ["castelletto", "spianata", "view", "panorama", "viewpoint", "belvedere", "sunset"],
    answer: "The Spianata di Castelletto is the finest viewpoint in Genova — free and magical at dusk. Take the historic Ascensore di Castelletto lift from Via Bixio, 10 min walk from the apartment. Unmissable at golden hour.",
  },
  {
    keywords: ["cinque terre", "portofino", "nervi", "day trip", "camogli", "riviera", "santa margherita"],
    answer: "Casa Nina is perfectly placed for day trips! Cinque Terre: 1h by train from Brignole. Portofino: 40 min by boat from Porto Antico. Camogli: 30 min by train. Nervi (cliff walks + seafront): 20 min by train. All spectacular — and all reachable without a car.",
  },
  {
    keywords: ["train", "station", "brignole", "principe", "airport", "taxi", "bus station", "how to get", "transport", "transfer", "get here", "directions"],
    answer: "Brignole station is 1.5 km away (20 min walk or 5 min bus). Airport Cristoforo Colombo (GOA) is 10 km — €25 by taxi or take the AMT Volabus direct. Trains to Milan (1.5h), Turin (2h) and Rome (4.5h) run frequently. Need a taxi? Ask us for trusted local numbers.",
  },
  {
    keywords: ["beach", "sea", "swim", "swimming", "sunbathe", "lido", "summer"],
    answer: "Corso Italia seafront is 10–15 min walk — several lidos with sun beds. Boccadasse has a charming pebble cove. Nervi has beautiful rocky walks and crystal-clear water. In summer, Bagni Vittoria on Corso Italia is a superb beach club. The e-bikes make beach access effortless.",
  },
  {
    keywords: ["restaurant", "eat", "food", "dinner", "lunch", "trattoria", "ristorante", "osteria", "where to eat", "nearby", "nerby", "near", "local"],
    answer: "Top picks near the apartment: **Trattoria Rosmarino** (Carignano, 5 min walk — excellent local cooking), **Da Maria** (caruggi, iconic cheap trattoria, cash only), **Il Marin** (Porto Antico, seafood + harbour views), **Sa Pesta** (farinata specialists, unmissable), **Osteria del Vico Palla** (traditional Genovese). Ask us for the week's specials — we always know what's good.",
  },
  {
    keywords: ["pesto", "focaccia", "farinata", "typical", "local food", "genovese food", "trofie", "pansoti", "liguria", "ligurian"],
    answer: "Genova is the birthplace of pesto DOP! Must-eats: focaccia genovese (warm for breakfast — try Panificio Mario), farinata (crispy chickpea flatbread at Sa Pesta), trofie al pesto, pansoti con salsa di noci, acciughe (anchovies), and a glass of local Pigato white wine. We leave a local food guide in the apartment.",
  },
  {
    keywords: ["aperitivo", "aperitif", "drinks", "bar", "wine", "cocktail", "nightlife", "evening"],
    answer: "For aperitivo: Piazza delle Erbe in the caruggi gets lively from 18:00 — dozens of bars spill onto the square. Enoteca Sola (near Carignano) is excellent for Ligurian wines. Porto Antico has great bars with water views. In summer, rooftop bars near Via Garibaldi have a stunning panorama.",
  },
  {
    keywords: ["supermarket", "grocery", "shop", "market", "supermercato", "shopping"],
    answer: "Carrefour Express is 5 min walk (open until 21:30). Coop supermarket: 10 min, better selection. Tuesday morning market in Via Carignano. For quality specialties — pesto, cured meats, cheese — try the historic Mercato Orientale, 15 min walk. We leave basic welcome supplies (coffee, water, juice) in the apartment.",
  },
  {
    keywords: ["bus", "public transport", "metro", "amt", "ticket", "tram", "funicular"],
    answer: "Bus stops are 2 min walk. Lines 31, 35, and 41 connect to the centre in 5–10 min. Tickets: €1.60 single (90 min), €4.50 day pass — buy at any tabacchi or use the AMT app. Genova also has a small metro, several historic funiculars and scenic lifts. All covered by the same ticket.",
  },
  {
    keywords: ["event", "what's on", "concert", "festival", "tonight", "this week", "live", "show", "happening", "whats on"],
    answer: "For current events: visitgenoa.it (official tourism), eventbrite.it, comune.genova.it/turismo. Estate Genovese (summer open-air events) runs June–September along Porto Antico. We also send guests a personalised local guide with upcoming events for their stay dates — just ask!",
  },
  {
    keywords: ["cancel", "refund", "cancellation", "change dates", "modify"],
    answer: "Full refund if cancelled 7+ days before check-in. 50% refund for cancellations 3–7 days before. No refund within 72 hours. One big advantage of booking direct: we can be more flexible for genuine situations. Always contact us first.",
  },
  {
    keywords: ["welcome", "gift", "surprise", "fridge", "food included", "breakfast", "coffee", "supplies", "what's included"],
    answer: "On arrival you'll find the fridge stocked with mineral water, fresh juice and a welcome snack — our way of saying benvenuto. Nespresso machine, coffee pods, and kitchen essentials are all included. A printed local guide with our personal Genova recommendations waits for you on the table.",
  },
  {
    keywords: ["whatsapp", "call", "phone", "contact", "speak", "talk", "message", "human", "person", "real", "someone", "help", "host", "arcangelo"],
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
    keywords: ["guest", "people", "capacity", "max", "how many", "family", "couple", "group", "sleep"],
    answer: "The apartment sleeps up to 4 guests comfortably — perfect for couples, families with children, or a small group of friends.",
  },
  {
    keywords: ["amenities", "kitchen", "washing", "laundry", "ac", "air conditioning", "tv", "nespresso", "equipment", "facilities", "what is included", "included"],
    answer: "Full kitchen with induction hob, oven, Nespresso machine and all equipment. Air conditioning in every room. Smart TV with streaming. Washing machine. High-speed Wi-Fi. Smart lock entry. Welcome supplies in the fridge. Premium furnishings throughout. Everything for a comfortable, self-sufficient stay.",
  },
  {
    keywords: ["why book direct", "why not airbnb", "why not booking", "advantage", "benefit", "better direct"],
    answer: "Booking directly on casaninacarignano.com gives you: ✓ Lowest price (no 15–20% OTA commission) ✓ Use code NINA10 for 10% off ✓ Free parking permit ✓ Priority early check-in requests ✓ Direct line to Arcangelo ✓ More flexible cancellation. It's simply better — for you and for us.",
  },
];

// Normalise: lowercase, hyphens/apostrophes → space, remove punctuation, collapse spaces
function normalise(s: string): string {
  return s
    .toLowerCase()
    .replace(/[-']/g, " ")
    .replace(/[^\w\s]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function getAnswer(input: string): string {
  const norm = normalise(input);
  const words = norm.split(" ");

  for (const { keywords, answer } of QA) {
    for (const k of keywords) {
      const nk = normalise(k);

      // 1. Direct substring match (normalised)
      if (norm.includes(nk)) return answer;

      // 2. Fuzzy prefix: if keyword ≥5 chars, check if any input word starts with
      //    the keyword's first (len-1) chars — catches common typos like "restauransts"
      if (nk.length >= 5) {
        const prefix = nk.slice(0, nk.length - 1);
        if (words.some((w) => w.length >= 4 && w.startsWith(prefix.slice(0, 5)))) {
          return answer;
        }
      }
    }
  }
  return "UNKNOWN";
}

type Message = { from: "user" | "bot"; text: string; isWA?: boolean };

const SUGGESTIONS = [
  "How do I check in?",
  "Best restaurants nearby?",
  "Why book direct?",
  "Day trips from Genova?",
];

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { from: "bot", text: "Ciao! I'm Nina, your virtual host at Casa Nina Carignano. Ask me about the apartment, Genova, restaurants, transport — or why booking direct saves you money!" },
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
      ? "I don't have that one handy — but Arcangelo knows everything! Tap below to message him directly on WhatsApp."
      : isWA
      ? "Of course! Tap below to message us on WhatsApp — Arcangelo usually replies within minutes."
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
                    Message Arcangelo on WhatsApp
                  </a>
                )}
              </div>
            ))}

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
