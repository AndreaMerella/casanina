import { Suspense } from "react";
import Image from "next/image";
import {
  Wifi,
  Monitor,
  Coffee,
  UtensilsCrossed,
  Snowflake,
  ShowerHead,
  MapPin,
  KeyRound,
  ShieldCheck,
  Tv,
  Armchair,
  Zap,
  ArrowDown,
  Smartphone,
  UserCheck,
  DoorOpen,
  Users,
  Clock,
  Moon,
  Ban,
  Dog,
  Flame,
  ExternalLink,
} from "lucide-react";
import Header from "@/components/Header";
import FloatingBar from "@/components/FloatingBar";
import Gallery from "@/components/Gallery";
import BookingBanner from "@/components/BookingBanner";
import Guestbook from "@/components/Guestbook";
import Chatbot from "@/components/Chatbot";

const NIGHTLY_RATE = parseInt(process.env.NIGHTLY_RATE_CENTS || "15000") / 100;

const amenities = [
  { icon: Wifi, label: "1 Gbps Fiber Wi-Fi" },
  { icon: Monitor, label: "Dedicated Workspace" },
  { icon: Coffee, label: "Nespresso Machine" },
  { icon: UtensilsCrossed, label: "Full Kitchen" },
  { icon: Snowflake, label: "Air Conditioning" },
  { icon: ShowerHead, label: "Shower" },
  { icon: Tv, label: "Smart TV" },
  { icon: Armchair, label: "Premium Furnishings" },
  { icon: KeyRound, label: "Smart Lock Access" },
  { icon: MapPin, label: "Historic Center" },
  { icon: Zap, label: "Fast Check-in" },
  { icon: ShieldCheck, label: "Fully Compliant" },
];

const houseRules = [
  { icon: Clock, rule: "Check-in from 15:00 · Check-out by 10:00" },
  { icon: Users, rule: "Maximum 4 guests" },
  { icon: Moon, rule: "Quiet hours after 22:00" },
  { icon: Ban, rule: "No smoking on the premises" },
  { icon: Dog, rule: "No pets" },
  { icon: Flame, rule: "No parties or events" },
];

