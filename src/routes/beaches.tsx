import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, X, Menu, MapPin } from "lucide-react";
import { BOOKING_URL, INSTAGRAM_URL, PHONE, PHONE_TEL } from "@/lib/apartments";
import { useLang, LanguageToggle } from "@/lib/i18n";
import beachesHero from "@/assets/beaches-hero.jpg";

// Beach card images (in display order)
import beach1 from "@/assets/img2014.jpeg";   // Psili Ammos
import beach2 from "@/assets/img2009.jpeg";   // Lioliou
import beach3 from "@/assets/img2006.jpeg";   // Tsigouri
import beach4 from "@/assets/img2004.jpeg";   // Almyros
import beach5 from "@/assets/img2000.jpeg";   // Alygaria
import beach6 from "@/assets/img2002.jpeg";   // Fontana
import beach7 from "@/assets/img2008.jpeg";   // Mersini
import beach8 from "@/assets/img2005.jpeg";   // Livadi
import beach9 from "@/assets/img2013.jpeg";   // Cavos tou Michali
import beach10 from "@/assets/img2007.jpeg";  // Gerolimnionas
import beach11 from "@/assets/img2011.jpeg";  // Fidou
import beach12 from "@/assets/img2012.jpeg";  // Agios Vasilis

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
        content:
          "Untouched coves, turquoise waters and peaceful escapes on Schinoussa, Small Cyclades.",
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
        scrolled || open
          ? "bg-background/90 backdrop-blur-md border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:py-5">
        <Link
          to="/"
          className={`font-serif text-xl md:text-2xl tracking-wide ${
            scrolled || open ? "text-navy" : "text-white"
          }`}
        >
          Filotimia
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {beachNavLinks.map((l, i) => (
            <a
              key={i}
              href={l.to === "/beaches" ? "/beaches" : `${l.to}${l.hash}`}
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

function BeachesHero() {
  const { t } = useLang();
  return (
    <section className="relative min-h-[85vh] w-full overflow-hidden">
      <img
        src={beachesHero}
        alt={t({ en: "Sunset over the Aegean at Schinoussa", el: "Ηλιοβασίλεμα στο Αιγαίο, Σχοινούσα" })}
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/80" />
      <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-6xl flex-col items-center justify-center px-6 pt-24 pb-16 text-center text-white">
        <span className="mb-6 text-[11px] tracking-[0.4em] uppercase text-white/80">
          {t({ en: "Coastal Guide · Schinoussa", el: "Οδηγός Ακτών · Σχοινούσα" })}
        </span>
        <h1 className="font-serif text-5xl leading-[1.05] md:text-7xl lg:text-8xl">
          {t({ en: "The Beaches of Schinoussa", el: "Οι Παραλίες της Σχοινούσας" })}
        </h1>
        <p className="mt-8 max-w-2xl text-base md:text-lg text-white/85 leading-relaxed">
          {t({
            en: "Twelve untouched coves on a walkable island. Calmness, simplicity and the honest blue of the Aegean.",
            el: "Δώδεκα ανέγγιχτοι όρμοι σε ένα νησί για περπάτημα. Ηρεμία, απλότητα και το ειλικρινές γαλάζιο του Αιγαίου.",
          })}
        </p>
      </div>
    </section>
  );
}

function BeachesGrid() {
  const { t } = useLang();
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-[11px] tracking-[0.4em] uppercase text-sea">
            {t({ en: "Twelve Beaches", el: "Δώδεκα Παραλίες" })}
          </span>
          <h2 className="mt-4 font-serif text-3xl md:text-5xl text-navy leading-tight">
            {t({ en: "Choose your kind of blue", el: "Διαλέξτε το δικό σας γαλάζιο" })}
          </h2>
          <p className="mt-6 text-foreground/70 leading-relaxed">
            {t({
              en: "From family-friendly sandy bays to hidden coves reached on foot — every beach on Schinoussa is close, protected and quietly unforgettable.",
              el: "Από φιλόξενες αμμουδιές για οικογένειες μέχρι κρυμμένους όρμους με τα πόδια — κάθε παραλία στη Σχοινούσα είναι κοντά, προστατευμένη και ήσυχα αξέχαστη.",
            })}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {beaches.map((b) => (
            <article
              key={b.slug}
              className="group overflow-hidden rounded-2xl bg-background border border-border/50 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-stone-light">
                <img
                  src={b.image}
                  alt={t(b.name)}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl text-navy">{t(b.name)}</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/75">
                  {t(b.description)}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function BeachesCTA() {
  const { t } = useLang();
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <img
        src={beachesHero}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-navy/80" />
      <div className="relative mx-auto max-w-3xl px-6 text-center text-white">
        <span className="text-[11px] tracking-[0.4em] uppercase text-white/70">
          {t({ en: "Stay With Us", el: "Μείνετε Μαζί Μας" })}
        </span>
        <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight">
          {t({
            en: "Minutes from every beach",
            el: "Λίγα λεπτά από κάθε παραλία",
          })}
        </h2>
        <p className="mt-6 text-white/85 leading-relaxed">
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
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-medium text-navy hover:shadow-2xl transition-all"
          >
            {t({ en: "Book Your Stay", el: "Κράτηση Διαμονής" })}
            <ArrowRight className="size-4" />
          </a>
          <Link
            to="/"
            hash="apartments"
            className="inline-flex items-center justify-center rounded-full border border-white/70 px-8 py-4 text-sm font-medium text-white hover:bg-white/10 transition-colors"
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
    <footer className="bg-cream text-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          <div>
            <div className="font-serif text-3xl text-navy">Filotimia</div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-foreground/70">
              {t({
                en: "Boutique stone apartments on Schinoussa, minutes from the island's finest beaches.",
                el: "Πέτρινα διαμερίσματα boutique στη Σχοινούσα, λίγα λεπτά από τις πιο όμορφες παραλίες.",
              })}
            </p>
          </div>
          <div className="text-sm space-y-3">
            <div className="flex items-center gap-2 text-foreground/80">
              <MapPin className="size-4 text-sea" /> Schinoussa, Small Cyclades
            </div>
            <a href={`tel:${PHONE_TEL}`} className="block text-foreground/80 hover:text-navy">
              {PHONE}
            </a>
            <a href="mailto:info@filotimia.gr" className="block text-foreground/80 hover:text-navy">
              info@filotimia.gr
            </a>
          </div>
          <div className="text-sm">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="text-navy hover:opacity-80"
            >
              @filotimia_
            </a>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-6 text-xs text-muted-foreground text-center">
          © {new Date().getFullYear()} Filotimia Apartments · Schinoussa, Greece
        </div>
      </div>
    </footer>
  );
}

function BeachesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <BeachesNav />
      <BeachesHero />
      <BeachesGrid />
      <BeachesCTA />
      <BeachesFooter />
    </main>
  );
}
