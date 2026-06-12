import type { Metadata } from "next";
import { JetBrains_Mono, Montserrat } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { CommandK } from "@/components/command-k/CommandK";
import { Header } from "@/components/ui/Header";
import { site } from "@/content/site";
import "./globals.css";

// Montserrat is the Proxima Nova stand-in (see CLAUDE.md design tokens).
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description: site.positioning,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${jetbrainsMono.variable}`}>
      <body>
        <ThemeProvider>
          <div className="flex h-screen flex-col overflow-hidden">
            <Header />
            <main className="min-h-0 flex-1">{children}</main>
          </div>
          <CommandK />
        </ThemeProvider>
      </body>
    </html>
  );
}
