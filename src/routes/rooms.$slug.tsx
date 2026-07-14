import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BedDouble,
  Coffee,
  Car,
  Instagram,
  Facebook,
  Map as MapIcon,
  Mail,
  MapPin,
  Phone,
  Ruler,
  Star,
  Sun,
  Tv,
  UtensilsCrossed,
  Users,
  Waves,
  Wifi,
  Wind,
  X,
  Check,
} from "lucide-react";
import {
  apartments,
  amenityCatalog,
  BOOKING_URL,
  BOOKING_COM,
  EMAIL,
  findApartment,
  GOOGLE_MAPS_URL,
  INSTAGRAM_URL,
  PHONE,
  PHONE_TEL,
} from "@/lib/apartments";
import { useLang, LanguageToggle } from "@/lib/i18n";

export const Route = createFileRoute("/rooms/$slug")({
  head: ({ params }) => {
    const apt = findApartment(params.slug);
    const title = apt
      ? `${apt.name} — Filotimia Apartments, Schinoussa`
      : "Room — Filotimia Apartments";
    const description = apt?.desc ?? "Luxury stone apartments in Schinoussa, Greece.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        ...(apt?.image ? [{ property: "og:image", content: apt.image }] : []),
      ],
    };
  },
  loader: ({ params }) => {
    const apt = findApartment(params.slug);
    if (!apt) throw notFound();
    return apt;
  },
  notFoundComponent: RoomNotFound,
  component: RoomPage,
});

function RoomNotFound() {
  const { t } = useLang();
  return (
    <div className="flex min-h-screen items-center justify-center bg-cream px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-5xl text-navy">{t({ en: "Room not found", el: "Το δωμάτιο δεν βρέθηκε" })}</h1>
        <p className="mt-4 text-muted-foreground">{t({ en: "The apartment you're looking for isn't available.", el: "Το διαμέρισμα που αναζητάτε δεν είναι διαθέσιμο." })}</p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm text-white hover:opacity-90"
        >
          <ArrowLeft className="size-4" /> {t({ en: "Return home", el: "Επιστροφή στην αρχική" })}
        </Link>
      </div>
    </div>
  );
}

const amenityIcons: Record<string, typeof Wifi> = {
  wifi: Wifi,
  ac: Wind,
  kitchen: UtensilsCrossed,
  terrace: Sun,
  seaview: Waves,
  parking: Car,
  tv: Tv,
  coffee: Coffee,
};

