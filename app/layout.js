import { Newsreader, Outfit } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-newsreader",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata = {
  title: "YummyFood | Fresh Food & Online Ordering",
  description: "Discover delicious food and build your order with YummyFood.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${newsreader.variable} ${outfit.variable}`}>
      <body className="flex min-h-full flex-col bg-cream font-sans text-black">
        <div className="flex-1">{children}</div>
      </body>
    </html>
  );
}
