import type { Metadata } from "next";
import "../styles/globals.css";
import "react-vertical-timeline-component/style.min.css";
import Navbar from "@/components/elements/navbar/navbar";
import Footer from "@/components/elements/footer";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Shiavnski Technologies",
  description: "Shiavnski technologies llp",
  icons: {
    icon: "/company-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Navbar />
        {children}
        <Footer />
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
