import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  ArrowRight,
  X,
  Menu,
  MapPin,
  Instagram,
  Facebook,
  Mail,
  Phone,
  Map as MapIcon,
  Ship,
  Anchor,
  Navigation,
  Clock,
  MapPinned,
  CalendarClock,
  LifeBuoy,
  Waves,
  Footprints,
  Car,
} from "lucide-react";
import {
  BOOKING_URL,
  INSTAGRAM_URL,
  GOOGLE_MAPS_URL,
  PHONE,
  PHONE_TEL,
} from "@/lib/apartments";
import { useLang, LanguageToggle } from "@/lib/i18n";
import heroImg from "@/assets/coastline-sunset.png";
import main4 from "@/assets/main4.jpg";


export const Route = createFileRoute("/connections")({
  head: () => ({
    meta: [
      { title: "Getting Here — Ferries & Connections to Schinoussa | Filotimia" },
      {
        name: "description",
        content:
          "How to reach Filotimia Apartments in Schinoussa — ferry routes from Piraeus and Naxos, Blue Star and Skopelitis schedules, local transfers and travel tips.",
      },
      { property: "og:title", content: "Getting to Schinoussa — Filotimia Apartments" },
      {
        property: "og:description",
        content:
          "Your journey to Schinoussa begins long before you arrive. Ferry routes, local boats and travel tips.",
      },
      { property: "og:type", content: "article" },
      { property: "og:image", content: heroImg },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: ConnectionsPage,
});

const navLinks = [
  { to: "/", label: { en: "Home", el: "Αρχική" }, hash: "" },
  { to: "/", label: { en: "Rooms", el: "Δωμάτια" }, hash: "#apartments" },
  { to: "/beaches", label: { en: "Beaches", el: "Παραλίες" }, hash: "" },
  { to: "/connections", label: { en: "Getting Here", el: "Πρόσβαση" }, hash: "" },
  { to: "/", label: { en: "Contact", el: "Επικοινωνία" }, hash: "#contact" },
];

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
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
    >
      {children}
    </div>
  );
}

/* --------------------------------- Nav --------------------------------- */
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
        <Link
          to="/"
          className={`font-serif text-xl md:text-2xl tracking-wide transition-colors duration-500 ${
            scrolled || open ? "text-navy" : "text-white"
          }`}
        >
          Filotimia
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l, i) => (
            <a
              key={i}
              href={l.to === "/" ? `/${l.hash}` : l.to}
              className={`text-sm tracking-wide transition-colors duration-500 ${
                scrolled || open
                  ? "text-foreground/80 hover:text-navy"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {t(l.label)}
            </a>
          ))}
          <LanguageToggle dark={false} />
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-navy px-5 py-2.5 text-sm font-medium text-cream transition-all hover:opacity-90 hover:shadow-lg"
          >
            {t({ en: "Book Now", el: "Κράτηση" })}
          </a>
        </nav>
        <button
          className={`md:hidden transition-colors duration-500 ${
            scrolled || open ? "text-navy" : "text-white"
          }`}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border/60 bg-background">
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-4">
            {navLinks.map((l, i) => (
              <a
                key={i}
                href={l.to === "/" ? `/${l.hash}` : l.to}
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
              className="mt-2 rounded-full bg-navy px-5 py-3 text-center text-sm font-medium text-cream"
            >
              {t({ en: "Book Now", el: "Κράτηση" })}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

/* --------------------------------- Hero -------------------------------- */
function Hero() {
  const { t } = useLang();
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-navy">
      <img
        src={main4}
        alt="Arriving to Schinoussa"
        className="absolute inset-0 h-full w-full object-cover hero-kenburns-left"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/30 via-navy/15 to-navy/65" />
      <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-5xl flex-col items-center justify-center px-6 pt-28 pb-24 text-center text-cream">
        <span className="hero-reveal mb-6 text-[11px] tracking-[0.35em] uppercase font-semibold text-cream/80">
          {t({ en: "Journey to the Island", el: "Το Ταξίδι στο Νησί" })}
        </span>
        <h1 className="hero-reveal hero-reveal-2 font-serif text-5xl leading-[1.05] md:text-7xl lg:text-[5.5rem] text-cream">
          {t({ en: "Getting", el: "Πώς θα" })}{" "}
          <span className="italic">{t({ en: "Here", el: "φτάσετε" })}</span>
        </h1>
        <div className="hero-reveal hero-reveal-3 flex items-center justify-center gap-4 my-8 md:my-10">
          <div className="h-px w-14 bg-cream/50" />
          <p className="text-cream/80 text-xs uppercase tracking-[0.28em] font-medium"></p>
          <div className="h-px w-14 bg-cream/50" />
        </div>
        <p className="hero-reveal hero-reveal-4 max-w-2xl text-base md:text-lg text-cream/90 leading-relaxed">
          {t({
            en: "Your journey to Schinoussa begins long before you arrive.",
            el: "Το ταξίδι προς τη Σχοινούσα είναι μέρος της εμπειρίας.",
          })}
        </p>
        <div
          className="hero-reveal hero-reveal-5 mt-16 flex flex-col items-center gap-3 text-cream/60"
          aria-hidden
        >
          <span className="text-[10px] uppercase tracking-[0.35em]">
            {t({ en: "Scroll", el: "Κύλιση" })}
          </span>
          <span className="relative block h-12 w-px bg-cream/20 overflow-hidden">
            <span className="hero-scroll-line absolute inset-0 bg-cream/70" />
          </span>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Timeline ------------------------------- */
function Timeline() {
  const { t } = useLang();
  const stops = [
    {
      label: { en: "Piraeus", el: "Πειραιάς" },
      note: {
        en: "Getting to Schinoussa",
        el: "Πώς να φτάσετε στη Σχοινούσα",
      },
    },
    {
      label: { en: "Blue Star Ferries", el: "Blue Star Ferries" },
      note: {
        en: "Schinoussa is easily reached by ferry from Piraeus, with direct routes or connections through Naxos during the summer season.",
        el: "Η Σχοινούσα είναι εύκολα προσβάσιμη με πλοίο από τον Πειραιά, είτε με απευθείας δρομολόγια είτε μέσω Νάξου κατά τη θερινή περίοδο.",
      },
    },
    {
      label: { en: "Naxos", el: "Νάξος" },
      note: {
        en: "Many routes stop in Naxos, where you may continue to Schinoussa with a connecting ferry.",
        el: "Πολλά δρομολόγια κάνουν στάση στη Νάξο, από όπου μπορείτε να συνεχίσετε για τη Σχοινούσα με ανταπόκριση.",
      },
    },
    {
      label: { en: "Small Cyclades", el: "Μικρές Κυκλάδες" },
      note: {
        en: "Your journey continues through the beautiful Small Cyclades, passing islands such as Iraklia.",
        el: "Το ταξίδι συνεχίζεται στις όμορφες Μικρές Κυκλάδες, περνώντας από νησιά όπως η Ηρακλειά.",
      },
    },
    {
      label: { en: "Schinoussa", el: "Σχοινούσα" },
      note: {
        en: "Arrive at Mersini Port, approximately 2.5 km from Filotimia Apartments.",
        el: "Η άφιξη γίνεται στο λιμάνι της Μερσίνης, σε απόσταση περίπου 2,5 χλμ. από τα Filotimia Apartments.",
      },
    },
  ];

  return (
    <section className="relative bg-cream py-24 md:py-36">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-20 md:mb-28">
            <span className="text-[11px] tracking-[0.3em] uppercase font-semibold text-sea">
              {t({ en: "Chapter I", el: "Κεφάλαιο I" })}
            </span>
            <h2 className="mt-4 font-serif text-3xl md:text-5xl text-navy leading-tight">
              {t({ en: "Travel to Schinoussa", el: "Το ταξίδι στη Σχοινούσα" })}
            </h2>
            <p className="mt-6 text-navy/70 leading-relaxed">
              {t({
                en: "A slow, unhurried journey across the Aegean — from the noise of the port to the stillness of the island.",
                el: "Ένα αργό, χωρίς βιασύνη ταξίδι στο Αιγαίο — από τον θόρυβο του λιμανιού στη γαλήνη του νησιού.",
              })}
            </p>
          </div>
        </Reveal>

        <ol className="relative">
          <div
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-sand via-sand/60 to-transparent md:-translate-x-1/2"
            aria-hidden
          />
          {stops.map((s, i) => (
            <Reveal key={i} delay={i * 120}>
              <li
                className={`relative pl-16 md:pl-0 md:grid md:grid-cols-2 md:gap-16 mb-14 md:mb-20 items-center ${
                  i % 2 === 0 ? "" : "md:[&>div:first-child]:col-start-2"
                }`}
              >
                <span
                  className="absolute left-6 md:left-1/2 top-3 -translate-x-1/2 grid size-4 place-items-center rounded-full bg-navy ring-8 ring-cream"
                  aria-hidden
                />
                <div className={i % 2 === 0 ? "md:text-right md:pr-10" : "md:pl-10"}>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-navy/40 font-semibold">
                    {t({ en: `Stop ${i + 1}`, el: `Στάση ${i + 1}` })}
                  </span>
                  <h3 className="mt-2 font-serif text-2xl md:text-3xl text-navy">
                    {t(s.label)}
                  </h3>
                  <p className="mt-3 text-navy/70 leading-relaxed text-sm md:text-base">
                    {t(s.note)}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* --------------------------- Ferry companies --------------------------- */
function FerryCompanies() {
  const { t } = useLang();
  const companies = [
    {
      name: "Blue Star Ferries",
      icon: <Ship className="size-5" />,
      desc: {
        en: "The main ferry link between Piraeus and the Small Cyclades.",
        el: "Η κύρια ακτοπλοϊκή σύνδεση Πειραιά και Μικρών Κυκλάδων.",
      },
      period: { en: "Year-round service", el: "Δρομολόγια όλο τον χρόνο" },
      schedule: {
        en: "3 sailings per week from Piraeus, every Tuesday, Thursday and Saturday.",
        el: "3 δρομολόγια την εβδομάδα από Πειραιά, κάθε Τρίτη, Πέμπτη και Κυριακή.",
      },
      site: "https://www.bluestarferries.com",
      book: "https://www.ferryhopper.com",
    },
    {
      name: "Small Cyclades Lines · Skopelitis",
      icon: <Anchor className="size-5" />,
      desc: {
        en: "The local ferry, connecting Naxos with all the Small Cyclades daily except Sunday.",
        el: "Το τοπικό πλοίο που συνδέει καθημερινά τη Νάξο με όλες τις Μικρές Κυκλάδες εκτός Κυριακής .",
      },
      period: { en: "Year-round service", el: "Δρομολόγια όλο τον χρόνο" },
      schedule: {
        en: "Daily departures from Naxos in the afternoon, returning in the morning.",
        el: "Καθημερινές αναχωρήσεις από Νάξο το απόγευμα, επιστροφή το πρωί.",
      },
      site: "https://www.skopelitis.gr",
      book: "https://www.ferryhopper.com",
    },
  ];

  return (
    <section className="relative bg-background py-24 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
            <span className="text-[11px] tracking-[0.3em] uppercase font-semibold text-sea">
              {t({ en: "Chapter II", el: "Κεφάλαιο II" })}
            </span>
            <h2 className="mt-4 font-serif text-3xl md:text-5xl text-navy leading-tight">
              {t({ en: "Ferry Companies", el: "Ακτοπλοϊκές Εταιρείες" })}
            </h2>
            <p className="mt-6 text-navy/70 leading-relaxed">
            </p>
          </div>
        </Reveal>

        <div className="grid gap-8 md:gap-10 md:grid-cols-2">
          {companies.map((c, i) => (
            <Reveal key={c.name} delay={i * 120}>
              <article className="group relative h-full rounded-3xl border border-sand/70 bg-white/60 backdrop-blur-sm p-8 md:p-10 shadow-[0_20px_60px_-30px_rgba(0,33,71,0.25)] transition-all duration-500 hover:shadow-[0_30px_80px_-30px_rgba(0,33,71,0.35)] hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-6">
                  <span className="grid size-11 place-items-center rounded-full bg-navy text-cream">
                    {c.icon}
                  </span>
                  <h3 className="font-serif text-2xl md:text-[26px] text-navy">
                    {c.name}
                  </h3>
                </div>
                <p className="text-navy/75 leading-relaxed">{t(c.desc)}</p>

                <div className="mt-8 space-y-4 border-t border-sand/60 pt-6 text-sm">
                  <div className="flex items-start gap-3">
                    <CalendarClock className="mt-0.5 size-4 shrink-0 text-sea" />
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.25em] text-navy/45 font-semibold">
                        {t({ en: "Operating period", el: "Περίοδος λειτουργίας" })}
                      </div>
                      <div className="mt-1 text-navy/80">{t(c.period)}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="mt-0.5 size-4 shrink-0 text-sea" />
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.25em] text-navy/45 font-semibold">
                        {t({ en: "Schedule", el: "Δρομολόγια" })}
                      </div>
                      <div className="mt-1 text-navy/80">{t(c.schedule)}</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <a
                    href={c.site}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-navy/70 px-5 py-2.5 text-sm font-medium text-navy hover:bg-navy hover:text-cream transition-colors"
                  >
                    {t({ en: "Official Website", el: "Επίσημη Ιστοσελίδα" })}
                  </a>
                  <a
                    href={c.book}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-navy px-5 py-2.5 text-sm font-medium text-cream hover:opacity-90 transition-opacity"
                  >
                    {t({ en: "Book Tickets", el: "Κρατήστε Εισιτήρια" })}
                    <ArrowRight className="size-4" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- Local transfers -------------------------- */
function LocalTransfers() {
  const { t } = useLang();
  const contacts = [
    {
      name: "Captain Nikos",
      service: { en: "Local boat", el: "Τοπικό σκάφος" },
      phone: "+30 694 000 0001",
    },
    {
      name: "Manolis Speedboat",
      service: { en: "Speedboat transfer to Naxos", el: "Ταχύπλοο προς Νάξο" },
      phone: "+30 694 000 0002",
    },
    {
      name: "Schinoussa Sea Taxi",
      service: { en: "Transfers", el: "Μεταφορές" },
      phone: "+30 694 000 0003",
    },
    {
      name: "Filotimia Transportation",
      service: { en: "Arrivals & assistance", el: "Άφιξη & υποστήριξη" },
      phone: PHONE_TEL,
    },
  ];
  return (
    <section className="bg-cream py-24 md:py-36">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-14 md:mb-20">
            <span className="text-[11px] tracking-[0.3em] uppercase font-semibold text-sea">
              {t({ en: "Chapter III", el: "Κεφάλαιο III" })}
            </span>
            <h2 className="mt-4 font-serif text-3xl md:text-5xl text-navy leading-tight">
              {t({ en: "Local Boat Transfers", el: "Τοπικές Μεταφορές με Σκάφος" })}
            </h2>
            <p className="mt-6 text-navy/70 leading-relaxed">
              {t({
                en: "Small local boats and speedboats bridge Schinoussa with its neighbours sea allows.",
                el: "Μικρά τοπικά σκάφη και ταχύπλοα ενώνουν τη Σχοινούσα με τα γειτονικά νησιά.",
              })}
            </p>
          </div>
        </Reveal>

        <Reveal>
          <ul className="divide-y divide-sand/70 border-y border-sand/70">
            {contacts.map((c) => (
              <li
                key={c.name}
                className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-5 sm:grid-cols-[1.2fr_1.4fr_auto_auto] sm:gap-6"
              >
                <div className="min-w-0">
                  <div className="font-serif text-lg md:text-xl text-navy truncate">
                    {c.name}
                  </div>
                  <div className="sm:hidden text-[13px] text-navy/60 mt-1">
                    {t(c.service)}
                  </div>
                </div>
                <div className="hidden sm:block text-sm text-navy/70">
                  {t(c.service)}
                </div>
                <div className="hidden sm:block text-sm tabular-nums text-navy/80">
                  {c.phone}
                </div>
                <a
                  href={`tel:${c.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 rounded-full border border-navy/70 px-4 py-2 text-xs font-medium text-navy hover:bg-navy hover:text-cream transition-colors"
                >
                  <Phone className="size-3.5" />
                  {t({ en: "Call", el: "Κλήση" })}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}


/* --------------------------------- Map --------------------------------- */
function MapSection() {
  const { t } = useLang();
  return (
    <section className="bg-cream py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-14 md:mb-20">
            <span className="text-[11px] tracking-[0.3em] uppercase font-semibold text-sea">
              {t({ en: "Chapter V", el: "Κεφάλαιο V" })}
            </span>
            <h2 className="mt-4 font-serif text-3xl md:text-5xl text-navy leading-tight">
              {t({ en: "Find Us on the Island", el: "Βρείτε μας στο νησί" })}
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr] items-stretch">
          <Reveal>
            <div className="relative h-[420px] md:h-[520px] w-full overflow-hidden rounded-3xl border border-sand/70 shadow-[0_30px_80px_-40px_rgba(0,33,71,0.35)]">
              <iframe
                title="Filotimia Apartments on Google Maps"
                src="https://www.google.com/maps?q=Filotimia+Apartments+Schinoussa&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="flex h-full flex-col justify-between rounded-3xl border border-sand/70 bg-white/60 p-8 md:p-10">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Anchor className="mt-1 size-5 text-sea" />
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.25em] text-navy/45 font-semibold">
                      {t({ en: "Distance from port", el: "Απόσταση από το λιμάνι" })}
                    </div>
                    <div className="mt-1 font-serif text-2xl text-navy">~ 2.5 km</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Footprints className="mt-1 size-5 text-sea" />
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.25em] text-navy/45 font-semibold">
                      {t({ en: "Walking time", el: "Χρόνος με τα πόδια" })}
                    </div>
                    <div className="mt-1 font-serif text-2xl text-navy">~ 25 min</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Navigation className="mt-1 size-5 text-sea" />
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.25em] text-navy/45 font-semibold">
                      {t({ en: "Driving time", el: "Χρόνος με αυτοκίνητο" })}
                    </div>
                    <div className="mt-1 font-serif text-2xl text-navy">~ 5 min</div>
                  </div>
                </div>
              </div>
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-medium text-cream hover:opacity-90 transition-opacity"
              >
                {t({ en: "Open in Maps", el: "Άνοιγμα στους Χάρτες" })}
                <ArrowRight className="size-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- Tips ---------------------------------- */
