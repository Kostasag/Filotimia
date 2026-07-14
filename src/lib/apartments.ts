import img66 from "@/assets/img66.jpeg";
import img90 from "@/assets/img90.jpeg";
import img114 from "@/assets/img114.jpeg";
import img52 from "@/assets/img52.jpeg";
import img62 from "@/assets/img62.jpeg";
import img63 from "@/assets/img63.jpeg";
import img66b from "@/assets/img66-2.jpeg";
import img68 from "@/assets/img68.jpeg";
import img71 from "@/assets/img71.jpeg";
import img72 from "@/assets/img72.jpeg";
import img76 from "@/assets/img76.jpeg";
import img308 from "@/assets/img308.jpeg";
import img304 from "@/assets/img304.jpeg";
import img109 from "@/assets/img109.jpeg";
import img106 from "@/assets/img106.jpeg";
import img105 from "@/assets/img105.jpeg";
import img99 from "@/assets/img99.jpeg";
import img104 from "@/assets/img104.jpeg";
import img91 from "@/assets/img91.jpeg";

export const BOOKING_URL =
  "https://direct-book.com/properties/filotimia?locale=en&items[0][adults]=2&items[0][children]=0&items[0][infants]=0&currency=EUR";
export const BOOKING_COM = "https://www.booking.com/hotel/gr/filotimia.en-gb.html";
export const INSTAGRAM_URL = "https://www.instagram.com/filotimia_/";
export const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/Filotimia+Apartments/@36.8810559,25.5154,17z/data=!3m1!4b1!4m6!3m5!1s0x14981b003c577321:0xed3e225574de0b36!8m2!3d36.8810559!4d25.5179749!16s%2Fg%2F11vxm0ky9w?entry=ttu&g_ep=EgoyMDI2MDcwOC4wIKXMDSoASAFQAw%3D%3D";
export const PHONE = "6943102945";
export const PHONE_TEL = "+306943102945";
export const EMAIL = "info@filotimia.gr";

const IMG = (p: string) => `https://filotimia.gr/images/${p}`;

export type LocalizedString = { en: string; el: string };

export type Apartment = {
  slug: string;
  name: string;
  nameI18n: LocalizedString;
  guests: number;
  size: string;
  sizeI18n: LocalizedString;
  bed: string;
  bedI18n: LocalizedString;
  desc: string;
  descI18n: LocalizedString;
  longDesc: string[];
  longDescI18n: { en: string[]; el: string[] };
  image: string;
  gallery: string[];
  highlights: string[];
  highlightsI18n: { en: string[]; el: string[] };
  amenityKeys: string[];
};


