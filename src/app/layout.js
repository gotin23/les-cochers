import "./globals.css";

export const metadata = {
  title: "Les cochers solidaires",
  description:
    "L’association les Cochers Solidaires de Nice emmènent en vélo les enfants malades, les personnes âgées et les touristes à la découverte des charmes de la ville de Nice.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="flex justify-center">{children}</body>
    </html>
  );
}
