import type { Metadata } from "next";
import "./globals.css";
import MenuBar from "@/components/MenuBar";

export const metadata: Metadata = {
  title: "Misarfeh",
  description: "Generated by create next app",
  manifest: "/manifest.json",
  icons: { apple: "icon.png" },
  themeColor: "#313030",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <main className="flex-grow">{children}</main>
        <MenuBar />
      </body>
    </html>
  );
}
