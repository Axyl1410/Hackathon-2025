import ScrollToTop from "@/components/common/scroll-to-top";
import { ThemeProvider } from "@/components/theme/theme-context";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          `dark:bg-background-dark text-text dark:text-text-dark bg-background antialiased`,
          geistSans.variable,
          geistMono.variable,
        )}
      >
        <ThemeProvider>
          <ScrollToTop />
          <Toaster closeButton richColors position="top-left" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
