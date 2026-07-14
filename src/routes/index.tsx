import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
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
  Star,
  Users,
  Ruler,
  BedDouble,
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
import heroApartments from "@/assets/hero-vineyard.jpeg";
import coastlineSunset from "@/assets/coastline-sunset.png";
import heroMain from "@/assets/hero-main.jpg";
import heroInterior from "@/assets/img63.jpeg";
import galleryStone from "@/assets/img66.jpeg";
import galleryTerrace from "@/assets/img66-2.jpeg";
import gallerySeaView from "@/assets/img62.jpeg";
import galleryDining from "@/assets/img71.jpeg";
import galleryBedroom from "@/assets/img72.jpeg";
import galleryVeranda from "@/assets/img76.jpeg";
import galleryGarden from "@/assets/img68.jpeg";
import galleryDetail from "@/assets/img52.jpeg";
import galleryCoolRoom from "@/assets/img114.jpeg";
import heroVineyard from "@/assets/hero-vineyard.jpeg";
import heroTerrace from "@/assets/img68.jpeg";


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
  heroApartments,
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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-background/90 backdrop-blur-md border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:py-5">
        <a
          href="#home"
          className={`font-serif text-xl md:text-2xl tracking-wide ${
            scrolled || open ? "text-navy" : "text-white"
          }`}
        >
          Filotimia
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm tracking-wide transition-colors ${
                scrolled ? "text-foreground/80 hover:text-navy" : "text-white/90 hover:text-white"
              }`}
            >
              {t(l.label)}
            </a>
          ))}
          <LanguageToggle dark={!scrolled && !open} />
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-navy px-5 py-2.5 text-sm font-medium text-white transition-all hover:opacity-90 hover:shadow-lg"
          >
            {t({ en: "Book Now", el: "Κράτηση" })}
          </a>
        </nav>

        <button
          className={`md:hidden ${scrolled || open ? "text-navy" : "text-white"}`}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border/60 bg-background">
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-4">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base text-foreground/80"
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
              className="mt-2 rounded-full bg-navy px-5 py-3 text-center text-sm font-medium text-white"
            >
              {t({ en: "Book Now", el: "Κράτηση" })}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  const { t } = useLang();
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const parallax = Math.min(scrollY * 0.25, 180);

  return (
    <section
      id="home"
      className="relative min-h-dvh w-full overflow-hidden bg-[#0a0f16]"
    >
      {/* Full-bleed cinematic backdrop */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 will-change-transform"
          style={{ transform: `translateY(${parallax * 0.3}px) scale(1.04)` }}
        >
          <img
            src={heroMain}
            alt="Aegean coastline — Schinoussa"
            className="absolute inset-0 h-full w-full object-cover hero-kenburns-right"
            fetchPriority="high"
            decoding="async"
            style={{
              filter: "contrast(1.04) saturate(1.05)",
              transform: "translateZ(0)",
            }}
          />
        </div>

        {/* Clean editorial grade — lighter, lets the sea breathe */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,15,22,0.35)_0%,rgba(10,15,22,0.05)_35%,rgba(10,15,22,0.15)_65%,rgba(10,15,22,0.85)_100%)]" />
        {/* Left column readability wash */}
        <div className="absolute inset-y-0 left-0 w-full md:w-2/3 bg-[linear-gradient(90deg,rgba(10,15,22,0.7)_0%,rgba(10,15,22,0.25)_45%,transparent_75%)]" />
      </div>

      {/* Top hairline meta bar */}
      <div className="hero-reveal absolute inset-x-0 top-20 md:top-24 z-10 hidden md:flex items-center justify-between px-8 lg:px-16 text-white/70">
        <div className="flex items-center gap-3">
          <span className="h-px w-10 bg-[#d4b57c]" />
          <span className="text-[10px] tracking-[0.5em] uppercase">
            {t({ en: "Schinoussa · Small Cyclades", el: "Σχοινούσα · Μικρές Κυκλάδες" })}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[10px] tracking-[0.4em] uppercase">36.88° N · 25.51° E</span>
          <span className="h-px w-10 bg-[#d4b57c]" />
        </div>
      </div>

      {/* Editorial content — single focused column */}
      <div className="relative z-10 mx-auto flex min-h-dvh max-w-7xl flex-col justify-end px-6 lg:px-16 pb-28 md:pb-32 pt-40">
        <div className="max-w-3xl">

          <h1 className="hero-reveal hero-reveal-2 mt-6 font-serif text-white leading-[0.98] tracking-[-0.02em] text-[2.5rem] sm:text-6xl md:text-7xl lg:text-[6rem]">
            {t({ en: "A quiet luxury", el: "Μια ήσυχη" })}
            <br />
            <span className="italic font-light text-[#e9d9b8]">
              {t({ en: "by the Aegean.", el: "πολυτέλεια στο Αιγαίο." })}
            </span>
          </h1>

          <p className="hero-reveal hero-reveal-3 mt-8 max-w-xl text-[14px] md:text-[15px] text-white/80 leading-[1.75]">
            {t({
              en: "Stone-built apartments woven into a hillside above the sea — a boutique retreat crafted for slow mornings, unhurried afternoons, and evenings measured in soft light.",
              el: "Πέτρινα διαμερίσματα σε μια πλαγιά πάνω από τη θάλασσα — ένα μπουτίκ καταφύγιο φτιαγμένο για αργά πρωινά, ανέμελα απογεύματα και βράδια μετρημένα σε απαλό φως.",
            })}
          </p>

          <div className="hero-reveal hero-reveal-4 mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-8">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex items-center gap-3 rounded-full border border-[#e9d9b8] bg-[#e9d9b8] px-8 py-4 text-[11px] font-medium uppercase tracking-[0.28em] text-[#1a2536] transition-all duration-500 hover:bg-transparent hover:text-[#e9d9b8]"
            >
              <span>{t({ en: "Reserve your stay", el: "Κάντε Κράτηση" })}</span>
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#apartments"
              className="group inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.28em] text-white/85 hover:text-white transition-colors"
            >
              <span className="relative">
                {t({ en: "Discover the apartments", el: "Δείτε τα Δωμάτια" })}
                <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-[#e9d9b8] transition-transform duration-500 group-hover:scale-x-100" />
              </span>
              <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Inline social proof row */}
          <div className="hero-reveal hero-reveal-5 mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 text-white/70">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-0.5 text-[#e9d9b8]">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="size-3 fill-current" />
                ))}
              </div>
              <span className="text-[10px] tracking-[0.28em] uppercase">
                {t({ en: "Loved on Booking", el: "Booking.com" })}
              </span>
            </div>
            <span className="hidden sm:block h-3 w-px bg-white/25" />
            <span className="text-[10px] tracking-[0.28em] uppercase">
              {t({ en: "Sea-view balconies", el: "Μπαλκόνια με θέα" })}
            </span>
            <span className="hidden sm:block h-3 w-px bg-white/25" />
            <span className="text-[10px] tracking-[0.28em] uppercase">
              {t({ en: "Steps from the beach", el: "Δίπλα στην παραλία" })}
            </span>
          </div>
        </div>

        {/* Canvas gallery cluster — img63, hero-vineyard, img308 */}
        <div className="hidden lg:block absolute right-0 xl:right-4 top-1/2 -translate-y-1/2">
          <div className="relative flex flex-col items-center">
            {/* Frame 1 — img63.jpeg */}
            <div className="relative z-30 w-52 xl:w-60 -rotate-1 transition-transform duration-700 hover:rotate-0 hover:scale-[1.02]">
              <div className="rounded-sm bg-[#f5f1e8] p-2.5 pb-9 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.45)]">
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-[#e6e0d2]">
                  <img
                    src={heroInterior}
                    alt="Filotimia interior detail"
                    className="h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 pointer-events-none opacity-[0.08] bg-[linear-gradient(45deg,transparent_48%,#8b7a5a_50%,transparent_52%),linear-gradient(-45deg,transparent_48%,#8b7a5a_50%,transparent_52%)] bg-[length:6px_6px]" />
                </div>
                <div className="absolute bottom-3 left-0 right-0 text-center">
                  <span className="text-[8px] tracking-[0.3em] uppercase text-[#7a6b52]">
                    {t({ en: "Interior", el: "Εσωτερικό" })}
                  </span>
                </div>
              </div>
              <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-[#d4b57c] shadow-sm ring-2 ring-[#f5f1e8]" />
            </div>

            {/* Frame 2 — hero-vineyard.jpeg */}
            <div className="relative z-20 -mt-6 ml-16 xl:ml-20 w-48 xl:w-56 rotate-2 transition-transform duration-700 hover:rotate-0 hover:scale-[1.02]">

              <div className="rounded-sm bg-[#f5f1e8] p-2.5 pb-9 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.45)]">
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-[#e6e0d2]">
                  <img
                    src={heroVineyard}
                    alt="Filotimia vineyard view"
                    className="h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 pointer-events-none opacity-[0.08] bg-[linear-gradient(45deg,transparent_48%,#8b7a5a_50%,transparent_52%),linear-gradient(-45deg,transparent_48%,#8b7a5a_50%,transparent_52%)] bg-[length:6px_6px]" />
                </div>
                <div className="absolute bottom-3 left-0 right-0 text-center">
                  <span className="text-[8px] tracking-[0.3em] uppercase text-[#7a6b52]">
                    {t({ en: "Vineyard", el: "Αμπέλι" })}
                  </span>
                </div>
              </div>
              <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-[#d4b57c] shadow-sm ring-2 ring-[#f5f1e8]" />
            </div>

            {/* Frame 3 — img68.jpeg */}
            <div className="relative z-10 -mt-6 -ml-12 xl:-ml-16 w-44 xl:w-52 -rotate-2 transition-transform duration-700 hover:rotate-0 hover:scale-[1.02]">

              <div className="rounded-sm bg-[#f5f1e8] p-2.5 pb-9 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.45)]">
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-[#e6e0d2]">
                  <img
                    src={heroTerrace}
                    alt="Filotimia terrace view"
                    className="h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 pointer-events-none opacity-[0.08] bg-[linear-gradient(45deg,transparent_48%,#8b7a5a_50%,transparent_52%),linear-gradient(-45deg,transparent_48%,#8b7a5a_50%,transparent_52%)] bg-[length:6px_6px]" />
                </div>
                <div className="absolute bottom-3 left-0 right-0 text-center">
                  <span className="text-[8px] tracking-[0.3em] uppercase text-[#7a6b52]">
                    {t({ en: "Terrace", el: "Βεράντα" })}
                  </span>
                </div>
              </div>
              <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-[#d4b57c] shadow-sm ring-2 ring-[#f5f1e8]" />
            </div>
          </div>
        </div>
      </div>



      {/* Bottom hairline signature strip */}
      <div className="absolute inset-x-0 bottom-0 z-10 border-t border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-16 py-5 text-white/60">
          <div className="flex items-center gap-3">
            <div className="h-8 w-px bg-white/20 hero-scroll-line" />
            <span className="text-[9px] tracking-[0.5em] uppercase">
              {t({ en: "Scroll to explore", el: "Κύλιση" })}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
    >
      {children}
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-xs tracking-[0.3em] uppercase text-sea">{children}</span>
  );
}

function About() {
  const { t } = useLang();
  return (
    <section id="about" className="bg-cream py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 md:grid-cols-2 md:gap-20 items-center">
        <Reveal>
          <SectionLabel>{t({ en: "Our Story", el: "Η Ιστορία μας" })}</SectionLabel>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight text-navy">
            {t({
              en: "A quiet paradise in the Small Cyclades",
              el: "Ένας ήσυχος παράδεισος στις Μικρές Κυκλάδες",
            })}
          </h2>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-foreground/75">
            <p>
              {t({
                en: "Schinoussa is a small, picturesque island at the heart of the Small Cyclades — south of Naxos and northeast of Iraklia. With an area of just ~8 km² and around 200 residents, it is made for slow, authentic, peaceful holidays.",
                el: "Η Σχοινούσα είναι ένα μικρό, γραφικό νησί στην καρδιά των Μικρών Κυκλάδων — νότια της Νάξου και βορειοανατολικά της Ηρακλειάς. Με έκταση ~8 τ.χλμ. και περίπου 200 κατοίκους, είναι φτιαγμένη για αργές, αυθεντικές, γαλήνιες διακοπές.",
              })}
            </p>
            <p>
              {t({
                en: "Filotimia sits above the sea, built from local stone and shaped by the light. Every apartment opens onto a private veranda, framed by a garden of aromatic herbs and the endless blue of the Aegean.",
                el: "Το Filotimia βρίσκεται πάνω από τη θάλασσα, χτισμένο από ντόπια πέτρα και σμιλευμένο από το φως. Κάθε διαμέρισμα ανοίγει σε ιδιωτική βεράντα, ανάμεσα σε κήπο με αρωματικά βότανα και το ατελείωτο γαλάζιο του Αιγαίου.",
              })}
            </p>
            <p className="font-serif italic text-navy text-lg">
              {t({ en: "A true refuge of tranquility.", el: "Ένα αληθινό καταφύγιο γαλήνης." })}
            </p>
          </div>
        </Reveal>
        <Reveal className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-xl">
            <img
              src={galleryStone}
              alt="Garden and stone architecture at Filotimia"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-8 -left-8 hidden md:block aspect-square w-44 overflow-hidden rounded-2xl border-8 border-cream shadow-xl">
            <img
              src={galleryTerrace}
              alt="Terrace detail"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function BeachesTeaser() {
  const { t } = useLang();
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <img
        src={coastlineSunset}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/70 to-navy/40" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl text-white">
          <span className="text-xs tracking-[0.3em] uppercase text-white/70">
            {t({ en: "The Coastline", el: "Η Ακτογραμμή" })}
          </span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight">
            {t({
              en: "Discover the beaches of Schinoussa",
              el: "Ανακαλύψτε τις παραλίες της Σχοινούσας",
            })}
          </h2>
          <p className="mt-6 text-white/85 leading-relaxed text-lg">
            {t({
              en: "Crystal-clear waters, untouched coves, golden sand and peaceful swimming spots — all only minutes from Filotimia Apartments.",
              el: "Κρυστάλλινα νερά, ανέγγιχτοι όρμοι, χρυσαφένια άμμος και γαλήνια σημεία για κολύμπι — όλα μόλις λίγα λεπτά από τα Filotimia Apartments.",
            })}
          </p>
          <Link
            to="/beaches"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-medium text-navy transition-all hover:shadow-2xl"
          >
            {t({ en: "Explore Beaches", el: "Δείτε τις Παραλίες" })}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Apartments() {
  const { t } = useLang();
  return (
    <section id="apartments" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionLabel>{t({ en: "Rooms & Apartments", el: "Δωμάτια & Διαμερίσματα" })}</SectionLabel>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl text-navy">
            {t({ en: "Four spaces, one philosophy", el: "Τέσσερις χώροι, μία φιλοσοφία" })}
          </h2>
          <p className="mt-5 text-foreground/70 leading-relaxed">
            {t({
              en: "Each apartment is a considered composition of stone, linen, and Aegean light — quietly luxurious, effortlessly welcoming.",
              el: "Κάθε διαμέρισμα είναι μια προσεγμένη σύνθεση από πέτρα, λινό και αιγαιοπελαγίτικο φως — διακριτικά πολυτελές, αβίαστα φιλόξενο.",
            })}
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2">
          {apartments.map((a, i) => (
            <Reveal key={a.slug} className={i % 2 === 1 ? "md:mt-16" : ""}>
              <article className="group">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-stone-light">
                  <img
                    src={a.image}
                    alt={t(a.nameI18n)}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-6">
                  <h3 className="font-serif text-2xl md:text-3xl text-navy">{t(a.nameI18n)}</h3>
                  <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-xs uppercase tracking-wider text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <Users className="size-3.5" /> {a.guests} {t({ en: "guests", el: "άτομα" })}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Ruler className="size-3.5" /> {t(a.sizeI18n)}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <BedDouble className="size-3.5" /> {t(a.bedI18n)}
                    </span>
                  </div>
                  <p className="mt-4 text-foreground/75 leading-relaxed">{t(a.descI18n)}</p>
                  <Link
                    to="/rooms/$slug"
                    params={{ slug: a.slug }}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-navy border-b border-navy/30 pb-1 transition-colors hover:border-navy"
                  >
                    {t({ en: "View Details & Book", el: "Λεπτομέρειες & Κράτηση" })}
                    <ArrowRight className="size-4" />
                  </Link>

                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Amenities() {
  const { t } = useLang();
  return (
    <section className="bg-stone-light py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionLabel>{t({ en: "Amenities", el: "Παροχές" })}</SectionLabel>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl text-navy">
            {t({ en: "Amenities & Comforts", el: "Παροχές & Ανέσεις" })}
          </h2>
          <p className="mt-5 text-foreground/70">
            {t({
              en: "Everything you need for a slow, restorative stay — nothing more.",
              el: "Ό,τι χρειάζεστε για μια ήρεμη και αναζωογονητική διαμονή — τίποτα περιττό.",
            })}
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-3">
          {amenities.map((a) => (
            <Reveal key={a.label.en}>
              <div className="flex flex-col items-center text-center">
                <div className="grid size-16 place-items-center rounded-full bg-background shadow-sm">
                  <a.icon className="size-6 text-sea" strokeWidth={1.5} />
                </div>
                <span className="mt-4 font-serif text-lg text-navy">{t(a.label)}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}


function Gallery() {
  const { t } = useLang();
  const [lightbox, setLightbox] = useState<string | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setLightbox(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="gallery" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionLabel>{t({ en: "Gallery", el: "Γκαλερί" })}</SectionLabel>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl text-navy">
            {t({ en: "Moments at Filotimia", el: "Στιγμές στην Φιλοτιμία" })}
          </h2>
        </Reveal>

        <div className="mt-14 columns-2 gap-4 md:columns-3 lg:columns-4 [&>*]:mb-4">
          {gallery.map((src, i) => (
            <button
              key={src}
              onClick={() => setLightbox(src)}
              className="block w-full overflow-hidden rounded-xl bg-stone-light focus:outline-none focus:ring-2 focus:ring-sea"
              aria-label={`Open image ${i + 1}`}
            >
              <img
                src={src}
                alt={`Filotimia gallery ${i + 1}`}
                loading="lazy"
                className="w-full transition-transform duration-700 hover:scale-105"
              />
            </button>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4 fade-in"
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
            className="max-h-[90vh] max-w-[92vw] rounded-lg object-contain"
          />
        </div>
      )}
    </section>
  );
}

function Location() {
  const { t } = useLang();
  return (
    <section id="location" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20 items-center">
          <Reveal>
            <SectionLabel>{t({ en: "Location", el: "Τοποθεσία" })}</SectionLabel>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl text-navy leading-tight">
              {t({ en: "Where the Aegean slows down", el: "Εκεί όπου το Αιγαίο κυλά πιο αργά" })}
            </h2>
            <p className="mt-6 text-foreground/75 leading-relaxed">
              {t({
                en: "Schinoussa is a walkable island of two villages, Chora and Messaria, surrounded by crystalline waters, golden beaches, and raw Cycladic landscapes. Filotimia sits moments from the sea, a short walk from tavernas, and just minutes from the port.",
                el: "Η Σχοινούσα είναι ένα ήσυχο κυκλαδίτικο νησί με δύο παραδοσιακούς οικισμούς, τη Χώρα και τη Μεσσαριά, που περιβάλλεται από κρυστάλλινα νερά, χρυσαφένιες παραλίες και αυθεντικά κυκλαδίτικα τοπία. Τα Filotimia Apartments βρίσκονται σε ιδανική τοποθεσία, λίγα μόλις λεπτά από τη θάλασσα, σε κοντινή απόσταση με τα πόδια από παραδοσιακές ταβέρνες και μόλις λίγα λεπτά από το λιμάνι.",
              })}
            </p>

            <dl className="mt-10 grid grid-cols-2 gap-6 text-sm">
              <div>
                <dt className="text-xs uppercase tracking-widest text-muted-foreground">{t({ en: "Port", el: "Λιμάνι" })}</dt>
                <dd className="mt-1 font-serif text-lg text-navy">{t({ en: "~1 km · Chora", el: "~1 χλμ. · Χώρα" })}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-muted-foreground">{t({ en: "Messaria", el: "Μεσσαριά" })}</dt>
                <dd className="mt-1 font-serif text-lg text-navy">{t({ en: "~2.5 km", el: "~2,5 χλμ." })}</dd>
              </div>
            </dl>
          </Reveal>

          <Reveal>
            <div className="overflow-hidden rounded-2xl shadow-xl aspect-[4/3] bg-stone-light">
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


function Reviews() {
  const { t } = useLang();
  return (
    <section className="bg-navy py-24 md:py-32 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs tracking-[0.3em] uppercase text-white/60">
            {t({ en: "Guest Reviews", el: "Αξιολογήσεις Επισκεπτών" })}
          </span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl">
            {t({ en: "Kind words from our guests", el: "Τι λένε οι επισκέπτες μας" })}
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {reviews.map((r) => (
            <Reveal key={r.author.en}>
              <figure className="flex h-full flex-col rounded-2xl bg-white/5 p-8 backdrop-blur-sm border border-white/10">
                <div className="flex gap-0.5 text-sea">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-5 font-serif text-lg italic leading-relaxed text-white/90">
                  “{t(r.quote)}”
                </blockquote>
                <figcaption className="mt-6 text-sm text-white/70">
                  <span className="font-medium text-white">{t(r.author)}</span>
                  <span className="mx-2">·</span>
                  <span>{r.source}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <a
            href={BOOKING_COM}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white border-b border-white/30 pb-1"
          >
            {t({ en: "Read more reviews on Booking.com", el: "Δείτε περισσότερες αξιολογήσεις στο Booking.com" })}
            <ArrowRight className="size-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function BookingCTA() {
  const { t } = useLang();
  return (
    <section id="book" className="relative overflow-hidden py-24 md:py-32">
      <img
        src={heroApartments}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-navy/70" />
      <div className="relative mx-auto max-w-3xl px-6 text-center text-white">
        <Reveal>
          <span className="text-xs tracking-[0.3em] uppercase text-white/70">
            {t({ en: "Reserve directly", el: "Κάντε την Κράτησή σας Απευθείας" })}
          </span>
          <h2 className="mt-4 font-serif text-4xl md:text-6xl leading-tight">
            {t({ en: "Book direct for the best price", el: "Κλείστε απευθείας για την καλύτερη τιμή" })}
          </h2>
          <p className="mt-6 text-white/80 leading-relaxed">
            {t({
              en: "Reach out with any question about your stay.",
              el: "Είμαστε πάντα στη διάθεσή σας για οποιαδήποτε πληροφορία σχετικά με τη διαμονή σας.",
            })}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-medium text-navy hover:shadow-2xl transition-all"
            >
              {t({ en: "Check Availability", el: "Έλεγχος Διαθεσιμότητας" })}
              <ArrowRight className="size-4" />
            </a>
            <a
              href="mailto:info@filotimia.gr"
              className="inline-flex items-center justify-center rounded-full border border-white/70 px-8 py-4 text-sm font-medium text-white hover:bg-white/10 transition-colors"
            >
              {t({ en: "Contact the Hosts", el: "Επικοινωνήστε Μαζί Μας" })}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  const { t } = useLang();
  return (
    <footer id="contact" className="bg-cream text-foreground">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="font-serif text-3xl text-navy">Filotimia</div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-foreground/70">
              {t({
                en: "Luxury stone apartments on Schinoussa, Small Cyclades. A quiet island escape shaped by authentic Greek hospitality.",
                el: "Πολυτελή πέτρινα διαμερίσματα στη Σχοινούσα, Μικρές Κυκλάδες. Μια ήσυχη νησιωτική απόδραση με αυθεντική ελληνική φιλοξενία.",
              })}
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="grid size-10 place-items-center rounded-full border border-border text-navy hover:bg-navy hover:text-white transition-colors"
              >
                <Instagram className="size-4" />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="grid size-10 place-items-center rounded-full border border-border text-navy hover:bg-navy hover:text-white transition-colors"
              >
                <Facebook className="size-4" />
              </a>
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Google Maps"
                className="grid size-10 place-items-center rounded-full border border-border text-navy hover:bg-navy hover:text-white transition-colors"
              >
                <MapIcon className="size-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-widest text-muted-foreground">
              {t({ en: "Explore", el: "Εξερεύνηση" })}
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-foreground/80 hover:text-navy transition-colors">
                    {t(l.label)}
                  </a>
                </li>
              ))}
              <li>
                <a href={BOOKING_URL} target="_blank" rel="noreferrer" className="text-navy font-medium">
                  {t({ en: "Book Now", el: "Κράτηση" })}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-widest text-muted-foreground">
              {t({ en: "Contact", el: "Επικοινωνία" })}
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0 text-sea" />
                <span className="text-foreground/80">
                  {t({ en: "Schinoussa, Small Cyclades, Greece", el: "Σχοινούσα, Μικρές Κυκλάδες, Ελλάδα" })}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 size-4 shrink-0 text-sea" />
                <a href={`tel:${PHONE_TEL}`} className="text-foreground/80 hover:text-navy">
                  {PHONE}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 size-4 shrink-0 text-sea" />
                <a href="mailto:info@filotimia.gr" className="text-foreground/80 hover:text-navy">
                  info@filotimia.gr
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Filotimia Apartments. {t({ en: "All rights reserved.", el: "Με επιφύλαξη κάθε νόμιμου δικαιώματος." })}</p>
          <p>Schinoussa · Small Cyclades · Greece</p>
        </div>
      </div>
    </footer>
  );
}

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