const checkinSteps = [
  {
    icon: Smartphone,
    title: "Receive Your Link",
    description:
      "After booking, you'll receive a secure link via email to complete your check-in digitally.",
  },
  {
    icon: UserCheck,
    title: "Verify Your Identity",
    description:
      "Upload your ID for the mandatory Italian Alloggiati Web registration: fast, secure, and fully automated.",
  },
  {
    icon: DoorOpen,
    title: "Unlock & Arrive",
    description:
      "Receive your smart lock code and walk in on your schedule. No key exchange, no waiting.",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <FloatingBar nightlyRate={NIGHTLY_RATE} />
      <main className="bg-background text-foreground">
        <Suspense>
          <BookingBanner />
        </Suspense>

        {/* ─── Hero ─── */}
        <section className="relative h-[80vh] w-full overflow-hidden bg-stone-800">
          <Image
            src="/images/hero.jpg"
            alt="Casa Nina Carignano"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />

          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-16 pb-16 md:pb-24">
            <p className="text-white/65 text-xs md:text-sm uppercase tracking-[0.2em] mb-3">
              Carignano, Genova
            </p>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-4">
              Casa Nina
            </h1>
            <p className="text-white/75 text-base md:text-lg max-w-md leading-relaxed mb-8">
              Una casa spaziosa e accogliente nel cuore di Genova: per
              famiglie, coppie e viaggiatori di ogni tipo.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#booking"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-foreground rounded-xl font-medium text-sm hover:bg-white/90 transition-colors"
              >
                Prenota ora &rarr;
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/10 text-white rounded-xl font-medium text-sm hover:bg-white/20 border border-white/20 transition-colors backdrop-blur-sm"
              >
                Scopri l&apos;appartamento
              </a>
            </div>
          </div>

          <a
            href="#about"
            className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 hover:text-white/70 transition-colors"
            aria-label="Scroll down"
          >
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </a>
        </section>

        {/* ─── About ─── */}
        <section id="about" className="py-20 md:py-28 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-accent text-xs uppercase tracking-[0.2em] font-medium mb-4">
              L&apos;Appartamento
            </p>
            <h2 className="font-serif text-3xl md:text-4xl leading-snug mb-6">
              A real home in the heart of Genoa
            </h2>
            <p className="text-muted text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Casa Nina is a spacious, fully renovated apartment in the quiet
              Carignano quarter: perfect for families, couples, solo travellers,
              and anyone who wants to experience Genoa like a local. Original
              arched doorways, warm oak floors, a fully equipped kitchen, and
              everything you need to settle in and feel at home. The old port,
              restaurants, and the city centre are all within easy walking
              distance.
            </p>
          </div>
        </section>

        {/* ─── Gallery ─── */}
        <section id="gallery" className="px-4 md:px-8 pb-20 md:pb-28">
          <div className="max-w-6xl mx-auto">
            <Gallery />
          </div>
        </section>

        {/* ─── Discover Genova ─── */}
        <section className="py-20 md:py-28 px-6 bg-card">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-accent text-xs uppercase tracking-[0.2em] font-medium mb-4">
                The City
              </p>
              <h2 className="font-serif text-3xl md:text-4xl mb-5">
                Discover Genova
              </h2>
              <p className="text-muted leading-relaxed max-w-2xl mx-auto">
                La Superba. Medieval caruggi, the largest historic centre in
                Europe, world-class pesto, and the sea always within reach.
                Boccadasse, Corso Italia and Piazza Matteotti are all on your
                doorstep.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-3 md:gap-4">
              {[
                { src: "/images/boccadasse.jpg", alt: "Boccadasse, Genova" },
                { src: "/images/corso-italia.jpg", alt: "Corso Italia, Genova" },
                { src: "/images/piazza-matteotti.jpg", alt: "Piazza Matteotti, Genova" },
              ].map(({ src, alt }) => (
                <div key={alt} className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-border">
                  <Image src={src} alt={alt} fill className="object-cover hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 33vw, 25vw" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Amenities ─── */}
        <section id="amenities" className="py-20 md:py-28 px-6 bg-card">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-accent text-xs uppercase tracking-[0.2em] font-medium mb-4">
                What&apos;s Included
              </p>
              <h2 className="font-serif text-3xl md:text-4xl">
                Everything You Need
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
              {amenities.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-background flex items-center justify-center shrink-0">
                    <Icon className="w-[18px] h-[18px] text-accent" />
                  </div>
                  <span className="text-sm font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Booking ─── */}
        <section id="booking" className="py-20 md:py-28 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
              <div className="lg:col-span-2 lg:sticky lg:top-24">
                <p className="text-accent text-xs uppercase tracking-[0.2em] font-medium mb-4">
                  Reserve
                </p>
                <h2 className="font-serif text-3xl md:text-4xl mb-4">
                  Book Your Stay
                </h2>
                <p className="text-muted leading-relaxed mb-6">
                  Book directly for the best rate: no OTA commission, no
                  middleman. Secure payment and instant confirmation.
                </p>
                <div className="text-sm text-muted space-y-2">
                  <p>
                    <strong className="text-foreground">From:</strong>{" "}
                    &euro;{NIGHTLY_RATE} / night
                  </p>
                  <p>
                    <strong className="text-foreground">Minimum stay:</strong> 2
                    nights
                  </p>
                  <p>
                    <strong className="text-foreground">Check-in:</strong> from
                    15:00
                  </p>
                  <p>
                    <strong className="text-foreground">Check-out:</strong> by
                    10:00
                  </p>
                </div>
              </div>

              <div className="lg:col-span-3">
                {/* TODO: Replace href with your Vikey Booking Engine URL
                    Get it from: MyVikey → Channel Manager → Booking Engine → copy link */}
                <div className="bg-white rounded-2xl border border-border p-8 shadow-sm">
                  <div className="flex items-baseline gap-1.5 mb-2">
                    <span className="font-serif text-3xl font-bold">
                      &euro;{NIGHTLY_RATE}
                    </span>
                    <span className="text-muted text-sm">/ night</span>
                  </div>
                  <p className="text-xs text-muted mb-8">
                    + cleaning fee &middot; best rate guaranteed
                  </p>

                  <a
                    href="https://booking.vikey.it/?local_key=niwVv6ZrwEZ0QeBOqqDJpZnNJwwHXUY_x384GCmFqt4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-4 bg-foreground text-background rounded-xl font-medium hover:opacity-90 transition-opacity"
                  >
                    Check Availability &amp; Book
                    <ExternalLink className="w-4 h-4 opacity-60" />
                  </a>

                  <p className="text-xs text-muted text-center mt-5">
                    Secure booking &middot; Instant confirmation &middot; Managed
                    via Vikey
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Reviews ─── */}
        <section className="py-20 md:py-28 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-accent text-xs uppercase tracking-[0.2em] font-medium mb-4">
                Guest Reviews
              </p>
              <h2 className="font-serif text-3xl md:text-4xl mb-8">
                What Our Guests Say
              </h2>

              {/* Score badges */}
              <div className="flex items-center justify-center gap-10 flex-wrap mb-10">
                <div className="flex flex-col items-center">
                  <span className="font-serif text-5xl font-bold">9.8</span>
                  <span className="text-sm font-medium mt-1">Exceptional</span>
                  <span className="text-muted text-xs mt-0.5">Booking.com · 90 reviews</span>
                </div>
                <div className="w-px h-14 bg-border hidden sm:block" />
                <div className="flex flex-col items-center">
                  <div className="inline-flex items-center gap-1.5 bg-foreground text-background text-xs font-semibold px-3 py-1.5 rounded-lg mb-2">
                    🏆 Traveller Review Award 2026
                  </div>
                  <span className="font-serif text-5xl font-bold">9.7</span>
                  <span className="text-muted text-xs mt-0.5">Booking.com Award</span>
                </div>
              </div>

              {/* Category scores */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto text-sm">
                {[
                  { label: "Cleanliness", score: "9.9" },
                  { label: "Free Wi-Fi", score: "10" },
                  { label: "Location", score: "9.7" },
                  { label: "Comfort", score: "9.6" },
                ].map(({ label, score }) => (
                  <div key={label} className="bg-card rounded-xl px-4 py-3 border border-border">
                    <p className="font-semibold text-lg">{score}</p>
                    <p className="text-muted text-xs mt-0.5">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Review cards */}
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  quote: "Nice and clean apartment in a fabulous area of Genova. The host pays attention to details: toiletries, snacks, beverages, coffee, and even a parking permit. As we often travel to Genoa, we will choose to come back to this place.",
                  author: "Laura",
                  origin: "United Kingdom",
                  score: "10",
                },
                {
                  quote: "Very comfortable and fully equipped. Good neighborhood, shops, and cafes close by. Very quiet at night. Beach within 15 minutes walk. The host was very friendly and helpful.",
                  author: "Oksana",
                  origin: "Canada",
                  score: "10",
                },
                {
                  quote: "The apartment is suitably located in the quiet suburb of Carignano, close to public transportation and other amenities. Very comfortable and expertly clean.",
                  author: "Thomas",
                  origin: "Italy",
                  score: "10",
                },
                {
                  quote: "Beautifully decorated flat, comfortable, clean, super location, great host!",
                  author: "Edward",
                  origin: "South Africa",
                  score: "10",
                },
                {
                  quote: "The place is very spacious, clean, and amenities are complete. A great place to explore Genova. The host was very attentive and responds to questions promptly.",
                  author: "Suzelyn",
                  origin: "Philippines",
                  score: "10",
                },
                {
                  quote: "Atmosphere of both neighbourhood and apartment.",
                  author: "Christian",
                  origin: "Kenya",
                  score: "9.0",
                },
              ].map(({ quote, author, origin, score }) => (
                <div key={author} className="bg-card rounded-2xl p-6 border border-border">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-sm font-semibold text-accent">
                        {author[0]}
                      </div>
                      <div>
                        <p className="text-sm font-medium">{author}</p>
                        <p className="text-xs text-muted">{origin}</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold bg-foreground text-background rounded-lg px-2 py-1">{score}</span>
                  </div>
                  <p className="text-muted leading-relaxed text-sm">&ldquo;{quote}&rdquo;</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── House Rules ─── */}
        <section className="py-20 md:py-28 px-6 bg-card">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-accent text-xs uppercase tracking-[0.2em] font-medium mb-4">
                Good to Know
              </p>
              <h2 className="font-serif text-3xl md:text-4xl">House Rules</h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {houseRules.map(({ icon: Icon, rule }) => (
                <div
                  key={rule}
                  className="flex items-center gap-3 bg-background rounded-xl px-5 py-4"
                >
                  <div className="w-8 h-8 rounded-lg bg-card flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-sm">{rule}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 max-w-4xl mx-auto bg-background rounded-2xl p-6 md:p-8 border border-border">
              <h3 className="font-semibold text-sm uppercase tracking-wider mb-5">
                Cancellation Policy
              </h3>
              <div className="grid sm:grid-cols-3 gap-4 text-sm">
                <div className="space-y-1">
                  <p className="font-medium">Full refund</p>
                  <p className="text-muted">Cancelled 7+ days before check-in</p>
                </div>
                <div className="space-y-1">
                  <p className="font-medium">50% refund</p>
                  <p className="text-muted">Cancelled 3–7 days before check-in</p>
                </div>
                <div className="space-y-1">
                  <p className="font-medium">No refund</p>
                  <p className="text-muted">Cancelled within 72 hours of check-in</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Smart Check-in ─── */}
        <section className="py-20 md:py-28 px-6 bg-foreground text-background">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-accent text-xs uppercase tracking-[0.2em] font-medium mb-4">
                Vikey Smart Check-in
              </p>
              <h2 className="font-serif text-3xl md:text-4xl mb-4">
                Arrive on Your Terms
              </h2>
              <p className="text-background/60 max-w-2xl mx-auto leading-relaxed">
                We use Vikey to automate the entire check-in process. Your
                Italian legal registration (Alloggiati Web) and smart lock
                access are handled digitally: no paperwork, no key handoff.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              {checkinSteps.map(({ icon: Icon, title, description }, i) => (
                <div key={title} className="text-center">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <div className="text-xs text-accent font-medium mb-2">
                    Step {i + 1}
                  </div>
                  <h3 className="font-semibold text-base mb-2">{title}</h3>
                  <p className="text-background/50 text-sm leading-relaxed">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Location ─── */}
        <section id="location" className="py-20 md:py-28 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-accent text-xs uppercase tracking-[0.2em] font-medium mb-4">
                Location
              </p>
              <h2 className="font-serif text-3xl md:text-4xl mb-5">
                Carignano, Genova
              </h2>
              <p className="text-muted leading-relaxed max-w-2xl mx-auto">
                Perched on Genoa&apos;s most elegant hilltop, Carignano is a
                quiet residential quarter with panoramic views of the ancient
                port. Walk to the Basilica di Carignano, Via Roma boutiques, and
                the vibrant Porto Antico waterfront in minutes.
              </p>
            </div>

            <div className="mt-10 rounded-2xl overflow-hidden border border-border shadow-sm">
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=8.934%2C44.397%2C8.955%2C44.414&layer=mapnik&marker=44.4056%2C8.9445"
                width="100%"
                height="400"
                style={{ border: 0, display: "block" }}
                title="Casa Nina Carignano: Mappa"
                loading="lazy"
              />
            </div>
            <p className="text-xs text-muted text-center mt-3">
              <a
                href="https://www.openstreetmap.org/?mlat=44.4056&mlon=8.9445#map=15/44.4056/8.9445"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                View larger map &rarr;
              </a>
            </p>
          </div>
        </section>

        {/* ─── E-Bikes ─── */}
        <section className="py-20 md:py-28 px-6 bg-card">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-accent text-xs uppercase tracking-[0.2em] font-medium mb-4">
                  Explore the City
                </p>
                <h2 className="font-serif text-3xl md:text-4xl mb-5">
                  E-Bikes Available
                </h2>
                <p className="text-muted leading-relaxed mb-4">
                  Discover Genova at your own pace with our two e-bikes.
                  Boccadasse, Corso Italia, the Porto Antico — all effortlessly
                  within reach. No hills are too steep.
                </p>
                <ul className="text-sm text-muted space-y-2 mb-8">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" /> 2 e-bikes included on request</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" /> Helmets and locks provided</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" /> Cycle paths along Corso Italia</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" /> Reach Boccadasse in 10 minutes</li>
                </ul>
                <a
                  href="mailto:casaninacarignano@gmail.com?subject=E-bike%20request%20for%20my%20stay&body=Hi%2C%20I%27d%20love%20to%20include%20the%20e-bikes%20during%20my%20stay%20at%20Casa%20Nina."
                  className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-xl font-medium text-sm hover:opacity-90 transition-opacity"
                >
                  Request e-bikes &rarr;
                </a>
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-border">
                <Image src="/images/ebike.jpg" alt="E-bike Genova" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
            </div>
          </div>
        </section>

        {/* ─── Guestbook ─── */}
        <Guestbook />

        {/* ─── Footer ─── */}
        <footer className="border-t border-border py-12 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              <div>
                <h3 className="font-serif text-lg mb-3">Casa Nina Carignano</h3>
                <p className="text-muted text-sm leading-relaxed">
                  A spacious apartment in Genoa for families, couples, and
                  travellers of all kinds. Book direct for the best rate.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider mb-3">
                  Legal
                </h4>
                <div className="text-sm text-muted space-y-1.5">
                  <p>
                    <strong className="text-foreground">CIN:</strong>{" "}
                    {/* TODO: Replace with your actual CIN code */}
                    <span className="font-mono text-xs">IT-010025-XXXXXXXXXX</span>
                  </p>
                  <p>Struttura ricettiva extralberghiera</p>
                  <p>Genova (GE), Liguria, Italia</p>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider mb-3">
                  Contact
                </h4>
                <div className="text-sm text-muted space-y-1.5">
                  {/* TODO: Replace with real email and WhatsApp */}
                  <a href="mailto:casaninacarignano@gmail.com" className="hover:text-foreground transition-colors">casaninacarignano@gmail.com</a>
                  <p>Viale Aspromonte, 66, 16128 Genova GE</p>
                  <a
                    href="https://wa.me/39XXXXXXXXXX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-accent hover:text-accent-dark transition-colors mt-1"
                  >
                    WhatsApp &rarr;
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-10 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted">
              <p>
                &copy; {new Date().getFullYear()} Casa Nina Carignano. All
                rights reserved.
              </p>
              <div className="flex items-center gap-1 text-xs">
                <ShieldCheck className="w-3 h-3" />
                <span>
                  Vikey Smart Check-in &middot; Alloggiati Web Compliant
                </span>
              </div>
            </div>
          </div>
        </footer>
      </main>
      <Chatbot />
    </>
  );
}
