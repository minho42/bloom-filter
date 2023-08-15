import "./globals.css";

export const metadata = {
  title: "Bloom filter visualized",
  description: "Bloom filter visualized",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
