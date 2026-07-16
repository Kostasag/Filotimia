import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, X, Menu, MapPin, Instagram, Facebook, Mail, Phone, Map as MapIcon } from "lucide-react";
import { BOOKING_URL, INSTAGRAM_URL, GOOGLE_MAPS_URL, PHONE, PHONE_TEL } from "@/lib/apartments";
import { useLang, LanguageToggle } from "@/lib/i18n";


import beachesHero from "@/assets/beaches-hero.jpg";

import beach1 from "@/assets/img2014.jpeg"; // Psili Ammos
import beach2 from "@/assets/img2009.jpeg"; // Lioliou
import beach3 from "@/assets/img2006.jpeg"; // Tsigouri
import beach4 from "@/assets/img2004.jpeg"; // Almyros
import beach5 from "@/assets/img2000.jpeg"; // Alygaria
import beach6 from "@/assets/img2002.jpeg"; // Fontana
import beach7 from "@/assets/img2008.jpeg"; // Mersini
import beach8 from "@/assets/img2005.jpeg"; // Livadi
import beach9 from "@/assets/img2013.jpeg"; // Cavos tou Michali
import beach10 from "@/assets/img2007.jpeg"; // Gerolimnionas
import beach11 from "@/assets/img2011.jpeg"; // Fidou
import beach12 from "@/assets/img2012.jpeg"; // Agios Vasilis


export const Route = createFileRoute("/beaches")({
  head: () => ({
    meta: [
      { title: "Beaches of Schinoussa — A Cycladic Coastal Guide | Filotimia" },
      {
        name: "description",
        content:
          "A curated guide to the beaches of Schinoussa — Tsigouri, Psili Ammos, Almyros, Livadi and more. Turquoise waters and quiet coves, minutes from Filotimia Apartments.",
      },
      { property: "og:title", content: "The Beaches of Schinoussa — Filotimia Guide" },
      {
        property: "og:description",
        content: "Untouched coves, turquoise waters and peaceful escapes on Schinoussa, Small Cyclades.",
      },
      { property: "og:type", content: "article" },
      { property: "og:image", content: beachesHero },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: beachesHero },
    ],
  }),
  component: BeachesPage,
});

type Beach = {
  slug: string;
  name: { en: string; el: string };
  image: string;
  tag?: { en: string; el: string };
  detail?: { en: string; el: string };
  description: { en: string; el: string };
};

