import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VERA Hukuk — Hukuka Özen, İnsana Değer",
  description:
    "VERA Hukuk & Danışmanlık. Şirketler, gayrimenkul, aile, miras ve iş hukuku alanlarında insanı merkeze alan bir yaklaşım. Örnek hukuk bürosu tasarımı.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className="antialiased">{children}</body>
    </html>
  );
}
