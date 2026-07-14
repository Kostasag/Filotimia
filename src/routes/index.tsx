import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import {
  Wifi,
  Wind,
  UtensilsCrossed,
  Sun,
  Waves,
  Car,
  Tv,
  Coffee,
  WashingMachine,
  Menu,
  X,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Map as MapIcon,
  ArrowRight,
  ArrowUpRight,
  Star,
  Users,
  Ruler,
  BedDouble,
  Bus,
  Zap,
  CircleParking,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import {
  apartments,
  BOOKING_URL,
  BOOKING_COM,
  PHONE,
  PHONE_TEL,
  INSTAGRAM_URL,
  GOOGLE_MAPS_URL,
} from "@/lib/apartments";
import { useLang, LanguageToggle } from "@/lib/i18n";
import coastlineSunset from "@/assets/coastline-sunset.png";
import heroMain from "@/assets/hero-main.jpg";
import heroInterior from "@/assets/img63.jpeg";
import galleryStone from "@/assets/img66.jpeg";
import galleryTerrace from "@/assets/img66-2.jpeg";
import aboutSmall from "@/assets/img4011.jpeg";
import gallerySeaView from "@/assets/img62.jpeg";
import galleryDining from "@/assets/img71.jpeg";
import galleryBedroom from "@/assets/img72.jpeg";
import galleryVeranda from "@/assets/img76.jpeg";
import galleryGarden from "@/assets/img68.jpeg";
import galleryDetail from "@/assets/img52.jpeg";
import galleryCoolRoom from "@/assets/img114.jpeg";
import heroVineyard from "@/assets/hero-vineyard.jpeg";
import heroTerrace from "@/assets/img68.jpeg";
import heroApartments from "@/assets/hero-vineyard.jpeg";
import beachesHero from "@/assets/beaches-hero.jpg";

export const Route = createFileRoute("/")({
  component: Home,
});

const amenities = [
  { icon: Wifi, label: { en: "Free Wi-Fi", el: "Δωρεάν Wi-Fi" } },
  { icon: Wind, label: { en: "Air Conditioning", el: "Κλιματισμός" } },
  { icon: UtensilsCrossed, label: { en: "Equipped Kitchen", el: "Εξοπλισμένη Κουζίνα" } },
  { icon: Sun, label: { en: "Private Terrace", el: "Ιδιωτική Βεράντα" } },
  { icon: Waves, label: { en: "Sea View", el: "Θέα στη Θάλασσα" } },
  { icon: Car, label: { en: "Private Parking", el: "Ιδιωτικό Πάρκινγκ" } },
  { icon: Tv, label: { en: "Smart TV", el: "Smart TV" } },
  { icon: Coffee, label: { en: "Coffee Machine", el: "Καφετιέρα" } },
  { icon: WashingMachine, label: { en: "Laundry on request", el: "Πλύσιμο ρούχων κατόπιν αιτήματος" } },
  { icon: Bus, label: { en: "Free transfer", el: "Δωρεάν μεταφορά" } },
  { icon: Zap, label: { en: "EV charging station", el: "Σταθμός φόρτισης ηλεκτρικών αυτοκινήτων" } },
  { icon: CircleParking, label: { en: "Parking space", el: "Χώρος στάθμευσης" } },
];

const gallery = [
  heroMain,
  heroInterior,
  galleryStone,
  galleryTerrace,
  gallerySeaView,
  galleryDining,
  galleryBedroom,
  galleryVeranda,
  galleryGarden,
  galleryDetail,
  galleryCoolRoom,
  heroVineyard,
];

const reviews = [
  {
    quote: {
      en: "Everything was perfect — very comfortable rooms, warm hosts and a great location for total peace.",
      el: "Όλα ήταν εξαιρετικά — πολύ άνετα δωμάτια, φιλόξενοι οικοδεσπότες και ιδανική τοποθεσία για απόλυτη ηρεμία.",
    },
    author: { en: "Nikos Ch.", el: "Νίκος Χ." },
    source: "Booking.com",
  },
  {
    quote: {
      en: "Very comfortable studio layout, a beautiful garden with herbs and an amazing sea view.",
      el: "Πολύ άνετο στούντιο, όμορφος κήπος με αρωματικά φυτά και εκπληκτική θέα στη θάλασσα.",
    },
    author: { en: "Paula Pt.", el: "Paula Pt." },
    source: "Booking.com",
  },
  {
    quote: {
      en: "Wonderful property, spotless and quiet, with a large terrace and breathtaking views.",
      el: "Υπέροχο κατάλυμα, πεντακάθαρο και ήσυχο, με μεγάλη βεράντα και μαγευτική θέα.",
    },
    author: { en: "Sabrina", el: "Sabrina" },
    source: "Booking.com",
  },
];

const navLinks = [
  { href: "#home", label: { en: "Home", el: "Αρχική" } },
  { href: "#apartments", label: { en: "Apartments", el: "Δωμάτια" } },
  { href: "/beaches", label: { en: "Beaches", el: "Παραλίες" }, external: true },
  { href: "#gallery", label: { en: "Gallery", el: "Γκαλερί" } },
  { href: "#location", label: { en: "Location", el: "Τοποθεσία" } },
  { href: "#contact", label: { en: "Contact", el: "Επικοινωνία" } },
];

const romans = ["I", "II", "III", "IV", "V", "VI"];

/* ---------------------------- Reveal helper ---------------------------- */

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
        visible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-6 blur-[2px]"
      } ${className}`}
    >
      {children}
    </div>
  );
}

/* -------------------------------- Nav --------------------------------- */

function Nav() {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const light = !scrolled && !open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-[#faf6ee]/95 backdrop-blur-md border-b border-[#e8dfcf]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 lg:px-10 py-5">
        <a
          href="#home"
          className={`flex items-baseline gap-2 font-serif text-2xl tracking-wide transition-colors ${
            light ? "text-white" : "text-navy"
          }`}
        >
          <span className="italic">Filotimia</span>
          <span
            className={`hidden sm:inline text-[9px] tracking-[0.45em] uppercase ${
              light ? "text-white/70" : "text-navy/50"
            }`}
          >
            — Schinoussa
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-[11px] tracking-[0.3em] uppercase transition-colors ${
                light ? "text-white/85 hover:text-white" : "text-navy/70 hover:text-navy"
              }`}
            >
              {t(l.label)}
            </a>
          ))}
          <LanguageToggle dark={light} />
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noreferrer"
            className={`group inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-[10px] font-medium uppercase tracking-[0.28em] transition-all duration-500 ${
              light
                ? "border-white/80 text-white hover:bg-white hover:text-navy"
                : "border-navy bg-navy text-white hover:bg-transparent hover:text-navy"
            }`}
          >
            {t({ en: "Reserve", el: "Κράτηση" })}
            <ArrowUpRight className="size-3" />
          </a>
        </nav>

        <button
          className={`lg:hidden ${light ? "text-white" : "text-navy"}`}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-[#e8dfcf] bg-[#faf6ee]">
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-4">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-[11px] tracking-[0.3em] uppercase text-navy/80"
              >
                {t(l.label)}
              </a>
            ))}
            <div className="py-3">
              <LanguageToggle />
            </div>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-2 rounded-full bg-navy px-5 py-3 text-center text-[11px] uppercase tracking-[0.3em] text-white"
            >
              {t({ en: "Reserve", el: "Κράτηση" })}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