const beaches: Beach[] = [
  {
    slug: "psili-ammos",
    name: { en: "Psili Ammos", el: "Ψιλή Άμμος" },
    image: beach1,
    description: {
      en: "Fine sand and crystal-clear waters, one of the island's most famous swims. Northeast of Chora, with sweeping views over the open sea.",
      el: "Παραλία με ψιλή άμμο και διάφανα νερά, από τις πιο γνωστές του νησιού. Βρίσκεται βορειοανατολικά της Χώρας και προσφέρει εκπληκτική θέα στο πέλαγος.",
    },
  },
  {
    slug: "lioliou",
    name: { en: "Lioliou", el: "Λιόλου" },
    image: beach2,
    description: {
      en: "A sandy shore with calm waters and small tavernas — ideal for families. Easy to reach by car or on foot from Chora.",
      el: "Αμμώδης ακτή με ήρεμα νερά και ταβερνάκια, ιδανική για οικογένειες και παιδιά. Προσβάσιμη εύκολα με αυτοκίνητο ή με τα πόδια από τη Χώρα.",
    },
  },
  {
    slug: "tsigouri",
    name: { en: "Tsigouri", el: "Τσιγκούρι" },
    image: beach3,
    description: {
      en: "The nearest beach to Chora, a wide sandy bay with shallow water, a beach bar and postcard sunset views.",
      el: "Η πλησιέστερη παραλία στη Χώρα, με μεγάλη αμμουδιά και ρηχά νερά. Διαθέτει beach bar και θέα προς το ηλιοβασίλεμα.",
    },
  },
  {
    slug: "almyros",
    name: { en: "Almyros", el: "Αλμυρός" },
    image: beach4,
    description: {
      en: "A gorgeous beach on the southeastern side of Schinoussa, with fine sand and shallow turquoise water. Wide views towards Koufonissi.",
      el: "Εξαιρετική παραλία στη νοτιοανατολική πλευρά της Σχοινούσας, με ψιλή άμμο και γαλαζοπράσινα ρηχά νερά. Ιδανική για οικογένειες, με θέα προς το Κουφονήσι.",
    },
  },
  {
    slug: "alygaria",
    name: { en: "Alygaria", el: "Αλυγαριά" },
    image: beach5,
    description: {
      en: "South of Chora, three connected coves of fine pebble and shallow water. Peaceful and understated — perfect for slow mornings.",
      el: "Βρίσκεται νότια της Χώρας και αποτελείται από τρεις συνεχόμενους μικρούς κολπίσκους με ψιλό βότσαλο και ρηχά νερά. Ιδανική για ζευγάρια και ήσυχες στιγμές.",
    },
  },
  {
    slug: "fontana",
    name: { en: "Fontana", el: "Φουντάνα" },
    image: beach6,
    description: {
      en: "On the northeast coast, two small bays of azure water framed by a Venetian tower, with views to Koufonissi, Keros and Amorgos.",
      el: "Στον όρμο της Φουντάνας, στη βορειοανατολική ακτή, δύο μικρές παραλίες με καταγάλανα νερά και θέα προς Κουφονήσι, Κέρο και Αμοργό. Σημείο αναφοράς ο μικρός βενετσιάνικος πύργος.",
    },
  },
  {
    slug: "mersini",
    name: { en: "Mersini (Piso Ammos)", el: "Μερσίνη (Πίσω Άμμος)" },
    image: beach7,
    description: {
      en: "A quiet 60-metre strip beside the port, with sand and tamarisk trees offering natural shade all afternoon.",
      el: "Δίπλα στο λιμάνι, μια παραλία περίπου 60 μέτρων με πάντα ήσυχα νερά, άμμο και αρμυρίκια που προσφέρουν φυσική σκίαση.",
    },
  },
  {
    slug: "livadi",
    name: { en: "Livadi", el: "Λιβάδι" },
    image: beach8,
    description: {
      en: "A dreamy wide beach on the south of the island, sheltered from northern winds and lined with tamarisks. About 1 km from Chora.",
      el: "Μια ονειρεμένη παραλία στο νότιο τμήμα του νησιού με μεγάλη, φαρδιά αμμουδιά και σειρά από αλμυρίκια. Ιδανική για οικογένειες, απέχει περίπου 1 χλμ. από τη Χώρα.",
    },
  },
  {
    slug: "kavos-michali",
    name: { en: "Cavos tou Michali", el: "Κάβος του Μιχάλη" },
    image: beach9,
    description: {
      en: "Reached after Lioliou on the right-hand path — small coves with white pebbles and crystal water in the middle of the peninsula.",
      el: "Προσεγγίζεται μετά τη Λιόλου, ακολουθώντας το μονοπάτι προς τα δεξιά. Μικροί κολπίσκοι με λευκά βότσαλα και κρυστάλλινα νερά. Ιδανικός για πεζοπορία.",
    },
  },
  {
    slug: "gerolimnionas",
    name: { en: "Gerolimnionas", el: "Γερολιμνιώνας" },
    image: beach10,
    description: {
      en: "A quiet, secluded beach on the western side of the island. Sheltered from the wind, with coarse sand and glassy turquoise water.",
      el: "Ήσυχη και απομονωμένη παραλία στη δυτική πλευρά της Σχοινούσας, με χοντρή άμμο και καταγάλανα νερά. Προστατευμένη από τους ανέμους.",
    },
  },
  {
    slug: "fidou",
    name: { en: "Fidou", el: "Φιδού" },
    image: beach11,
    description: {
      en: "A tiny islet linked to Schinoussa by a narrow sandy passage. Fine sand and open Aegean views for anyone chasing seclusion.",
      el: "Η Φιδού είναι μικρή νησίδα κοντά στη Σχοινούσα, συνδεδεμένη με ρηχή λωρίδα άμμου. Ψιλή άμμος και θέα στο Αιγαίο, ιδανική για απομόνωση.",
    },
  },
  {
    slug: "agios-vasilis",
    name: { en: "Agios Vasilis", el: "Άγιος Βασίλης" },
    image: beach12,
    description: {
      en: "A pebble beach with turquoise water at the edge of the Agios Vasilis peninsula. Perfect for a panoramic Aegean swim.",
      el: "Όμορφη παραλία με βότσαλα και γαλαζοπράσινα νερά, στο άκρο της χερσονήσου του Αγίου Βασιλείου. Ιδανική για μπάνιο με θέα το Αιγαίο.",
    },
  },
];

