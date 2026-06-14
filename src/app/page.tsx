/**
 * © 2026 Andrea Merella. All rights reserved.
 * https://casaninacarignano.com
 *
 * This source code is the exclusive intellectual property of Andrea Merella.
 * Unauthorised copying, reproduction, modification, distribution or use
 * of any part of this work — in whole or in part — is strictly prohibited
 * without prior written permission from the author.
 */
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
  Smartphone,
  UserCheck,
  DoorOpen,
  Users,
  Clock,
  Moon,
  Ban,
  Dog,
  Flame,
} from "lucide-react";
import IntroScreen from "@/components/IntroScreen";
import Header from "@/components/Header";
import FloatingBar from "@/components/FloatingBar";
import Gallery from "@/components/Gallery";
import BookingBanner from "@/components/BookingBanner";
import Guestbook from "@/components/Guestbook";
import Chatbot from "@/components/Chatbot";
import HeroContent from "@/components/HeroContent";
import MusicPlayer from "@/components/MusicPlayer";
import AboutSection from "@/components/AboutSection";
import GenovaIntro from "@/components/GenovaIntro";
import GenovaSails from "@/components/GenovaSails";
import GenovaVicoli from "@/components/GenovaVicoli";
import GenovaVignette from "@/components/GenovaVignette";
import GenovaBoccadasse from "@/components/GenovaBoccadasse";
import GenovaRolli from "@/components/GenovaRolli";
import GenovaFerraris from "@/components/GenovaFerraris";
import AnimateIn from "@/components/AnimateIn";
import EBikeModal from "@/components/EBikeModal";
import WeatherBadge from "@/components/WeatherBadge";
import VikeyWidget from "@/components/VikeyWidget";
import ScrollReset from "@/components/ScrollReset";
import ReviewsSection from "@/components/ReviewsSection";


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
      <ScrollReset />
      <IntroScreen />
      <Header />
      <FloatingBar />
      <main className="bg-background text-foreground">
        <Suspense>
          <BookingBanner />
        </Suspense>

        {/* ─── Hero ─── */}
        <section className="relative h-[85vh] w-full overflow-hidden bg-stone-900">
          {/* Drone video — Genova old town & harbour aerial */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source
              src="https://videos.pexels.com/video-files/6769886/6769886-uhd_2560_1440_25fps.mp4"
              type="video/mp4"
            />
            {/* Fallback: Italian coastal town aerial */}
            <source
              src="https://videos.pexels.com/video-files/32386611/13814563_1280_720_50fps.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

          {/* Weather badge */}
          <div className="absolute top-20 right-4 md:right-6 z-10">
            <WeatherBadge />
          </div>

          <HeroContent />
        </section>

        {/* ─── About ─── */}
        <section id="about" className="py-12 md:py-16 px-6">
          <AnimateIn>
            <AboutSection />
          </AnimateIn>
        </section>

        {/* ─── Sails ─── */}
        <GenovaSails />

        {/* ─── Gallery ─── */}
        <section id="gallery" className="py-16 md:py-24 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <AnimateIn className="text-center mb-10 md:mb-14">
              <p className="text-accent text-xs uppercase tracking-[0.12em] font-medium mb-4">
                The Apartment
              </p>
              <h2 className="font-serif text-3xl md:text-4xl mb-3">
                Your Home in Genova
              </h2>
              <p className="text-muted text-sm md:text-base max-w-xl mx-auto leading-relaxed">
                90 m² across the Carignano hill: garden view, double bedroom,
                full kitchen, and all the space you need to feel at home.
              </p>
            </AnimateIn>
            <Gallery />
          </div>
        </section>

        {/* ─── Funicolare Zecca-Righi ─── */}
        <GenovaVignette />

        {/* ─── Genova + Location ─── */}
        <section id="location" className="py-16 md:py-20 px-6 bg-card">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div>
                <GenovaIntro />
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {[
                    { src: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Boccadasse.jpg", alt: "Boccadasse" },
                    { src: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Palazzo_Ducale_piazza_Matteotti_2.JPG", alt: "Palazzo Ducale" },
                    { src: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Canneto_il_Curto_Genova_01.JPG", alt: "Caruggi" },
                    { src: "https://upload.wikimedia.org/wikipedia/commons/7/77/Porto_Antico_Genova_varie_02.jpg", alt: "Porto Antico" },
                  ].map(({ src, alt }) => (
                    <div key={alt} className="relative overflow-hidden rounded-xl aspect-[4/3] bg-border">
                      <Image src={src} alt={alt} fill className="object-cover hover:scale-105 transition-transform duration-700" sizes="20vw" />
                      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent text-white text-[10px] text-center py-2">{alt}</div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  {[
                    { label: "Corso Italia", value: "10 min walk" },
                    { label: "Boccadasse", value: "25 min walk" },
                    { label: "Porto Antico", value: "10 min by bus" },
                    { label: "Brignole station", value: "20 min walk" },
                  ].map(({ label, value }) => (
                    <div key={label} className="bg-background rounded-xl px-4 py-3">
                      <p className="font-medium">{label}</p>
                      <p className="text-muted text-xs mt-0.5">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden border border-border shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2838.2!2d8.9445!3d44.4056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d3430d3e5b5555%3A0x0!2sViale+Aspromonte+66%2C+16128+Genova+GE!5e0!3m2!1sen!2sit!4v1"
                  width="100%"
                  height="420"
                  style={{ border: 0, display: "block" }}
                  title="Casa Nina Carignano on Google Maps"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ─── Vicoli ─── */}
        <GenovaVicoli />

        {/* ─── Amenities ─── */}
        <section id="amenities" className="py-12 md:py-16 px-6 bg-card">
          <div className="max-w-5xl mx-auto">
            <AnimateIn className="text-center mb-14">
              <p className="text-accent text-xs uppercase tracking-[0.12em] font-medium mb-4">
                What&apos;s Included
              </p>
              <h2 className="font-serif text-3xl md:text-4xl">
                Everything You Need
              </h2>
            </AnimateIn>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
              {amenities.map(({ icon: Icon, label }, i) => (
                <AnimateIn key={label} delay={i * 60}>
                  <div className="flex items-center gap-3 card-hover p-2 rounded-xl">
                    <div className="w-10 h-10 rounded-xl bg-background flex items-center justify-center shrink-0">
                      <Icon className="w-[18px] h-[18px] text-accent" />
                    </div>
                    <span className="text-sm font-medium">{label}</span>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Boccadasse ─── */}
        <GenovaBoccadasse />

        {/* ─── Booking ─── */}
        <section id="booking" className="py-12 md:py-16 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <AnimateIn className="text-center mb-10">
              <p className="text-accent text-xs uppercase tracking-[0.12em] font-medium mb-4">Reserve</p>
              <h2 className="font-serif text-3xl md:text-4xl mb-4">Book Your Stay</h2>
              <p className="text-muted leading-relaxed max-w-xl mx-auto">
                Book directly for the best rate — no OTA commission. Secure payment and instant confirmation.
              </p>
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 mt-4 text-sm text-muted">
                <span><strong className="text-foreground">Min. stay:</strong> 2 nights</span>
                <span><strong className="text-foreground">Check-in:</strong> from 15:00</span>
                <span><strong className="text-foreground">Check-out:</strong> by 10:00</span>
              </div>
            </AnimateIn>

            <AnimateIn delay={100}>
              <Suspense>
                <VikeyWidget />
              </Suspense>
            </AnimateIn>
          </div>
        </section>

        {/* ─── Palazzi dei Rolli ─── */}
        <GenovaRolli />

        {/* ─── Reviews + Guestbook ─── */}
        <ReviewsSection />
        <Guestbook />

        {/* ─── House Rules ─── */}
        <section className="py-12 md:py-16 px-6 bg-card">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-accent text-xs uppercase tracking-[0.12em] font-medium mb-4">
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
        <section className="py-12 md:py-16 px-6 bg-foreground text-background">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-accent text-xs uppercase tracking-[0.12em] font-medium mb-4">
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

        {/* ─── E-Bikes ─── */}
        <section className="py-12 md:py-16 px-6 bg-card">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-accent text-xs uppercase tracking-[0.12em] font-medium mb-4">
                  Explore the City
                </p>
                <h2 className="font-serif text-3xl md:text-4xl mb-5">
                  E-Bikes Available
                </h2>
                <p className="text-muted leading-relaxed mb-4">
                  Discover Genova at your own pace with our two e-bikes.
                  Boccadasse, Corso Italia, the Porto Antico. all effortlessly
                  within reach. No hills are too steep.
                </p>
                <ul className="text-sm text-muted space-y-2 mb-8">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" /> 1 bike €25/day · both bikes €40/day</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" /> Free for stays of 7+ nights</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" /> Helmets and locks provided</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" /> Reach Boccadasse in 10 minutes</li>
                </ul>
                <EBikeModal />
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1719942333151-dd37a8d803df?w=800&auto=format&fit=crop&q=80"
                  alt="E-bikes by the sea at Casa Nina"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white text-sm font-medium">E-bikes from €25/day · both for €40</div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Stadio Luigi Ferraris ─── */}
        <GenovaFerraris />

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
                    <span className="font-mono text-xs">IT010025C2LWNJBQEM</span>
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
                    href="https://wa.me/393480048427"
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
      <MusicPlayer />
    </>
  );
}
