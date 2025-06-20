import type { Metadata } from "next";
import { EB_Garamond, Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { SiFacebook, SiInstagram, SiX } from "@icons-pack/react-simple-icons";
import { Linkedin } from "lucide-react";
import NavComponent from "@/components/NavComponent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin-ext", "latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const eb_garamond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
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
      <head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>Index - ChimesBlog Bootstrap Template</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
      </head>
      <body
        className={`${geistSans.variable} ${inter.variable} ${eb_garamond.variable} ${geistMono.variable} min-h-screen index-page flex flex-col antialiased`}
      >
        <header
          id="header"
          className="header h-fit w-full  flex items-center  sticky  top-0"
        >
          <div className="container relative flex items-center justify-between">
            <Link href="/" className="logo flex items-center me-auto bs-lg:me-0 ">
              <h1 className="sitename">ChimesBlog</h1>
            </Link>

            <NavComponent />
            <div className="header-social-links gap-1 flex pr-4">
              <Link href="#" className="pl-2 text-base">
                <SiX size={16} />
              </Link>
              <Link href="#" className="pl-2 text-base">
                <SiFacebook size={16} />
              </Link>
              <Link href="#" className="pl-2 text-base">
                <SiInstagram size={16} />
              </Link>
              <Link href="#" className="pl-2 text-base">
                <Linkedin size={16} />
              </Link>
            </div>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer id="footer" className="footer h-fit  dark-background">
          <div className="container footer-top">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4">
              <div className="lg:col-span-4 md:col-span-1 footer-about">
                <Link href="/" className="logo flex items-center">
                  <span className="sitename">ChimesBlog</span>
                </Link>
                <div className="footer-contact pt-3">
                  <p>A108 Adam Street</p>
                  <p>New York, NY 535022</p>
                  <p className="mt-3">
                    <strong>Phone:</strong> <span>+1 5589 55488 55</span>
                  </p>
                  <p>
                    <strong>Email:</strong> <span>info@example.com</span>
                  </p>
                </div>
                <div className="social-links flex mt-4">
                  <Link href="">
                    <SiX size={16} />
                  </Link>
                  <Link href="">
                    <SiFacebook size={16} />
                  </Link>
                  <Link href="">
                    <SiInstagram size={16} />
                  </Link>
                  <Link href="">
                    <Linkedin size={16} />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-2 md:col-span-1 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="#/about">About us</Link>
                  </li>
                  <li>
                    <Link href="#/services">Services</Link>
                  </li>
                  <li>
                    <Link href="#/terms">Terms of service</Link>
                  </li>
                  <li>
                    <Link href="#/privacy">Privacy policy</Link>
                  </li>
                </ul>
              </div>

              <div className="lg:col-span-2 md:col-span-1 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li>
                    <Link href="#">Web Design</Link>
                  </li>
                  <li>
                    <Link href="#">Web Development</Link>
                  </li>
                  <li>
                    <Link href="#">Product Management</Link>
                  </li>
                  <li>
                    <Link href="#">Marketing</Link>
                  </li>
                  <li>
                    <Link href="#">Graphic Design</Link>
                  </li>
                </ul>
              </div>

              <div className="lg:col-span-2 md:col-span-1 footer-links">
                <h4>Hic solutasetp</h4>
                <ul>
                  <li>
                    <Link href="#">Molestiae accusamus iure</Link>
                  </li>
                  <li>
                    <Link href="#">Excepturi dignissimos</Link>
                  </li>
                  <li>
                    <Link href="#">Suscipit distinctio</Link>
                  </li>
                  <li>
                    <Link href="#">Dilecta</Link>
                  </li>
                  <li>
                    <Link href="#">Sit quas consectetur</Link>
                  </li>
                </ul>
              </div>

              <div className="lg:col-span-2 md:col-span-1 footer-links">
                <h4>Nobis illum</h4>
                <ul>
                  <li>
                    <Link href="#">Ipsam</Link>
                  </li>
                  <li>
                    <Link href="#">Laudantium dolorum</Link>
                  </li>
                  <li>
                    <Link href="#">Dinera</Link>
                  </li>
                  <li>
                    <Link href="#">Trodelas</Link>
                  </li>
                  <li>
                    <Link href="#">Flexo</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="container copyright text-center mt-4">
            <p>
              © <span>Copyright</span>{" "}
              <strong className="px-1 sitename">ChimesBlog</strong>{" "}
              <span>All Rights Reserved</span>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