export const apartments: Apartment[] = [
  {
    slug: "large-stone-apartment",
    name: "Large Stone Apartment",
    nameI18n: { en: "Large Stone Apartment", el: "Μεγάλο Πέτρινο Διαμέρισμα" },
    guests: 4,
    size: "40 m²",
    sizeI18n: { en: "40 m²", el: "40 τ.μ." },
    bed: "King size",
    bedI18n: { en: "King size bed", el: "King Size Κρεβάτι" },
    desc: "Spacious apartment with a beautiful sea view and private veranda — ideal for families or small groups seeking room to breathe.",
    descI18n: {
      en: "Spacious apartment with a beautiful sea view and private veranda — ideal for families or small groups seeking room to breathe.",
      el: "Ευρύχωρο πέτρινο διαμέρισμα με όμορφη θέα στη θάλασσα και ιδιωτική βεράντα, ιδανικό για οικογένειες ή μικρές παρέες που αναζητούν άνεση, ηρεμία και αυθεντική κυκλαδίτικη φιλοξενία.",
    },
    longDesc: [
      "Our most generous space, the Large Stone Apartment is defined by hand-laid Cycladic stone walls, natural linens, and wide sliding doors that open onto a private terrace framing the Aegean.",
      "A separate living area with a sofa bed comfortably accommodates families or small groups, while the fully equipped kitchenette invites slow mornings with coffee and the sea breeze.",
    ],
    longDescI18n: {
      en: [
        "Our most generous space, the Large Stone Apartment is defined by hand-laid Cycladic stone walls, natural linens, and wide sliding doors that open onto a private terrace framing the Aegean.",
        "A separate living area with a sofa bed comfortably accommodates families or small groups, while the fully equipped kitchenette invites slow mornings with coffee and the sea breeze.",
      ],
      el: [
        "Ο πιο ευρύχωρος χώρος μας, το Μεγάλο Πέτρινο Διαμέρισμα, ξεχωρίζει για τους παραδοσιακά χτισμένους κυκλαδίτικους τοίχους από πέτρα, τα φυσικά λινά υφάσματα και τις μεγάλες συρόμενες πόρτες που ανοίγουν σε μια ιδιωτική βεράντα με θέα στο Αιγαίο.",
        "Ένας ξεχωριστός καθιστικός χώρος με καναπέ-κρεβάτι φιλοξενεί άνετα οικογένειες ή μικρές παρέες, ενώ η πλήρως εξοπλισμένη κουζίνα σας προσκαλεί σε ήρεμα πρωινά με καφέ και τη θαλασσινή αύρα.",
      ],
    },
    image: img66,
    gallery: [img66, img66b, img63, img62, img71, img72, img76, img68, img52],
    highlights: ["Private terrace with sea view", "Separate living area", "Sofa bed for 2 extra guests", "Bathroom with rainfall shower"],
    highlightsI18n: {
      en: ["Private terrace with sea view", "Separate living area", "Sofa bed for 2 extra guests", "Bathroom with rainfall shower"],
      el: ["Ιδιωτική βεράντα με θέα στη θάλασσα", "Ξεχωριστός καθιστικός χώρος", "Καναπές-κρεβάτι για 2 επιπλέον άτομα", "Μπάνιο με ντουζιέρα καταιονισμού"],
    },
    amenityKeys: ["wifi", "ac", "kitchen", "terrace", "seaview", "parking", "tv", "coffee"],
  },
  {
    slug: "open-plan-stone-double",
    name: "Open-Plan Stone Double",
    nameI18n: { en: "Open-Plan Stone Double", el: "Πέτρινο Δίκλινο Διαμέρισμα Ενιαίου Χώρου" },
    guests: 2,
    size: "30 m²",
    sizeI18n: { en: "30 m²", el: "30 τ.μ." },
    bed: "King size",
    bedI18n: { en: "King size bed", el: "King Size Κρεβάτι" },
    desc: "A modern open space defined by stone textures and Aegean light, with a private veranda framing the view.",
    descI18n: {
      en: "A modern open space defined by stone textures and Aegean light, with a private veranda framing the view.",
      el: "Ένας κομψός ενιαίος χώρος που συνδυάζει την παραδοσιακή πέτρα με το φυσικό φως του Αιγαίου, προσφέροντας ιδιωτική βεράντα και μια χαλαρωτική εμπειρία διαμονής.",
    },
    longDesc: [
      "An intimate retreat for two, shaped by stone, timber and soft light. The open plan flows effortlessly between sleeping, living and kitchen zones — everything within reach, nothing in excess.",
      "Step out onto your private veranda for slow breakfasts, sunset aperitivos, and long silent evenings under the stars.",
    ],
    longDescI18n: {
      en: [
        "An intimate retreat for two, shaped by stone, timber and soft light. The open plan flows effortlessly between sleeping, living and kitchen zones — everything within reach, nothing in excess.",
        "Step out onto your private veranda for slow breakfasts, sunset aperitivos, and long silent evenings under the stars.",
      ],
      el: [
        "Ένα προσωπικό καταφύγιο για δύο, με πέτρα, ξύλο και απαλό φως. Η ενιαία διαρρύθμιση συνδέει αρμονικά τους χώρους ύπνου, καθιστικού και κουζίνας — τα πάντα δίπλα σας, χωρίς τίποτα περιττό.",
        "Βγείτε στην ιδιωτική σας βεράντα για αργά πρωινά, απεριτίφ στο ηλιοβασίλεμα και ήσυχα βράδια κάτω από τα αστέρια.",
      ],
    },
    image: img308,
    gallery: [img308, img304, IMG("img205.jpeg"), IMG("img4002.jpeg"), IMG("img4007.jpeg"), IMG("img4009.jpeg")],
    highlights: ["Open-plan layout", "Private veranda", "Aegean sea view", "Custom stone details"],
    highlightsI18n: {
      en: ["Open-plan layout", "Private veranda", "Aegean sea view", "Custom stone details"],
      el: ["Ενιαία διαρρύθμιση", "Ιδιωτική βεράντα", "Θέα στο Αιγαίο", "Επιμελημένες πέτρινες λεπτομέρειες"],
    },
    amenityKeys: ["wifi", "ac", "kitchen", "terrace", "seaview", "parking", "tv", "coffee"],
  },
  {
    slug: "triple-semi-basement",
    name: "Triple Semi-Basement Room",
    nameI18n: { en: "Triple Semi-Basement Room", el: "Τρίκλινο Ημιυπόγειο Δωμάτιο" },
    guests: 3,
    size: "Cool retreat",
    sizeI18n: { en: "Cool retreat", el: "Δροσερός χώρος" },
    bed: "Three beds",
    bedI18n: { en: "Three single beds", el: "3 Μονά Κρεβάτια" },
    desc: "A cool, quiet room on the lower level with a functional layout, air conditioning and a fully equipped kitchen.",
    descI18n: {
      en: "A cool, quiet room on the lower level with a functional layout, air conditioning and a fully equipped kitchen.",
      el: "Ένα δροσερό και ήσυχο δωμάτιο στο ημιυπόγειο, με λειτουργική διαρρύθμιση, κλιματισμό και πλήρως εξοπλισμένη κουζίνα, ιδανικό για άνετη διαμονή.",
    },
    longDesc: [
      "Naturally cool thanks to its semi-basement setting, this room is a peaceful haven during hot Aegean afternoons. Three single beds and a smart layout make it ideal for friends travelling together.",
      "A compact kitchen, dining nook and modern bathroom complete a serene, minimalist stay just steps from the main garden.",
    ],
    longDescI18n: {
      en: [
        "Naturally cool thanks to its semi-basement setting, this room is a peaceful haven during hot Aegean afternoons. Three single beds and a smart layout make it ideal for friends travelling together.",
        "A compact kitchen, dining nook and modern bathroom complete a serene, minimalist stay just steps from the main garden.",
      ],
      el: [
        "Φυσικά δροσερό χάρη στη θέση του στο ημιυπόγειο, το δωμάτιο αυτό αποτελεί ένα ήσυχο καταφύγιο τα ζεστά αιγαιοπελαγίτικα απογεύματα. Τρία μονά κρεβάτια και μια έξυπνη διαρρύθμιση το καθιστούν ιδανικό για φίλους που ταξιδεύουν μαζί.",
        "Μια συμπαγής κουζίνα, γωνιά φαγητού και ένα μοντέρνο μπάνιο ολοκληρώνουν μια γαλήνια, μίνιμαλ διαμονή, λίγα βήματα από τον κεντρικό κήπο.",
      ],
    },
    image: img114,
    gallery: [img114, img109, img106, img105, IMG("img306.jpeg"), IMG("img4011.jpeg")],
    highlights: ["Three single beds", "Naturally cool interior", "Fully equipped kitchen", "Quiet garden setting"],
    highlightsI18n: {
      en: ["Three single beds", "Naturally cool interior", "Fully equipped kitchen", "Quiet garden setting"],
      el: ["Τρία μονά κρεβάτια", "Φυσικά δροσερός εσωτερικός χώρος", "Πλήρως εξοπλισμένη κουζίνα", "Ήσυχος κήπος"],
    },
    amenityKeys: ["wifi", "ac", "kitchen", "parking", "tv", "coffee"],
  },
  {
    slug: "semi-basement-double",
    name: "Semi-Basement Double Room",
    nameI18n: { en: "Semi-Basement Double Room", el: "Δίκλινο Ημιυπόγειο Δωμάτιο" },
    guests: 2,
    size: "Naturally cool",
    sizeI18n: { en: "Naturally cool", el: "Φυσικά δροσερό" },
    bed: "King size",
    bedI18n: { en: "King size bed", el: "King Size Κρεβάτι" },
    desc: "A serene, minimalist double room with natural light and air conditioning — quiet comfort for two.",
    descI18n: {
      en: "A serene, minimalist double room with natural light and air conditioning — quiet comfort for two.",
      el: "Ένα ήρεμο και minimal δίκλινο δωμάτιο με φυσικό φωτισμό, κλιματισμό και όλες τις απαραίτητες παροχές για μια άνετη και ξεκούραστη διαμονή δύο ατόμων.",
    },
    longDesc: [
      "A calm double room bathed in soft, filtered light. The semi-basement design keeps the space naturally cool, an ideal counterpoint to the summer sun outside.",
      "Timber, linen and stone in muted tones create a meditative atmosphere — perfect for couples looking for privacy and quiet.",
    ],
    longDescI18n: {
      en: [
        "A calm double room bathed in soft, filtered light. The semi-basement design keeps the space naturally cool, an ideal counterpoint to the summer sun outside.",
        "Timber, linen and stone in muted tones create a meditative atmosphere — perfect for couples looking for privacy and quiet.",
      ],
      el: [
        "Ένα ήρεμο δίκλινο δωμάτιο λουσμένο σε απαλό, φιλτραρισμένο φως. Η διαμόρφωση στο ημιυπόγειο διατηρεί τον χώρο φυσικά δροσερό, μια ιδανική αντίστιξη στον καλοκαιρινό ήλιο.",
        "Ξύλο, λινό και πέτρα σε γήινους τόνους δημιουργούν μια στοχαστική ατμόσφαιρα — ιδανική για ζευγάρια που αναζητούν ιδιωτικότητα και ηρεμία.",
      ],
    },
    image: img90,
    gallery: [img90, img99, img104, img91, IMG("img4004.jpeg"), IMG("img4000.jpeg")],
    highlights: ["King-size bed", "Naturally cool interior", "Modern rainfall shower", "Kitchenette"],
    highlightsI18n: {
      en: ["King-size bed", "Naturally cool interior", "Modern rainfall shower", "Kitchenette"],
      el: ["King size κρεβάτι", "Φυσικά δροσερός εσωτερικός χώρος", "Μοντέρνα ντουζιέρα καταιονισμού", "Κουζινάκι"],
    },
    amenityKeys: ["wifi", "ac", "kitchen", "parking", "tv", "coffee"],
  },
];


export const amenityCatalog: Record<string, LocalizedString> = {
  wifi: { en: "Free Wi-Fi", el: "Δωρεάν Wi-Fi" },
  ac: { en: "Air Conditioning", el: "Κλιματισμός" },
  kitchen: { en: "Equipped Kitchen", el: "Εξοπλισμένη Κουζίνα" },
  terrace: { en: "Private Terrace", el: "Ιδιωτική Βεράντα" },
  seaview: { en: "Sea View", el: "Θέα στη Θάλασσα" },
  parking: { en: "Private Parking", el: "Ιδιωτικό Πάρκινγκ" },
  tv: { en: "Smart TV", el: "Smart TV" },
  coffee: { en: "Coffee Machine", el: "Καφετιέρα" },
  laundry: { en: "Laundry on request", el: "Πλύσιμο ρούχων κατόπιν αιτήματος" },
};

export function findApartment(slug: string): Apartment | undefined {
  return apartments.find((a) => a.slug === slug);
}
