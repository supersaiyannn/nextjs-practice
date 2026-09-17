import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


import { Roboto } from "next/font/google";
import { Work_Sans } from "next/font/google";


export const metadata = {
  title: {
    default: "Anmol Tech | Learn Web Development",
    template: "%s | Anmol Tech",
  },
  description:
    "Free tutorials on React.js, Next.js, and web development by Thapa Technical.",
  keywords: ["React", "Next.js", "Web Development", "Thapa Technical"],
  // icons: {
  //   icon: "/images/kody.png",
  // },
  metadataBase: new URL("https://Anmol.com"),
  openGraph: {
    title: "Anmol Tech ",
    description: "Join the best web dev tutorials!",
    url: "https://yourdomain.com",
    siteName: "Anmol Tech ",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Anmol Tech  Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anmol Tech ",
    description: "Learn Web Dev from scratch with Thapa Technical!",
    creator: "@thapatechnical",
    images: ["/og-image.png"],
  },
};


const roboto =Roboto({
  subsets:["latin"],
  variable:"--font-roboto",
})
const worksans = Work_Sans({
  subsets:["latin"],
    variable:"--font-work-sans",
})
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${worksans.variable}`}>
        
    {children}
      </body>
    </html>
  );
}
