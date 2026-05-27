"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";

const WA_LINK = "https://wa.me/393480048427?text=Hi%2C%20I%20have%20a%20question%20about%20Casa%20Nina%20Carignano";

// ── Language detection ────────────────────────────────────────────────────────
type Lang = "en" | "it" | "de" | "fr" | "es";

const LANG_MARKERS: Record<Lang, string[]> = {
  it: ["io","il","la","le","lo","un","una","di","che","non","è","sono","come","dove","quanto","quando","cosa","posso","vorrei","grazie","prego","ciao","buongiorno","siete","avete","appartamento","vicino","ristorante","voglio","sapere","devo","arrivo","partenza","prezzo"],
  de: ["ich","ist","das","die","der","ein","eine","nicht","wie","wo","was","wann","haben","bitte","danke","gibt","kann","möchte","wohnung","nähe","anreise","preis","wie","wieviel","kann","günstig"],
  fr: ["je","est","les","pas","avec","pour","que","où","quoi","comment","bonjour","merci","appartement","proche","puis","restaurant","combien","arrivée","départ","prix","pouvez"],
  es: ["yo","es","los","las","con","para","qué","dónde","cómo","hola","gracias","apartamento","restaurante","cerca","puedo","precio","llegada","salida","cuánto","hay"],
  en: ["the","is","are","have","how","what","where","when","can","do","my","your","please","thank","hello","apartment","restaurant","near","price","check","book"],
};

function detectLang(input: string): Lang {
  const words = input.toLowerCase().split(/\s+/);
  const scores = { en: 0, it: 0, de: 0, fr: 0, es: 0 } as Record<Lang, number>;
  for (const [lang, markers] of Object.entries(LANG_MARKERS)) {
    for (const w of words) if (markers.includes(w)) scores[lang as Lang]++;
  }
  const best = (Object.entries(scores) as [Lang, number][]).sort((a, b) => b[1] - a[1])[0];
  return best[1] > 0 ? best[0] : "en";
}