function Tips() {
  const { t } = useLang();
  const tips = [
    {
      icon: <MapPinned className="size-5" />,
      title: { en: "Getting around", el: "Μετακίνηση στο νησί" },
      body: {
        en: "Most beaches, tavernas and villages are easily reached on foot or by car.",
        el: "Οι περισσότερες παραλίες, ταβέρνες και οικισμοί είναι εύκολα προσβάσιμοι με τα πόδια ή με αυτοκίνητο.",
      },
    },
    {
      icon: <CalendarClock className="size-5" />,
      title: { en: "Check schedules", el: "Ελέγξτε τα δρομολόγια" },
      body: {
        en: "Ferry timetables can shift with weather. Confirm the day before you travel.",
        el: "Τα δρομολόγια αλλάζουν με τον καιρό. Επιβεβαιώστε μια μέρα πριν.",
      },
    },
    {
      icon: <Car className="size-5" />,
      title: {
        en: "Vehicle Rentals",
        el: "Ενοικιάσεις Οχημάτων",
      },
      body: {
        en: "Jason Auto Moto Rental: +30 697 235 0511\nFaros Bikes Schinoussa: +30 697 736 6853",
        el: "Jason Auto Moto Rental: 697 235 0511\nFaros Bikes Schinoussa: 697 736 6853",
      },
    },
    {
      icon: <LifeBuoy className="size-5" />,
      title: { en: "We're here to help", el: "Είμαστε εδώ για εσάς" },
      body: {
        en: "Message or call us any time — we love making arrivals smooth.",
        el: "Στείλτε ή καλέστε μας οποιαδήποτε στιγμή — φροντίζουμε για μια εύκολη άφιξη.",
      },
    },
  ];
  return (
    <section className="bg-background py-24 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
            <span className="text-[11px] tracking-[0.3em] uppercase font-semibold text-sea">
              {t({ en: "Chapter VI", el: "Κεφάλαιο VI" })}
            </span>
            <h2 className="mt-4 font-serif text-3xl md:text-5xl text-navy leading-tight">
              {t({ en: "Travel Tips", el: "Συμβουλές Ταξιδιού" })}
            </h2>
          </div>
        </Reveal>
        <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-4">
          {tips.map((tip, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="h-full rounded-3xl border border-sand/70 bg-white/60 p-7 md:p-8 shadow-[0_20px_60px_-40px_rgba(0,33,71,0.3)] hover:-translate-y-1 hover:shadow-[0_30px_80px_-40px_rgba(0,33,71,0.4)] transition-all duration-500">
                <span className="grid size-11 place-items-center rounded-full bg-cream text-navy border border-sand/70">
                  {tip.icon}
                </span>
                <h3 className="mt-6 font-serif text-xl text-navy">
                  {t(tip.title)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-navy/70">
                  {t(tip.body)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- CTA ---------------------------------- */
function FinalCTA() {
  const { t } = useLang();
  return (
    <section className="relative overflow-hidden py-28 md:py-40">
      <img
        src={heroImg}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-navy/85" />
      <div className="relative mx-auto max-w-3xl px-6 text-center text-cream">
        <span className="text-[11px] tracking-[0.3em] uppercase text-cream/70">
          {t({ en: "Ready to Begin", el: "Έτοιμοι να Ξεκινήσετε" })}
        </span>
        <h2 className="mt-4 font-serif text-4xl md:text-6xl leading-tight">
          {t({
            en: "Ready to begin your journey?",
            el: "Έτοιμοι να ξεκινήσετε το ταξίδι σας;",
          })}
        </h2>
        <p className="mt-6 text-cream/85 leading-relaxed max-w-xl mx-auto italic font-serif text-lg">
          {t({
            en: "We'll be waiting to welcome you in Schinoussa.",
            el: "Θα σας περιμένουμε να σας υποδεχτούμε στη Σχοινούσα.",
          })}
        </p>
        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-cream px-8 py-4 text-sm font-medium text-navy hover:shadow-2xl transition-all"
          >
            {t({ en: "Reserve Your Stay", el: "Κάντε Κράτηση" })}
            <ArrowRight className="size-4" />
          </a>
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/70 px-8 py-4 text-sm font-medium text-cream hover:bg-cream/10 transition-colors"
          >
            <Phone className="size-4" />
            {t({ en: "Contact Us", el: "Επικοινωνία" })}
          </a>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Footer -------------------------------- */
function SiteFooter() {
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
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" aria-label="Instagram" className="grid size-10 place-items-center rounded-full border border-white/20 hover:bg-white hover:text-navy transition-colors">
                <Instagram className="size-4" />
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook" className="grid size-10 place-items-center rounded-full border border-white/20 hover:bg-white hover:text-navy transition-colors">
                <Facebook className="size-4" />
              </a>
              <a href={GOOGLE_MAPS_URL} target="_blank" rel="noreferrer" aria-label="Google Maps" className="grid size-10 place-items-center rounded-full border border-white/20 hover:bg-white hover:text-navy transition-colors">
                <MapIcon className="size-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-[10px] uppercase tracking-[0.35em] text-white/40">
              {t({ en: "Explore", el: "Εξερεύνηση" })}
            </h3>
            <ul className="mt-6 space-y-3 text-sm">
              {navLinks.map((l, i) => (
                <li key={i}>
                  <a
                    href={l.to === "/" ? `/${l.hash}` : l.to}
                    className="text-white/75 hover:text-white transition-colors"
                  >
                    {t(l.label)}
                  </a>
                </li>
              ))}
              <li>
                <a href={BOOKING_URL} target="_blank" rel="noreferrer" className="text-[#e9d9b8] font-medium">
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
                  {t({ en: "Schinoussa, Small Cyclades, Greece", el: "Σχοινούσα, Μικρές Κυκλάδες, Ελλάδα" })}
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

/* -------------------------------- Page --------------------------------- */
function ConnectionsPage() {
  return (
    <main className="min-h-screen bg-cream text-foreground">
      <Nav />
      <Hero />
      <Timeline />
      <FerryCompanies />
      <LocalTransfers />
      <MapSection />
      <Tips />
      <FinalCTA />
      <SiteFooter />
    </main>
  );
}
