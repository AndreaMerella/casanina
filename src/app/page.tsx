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
} from "lucide-react";
import Gallery from "@/components/Gallery";
import BookingWidget from "@/components/BookingWidget";
import BookingBanner from "@/components/BookingBanner";

const NIGHTLY_RATE = parseInt(process.env.NIGHTLY_RATE_CENTS || "15000") / 100;
const CLEANING_FEE = parseInt(process.env.CLEANING_FEE_CENTS || "5000") / 100;

const amenities = [
  { icon: Wifi, label: "1 Gbps Fiber Wi-Fi" },
  { icon: Monitor, label: "Dedicated Workspace" },
  { icon: Coffee, label: "Nespresso Machine" },
  { icon: UtensilsCrossed, label: "Full Kitchen" },
  { icon: Snowflake, label: "Air Conditioning" },
  { icon: ShowerHead, label: "Rain Shower" },
  { icon: Tv, label: '55" Smart TV' },
  { icon: Armchair, label: "Premium Furnishings" },
  { icon: KeyRound, label: "Smart Lock Access" },
  { icon: MapPin, label: "Historic Center" },
  { icon: Zap, label: "Fast Check-in" },
  { icon: ShieldCheck, label: "Fully Compliant" },
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
      "Upload your ID for the mandatory Italian Alloggiati Web registration — fast, secure, and fully automated.",
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
    <main className="bg-background text-foreground">
      <Suspense>
        <BookingBanner />
      </Suspense>

      {/* ─── Hero ─── */}
      <section className="relative h-screen w-full overflow-hidden bg-stone-800">
        <Image
          src="/images/hero.jpg"
          alt="Casa Nina Carignano — interior"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/10" />

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-16 pb-12 md:pb-20">
          <p className="text-white/70 text-xs md:text-sm uppercase tracking-[0.2em] mb-3">
            Carignano, Genoa
          </p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-tight">
            Casa Nina
          </h1>
          <p className="text-white/80 text-base md:text-lg mt-4 max-w-lg leading-relaxed">
            A refined apartment where deep work meets effortless Italian living.
          </p>
        </div>

        <a
          href="#about"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 hover:text-white/80 transition-colors"
          aria-label="Scroll down"
        >
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </a>
      </section>

      {/* ─── About ─── */}
      <section id="about" className="py-20 md:py-28 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-accent text-xs uppercase tracking-[0.2em] font-medium mb-4">
            The Concept
          </p>
          <h2 className="font-serif text-3xl md:text-4xl leading-snug mb-6">
            Your premium workspace in the heart of Genoa&apos;s most elegant
            quarter
          </h2>
          <p className="text-muted text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Casa Nina is not just a place to stay — it&apos;s a high-end hybrid
            workstation designed for digital nomads, web3 professionals, and
            remote workers who need deep focus without sacrificing comfort.
            Gigabit fiber, a curated workspace, and the charm of historic
            Carignano at your doorstep.
          </p>
        </div>
      </section>

      {/* ─── Gallery (Bento Grid) ─── */}
      <section className="px-4 md:px-8 pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto">
          <Gallery />
        </div>
      </section>

      {/* ─── Amenities ─── */}
      <section className="py-20 md:py-28 px-6 bg-card">
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
            <div className="lg:col-span-2 lg:sticky lg:top-8">
              <p className="text-accent text-xs uppercase tracking-[0.2em] font-medium mb-4">
                Reserve
              </p>
              <h2 className="font-serif text-3xl md:text-4xl mb-4">
                Book Your Stay
              </h2>
              <p className="text-muted leading-relaxed mb-6">
                Select your dates to check availability. Blocked dates are
                automatically synced from our booking calendar. All payments are
                processed securely via Stripe.
              </p>
              <div className="text-sm text-muted space-y-2">
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
              <BookingWidget
                nightlyRate={NIGHTLY_RATE}
                cleaningFee={CLEANING_FEE}
              />
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
              We use Vikey to automate the entire check-in process. Your Italian
              legal registration (Alloggiati Web) and smart lock access are
              handled digitally — no paperwork, no key handoff.
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
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-accent text-xs uppercase tracking-[0.2em] font-medium mb-4">
            Location
          </p>
          <h2 className="font-serif text-3xl md:text-4xl mb-6">
            Carignano, Genoa
          </h2>
          <p className="text-muted leading-relaxed">
            Perched on Genoa&apos;s most elegant hilltop, Carignano offers
            panoramic views of the ancient port, historic palazzos, and a quiet
            residential atmosphere just minutes from the city center. Walk to the
            Basilica di Carignano, Via Roma boutiques, and the vibrant Porto
            Antico waterfront.
          </p>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="border-t border-border py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <div>
              <h3 className="font-serif text-lg mb-3">Casa Nina Carignano</h3>
              <p className="text-muted text-sm leading-relaxed">
                A premium short-stay apartment in Genoa, Italy. Designed for
                professionals who value focus, comfort, and style.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-3">
                Legal
              </h4>
              <div className="text-sm text-muted space-y-1.5">
                <p>
                  <strong className="text-foreground">CIN:</strong>{" "}
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
                <p>info@casanina.it</p>
                <p>Carignano, 16128 Genova GE</p>
              </div>
            </div>
          </div>
          <div className="mt-10 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted">
            <p>&copy; {new Date().getFullYear()} Casa Nina Carignano. All rights reserved.</p>
            <div className="flex items-center gap-1 text-xs">
              <ShieldCheck className="w-3 h-3" />
              <span>Vikey Smart Check-in &middot; Alloggiati Web Compliant</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