function RoomPage() {
  const apt = Route.useLoaderData() as import("@/lib/apartments").Apartment;
  const { t, lang } = useLang();
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setLightbox(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const others = apartments.filter((a) => a.slug !== apt.slug);
  const name = t(apt.nameI18n);
  const desc = t(apt.descI18n);
  const longDescParas = apt.longDescI18n[lang];
  const highlightsList = apt.highlightsI18n[lang];

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <header className="fixed inset-x-0 top-0 z-40 bg-background/85 backdrop-blur-md border-b border-border/60">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/" className="font-serif text-xl md:text-2xl tracking-wide text-navy">
            Filotimia
          </Link>
          <div className="flex items-center gap-3 md:gap-5">
            <Link
              to="/"
              className="hidden sm:inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-navy transition-colors"
            >
              <ArrowLeft className="size-4" /> {t({ en: "All apartments", el: "Όλα τα διαμερίσματα" })}
            </Link>
            <LanguageToggle />
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-navy px-5 py-2.5 text-sm font-medium text-white hover:opacity-90 transition-all"
            >
              {t({ en: "Book Now", el: "Κράτηση" })}
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-[90vh] w-full overflow-hidden pt-16">
        <img
          src={apt.gallery[0]}
          alt={name}
          className="absolute inset-0 h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/25 to-black/70" />
        <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-6xl flex-col justify-end px-6 pb-20 text-white fade-in">
          <span className="text-xs tracking-[0.3em] uppercase text-white/80">
            Filotimia · {t({ en: "Schinoussa", el: "Σχοινούσα" })}
          </span>
          <h1 className="mt-4 font-serif text-5xl leading-[1.05] md:text-7xl fade-in-up">
            {name}
          </h1>
          <p className="mt-6 max-w-2xl font-serif text-lg md:text-xl italic text-white/90">
            {desc}
          </p>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm">
            <span className="inline-flex items-center gap-2">
              <Users className="size-4" /> {t({ en: `Sleeps ${apt.guests}`, el: `${apt.guests} άτομα` })}
            </span>
            <span className="inline-flex items-center gap-2">
              <Ruler className="size-4" /> {t(apt.sizeI18n)}
            </span>
            <span className="inline-flex items-center gap-2">
              <BedDouble className="size-4" /> {t(apt.bedI18n)}
            </span>
          </div>
        </div>
      </section>

      {/* Overview + Booking sidebar */}
      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-3 lg:gap-16">
          <div className="lg:col-span-2">
            <span className="text-xs tracking-[0.3em] uppercase text-sea">{t({ en: "The Space", el: "Ο Χώρος" })}</span>
            <h2 className="mt-4 font-serif text-3xl md:text-5xl text-navy leading-tight">
              {t({ en: "A calm, considered stay", el: "Μια ήρεμη, προσεγμένη διαμονή" })}
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-foreground/75">
              {longDescParas.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-12">
              <h3 className="font-serif text-2xl text-navy">{t({ en: "Highlights", el: "Χαρακτηριστικά" })}</h3>
              <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {highlightsList.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-foreground/80">
                    <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-sea/15 text-sea">
                      <Check className="size-3.5" />
                    </span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 h-fit rounded-2xl border border-border bg-background p-8 shadow-sm">
            <div className="flex items-baseline justify-between">
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{t({ en: "Direct booking", el: "Απευθείας κράτηση" })}</div>
                <div className="mt-1 font-serif text-2xl text-navy">{t({ en: "Best rate guaranteed", el: "Εγγυημένα η καλύτερη τιμή" })}</div>
              </div>
            </div>
            <p className="mt-4 text-sm text-foreground/70 leading-relaxed">
              {t({
                en: "Book directly with us for the best available price and a warm, personal welcome.",
                el: "Κάντε την κράτησή σας απευθείας για την καλύτερη διαθέσιμη τιμή και μια ζεστή, προσωπική υποδοχή.",
              })}
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy px-6 py-4 text-sm font-medium text-white hover:opacity-90 transition-all"
            >
              {t({ en: "Check availability", el: "Έλεγχος διαθεσιμότητας" })}
              <ArrowRight className="size-4" />
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full border border-border px-6 py-4 text-sm font-medium text-navy hover:bg-cream transition-colors"
            >
              <Phone className="size-4" /> {PHONE}
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full border border-border px-6 py-4 text-sm font-medium text-navy hover:bg-cream transition-colors"
            >
              <Mail className="size-4" /> {t({ en: "Email the hosts", el: "Στείλτε μας email" })}
            </a>
            <div className="mt-6 border-t border-border pt-6 text-xs text-muted-foreground text-center">
              {t({ en: "or reserve via", el: "ή κάντε κράτηση μέσω" })}{" "}
              <a href={BOOKING_COM} target="_blank" rel="noreferrer" className="text-navy underline">
                Booking.com
              </a>
            </div>
          </aside>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <span className="text-xs tracking-[0.3em] uppercase text-sea">{t({ en: "Gallery", el: "Γκαλερί" })}</span>
              <h2 className="mt-3 font-serif text-3xl md:text-5xl text-navy">
                {t({ en: `Inside ${name}`, el: `Μέσα στο ${name}` })}
              </h2>
            </div>
            <span className="text-sm text-muted-foreground">
              {t({ en: "Click any image to enlarge", el: "Κάντε κλικ σε οποιαδήποτε εικόνα για μεγέθυνση" })}
            </span>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2">
            <button
              onClick={() => { setActiveIdx(0); setLightbox(apt.gallery[0]); }}
              className="relative col-span-1 md:col-span-2 md:row-span-2 overflow-hidden rounded-2xl bg-stone-light aspect-[4/3] md:aspect-auto"
            >
              <img
                src={apt.gallery[0]}
                alt={`${name} main`}
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </button>
            {apt.gallery.slice(1, 4).map((src, i) => (
              <button
                key={src + i}
                onClick={() => { setActiveIdx(i + 1); setLightbox(src); }}
                className="relative overflow-hidden rounded-2xl bg-stone-light aspect-[4/3]"
              >
                <img
                  src={src}
                  alt={`${name} ${i + 2}`}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="bg-stone-light py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <span className="text-xs tracking-[0.3em] uppercase text-sea">
              {t({ en: "Amenities", el: "Παροχές" })}
            </span>
            <h2 className="mt-3 font-serif text-3xl md:text-5xl text-navy">
              {t({ en: "Everything you need", el: "Όλα όσα χρειάζεστε" })}
            </h2>
            <p className="mt-4 text-foreground/70 leading-relaxed">
              {t({
                en: "Thoughtful comforts throughout the space — quietly present, never in the way.",
                el: "Προσεγμένες ανέσεις σε όλο τον χώρο — διακριτικά παρούσες, ποτέ ενοχλητικές.",
              })}
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
            {apt.amenityKeys.map((key) => {
              const Icon = amenityIcons[key] ?? Star;
              return (
                <div
                  key={key}
                  className="flex items-center gap-4 rounded-2xl bg-background p-5 shadow-sm"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-sea/10 text-sea">
                    <Icon className="size-5" strokeWidth={1.6} />
                  </span>
                  <span className="font-serif text-base text-navy">{t(amenityCatalog[key])}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why stay */}
      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <span className="text-xs tracking-[0.3em] uppercase text-sea">
            {t({ en: "Why Filotimia", el: "Γιατί Filotimia" })}
          </span>
          <h2 className="mt-3 font-serif text-3xl md:text-5xl text-navy">
            {t({ en: "A different kind of island stay", el: "Μια διαφορετική εμπειρία διαμονής στο νησί" })}
          </h2>
          <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3 text-left">
            {[
              {
                title: { en: "Authentic hospitality", el: "Αυθεντική φιλοξενία" },
                body: {
                  en: "Warm, personal welcomes and quiet attention to detail — the meaning of φιλότιμο.",
                  el: "Ζεστή, προσωπική υποδοχή και διακριτική φροντίδα στη λεπτομέρεια — η ουσία του φιλότιμου.",
                },
              },
              {
                title: { en: "A tranquil island", el: "Ένα γαλήνιο νησί" },
                body: {
                  en: "Schinoussa is small, walkable and peaceful — a rare Cycladic escape from the crowds.",
                  el: "Η Σχοινούσα είναι μικρή, εύκολα προσβάσιμη και ήσυχη — μια σπάνια κυκλαδίτικη απόδραση μακριά από τον κόσμο.",
                },
              },
              {
                title: { en: "Steps from the sea", el: "Βήματα από τη θάλασσα" },
                body: {
                  en: "Beaches, tavernas and the port are all within an easy stroll from your door.",
                  el: "Παραλίες, ταβέρνες και λιμάνι, όλα με μια σύντομη βόλτα από την πόρτα σας.",
                },
              },
            ].map((c) => (
              <div key={c.title.en}>
                <h3 className="font-serif text-2xl text-navy">{t(c.title)}</h3>
                <p className="mt-3 text-foreground/70 leading-relaxed">{t(c.body)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other apartments */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <span className="text-xs tracking-[0.3em] uppercase text-sea">
                {t({ en: "Also at Filotimia", el: "Επίσης στο Filotimia" })}
              </span>
              <h2 className="mt-3 font-serif text-3xl md:text-5xl text-navy">
                {t({ en: "Explore other apartments", el: "Δείτε τα άλλα διαμερίσματα" })}
              </h2>
            </div>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-navy border-b border-navy/30 pb-1 hover:border-navy"
            >
              {t({ en: "View all", el: "Δείτε όλα" })} <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((o) => (
              <Link
                key={o.slug}
                to="/rooms/$slug"
                params={{ slug: o.slug }}
                className="group block"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-stone-light">
                  <img
                    src={o.image}
                    alt={t(o.nameI18n)}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-5 font-serif text-xl text-navy">{t(o.nameI18n)}</h3>
                <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs uppercase tracking-wider text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5"><Users className="size-3.5" /> {o.guests}</span>
                  <span className="inline-flex items-center gap-1.5"><Ruler className="size-3.5" /> {t(o.sizeI18n)}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-navy py-20 md:py-28 text-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-serif text-4xl md:text-6xl leading-tight">
            {t({ en: "Ready for your stay?", el: "Έτοιμοι για τη διαμονή σας;" })}
          </h2>
          <p className="mt-6 text-white/80 leading-relaxed">
            {t({
              en: `Reserve ${name} directly for the best rate and a personal welcome from your hosts.`,
              el: `Κάντε κράτηση για ${name} απευθείας για την καλύτερη τιμή και μια προσωπική υποδοχή από τους οικοδεσπότες σας.`,
            })}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-medium text-navy hover:shadow-2xl transition-all"
            >
              {t({ en: "Book now", el: "Κράτηση" })} <ArrowRight className="size-4" />
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/70 px-8 py-4 text-sm font-medium text-white hover:bg-white/10 transition-colors"
            >
              <Phone className="size-4" /> {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-cream text-foreground">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            <div>
              <div className="font-serif text-3xl text-navy">Filotimia</div>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-foreground/70">
                {t({
                  en: "Luxury stone apartments on Schinoussa, Small Cyclades.",
                  el: "Πολυτελή πέτρινα διαμερίσματα στη Σχοινούσα, Μικρές Κυκλάδες.",
                })}
              </p>
              <div className="mt-6 flex gap-3">
                <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" aria-label="Instagram" className="grid size-10 place-items-center rounded-full border border-border text-navy hover:bg-navy hover:text-white transition-colors">
                  <Instagram className="size-4" />
                </a>
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook" className="grid size-10 place-items-center rounded-full border border-border text-navy hover:bg-navy hover:text-white transition-colors">
                  <Facebook className="size-4" />
                </a>
                <a href={GOOGLE_MAPS_URL} target="_blank" rel="noreferrer" aria-label="Google Maps" className="grid size-10 place-items-center rounded-full border border-border text-navy hover:bg-navy hover:text-white transition-colors">
                  <MapIcon className="size-4" />
                </a>
              </div>
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
                  <a href={`tel:${PHONE_TEL}`} className="text-foreground/80 hover:text-navy">{PHONE}</a>
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="mt-0.5 size-4 shrink-0 text-sea" />
                  <a href={`mailto:${EMAIL}`} className="text-foreground/80 hover:text-navy">{EMAIL}</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-widest text-muted-foreground">
                {t({ en: "Reserve", el: "Κράτηση" })}
              </h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <a href={BOOKING_URL} target="_blank" rel="noreferrer" className="text-navy font-medium hover:opacity-80">
                    {t({ en: "Direct booking", el: "Απευθείας κράτηση" })}
                  </a>
                </li>
                <li>
                  <a href={BOOKING_COM} target="_blank" rel="noreferrer" className="text-foreground/80 hover:text-navy">
                    Booking.com
                  </a>
                </li>
                <li>
                  <Link to="/" className="text-foreground/80 hover:text-navy">
                    {t({ en: "All apartments", el: "Όλα τα διαμερίσματα" })}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-border pt-6 text-xs text-muted-foreground text-center">
            © {new Date().getFullYear()} Filotimia Apartments · {t({ en: "Schinoussa · Greece", el: "Σχοινούσα · Ελλάδα" })}
          </div>
        </div>
      </footer>

      {/* Lightbox */}
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
            alt={name}
            className="max-h-[90vh] max-w-[92vw] rounded-lg object-contain"
          />
          <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-white/60">
            {activeIdx + 1} / {apt.gallery.length}
          </span>
        </div>
      )}
    </main>
  );
}