const beachNavLinks = [
  { to: "/", label: { en: "Home", el: "Αρχική" }, hash: "" },
  { to: "/", label: { en: "Rooms", el: "Δωμάτια" }, hash: "#apartments" },
  { to: "/beaches", label: { en: "Beaches", el: "Παραλίες" }, hash: "" },
  { to: "/connections", label: { en: "Getting Here", el: "Πρόσβαση" }, hash: "" },
  { to: "/", label: { en: "Gallery", el: "Γκαλερί" }, hash: "#gallery" },
  { to: "/", label: { en: "Contact", el: "Επικοινωνία" }, hash: "#contact" },
];

function BeachesNav() {
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
        scrolled || open ? "bg-background/90 backdrop-blur-md border-b border-border/60" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:py-5">
        <Link to="/" className="font-serif text-xl md:text-2xl tracking-wide text-navy">
          Filotimia
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {beachNavLinks.map((l, i) => (
            <a
              key={i}
              href={l.to === "/beaches" ? "/beaches" : `${l.to}${l.hash}`}
              className="text-sm tracking-wide text-foreground/80 transition-colors hover:text-navy"
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
          className="md:hidden text-navy"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border/60 bg-background">
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-4">
            {beachNavLinks.map((l, i) => (
              <a
                key={i}
                href={l.to === "/beaches" ? "/beaches" : `${l.to}${l.hash}`}
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

function BeachesHero() {
  const { t } = useLang();
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-navy">
      <img
        src={beachesHero}
        alt="Beaches of Schinoussa"
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-navy/30 to-navy/70" />
      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-6xl flex-col items-center justify-center px-6 pt-28 pb-20 text-center text-cream">
        <span className="mb-6 text-[11px] tracking-[0.3em] uppercase font-semibold text-cream/80">
          {t({ en: "The Shores of Schinoussa", el: "Οι Ακτές της Σχοινούσας" })}
        </span>
        <h1 className="font-serif text-5xl leading-[1.05] md:text-7xl lg:text-8xl text-cream">
          {t({ en: "Discover", el: "Ανακαλύψτε" })}{" "}
          <span className="italic">{t({ en: "the Beaches", el: "τις Παραλίες" })}</span>
        </h1>
        <div className="flex items-center justify-center gap-4 my-8 md:my-10">
          <div className="h-px w-12 bg-cream/50" />
          <p className="text-cream/80 text-xs uppercase tracking-[0.25em] font-medium">
            {t({ en: "Each beach has its own character", el: "Κάθε παραλία έχει τη δική της ομορφιά" })}
          </p>
          <div className="h-px w-12 bg-cream/50" />
        </div>
        <p className="max-w-2xl text-base md:text-lg text-cream/90 leading-relaxed">
          {t({
            en: "Within minutes you'll discover some of the island's most beautiful beaches, with crystal-clear waters and a peaceful atmosphere.",
            el: "Σε λίγα μόνο λεπτά θα βρεθείτε σε μερικές από τις πιο όμορφες παραλίες του νησιού, με γαλαζοπράσινα νερά και μοναδική ηρεμία.",
          })}
        </p>
      </div>
    </section>
  );
}

function BeachSection({ beach, index, reversed }: { beach: Beach; index: number; reversed: boolean }) {
  const { t } = useLang();
  const number = String(index + 1).padStart(2, "0");

  return (
    <article
      className={`flex flex-col ${
        reversed ? "md:flex-row-reverse" : "md:flex-row"
      } items-center gap-12 md:gap-20 lg:gap-28 relative`}
    >
      <div className="w-full md:w-3/5 relative">
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-stone-light shadow-2xl shadow-navy/5">
          <img
            src={beach.image}
            alt={t(beach.name)}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-1000 hover:scale-[1.03]"
          />
        </div>
        <div
          className={`absolute ${
            reversed ? "-top-6 -left-6" : "-bottom-6 -right-6"
          } w-28 h-28 md:w-36 md:h-36 border border-sand hidden md:block`}
          aria-hidden
        />
      </div>

      <div className={`w-full md:w-2/5 ${reversed ? "md:text-right" : ""}`}>
        <div className="relative">
          <span
            className={`absolute ${
              reversed ? "-top-10 -right-3" : "-top-10 -left-3"
            } text-8xl md:text-9xl font-serif text-navy/5 select-none pointer-events-none`}
            aria-hidden
          >
            {number}
          </span>
          {beach.tag && <span className="text-sea text-xs font-bold uppercase tracking-[0.2em] mb-4 block">{t(beach.tag)}</span>}
          <h2 className="font-serif text-4xl md:text-5xl text-navy mb-6">{t(beach.name)}</h2>
          <p className="text-navy/70 leading-relaxed mb-8 text-base md:text-lg">{t(beach.description)}</p>
          {beach.detail && (
            <div
              className={`inline-flex flex-col gap-1 ${
                reversed ? "md:border-r-2 border-l-2 md:border-l-0" : "border-l-2"
              } border-sand pl-6 md:py-2 ${reversed ? "md:pr-6 md:pl-0" : ""}`}
            >
              <span className="text-[10px] uppercase tracking-[0.2em] text-navy/50 font-bold">
                {t({ en: "Note", el: "Σημείωση" })}
              </span>
              <span className="text-sm text-navy">{t(beach.detail)}</span>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

function BeachesSplitList() {
  const { t } = useLang();
  return (
    <section className="bg-cream py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center mb-20 md:mb-28">
          <span className="text-[11px] tracking-[0.3em] uppercase font-semibold text-sea">
            {t({ en: "Twelve Beaches", el: "Δώδεκα Παραλίες" })}
          </span>
          <h2 className="mt-4 font-serif text-3xl md:text-5xl text-navy leading-tight">
            {t({ en: "Choose your kind of blue", el: "Διαλέξτε το δικό σας γαλάζιο" })}
          </h2>
          <p className="mt-6 text-navy/70 leading-relaxed">
            {t({
              en: "From family-friendly sandy bays to hidden coves reached on foot — every beach on Schinoussa is close, protected and quietly unforgettable.",
              el: "Από φιλόξενες αμμουδιές για οικογένειες μέχρι κρυμμένους όρμους με τα πόδια — κάθε παραλία στη Σχοινούσα είναι κοντά, προστατευμένη και ήσυχα αξέχαστη.",
            })}
          </p>
        </div>

        <div className="space-y-28 md:space-y-44">
          {beaches.map((b, i) => (
            <BeachSection key={b.slug} beach={b} index={i} reversed={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BeachesCTA() {
  const { t } = useLang();
  return (
    <section className="relative overflow-hidden py-24 md:py-36">
      <img
        src={beachesHero}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-navy/80" />
      <div className="relative mx-auto max-w-3xl px-6 text-center text-cream">
        <span className="text-[11px] tracking-[0.3em] uppercase text-cream/70">
          {t({ en: "Stay With Us", el: "Μείνετε Μαζί Μας" })}
        </span>
        <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight">
          {t({
            en: "Minutes from every beach",
            el: "Λίγα λεπτά από κάθε παραλία",
          })}
        </h2>
        <p className="mt-6 text-cream/85 leading-relaxed">
          {t({
            en: "Wake up at Filotimia Apartments and walk to the sea within minutes.",
            el: "Ξυπνήστε στα Filotimia Apartments και βρεθείτε στη θάλασσα σε λίγα λεπτά.",
          })}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-cream px-8 py-4 text-sm font-medium text-navy hover:shadow-2xl transition-all"
          >
            {t({ en: "Book Your Stay", el: "Κράτηση Διαμονής" })}
            <ArrowRight className="size-4" />
          </a>
          <Link
            to="/"
            hash="apartments"
            className="inline-flex items-center justify-center rounded-full border border-cream/70 px-8 py-4 text-sm font-medium text-cream hover:bg-cream/10 transition-colors"
          >
            {t({ en: "View Our Rooms", el: "Δείτε τα Δωμάτια" })}
          </Link>
        </div>
      </div>
    </section>
  );
}

function BeachesFooter() {
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
              {beachNavLinks.map((l) => (
                <li key={`${l.to}${l.hash}`}>
                  <Link to={l.to} hash={l.hash || undefined} className="text-white/75 hover:text-white transition-colors">
                    {t(l.label)}
                  </Link>
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

function BeachesPage() {
  return (
    <main className="min-h-screen bg-cream text-foreground">
      <BeachesNav />
      <BeachesHero />
      <BeachesSplitList />
      <BeachesCTA />
      <BeachesFooter />
    </main>
  );
}
