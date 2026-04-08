export const SITE = {
  name: "Dr Branko M. Vujkovic",
  title: "MSc. dr Branko M. Vujkovic",
  role: "Specijalista fizikalne medicine i rehabilitacije",
  phone: "+381 64 906 6690",
  email: "fizijatrija015@gmail.com",
  address: "Sabac, Srbija",
  instagram: "https://www.instagram.com/fizijatar015",
  facebook: "https://www.facebook.com/DrVujkovic",
};

export const SERVICES = [
  {
    id: "bolna-stanja",
    title: "Dijagnostika i terapija bolnih stanja",
    emoji: "🆘",
    shortTitle: "Bolna stanja",
    description:
      "Sveobuhvatna dijagnostika i savremena terapija hronicnih i akutnih bolnih stanja. Individualni pristup svakom pacijentu sa ciljem otklanjanja bola i poboljsanja kvaliteta zivota.",
    image:
      "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80",
    details: [
      "Dijagnostika i lecenje bola u ledjima i vratu",
      "Terapija glavobolja i migrena",
      "Lecenje bola u zglobovima",
      "Nervni bolovi (neuralgije)",
      "Postoperativna rehabilitacija",
      "Hronicni bolni sindromi",
    ],
  },
  {
    id: "regenerativna-medicina",
    title: "Regenerativna medicina",
    emoji: "☯️",
    shortTitle: "Regenerativna medicina",
    description:
      "Najsavremenije metode regenerativne medicine koje podstichu prirodne procese oporavka organizma. Tretmani koji ubrzavaju zarastanje tkiva i smanjuju upalne procese.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    details: [
      "PRP terapija (trombocitima obogacena plazma)",
      "Mezoterapija",
      "Proloterapija",
      "Ozon terapija",
      "Regeneracija hrskavice",
      "Tretman degenerativnih promena",
    ],
  },
  {
    id: "sportske-povrede",
    title: "Dijagnostika i terapija sportskih povreda",
    emoji: "🤸🏻",
    shortTitle: "Sportske povrede",
    description:
      "Specijalizovana dijagnostika i terapija povreda nastalih u sportu i fizickoj aktivnosti. Brz i bezbedan povratak sportskim aktivnostima uz individualni plan rehabilitacije.",
    image:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
    details: [
      "Povrede misica, tetiva i ligamenata",
      "Rehabilitacija posle operacije kolena",
      "Terapija teniskog i golfskog lakta",
      "Lecenje upale Ahilove tetive",
      "Sportska rehabilitacija",
      "Prevencija sportskih povreda",
    ],
  },
  {
    id: "sokvejv-terapija",
    title: "Sokvejv terapija",
    emoji: "⚡",
    shortTitle: "Sokvejv terapija",
    description:
      "Fokusirana terapija udarnim talasima (shockwave) - neinvazivna metoda za lecenje hronicnih bolova i degenerativnih promena. Dokazana efikasnost u lecenju kalcifikata, tendinopatija i drugih stanja.",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
    details: [
      "Lecenje kalcifikata u ramenu",
      "Terapija petnog trna (plantarni fasciitis)",
      "Tendinopatije razlicitih lokalizacija",
      "Miogeloza i trigger tacke",
      "Hronicni bolovi u misicima",
      "Ubrzanje zarastanja kostiju",
    ],
  },
];

export const NAV_LINKS = [
  { href: "/", label: "Pocetna" },
  { href: "/o-meni", label: "O doktoru" },
  {
    href: "/usluge",
    label: "Usluge",
    children: SERVICES.map((s) => ({
      href: `/usluge/${s.id}`,
      label: s.shortTitle,
    })),
  },
  { href: "/blog", label: "Blog" },
  { href: "/kontakt", label: "Kontakt" },
];