// ── Normalise input ───────────────────────────────────────────────────────────
function norm(s: string): string {
  return s.toLowerCase().replace(/[-']/g, " ").replace(/[^\w\s]/g, "").replace(/\s+/g, " ").trim();
}

// ── Multilingual answer type ──────────────────────────────────────────────────
type ML = string | Record<Lang, string>;
function resolve(answer: ML, lang: Lang): string {
  if (typeof answer === "string") return answer;
  return answer[lang] ?? answer.en;
}

// ── QA knowledge base ─────────────────────────────────────────────────────────
const QA: { keywords: string[]; answer: ML }[] = [

  // ── Swearing ─────────────────────────────────────────────────────────────────
  {
    keywords: ["fuck","shit","damn","crap","ass","bastard","bitch","hell","piss",
               "cazzo","merda","vaffanculo","coglione","stronzo","porco dio","minchia",
               "scheiße","scheiß","fick","verdammt","arsch","mist",
               "merde","putain","bordel","foutre","salaud","con ",
               "joder","mierda","coño","hostia","cabron","ostia"],
    answer: {
      en: "Whoa, sailor! 😄 I'm Nina, a polite virtual host. Language like that belongs on the high seas. Now — how can I actually help you?",
      it: "Ohhh! Che linguaggio! 😄 Sono Nina, una host virtuale educata. Lascia le parolacce ai marinai. Posso aiutarti in qualcos'altro?",
      de: "Na, na! 😄 Ich bin Nina — höfliche Gastgeberin. Solche Worte gehören auf hohe See. Womit kann ich dir wirklich helfen?",
      fr: "Oh là là ! 😄 Je suis Nina, une hôte virtuelle polie. Gardez ce vocabulaire pour la marine. Comment puis-je vraiment vous aider ?",
      es: "¡Vaya vocabulario! 😄 Soy Nina, una anfitriona virtual educada. Deja el lenguaje de marinero para el mar. ¿En qué puedo ayudarte?",
    },
  },

  // ── Greetings ─────────────────────────────────────────────────────────────────
  {
    keywords: ["hello","hi","hey","start","begin","ciao","buongiorno","buonasera","salve","hola","bonjour","bonsoir","hallo","guten morgen","guten tag"],
    answer: {
      en: "Ciao! I'm Nina, your virtual host at Casa Nina Carignano. Ask me about check-in, restaurants, transport, or why booking direct saves you money. What would you like to know?",
      it: "Ciao! Sono Nina, la tua host virtuale a Casa Nina Carignano. Chiedimi del check-in, dei ristoranti, dei trasporti — o perché prenotare direttamente conviene. Come posso aiutarti?",
      de: "Ciao! Ich bin Nina, deine virtuelle Gastgeberin der Casa Nina Carignano. Frag mich nach dem Check-in, Restaurants, Transport — oder warum eine Direktbuchung günstiger ist. Wie kann ich helfen?",
      fr: "Ciao ! Je suis Nina, votre hôte virtuelle à la Casa Nina Carignano. Posez-moi des questions sur l'arrivée, les restaurants, les transports — ou pourquoi réserver en direct est plus avantageux. Comment puis-je vous aider ?",
      es: "¡Ciao! Soy Nina, tu anfitriona virtual en Casa Nina Carignano. Pregúntame sobre el check-in, restaurantes, transporte — o por qué reservar directo te ahorra dinero. ¿En qué puedo ayudarte?",
    },
  },

  // ── Check-in ──────────────────────────────────────────────────────────────────
  {
    keywords: ["check in","checkin","check-in","arrive","arrival","key","access","enter","door","lock","smart lock","code","get in","how do i get in","anreise","arrivée","llegada","arrivo","chiave","codice","entrare"],
    answer: {
      en: "Check-in is from 15:00. You'll receive a personal smart lock code via email before arrival — no key handover, no waiting. Just walk straight in. Need to arrive early? Ask us, we're often flexible.",
      it: "Il check-in è dalle 15:00. Prima dell'arrivo riceverai un codice personale per la serratura smart via email — nessun passaggio di chiavi, nessuna attesa. Entri direttamente. Devi arrivare prima? Scrivici, siamo spesso flessibili.",
      de: "Check-in ab 15:00 Uhr. Vor der Anreise erhältst du per E-Mail einen persönlichen Smart-Lock-Code — kein Schlüsselübergabe, kein Warten. Einfach reingehen. Frühere Anreise? Frag uns, wir sind oft flexibel.",
      fr: "L'arrivée est à partir de 15h00. Avant votre arrivée, vous recevrez un code personnel par e-mail pour la serrure connectée — pas de remise de clé, pas d'attente. Vous entrez directement. Besoin d'arriver plus tôt ? Contactez-nous, nous sommes souvent flexibles.",
      es: "El check-in es a partir de las 15:00. Antes de llegar recibirás un código personal por correo electrónico para la cerradura inteligente — sin entrega de llaves, sin esperas. Entras directamente. ¿Necesitas llegar antes? Contáctanos, solemos ser flexibles.",
    },
  },

  // ── Check-out ─────────────────────────────────────────────────────────────────
  {
    keywords: ["check out","checkout","check-out","leave","departure","when do i leave","late checkout","abreise","départ","salida","partenza","quando parto","checkout"],
    answer: {
      en: "Check-out is by 10:00. Just close the door (it locks automatically) — no formalities. Late check-out until 13:00 is often available if the calendar allows. Message us the evening before.",
      it: "Il check-out è entro le 10:00. Chiudi la porta (si blocca automaticamente) — nessuna formalità. Il late check-out fino alle 13:00 è spesso disponibile. Scrivici la sera prima.",
      de: "Check-out bis 10:00 Uhr. Einfach die Tür schließen (sie schließt automatisch) — keine Formalitäten. Später Check-out bis 13:00 Uhr ist oft möglich. Schreib uns am Abend vorher.",
      fr: "Le départ est avant 10h00. Fermez simplement la porte (elle se verrouille automatiquement) — sans formalités. Un départ tardif jusqu'à 13h00 est souvent possible si le calendrier le permet. Écrivez-nous la veille au soir.",
      es: "El check-out es antes de las 10:00. Cierra la puerta (se bloquea automáticamente) — sin trámites. El check-out tardío hasta las 13:00 suele estar disponible. Escríbenos la noche anterior.",
    },
  },

  // ── WiFi ──────────────────────────────────────────────────────────────────────
  {
    keywords: ["wifi","internet","password","wi-fi","connection","speed","network","wlan","connexion","contraseña","senha"],
    answer: {
      en: "1 Gbps fibre Wi-Fi is included — one of the fastest in Genova. The network name and password are on the welcome card inside the apartment.",
      it: "Il Wi-Fi in fibra da 1 Gbps è incluso — tra i più veloci a Genova. Il nome della rete e la password sono sul biglietto di benvenuto nell'appartamento.",
      de: "1 Gbps Glasfaser-WLAN ist inklusive — eines der schnellsten in Genua. Netzwerkname und Passwort stehen auf der Willkommenskarte in der Wohnung.",
      fr: "Le Wi-Fi fibre 1 Gbps est inclus — l'un des plus rapides de Gênes. Le nom du réseau et le mot de passe figurent sur la carte de bienvenue dans l'appartement.",
      es: "El Wi-Fi de fibra de 1 Gbps está incluido — uno de los más rápidos de Génova. El nombre de la red y la contraseña están en la tarjeta de bienvenida dentro del apartamento.",
    },
  },

  // ── Parking ───────────────────────────────────────────────────────────────────
  {
    keywords: ["parking","car","park","parcheggio","garage","ztl","permit","parkplatz","stationnement","aparcamiento","voiture","coche","auto"],
    answer: {
      en: "We provide a free ZTL parking permit for the Carignano neighbourhood — no fees, no fines. You'll receive it with your check-in details. Covered garage at Piazza Brignole, 5 min away.",
      it: "Forniamo un pass gratuito per la ZTL del quartiere Carignano — niente soste, niente multe. Lo riceverai con le informazioni per il check-in. C'è anche un garage coperto a Piazza Brignole, a 5 minuti.",
      de: "Wir stellen einen kostenlosen ZTL-Parkausweis für das Viertel Carignano zur Verfügung — keine Gebühren, keine Bußgelder. Du erhältst ihn mit deinen Check-in-Infos. Parkhaus an der Piazza Brignole, 5 Minuten entfernt.",
      fr: "Nous fournissons un badge de stationnement ZTL gratuit pour le quartier Carignano — pas de frais, pas d'amendes. Vous le recevrez avec les informations d'arrivée. Parking couvert à Piazza Brignole, à 5 minutes.",
      es: "Proporcionamos un permiso de aparcamiento ZTL gratuito para el barrio de Carignano — sin tarifas, sin multas. Lo recibirás con los datos del check-in. Garaje cubierto en Piazza Brignole, a 5 minutos.",
    },
  },

  // ── Direct booking / price ────────────────────────────────────────────────────
  {
    keywords: ["price","cost","rate","night","how much","pricing","direct","best rate","discount","cheaper","save","promo","code","nina10","coupon","offer","warum direkt","pourquoi direct","por qué directo","prezzo","quanto costa","costo","offerta","sconto"],
    answer: {
      en: "Booking directly on casaninacarignano.com guarantees the lowest rate — no Airbnb or Booking.com commission (typically +15–20%). You also get: free parking permit, priority early check-in, and direct contact with Arcangelo. Use code **NINA10** for an extra 10% off your first direct booking.",
      it: "Prenotando direttamente su casaninacarignano.com hai la tariffa più bassa — senza commissioni Airbnb o Booking.com (tipicamente +15–20%). Ottieni anche: pass parcheggio gratuito, priorità per il check-in anticipato e contatto diretto con Arcangelo. Usa il codice **NINA10** per un ulteriore 10% di sconto.",
      de: "Eine Direktbuchung auf casaninacarignano.com garantiert den günstigsten Preis — ohne Airbnb- oder Booking.com-Provision (typischerweise +15–20 %). Du bekommst außerdem: kostenlosen Parkausweis, bevorzugten Early Check-in und direkten Kontakt zu Arcangelo. Nutze den Code **NINA10** für weitere 10 % Rabatt.",
      fr: "Réserver directement sur casaninacarignano.com vous garantit le meilleur tarif — sans commission Airbnb ou Booking.com (généralement +15–20 %). Vous bénéficiez aussi : badge de stationnement gratuit, early check-in prioritaire et contact direct avec Arcangelo. Utilisez le code **NINA10** pour -10 % supplémentaires.",
      es: "Reservar directamente en casaninacarignano.com garantiza la tarifa más baja — sin comisiones de Airbnb o Booking.com (normalmente +15–20 %). Además obtienes: permiso de aparcamiento gratuito, prioridad para el check-in anticipado y contacto directo con Arcangelo. Usa el código **NINA10** para un 10 % adicional de descuento.",
    },
  },

  // ── Restaurants / food ────────────────────────────────────────────────────────
  {
    keywords: ["restaurant","eat","food","dinner","lunch","trattoria","ristorante","osteria","where to eat","nearby","near","local","essen","wo essen","restaurant","manger","dîner","comer","donde comer","mangiare","dove mangiare","ristoranti","vicino","nerby"],
    answer: {
      en: "Top picks near the apartment: **Trattoria Rosmarino** (5 min walk — excellent local cooking), **Da Maria** (caruggi, iconic & cheap, cash only), **Il Marin** (Porto Antico, seafood + harbour views), **Sa Pesta** (farinata specialists — unmissable), **Osteria del Vico Palla** (traditional Genovese). Ask us for the week's specials!",
      it: "I migliori nelle vicinanze: **Trattoria Rosmarino** (5 min a piedi — cucina locale eccellente), **Da Maria** (caruggi, iconica e a buon prezzo, solo contanti), **Il Marin** (Porto Antico, pesce con vista porto), **Sa Pesta** (specialisti della farinata — da non perdere), **Osteria del Vico Palla** (tradizione genovese). Chiedici i piatti del giorno!",
      de: "Highlights in der Nähe: **Trattoria Rosmarino** (5 min zu Fuß — hervorragende lokale Küche), **Da Maria** (Caruggi, legendär & günstig, nur Bar), **Il Marin** (Porto Antico, Meeresfrüchte + Hafenblick), **Sa Pesta** (Farinata-Spezialisten — unbedingt!), **Osteria del Vico Palla** (traditionell genuesisch). Frag uns nach den Tagesempfehlungen!",
      fr: "Meilleures adresses près de l'appartement : **Trattoria Rosmarino** (5 min à pied — excellente cuisine locale), **Da Maria** (caruggi, iconique & abordable, espèces uniquement), **Il Marin** (Porto Antico, fruits de mer + vue port), **Sa Pesta** (spécialistes de la farinata — incontournable), **Osteria del Vico Palla** (cuisine génoise traditionnelle). Demandez-nous les spéciaux du jour !",
      es: "Los mejores cerca del apartamento: **Trattoria Rosmarino** (5 min andando — excelente cocina local), **Da Maria** (caruggi, icónico y económico, solo efectivo), **Il Marin** (Porto Antico, mariscos + vistas al puerto), **Sa Pesta** (especialistas en farinata — imprescindible), **Osteria del Vico Palla** (cocina genovesa tradicional). ¡Pregúntanos por los platos del día!",
    },
  },

  // ── Transport ─────────────────────────────────────────────────────────────────
  {
    keywords: ["train","station","brignole","principe","airport","taxi","bus","transport","transfer","get here","directions","metro","amt","ticket","öpnv","transports","transporte","stazione","aeroporto","treno","autobus","come arrivo","come si arriva"],
    answer: {
      en: "Brignole station is 1.5 km away (20 min walk or 5 min by bus). Airport Colombo (GOA) is 10 km — €25 taxi or AMT Volabus direct. Trains to Milan (1.5h), Turin (2h), Rome (4.5h). Bus tickets: €1.60 single, €4.50 day pass — buy at any tabacchi or AMT app.",
      it: "La stazione di Brignole è a 1,5 km (20 min a piedi o 5 min in bus). L'aeroporto Colombo (GOA) è a 10 km — taxi €25 o AMT Volabus diretto. Treni per Milano (1,5h), Torino (2h), Roma (4,5h). Biglietti bus: €1,60 singolo, €4,50 giornaliero — in tabaccheria o app AMT.",
      de: "Bahnhof Brignole ist 1,5 km entfernt (20 Min. zu Fuß oder 5 Min. mit dem Bus). Flughafen Colombo (GOA): 10 km — Taxi €25 oder AMT Volabus direkt. Züge nach Mailand (1,5h), Turin (2h), Rom (4,5h). Bustickets: €1,60 Einzelfahrt, €4,50 Tageskarte — an jeder Tabacchi oder per AMT-App.",
      fr: "La gare de Brignole est à 1,5 km (20 min à pied ou 5 min en bus). Aéroport Colombo (GOA) : 10 km — taxi €25 ou AMT Volabus direct. Trains vers Milan (1h30), Turin (2h), Rome (4h30). Tickets de bus : €1,60 (trajet), €4,50 (journée) — en tabac ou via l'app AMT.",
      es: "La estación de Brignole está a 1,5 km (20 min andando o 5 min en bus). Aeropuerto Colombo (GOA): 10 km — taxi €25 o AMT Volabus directo. Trenes a Milán (1,5h), Turín (2h), Roma (4,5h). Billetes de bus: €1,60 sencillo, €4,50 día — en tabacchi o app AMT.",
    },
  },

  // ── Day trips ────────────────────────────────────────────────────────────────
  {
    keywords: ["cinque terre","portofino","nervi","day trip","camogli","riviera","santa margherita","ausflug","excursion","excursión","gita","gita fuori porta"],
    answer: {
      en: "Perfect for day trips: Cinque Terre (1h by train), Portofino (40 min by boat from Porto Antico), Camogli (30 min by train), Nervi (20 min by train — cliff walks + seafront). All reachable without a car. We can suggest itineraries!",
      it: "Perfetta per le gite: Cinque Terre (1h in treno), Portofino (40 min in barca dal Porto Antico), Camogli (30 min in treno), Nervi (20 min in treno — passeggiate sul mare). Tutto raggiungibile senza auto. Possiamo suggerirti itinerari!",
      de: "Perfekt für Tagesausflüge: Cinque Terre (1h mit dem Zug), Portofino (40 Min. mit dem Boot vom Porto Antico), Camogli (30 Min. mit dem Zug), Nervi (20 Min. mit dem Zug — Klippenweg + Promenade). Alles ohne Auto erreichbar. Wir können Routen empfehlen!",
      fr: "Idéalement situé pour les excursions : Cinque Terre (1h en train), Portofino (40 min en bateau depuis le Porto Antico), Camogli (30 min en train), Nervi (20 min en train — sentier des falaises + front de mer). Tout est accessible sans voiture. Nous pouvons vous suggérer des itinéraires !",
      es: "Perfecto para excursiones: Cinque Terre (1h en tren), Portofino (40 min en barco desde Porto Antico), Camogli (30 min en tren), Nervi (20 min en tren — paseos por los acantilados). Todo accesible sin coche. ¡Podemos sugerirte itinerarios!",
    },
  },

  // ── Welcome / what's included ─────────────────────────────────────────────────
  {
    keywords: ["welcome","gift","fridge","breakfast","coffee","supplies","included","what's included","was ist inbegriffen","qu'est-ce qui est inclus","qué incluye","frigorifero","cosa è incluso","frigo","caffè","benvenuto"],
    answer: {
      en: "On arrival: fridge stocked with mineral water, fresh juice and a welcome snack — our benvenuto. Nespresso machine, coffee pods and kitchen essentials included. A printed Genova local guide with our personal recommendations waits on the table.",
      it: "All'arrivo: frigo rifornito con acqua minerale, succo fresco e uno snack di benvenuto. Macchina Nespresso, cialde caffè e tutto il necessario in cucina inclusi. Sul tavolo trovi la nostra guida locale personale di Genova.",
      de: "Bei Ankunft: Kühlschrank mit Mineralwasser, frischem Saft und einem Willkommens-Snack — unser Benvenuto. Nespresso-Maschine, Kaffeekapseln und Küchenausstattung inklusive. Auf dem Tisch liegt unser persönlicher Genua-Stadtführer.",
      fr: "À l'arrivée : réfrigérateur garni d'eau minérale, de jus frais et d'une collation de bienvenue — notre benvenuto. Machine Nespresso, capsules de café et équipement de cuisine inclus. Un guide local personnel de Gênes vous attend sur la table.",
      es: "A la llegada: frigorífico con agua mineral, zumo fresco y un aperitivo de bienvenida — nuestro benvenuto. Máquina Nespresso, cápsulas de café y equipamiento de cocina incluidos. Una guía local personal de Génova te espera sobre la mesa.",
    },
  },

  // ── E-bikes ───────────────────────────────────────────────────────────────────
  {
    keywords: ["ebike","e-bike","bike","bicycle","cycle","cycling","fahrrad","vélo","bicicleta","bici","biciclette"],
    answer: {
      en: "Two e-bikes available for guests — helmets and locks included! Request them when booking. Reach Boccadasse in 10 min along the flat Corso Italia seafront, or explore Nervi to the east.",
      it: "Due e-bike disponibili per gli ospiti — caschi e lucchetti inclusi! Richiedile al momento della prenotazione. Raggiungi Boccadasse in 10 min lungo il pianeggiante Corso Italia, o esplora Nervi verso est.",
      de: "Zwei E-Bikes für Gäste — Helme und Schlösser inklusive! Beim Buchen anfragen. Boccadasse in 10 Min. entlang der flachen Promenade Corso Italia, oder Nervi im Osten erkunden.",
      fr: "Deux e-bikes disponibles pour les hôtes — casques et antivols inclus ! À demander lors de la réservation. Boccadasse en 10 min le long du plat Corso Italia, ou explorez Nervi vers l'est.",
      es: "Dos e-bikes disponibles para huéspedes — cascos y candados incluidos. Pídelos al reservar. Boccadasse en 10 min por el llano Corso Italia, o explora Nervi hacia el este.",
    },
  },

  // ── Capacity / guests ─────────────────────────────────────────────────────────
  {
    keywords: ["guest","people","capacity","how many","family","couple","group","sleep","schlafplätze","personnes","cuántas personas","quanti posti","ospiti","posti letto"],
    answer: {
      en: "The apartment sleeps up to 4 guests — perfect for couples, families with children, or a small group of friends.",
      it: "L'appartamento ospita fino a 4 persone — perfetto per coppie, famiglie con bambini o piccoli gruppi di amici.",
      de: "Die Wohnung bietet Platz für bis zu 4 Gäste — ideal für Paare, Familien mit Kindern oder kleine Freundesgruppen.",
      fr: "L'appartement accueille jusqu'à 4 personnes — idéal pour les couples, les familles avec enfants ou un petit groupe d'amis.",
      es: "El apartamento tiene capacidad para hasta 4 huéspedes — perfecto para parejas, familias con niños o un pequeño grupo de amigos.",
    },
  },

  // ── Cancellation ──────────────────────────────────────────────────────────────
  {
    keywords: ["cancel","refund","cancellation","change dates","modify","stornieren","annuler","cancelar","disdire","rimborso","annullamento"],
    answer: {
      en: "Full refund if cancelled 7+ days before check-in. 50% refund for cancellations 3–7 days before. No refund within 72 hours. One advantage of booking direct: we can be more flexible for genuine situations. Always contact us first.",
      it: "Rimborso completo se annullato 7+ giorni prima del check-in. Rimborso del 50% tra 3 e 7 giorni prima. Nessun rimborso entro 72 ore. Un vantaggio della prenotazione diretta: possiamo essere più flessibili per situazioni reali. Contattaci sempre prima.",
      de: "Volle Erstattung bei Stornierung 7+ Tage vor Check-in. 50 % Erstattung bei Stornierung 3–7 Tage vorher. Keine Erstattung innerhalb von 72 Stunden. Vorteil der Direktbuchung: Wir können bei echten Notfällen flexibler sein. Meld dich immer zuerst bei uns.",
      fr: "Remboursement intégral si annulation 7 jours+ avant l'arrivée. 50 % de remboursement entre 3 et 7 jours avant. Pas de remboursement dans les 72 heures. Avantage de la réservation directe : nous pouvons être plus flexibles pour les vraies urgences. Contactez-nous toujours en premier.",
      es: "Reembolso completo si se cancela 7+ días antes del check-in. Reembolso del 50 % entre 3 y 7 días antes. Sin reembolso en las 72 horas anteriores. Ventaja de reservar directo: podemos ser más flexibles en situaciones reales. Contáctanos siempre primero.",
    },
  },

  // ── Contact / WhatsApp ────────────────────────────────────────────────────────
  {
    keywords: ["whatsapp","call","phone","contact","speak","talk","message","human","person","real","someone","help","host","arcangelo","anrufen","appeler","llamar","contattare","parlare","telefono"],
    answer: "WHATSAPP",
  },

  // ── Boccadasse ────────────────────────────────────────────────────────────────
  {
    keywords: ["boccadasse"],
    answer: "Boccadasse is a magical fishing village frozen in time, just 2 km away. Walk 25 min along Corso Italia or take bus 31. Go at sunset — the coloured houses reflect on the water. Gelato at Bar Gelateria Davide (est. 1967) is a must.",
  },

  // ── Pets ─────────────────────────────────────────────────────────────────────
  {
    keywords: ["pet","dog","cat","animal","hund","katze","chien","chat","perro","gato","animali","cane","gatto"],
    answer: {
      en: "Unfortunately, pets are not allowed at Casa Nina. Sorry about that!",
      it: "Purtroppo gli animali domestici non sono ammessi a Casa Nina. Ci dispiace!",
      de: "Leider sind Haustiere in der Casa Nina nicht erlaubt. Tut uns leid!",
      fr: "Malheureusement, les animaux de compagnie ne sont pas autorisés à Casa Nina. Désolé !",
      es: "Lamentablemente, los animales de compañía no están permitidos en Casa Nina. ¡Lo sentimos!",
    },
  },

  // ── Smoking ───────────────────────────────────────────────────────────────────
  {
    keywords: ["smoke","smoking","rauchen","fumer","fumar","fumo","sigarette","fumatori"],
    answer: {
      en: "Casa Nina is strictly non-smoking indoors and on-premises. Thank you for respecting this.",
      it: "Casa Nina è rigorosamente non fumatori all'interno e nelle aree comuni. Grazie per rispettare questa regola.",
      de: "Die Casa Nina ist strikt rauchfrei — drinnen und in allen gemeinsamen Bereichen. Danke für Ihr Verständnis.",
      fr: "Casa Nina est strictement non-fumeur à l'intérieur et dans les parties communes. Merci de respecter cette règle.",
      es: "Casa Nina es estrictamente no fumadores en el interior y en las zonas comunes. Gracias por respetarlo.",
    },
  },
];

// ── Fuzzy matching ────────────────────────────────────────────────────────────
function getAnswer(input: string, lang: Lang): string {
  const n = norm(input);
  const words = n.split(" ");

  for (const { keywords, answer } of QA) {
    for (const k of keywords) {
      const nk = norm(k);
      if (n.includes(nk)) return resolve(answer, lang);
      if (nk.length >= 5) {
        const prefix = nk.slice(0, Math.max(5, nk.length - 1));
        if (words.some((w) => w.length >= 4 && (w.startsWith(prefix.slice(0, 5)) || nk.startsWith(w.slice(0, Math.max(5, w.length - 1)))))) {
          return resolve(answer, lang);
        }
      }
    }
  }
  return "UNKNOWN";
}

const FALLBACK: Record<Lang, string> = {
  en: "I don't have that answer handy — but Arcangelo knows everything! Tap below to message him on WhatsApp.",
  it: "Non ho questa risposta — ma Arcangelo sa tutto! Tocca qui sotto per scrivergli su WhatsApp.",
  de: "Das weiß ich leider nicht — aber Arcangelo kennt alles! Tippe unten, um ihm auf WhatsApp zu schreiben.",
  fr: "Je n'ai pas cette réponse — mais Arcangelo sait tout ! Appuyez ci-dessous pour lui écrire sur WhatsApp.",
  es: "No tengo esa respuesta — ¡pero Arcangelo lo sabe todo! Pulsa abajo para escribirle por WhatsApp.",
};

const WA_PROMPT: Record<Lang, string> = {
  en: "Of course! Tap below — Arcangelo usually replies within minutes.",
  it: "Certo! Tocca qui sotto — Arcangelo risponde di solito in pochi minuti.",
  de: "Natürlich! Tippe unten — Arcangelo antwortet meist innerhalb weniger Minuten.",
  fr: "Bien sûr ! Appuyez ci-dessous — Arcangelo répond généralement en quelques minutes.",
  es: "¡Claro! Pulsa abajo — Arcangelo suele responder en pocos minutos.",
};

const WA_BTN: Record<Lang, string> = {
  en: "Message Arcangelo on WhatsApp",
  it: "Scrivi ad Arcangelo su WhatsApp",
  de: "Arcangelo auf WhatsApp schreiben",
  fr: "Écrire à Arcangelo sur WhatsApp",
  es: "Escribir a Arcangelo por WhatsApp",
};

const PLACEHOLDER: Record<Lang, string> = {
  en: "Ask anything about Genova...",
  it: "Chiedi qualcosa su Genova...",
  de: "Frag etwas über Genua...",
  fr: "Posez une question sur Gênes...",
  es: "Pregunta algo sobre Génova...",
};

const SUGGESTIONS: Record<Lang, string[]> = {
  en: ["How do I check in?", "Best restaurants nearby?", "Why book direct?", "Day trips from Genova?"],
  it: ["Come faccio il check-in?", "Migliori ristoranti vicini?", "Perché prenotare diretto?", "Gite da Genova?"],
  de: ["Wie checke ich ein?", "Beste Restaurants in der Nähe?", "Warum direkt buchen?", "Tagesausflüge von Genua?"],
  fr: ["Comment s'enregistrer ?", "Meilleurs restaurants proches ?", "Pourquoi réserver en direct ?", "Excursions depuis Gênes ?"],
  es: ["¿Cómo hago el check-in?", "¿Mejores restaurantes cercanos?", "¿Por qué reservar directo?", "¿Excursiones desde Génova?"],
};

// ── Component ─────────────────────────────────────────────────────────────────
type Message = { from: "user" | "bot"; text: string; isWA?: boolean };

export default function Chatbot() {
  const [open, setOpen]           = useState(false);
  const [lang, setLang]           = useState<Lang>("en");
  const [messages, setMessages]   = useState<Message[]>([
    { from: "bot", text: "Ciao! I'm Nina, your virtual host at Casa Nina Carignano. Ask me about check-in, restaurants, transport — or why booking direct saves you money!" },
  ]);
  const [input, setInput]         = useState("");
  const [showSuggestions, setShowSuggestions] = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  function send(text?: string) {
    const txt = (text ?? input).trim();
    if (!txt) return;
    setShowSuggestions(false);

    const detectedLang = detectLang(txt);
    if (detectedLang !== "en") setLang(detectedLang);
    const activeLang = detectedLang !== "en" ? detectedLang : lang;

    const raw = getAnswer(txt, activeLang);
    const isWA      = raw === "WHATSAPP";
    const isUnknown = raw === "UNKNOWN";
    const botText   = isUnknown ? FALLBACK[activeLang] : isWA ? WA_PROMPT[activeLang] : raw;

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
          <div className="bg-foreground text-background px-4 py-3 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-sm font-bold" style={{ color: "#0c1e2a" }}>N</div>
              <div>
                <p className="text-sm font-semibold">Nina</p>
                <p className="text-xs opacity-50">Casa Nina · virtual host</p>
              </div>
            </div>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
              className="text-xs bg-green-500 hover:bg-green-400 text-white px-3 py-1.5 rounded-lg font-medium transition-colors">
              WhatsApp
            </a>
          </div>

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
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white text-xs font-medium px-4 py-2 rounded-xl transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    {WA_BTN[lang]}
                  </a>
                )}
              </div>
            ))}

            {showSuggestions && (
              <div className="flex flex-wrap gap-1.5 pt-1">
                {SUGGESTIONS[lang].map(s => (
                  <button key={s} onClick={() => send(s)}
                    className="text-xs bg-card border border-border text-muted hover:text-foreground hover:border-accent rounded-xl px-2.5 py-1.5 transition-colors">
                    {s}
                  </button>
                ))}
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          <div className="border-t border-border p-3 flex gap-2 shrink-0">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder={PLACEHOLDER[lang]}
              className="flex-1 text-sm bg-card rounded-xl px-3 py-2 outline-none border border-border focus:border-accent text-foreground placeholder:text-muted/50 transition-colors"
            />
            <button onClick={() => send()}
              className="w-9 h-9 rounded-xl bg-foreground text-background flex items-center justify-center hover:opacity-90 transition-opacity shrink-0">
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