/* -------------------------------- Hero -------------------------------- */

function Hero() {
  const { t } = useLang();
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const par = Math.min(scrollY * 0.18, 120);

  return (
    <section
      id="home"
      className="relative min-h-dvh w-full overflow-hidden bg-[#0e1622] text-white"
    >
      {/* Backdrop image — full bleed, subtle */}
      <div className="absolute inset-0">
        <img
          src={beachesHero}
          alt="Aegean coastline — Schinoussa"
          className="absolute inset-0 h-full w-full object-cover hero-kenburns-right"
          fetchPriority="high"
          decoding="async"
          style={{ transform: `translate3d(0, ${par * 0.25}px, 0) scale(1.06)` }}
        />
        {/* Warm veil */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,22,34,0.55)_0%,rgba(14,22,34,0.15)_35%,rgba(14,22,34,0.35)_70%,rgba(14,22,34,0.9)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_20%_60%,rgba(14,22,34,0.55),transparent_70%)]" />
      </div>

      {/* Top meta bar */}
      <div className="absolute inset-x-0 top-24 z-10 hidden md:flex items-center justify-between px-6 lg:px-12 text-white/70 hero-reveal">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-[#d4b57c]" />
          <span className="text-[10px] tracking-[0.45em] uppercase">
            {t({ en: "Est. Schinoussa · Small Cyclades", el: "Σχοινούσα · Μικρές Κυκλάδες" })}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[10px] tracking-[0.4em] uppercase">36.88° N · 25.51° E</span>
          <span className="h-px w-8 bg-[#d4b57c]" />
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto grid min-h-dvh max-w-[1400px] grid-cols-1 items-end gap-10 px-6 lg:px-12 pt-40 pb-24 md:pb-28 lg:grid-cols-12">
        {/* Headline */}
        <div className="lg:col-span-8 lg:col-start-1">
          <div className="hero-reveal hero-reveal-2 flex items-center gap-4 text-[10px] tracking-[0.5em] uppercase text-[#e9d9b8]">
            <span>N°01</span>
            <span className="h-px w-10 bg-[#e9d9b8]/50" />
            <span>{t({ en: "Your Island Escape", el: "Η απόδρασή σας στη Σχοινούσα" })}</span>
          </div>

          <h1 className="hero-reveal hero-reveal-3 mt-6 font-serif leading-[0.92] tracking-[-0.02em] text-[2rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[6rem] xl:text-[7rem]">
            <span className="block">{t({ en: "Where the", el: "Εκεί όπου το" })}</span>
            <span className="block italic font-light text-[#e9d9b8]">
              {t({ en: "Aegean rests.", el: "Αιγαίο ησυχάζει." })}
            </span>
          </h1>


          <div className="hero-reveal hero-reveal-5 mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-8">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex items-center gap-3 rounded-full border border-[#e9d9b8] bg-[#e9d9b8] px-8 py-4 text-[11px] font-medium uppercase tracking-[0.3em] text-[#1a2536] transition-all duration-500 hover:bg-transparent hover:text-[#e9d9b8]"
            >
              <span>{t({ en: "Reserve your stay", el: "Κάντε Κράτηση" })}</span>
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#apartments"
              className="group inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.3em] text-white/85 hover:text-white transition-colors"
            >
              <span className="relative">
                {t({ en: "Discover the apartments", el: "Δείτε τα Δωμάτια" })}
                <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-[#e9d9b8] transition-transform duration-500 group-hover:scale-x-100" />
              </span>
              <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Right-side image stack — asymmetric, minimal */}
        <div className="hero-reveal hero-reveal-4 hidden lg:block lg:col-span-4 lg:col-start-9 relative h-[70vh]">
          <div className="absolute right-0 top-4 w-[62%]">
            <div className="relative aspect-[3/4] overflow-hidden shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)]">
              <img
                src={heroInterior}
                alt="Filotimia interior"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-[1400ms] hover:scale-105"
              />
              <div className="absolute bottom-3 right-3 text-[9px] tracking-[0.35em] uppercase text-white/85">
                {t({ en: "The Interior", el: "Το Εσωτερικό" })}
              </div>
            </div>
          </div>
          <div className="absolute left-0 bottom-8 w-[58%]">
            <div className="relative aspect-[4/5] overflow-hidden shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)]">
              <img
                src={heroTerrace}
                alt="Filotimia terrace"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-[1400ms] hover:scale-105"
              />
              <div className="absolute bottom-3 left-3 text-[9px] tracking-[0.35em] uppercase text-white/85">
                {t({ en: "The Terrace", el: "Η Βεράντα" })}
              </div>
            </div>
          </div>
          {/* Tiny signature card */}
          <div className="absolute right-6 bottom-0 w-32 rotate-3 bg-[#faf6ee] p-2 pb-6 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.6)]">
            <div className="aspect-square overflow-hidden">
              <img src={heroVineyard} alt="Filotimia vineyard" loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div className="absolute bottom-1.5 left-0 right-0 text-center text-[7px] tracking-[0.35em] uppercase text-[#7a6b52]">
              {t({ en: "Vineyard", el: "Αμπέλι" })}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile secondary image */}
      <div className="lg:hidden relative z-10 -mt-8 mx-6 mb-16">
        <div className="grid grid-cols-3 gap-2">
          <div className="col-span-2 aspect-[4/5] overflow-hidden">
            <img src={heroInterior} alt="Filotimia interior" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div className="flex flex-col gap-2">
            <div className="aspect-square overflow-hidden">
              <img src={heroTerrace} alt="Filotimia terrace" loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div className="aspect-square overflow-hidden">
              <img src={heroVineyard} alt="Filotimia vineyard" loading="lazy" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom marquee band */}
      <div className="absolute inset-x-0 bottom-0 z-10 border-t border-white/10 overflow-hidden">
        <div className="flex whitespace-nowrap py-4 text-[10px] tracking-[0.5em] uppercase text-white/50 animate-[marquee_45s_linear_infinite]">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="inline-flex items-center gap-6 px-6">
              <span>Filotimia Apartments</span>
              <span className="text-[#d4b57c]">◈</span>
              <span>Schinoussa</span>
              <span className="text-[#d4b57c]">◈</span>
              <span>{t({ en: "Small Cyclades", el: "Μικρές Κυκλάδες" })}</span>
              <span className="text-[#d4b57c]">◈</span>
              <span>{t({ en: "A quiet luxury", el: "Μια ήσυχη πολυτέλεια" })}</span>
              <span className="text-[#d4b57c]">◈</span>
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}

