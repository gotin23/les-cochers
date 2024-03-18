import "./globals.css";

export const metadata = {
  title: "Les cochers solidaires",
  metadataBase: new URL("https://cochers.fr"),
  description:
    "L’association les Cochers Solidaires de Nice promène à vélo les enfants malades, les personnes âgées et les touristes à la découverte des charmes de la ville de Nice.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  keywords: [
    "les cochers solidaires",
    "cochers",
    "association",
    "vélo cargo",
    "transport",
    "enfants malades",
    "touriste",
    "maraude",
    "solidaires",
    "solidarité",
    "Nice",
    "personnes à mobilité réduite",
    "jardin",
    "livraison de colis",
    "histoire locale",
  ],
  openGraph: {
    title: "Les cochers solidaires",
    description:
      "L’association les Cochers Solidaires de Nice promène à vélo les enfants malades, les personnes âgées et les touristes à la découverte des charmes de la ville de Nice.",
    url: "https://www.hue@cochers.fr",
    siteName: "Les cochers solidaires",
    images: [
      {
        url: "https://www.cochers.fr/data/HomeCochers.webp",
        alt: "Miniature des Cochers Solidaires de Nice",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="flex justify-center">{children}</body>
    </html>
  );
}
