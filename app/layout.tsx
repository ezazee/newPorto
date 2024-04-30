import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./main.css";
import { Analytics } from "@vercel/analytics/react";
import Preloader from "@/components/Preloader";
import CustomCursor from "@/components/CustomCursor";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import SideNav from "@/components/SideNav";
import Background from "@/components/Background";
import SideProfile from "@/components/SideProfile";
import HotjarScript from "@/components/HotjarScript";
import Head from "next/head";
config.autoAddCss = false;

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-mont",
  weight: "500",
});

const additionalClass = "relative custom_cursor";

export const metadata: Metadata = {
  title: "Zaportfolio",
  description:
    "I am Mohamad Reza Reziyanto, I am a Freelancer from West Java, my expertise is in the digital field such as Design, Web Developer, Ui Ux Design, etc.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Zaportfolio</title>
        <meta
          name="description"
          content="I am Mohamad Reza Reziyanto, I am a Freelancer from West Java, my expertise is in the digital field such as Design, Web Developer, Ui Ux Design, etc."
        />
        {/* Add Hotjar script here */}
        
      </Head>
      <body className={`${poppins.className} ${additionalClass}`}>
        <CustomCursor />
        <Preloader />
        <SideProfile />
        <SideNav />
        <Background />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