/* --------------------------- Chapter heading -------------------------- */

function Chapter({
  n,
  eyebrow,
  title,
  className = "",
}: {
  n: string;
  eyebrow: { en: string; el: string };
  title: { en: string; el: string };
  className?: string;
}) {
  const { t } = useLang();
  return (
    <div className={className}>
      <div className="flex items-center gap-4 text-[10px] tracking-[0.5em] uppercase text-sea">
        <span className="font-serif italic text-lg text-navy/60 normal-case tracking-normal">
          Ch. {n}
        </span>
        <span className="h-px flex-1 max-w-16 bg-navy/20" />
        <span>{t(eyebrow)}</span>
      </div>
      <h2 className="mt-6 font-serif text-4xl md:text-6xl leading-[1.02] tracking-[-0.015em] text-navy">
        {t(title)}
      </h2>
    </div>
  );
}

/* -------------------------------- About ------------------------------- */

function About() {
  const { t } = useLang();
  return (
    <section id="about" className="bg-[#faf6ee] py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          {/* Image collage */}
          <Reveal className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={aboutSmall}
                  alt="Filotimia stone architecture"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-6 md:-right-12 w-44 md:w-56 aspect-[3/4] overflow-hidden border-[10px] border-[#faf6ee] shadow-2xl">
                <img
                  src={galleryStone}
                  alt="Filotimia stone doorway"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -top-6 -left-6 hidden md:block text-[10px] tracking-[0.4em] uppercase text-navy/50">
                Fig. 01 — {t({ en: "The Stone House", el: "Το Πέτρινο Σπίτι" })}
              </div>
            </div>
          </Reveal>

          {/* Text */}
          <Reveal className="lg:col-span-6 lg:col-start-7" delay={150}>
            <Chapter
              n="I"
              eyebrow={{ en: "Our Story", el: "Η Ιστορία μας" }}
              title={{
                en: "A quiet paradise in the Small Cyclades.",
                el: "Ένας ήσυχος παράδεισος στις Μικρές Κυκλάδες.",
              }}
            />

            <div className="mt-10 space-y-6 text-[15px] md:text-[16px] leading-[1.85] text-navy/75">
              <p>
                <span className="float-left mr-3 mt-1 font-serif text-[4.5rem] leading-[0.75] text-navy">
                  {t({ en: "S", el: "Η" })}
                </span>
                {t({
                  en: "chinoussa is a small, picturesque island at the heart of the Small Cyclades — south of Naxos and northeast of Iraklia. With an area of just ~8 km² and around 200 residents, it is made for slow, authentic, peaceful holidays.",
                  el: " Σχοινούσα είναι ένα μικρό, γραφικό νησί στην καρδιά των Μικρών Κυκλάδων — νότια της Νάξου και βορειοανατολικά της Ηρακλειάς. Με έκταση ~8 τ.χλμ. και περίπου 200 κατοίκους, είναι φτιαγμένη για αργές, αυθεντικές, γαλήνιες διακοπές.",
                })}
              </p>
              <p>
                {t({
                  en: "Filotimia sits above the sea, built from local stone and shaped by the light. Every apartment opens onto a private veranda, framed by a garden of aromatic herbs and the endless blue of the Aegean.",
                  el: "Το Filotimia βρίσκεται πάνω από τη θάλασσα, χτισμένο από ντόπια πέτρα και σμιλευμένο από το φως. Κάθε διαμέρισμα ανοίγει σε ιδιωτική βεράντα, ανάμεσα σε κήπο με αρωματικά βότανα και το ατελείωτο γαλάζιο του Αιγαίου.",
                })}
              </p>
            </div>

            <div className="mt-12 border-t border-navy/15 pt-8">
              <p className="font-serif italic text-2xl md:text-3xl text-navy leading-tight">
                “{t({ en: "A true refuge of tranquility.", el: "Ένα αληθινό καταφύγιο γαλήνης." })}”
              </p>
            </div>

            {/* Small facts */}
            <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-navy/15 pt-8 text-navy">
              <div>
                <dt className="text-[10px] tracking-[0.35em] uppercase text-navy/50">
                  {t({ en: "Island", el: "Νησί" })}
                </dt>
                <dd className="mt-2 font-serif text-lg">Schinoussa</dd>
              </div>
              <div>
                <dt className="text-[10px] tracking-[0.35em] uppercase text-navy/50">
                  {t({ en: "Area", el: "Έκταση" })}
                </dt>
                <dd className="mt-2 font-serif text-lg">~8 km²</dd>
              </div>
              <div>
                <dt className="text-[10px] tracking-[0.35em] uppercase text-navy/50">
                  {t({ en: "Residents", el: "Κάτοικοι" })}
                </dt>
                <dd className="mt-2 font-serif text-lg">~200</dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- Apartments ----------------------------- */

function Apartments() {
  const { t } = useLang();
  return (
    <section id="apartments" className="bg-[#faf9f6] py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-12">
        <Reveal className="max-w-3xl">
          <Chapter
            n="II"
            eyebrow={{ en: "Rooms & Apartments", el: "Δωμάτια & Διαμερίσματα" }}
            title={{
              en: "Four spaces, one philosophy.",
              el: "Τέσσερις χώροι, μία φιλοσοφία.",
            }}
          />
          <p className="mt-8 max-w-xl text-[15px] leading-[1.85] text-navy/70">
            {t({
              en: "Each apartment is a considered composition of stone, linen, and Aegean light — quietly luxurious, effortlessly welcoming.",
              el: "Κάθε διαμέρισμα είναι μια προσεγμένη σύνθεση από πέτρα, λινό και αιγαιοπελαγίτικο φως — διακριτικά πολυτελές, αβίαστα φιλόξενο.",
            })}
          </p>
        </Reveal>

        <div className="mt-20 md:mt-28 space-y-24 md:space-y-36">
          {apartments.map((a, i) => {
            const flip = i % 2 === 1;
            const RoomContent = () => (
              <>
                <div className="flex items-center gap-4">
                  <span className="font-serif italic text-3xl text-sea/60">{romans[i]}</span>
                  <div className="h-px flex-1 max-w-20 bg-navy/10" />
                </div>
                <h3 className="mt-5 font-serif text-2xl md:text-3xl lg:text-4xl text-navy leading-[1.05]">
                  {t(a.nameI18n)}
                </h3>
                <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[11px] uppercase tracking-[0.25em] text-navy/60">
                  <span className="inline-flex items-center gap-2">
                    <Users className="size-3.5" strokeWidth={1.5} /> {a.guests} {t({ en: "guests", el: "άτομα" })}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Ruler className="size-3.5" strokeWidth={1.5} /> {t(a.sizeI18n)}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <BedDouble className="size-3.5" strokeWidth={1.5} /> {t(a.bedI18n)}
                  </span>
                </div>
                <p className="mt-6 text-[15px] leading-[1.85] text-navy/75">{t(a.descI18n)}</p>
                <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <Link
                    to="/rooms/$slug"
                    params={{ slug: a.slug }}
                    target="_blank"
                    rel="noreferrer"
                    className="group/link inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.28em] text-navy transition-colors hover:text-sea"
                  >
                    {t({ en: "View Details & Book", el: "Λεπτομέρειες & Κράτηση" })}
                    <ArrowUpRight className="size-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </Link>
                  <span className="hidden sm:inline h-4 w-px bg-navy/20" />
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[11px] uppercase tracking-[0.28em] text-navy/60 hover:text-navy transition-colors"
                  >
                    {t({ en: "Reserve now", el: "Κάντε κράτηση" })}
                  </a>
                </div>
              </>
            );

            return (
              <Reveal key={a.slug}>
                <article className="group relative">
                  {/* Watermark chapter number */}
                  <span
                    className={`pointer-events-none absolute top-0 z-0 font-serif text-[8rem] md:text-[12rem] leading-none italic text-navy/[0.04] select-none transition-transform duration-[1400ms] group-hover:translate-x-2 ${
                      flip ? "right-0 lg:right-8" : "left-0 lg:left-8"
                    }`}
                    aria-hidden="true"
                  >
                    {romans[i]}
                  </span>

                  {/* Floating image + text composition */}
                  <div className="relative grid grid-cols-1 lg:grid-cols-12 lg:items-center gap-0">
                    {/* Image + desktop panel */}
                    <div
                      className={`relative z-10 lg:col-span-8 ${
                        flip ? "lg:col-start-5" : "lg:col-start-1"
                      }`}
                    >
                      <div className="relative aspect-[16/10] overflow-hidden bg-stone-light">
                        <img
                          src={a.image}
                          alt={t(a.nameI18n)}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-[1.04]"
                        />
                        <span className="absolute left-4 top-4 md:left-5 md:top-5 font-serif text-[10px] tracking-[0.3em] uppercase text-white/90">
                          N°0{i + 1}
                        </span>
                      </div>

                      {/* Desktop floating panel — positioned away from the image */}
                      <div
                        className={`hidden lg:block absolute z-20 bottom-8 w-[48%] max-w-[360px] bg-[#faf9f6]/95 backdrop-blur-sm p-8 lg:p-10 border border-navy/10 shadow-[0_25px_60px_-20px_rgba(14,22,34,0.12)] ${
                          flip ? "left-0 -translate-x-[55%]" : "right-0 translate-x-[55%]"
                        }`}
                      >
                        <RoomContent />
                      </div>
                    </div>

                    {/* Mobile panel below image */}
                    <div className="lg:hidden relative z-20 mt-10 mx-5 md:mx-10 bg-[#faf9f6] p-7 md:p-9 border border-navy/10 shadow-[0_20px_50px_-15px_rgba(14,22,34,0.1)]">
                      <RoomContent />
                    </div>
                  </div>

                  {/* Subtle divider line */}
                  <div className="absolute -bottom-12 left-0 right-0 h-px bg-navy/5 lg:hidden" />
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Amenities ----------------------------- */

function Amenities() {
  const { t } = useLang();
  return (
    <section className="relative overflow-hidden bg-[#0e1622] text-white py-28 md:py-40">
      {/* Soft radial glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(55%_55%_at_50%_50%,rgba(233,217,184,0.08),transparent_70%)]" />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <Reveal className="lg:col-span-6">
            <div className="flex items-center gap-4 text-[10px] tracking-[0.45em] uppercase text-[#e9d9b8]">
              <span className="font-serif italic text-lg text-white/60 normal-case tracking-normal">
                Ch. III
              </span>
              <span className="h-px flex-1 max-w-16 bg-white/25" />
              <span>{t({ en: "Amenities", el: "Παροχές" })}</span>
            </div>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.02] tracking-[-0.015em]">
              {t({
                en: "Everything you need.",
                el: "Ό,τι χρειάζεστε.",
              })}
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-5 lg:col-start-8" delay={150}>
            <p className="text-[15px] leading-[1.85] text-white/75">
              {t({
                en: "Everything you need for a comfortable and relaxing stay in Schinoussa.",
                el: "Όλες οι απαραίτητες παροχές για μια άνετη και ξέγνοιαστη διαμονή στη Σχοινούσα.",
              })}
            </p>
          </Reveal>
        </div>

        {/* Bento-style amenity grid */}
        <div className="mt-16 md:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {amenities.map((a, i) => (
            <Reveal key={a.label.en} delay={(i % 3) * 80}>
              <div className="group relative flex items-center gap-4 md:gap-5 rounded-xl border border-white/10 bg-white/[0.03] p-5 md:p-6 backdrop-blur-sm transition-all duration-500 hover:bg-white/[0.08] hover:border-[#e9d9b8]/30 hover:-translate-y-1">
                <div className="grid shrink-0 place-items-center rounded-full bg-white/5 size-12 md:size-14 transition-colors duration-500 group-hover:bg-[#e9d9b8]/10">
                  <a.icon className="size-5 md:size-6 text-[#e9d9b8]" strokeWidth={1.3} />
                </div>
                <div className="min-w-0">
                  <span className="font-serif text-lg md:text-xl leading-tight text-white block">
                    {t(a.label)}
                  </span>
                  <span className="mt-1.5 font-serif italic text-[11px] text-white/30 tracking-wide">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- Beaches teaser --------------------------- */

function BeachesTeaser() {
  const { t } = useLang();
  return (
    <section className="relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh]">
        {/* Image side */}
        <div className="relative min-h-[50vh] lg:min-h-[70vh]">
          <img
            src={coastlineSunset}
            alt="Schinoussa coastline"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute left-6 top-6 text-[10px] tracking-[0.4em] uppercase text-white/85">
            Fig. 02 — {t({ en: "The Coastline", el: "Η Ακτογραμμή" })}
          </div>
        </div>

        {/* Text side */}
        <div className="relative bg-[#e9d9b8] text-navy flex items-center">
          <div className="max-w-xl px-6 lg:px-16 py-20 lg:py-28">
            <Reveal>
              <span className="text-[10px] tracking-[0.5em] uppercase text-navy/60">
                {t({ en: "The Coastline", el: "Η Ακτογραμμή" })} · Ch. IV
              </span>
              <h2 className="mt-6 font-serif text-4xl md:text-6xl leading-[1.02] tracking-[-0.015em]">
                {t({
                  en: "Discover the beaches of Schinoussa.",
                  el: "Ανακαλύψτε τις παραλίες της Σχοινούσας.",
                })}
              </h2>
              <p className="mt-8 text-[15px] leading-[1.85] text-navy/75">
                {t({
                  en: "Crystal-clear waters, untouched coves, golden sand and peaceful swimming spots — all only minutes from Filotimia Apartments.",
                  el: "Κρυστάλλινα νερά, ανέγγιχτοι όρμοι, χρυσαφένια άμμος και γαλήνια σημεία για κολύμπι — όλα μόλις λίγα λεπτά από τα Filotimia Apartments.",
                })}
              </p>
              <Link
                to="/beaches"
                className="group mt-10 inline-flex items-center gap-3 border-b border-navy pb-1 text-[11px] font-medium uppercase tracking-[0.3em] text-navy"
              >
                {t({ en: "Explore Beaches", el: "Δείτε τις Παραλίες" })}
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- Gallery ------------------------------ */

function Gallery() {
  const { t } = useLang();
  const [lightbox, setLightbox] = useState<string | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setLightbox(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Bento layout spans
  const spans = [
    "col-span-2 row-span-2",
    "col-span-1 row-span-1",
    "col-span-1 row-span-2",
    "col-span-1 row-span-1",
    "col-span-2 row-span-1",
    "col-span-1 row-span-1",
    "col-span-1 row-span-2",
    "col-span-1 row-span-1",
    "col-span-2 row-span-1",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
  ];

  return (
    <section id="gallery" className="bg-[#faf6ee] py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Reveal className="max-w-3xl">
          <Chapter
            n="V"
            eyebrow={{ en: "Gallery", el: "Γκαλερί" }}
            title={{ en: "Moments at Filotimia.", el: "Στιγμές στην Φιλοτιμία." }}
          />
        </Reveal>

        {/* Desktop: bento grid */}
        <div className="mt-16 hidden md:grid grid-cols-4 auto-rows-[180px] lg:auto-rows-[220px] gap-3 lg:gap-4">
          {gallery.map((src, i) => (
            <Reveal key={src} className={spans[i % spans.length]} delay={(i % 6) * 60}>
              <button
                onClick={() => setLightbox(src)}
                className="group block h-full w-full overflow-hidden bg-stone-light focus:outline-none focus:ring-2 focus:ring-sea"
                aria-label={`Open image ${i + 1}`}
              >
                <img
                  src={src}
                  alt={`Filotimia gallery ${i + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-[1.06]"
                />
              </button>
            </Reveal>
          ))}
        </div>

        {/* Mobile: columns */}
        <div className="mt-14 md:hidden columns-2 gap-3 [&>*]:mb-3">
          {gallery.map((src, i) => (
            <button
              key={src}
              onClick={() => setLightbox(src)}
              className="block w-full overflow-hidden bg-stone-light"
              aria-label={`Open image ${i + 1}`}
            >
              <img src={src} alt={`Filotimia gallery ${i + 1}`} loading="lazy" className="w-full" />
            </button>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 p-4 fade-in"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute right-6 top-6 text-white/80 hover:text-white"
            aria-label="Close"
          >
            <X className="size-8" />
          </button>
          <img
            src={lightbox}
            alt="Enlarged"
            className="max-h-[90vh] max-w-[92vw] object-contain"
          />
        </div>
      )}
    </section>
  );
}

/* ------------------------------ Location ------------------------------ */

function Location() {
  const { t } = useLang();
  return (
    <section id="location" className="bg-white py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          <Reveal className="lg:col-span-5">
            <Chapter
              n="VI"
              eyebrow={{ en: "Location", el: "Τοποθεσία" }}
              title={{
                en: "Our Location",
                el: "Πού θα μας βρείτε",
              }}
            />
            <p className="mt-8 text-[15px] leading-[1.85] text-navy/75">
              {t({
                en: "Schinoussa is a walkable island of two villages, Chora and Messaria, surrounded by crystalline waters, golden beaches, and raw Cycladic landscapes. Filotimia sits moments from the sea, a short walk from tavernas, and just minutes from the port.",
                el: "Η Σχοινούσα είναι ένα ήσυχο κυκλαδίτικο νησί με δύο παραδοσιακούς οικισμούς, τη Χώρα και τη Μεσσαριά, που περιβάλλεται από κρυστάλλινα νερά, χρυσαφένιες παραλίες και αυθεντικά κυκλαδίτικα τοπία. Τα Filotimia Apartments βρίσκονται σε ιδανική τοποθεσία, λίγα μόλις λεπτά από τη θάλασσα, σε κοντινή απόσταση με τα πόδια από παραδοσιακές ταβέρνες και μόλις λίγα λεπτά από το λιμάνι.",
              })}
            </p>

            <dl className="mt-12 grid grid-cols-2 gap-8 border-t border-navy/15 pt-8">
              <div>
                <dt className="text-[10px] uppercase tracking-[0.35em] text-navy/50">
                  {t({ en: "Port", el: "Λιμάνι" })}
                </dt>
                <dd className="mt-2 font-serif text-2xl text-navy">
                  {t({ en: "~1 km · Chora", el: "~1 χλμ. · Χώρα" })}
                </dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.35em] text-navy/50">
                  {t({ en: "Port", el: "Λιμάνι" })}
                </dt>
                <dd className="mt-2 font-serif text-2xl text-navy">
                  {t({ en: "~2.5 km", el: "~2,5 χλμ." })}
                </dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.35em] text-navy/50">
                  {t({ en: "Coordinates", el: "Συντεταγμένες" })}
                </dt>
                <dd className="mt-2 font-serif text-2xl text-navy">36.88° N · 25.51° E</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.35em] text-navy/50">
                  {t({ en: "Region", el: "Περιοχή" })}
                </dt>
                <dd className="mt-2 font-serif text-2xl text-navy">
                  {t({ en: "Small Cyclades", el: "Μικρές Κυκλάδες" })}
                </dd>
              </div>
            </dl>

            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noreferrer"
              className="group mt-10 inline-flex items-center gap-3 border-b border-navy pb-1 text-[11px] font-medium uppercase tracking-[0.3em] text-navy"
            >
              {t({ en: "Open in Google Maps", el: "Άνοιγμα στους Χάρτες" })}
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={150}>
            <div className="overflow-hidden aspect-[4/3] bg-stone-light shadow-[0_30px_60px_-30px_rgba(14,22,34,0.35)]">
              <iframe
                title="Filotimia Apartments location on the map"
                src="https://www.google.com/maps?q=Schoinoussa,Small%20Cyclades,Greece&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Reviews ------------------------------ */

function Reviews() {
  const { t } = useLang();
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % reviews.length), 7000);
    return () => clearInterval(id);
  }, []);
  const r = reviews[i];

  return (
    <section className="relative overflow-hidden bg-[#faf6ee] py-28 md:py-40">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <div className="flex items-center justify-center gap-4 text-[10px] tracking-[0.5em] uppercase text-sea">
            <span className="h-px w-10 bg-navy/25" />
            <span>{t({ en: "Guest Reviews", el: "Αξιολογήσεις Επισκεπτών" })}</span>
            <span className="h-px w-10 bg-navy/25" />
          </div>

          <div className="mt-6 flex items-center justify-center gap-1 text-[#c9a34d]">
            {Array.from({ length: 5 }).map((_, k) => (
              <Star key={k} className="size-4 fill-current" />
            ))}
          </div>

          <blockquote
            key={i}
            className="mt-10 font-serif italic text-3xl md:text-5xl leading-[1.15] text-navy fade-in"
          >
            “{t(r.quote)}”
          </blockquote>

          <div className="mt-10 text-[11px] tracking-[0.35em] uppercase text-navy/70">
            <span className="font-medium">{t(r.author)}</span>
            <span className="mx-3 text-navy/30">·</span>
            <span>{r.source}</span>
          </div>

          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              onClick={() => setI((n) => (n - 1 + reviews.length) % reviews.length)}
              className="grid size-10 place-items-center rounded-full border border-navy/20 text-navy hover:bg-navy hover:text-white transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="size-4" />
            </button>
            <div className="flex items-center gap-2">
              {reviews.map((_, k) => (
                <button
                  key={k}
                  onClick={() => setI(k)}
                  aria-label={`Review ${k + 1}`}
                  className={`h-[3px] transition-all ${
                    k === i ? "w-8 bg-navy" : "w-3 bg-navy/25"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => setI((n) => (n + 1) % reviews.length)}
              className="grid size-10 place-items-center rounded-full border border-navy/20 text-navy hover:bg-navy hover:text-white transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>

          <a
            href={BOOKING_COM}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-navy/70 hover:text-navy"
          >
            {t({ en: "Read more on Booking.com", el: "Περισσότερες στο Booking.com" })}
            <ArrowUpRight className="size-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------------------- Booking CTA ---------------------------- */

function BookingCTA() {
  const { t } = useLang();
  return (
    <section id="book" className="relative overflow-hidden">
      <img
        src={heroApartments}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(14,22,34,0.85),rgba(14,22,34,0.65))]" />
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12 py-28 md:py-40 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <Reveal className="lg:col-span-7">
            <span className="text-[10px] tracking-[0.5em] uppercase text-[#e9d9b8]">
              {t({ en: "Reserve directly", el: "Κάντε την Κράτησή σας Απευθείας" })}
            </span>
            <h2 className="mt-6 font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.02] tracking-[-0.015em]">
              {t({
                en: "Book direct for the best price.",
                el: "Κλείστε απευθείας για την καλύτερη τιμή.",
              })}
            </h2>
            <p className="mt-8 max-w-xl text-[15px] leading-[1.85] text-white/80">
              {t({
                en: "Reach out with any question about your stay.",
                el: "Είμαστε πάντα στη διάθεσή σας για οποιαδήποτε πληροφορία σχετικά με τη διαμονή σας.",
              })}
            </p>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={150}>
            <div className="flex flex-col gap-4">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between gap-4 rounded-full bg-[#e9d9b8] px-8 py-5 text-[11px] font-medium uppercase tracking-[0.3em] text-navy transition-all hover:bg-white"
              >
                {t({ en: "Check Availability", el: "Έλεγχος Διαθεσιμότητας" })}
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="mailto:info@filotimia.gr"
                className="group flex items-center justify-between gap-4 rounded-full border border-white/60 px-8 py-5 text-[11px] font-medium uppercase tracking-[0.3em] text-white transition-all hover:bg-white/10"
              >
                {t({ en: "Contact the Hosts", el: "Επικοινωνήστε Μαζί Μας" })}
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href={`tel:${PHONE_TEL}`}
                className="mt-2 flex items-center justify-center gap-3 text-[11px] tracking-[0.3em] uppercase text-white/70 hover:text-white"
              >
                <Phone className="size-3.5" />
                {PHONE}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Footer ------------------------------ */

function Footer() {
  const { t } = useLang();
  return (
    <footer id="contact" className="bg-[#0e1622] text-white/85">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="font-serif text-4xl italic text-white">Filotimia</div>
            <p className="mt-6 max-w-sm text-[14px] leading-[1.85] text-white/60">
              {t({
                en: "Luxury stone apartments on Schinoussa, Small Cyclades. A quiet island escape shaped by authentic Greek hospitality.",
                el: "Πολυτελή πέτρινα διαμερίσματα στη Σχοινούσα, Μικρές Κυκλάδες. Μια ήσυχη νησιωτική απόδραση με αυθεντική ελληνική φιλοξενία.",
              })}
            </p>
            <div className="mt-8 flex gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="grid size-10 place-items-center rounded-full border border-white/20 hover:bg-white hover:text-navy transition-colors"
              >
                <Instagram className="size-4" />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="grid size-10 place-items-center rounded-full border border-white/20 hover:bg-white hover:text-navy transition-colors"
              >
                <Facebook className="size-4" />
              </a>
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Google Maps"
                className="grid size-10 place-items-center rounded-full border border-white/20 hover:bg-white hover:text-navy transition-colors"
              >
                <MapIcon className="size-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-[10px] uppercase tracking-[0.35em] text-white/40">
              {t({ en: "Explore", el: "Εξερεύνηση" })}
            </h3>
            <ul className="mt-6 space-y-3 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-white/75 hover:text-white transition-colors">
                    {t(l.label)}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#e9d9b8] font-medium"
                >
                  {t({ en: "Book Now", el: "Κράτηση" })}
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h3 className="text-[10px] uppercase tracking-[0.35em] text-white/40">
              {t({ en: "Contact", el: "Επικοινωνία" })}
            </h3>
            <ul className="mt-6 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-[#e9d9b8]" />
                <span className="text-white/75">
                  {t({
                    en: "Schinoussa, Small Cyclades, Greece",
                    el: "Σχοινούσα, Μικρές Κυκλάδες, Ελλάδα",
                  })}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-[#e9d9b8]" />
                <a href={`tel:${PHONE_TEL}`} className="text-white/75 hover:text-white">
                  {PHONE}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-[#e9d9b8]" />
                <a href="mailto:info@filotimia.gr" className="text-white/75 hover:text-white">
                  info@filotimia.gr
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/10 pt-8 text-[11px] tracking-[0.2em] uppercase text-white/40">
          <p>
            © {new Date().getFullYear()} Filotimia Apartments ·{" "}
            {t({ en: "All rights reserved.", el: "Με επιφύλαξη κάθε νόμιμου δικαιώματος." })}
          </p>
          <p>Schinoussa · Small Cyclades · Greece</p>
        </div>
      </div>
    </footer>
  );
}

/* -------------------------------- Home -------------------------------- */

function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Apartments />
      <Amenities />
      <BeachesTeaser />
      <Gallery />
      <Location />
      <Reviews />
      <BookingCTA />
      <Footer />
    </main>
  );
}
