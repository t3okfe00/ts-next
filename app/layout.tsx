import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inconsolata } from "next/font/google";
import { Metadata } from "next";

const inconsolata = Inconsolata({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Learning typescript",
  description: "with next js",
  keywords: "Next.js,Tailwind.css,Typescript",
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inconsolata.className}>
        {" "}
        <Navbar></Navbar>
        <main className="max-w-3xl mx-auto px-4 py-2 mt-4">{children}</main>
      </body>
    </html>
  );
}

export default RootLayout;
