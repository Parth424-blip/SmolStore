import "./globals.css";
import "./fanta.css";
import Head from "./head";
import Link from "next/link";
import Cart from "@/components/Cart";
import EmailInput from "@/components/EmailInput";
import ProductsProvider from "@/context/ProductContext";

export const metadata = {
  title: "Store",
  description: "A super cool store for productivity and friends",
};

export default function RootLayout({ children }) {
  return (
    <ProductsProvider>
      <html lang="en">
        <Head />
        <body>
          <div id="portal" />
          <div id="app">
            <header>
              <div className="header-content">
                <Link href="/">
                  <h1>Store</h1>
                </Link>

                <h5 className="mid-text">-Cool stuff for cool people</h5>
                <Cart />
              </div>
            </header>
            <main>{children}</main>
            <div className="hr" />

            <footer>
              <div className="email-container">
                <h5>
                  Get a sneak peak at new additions to the store, special
                  offers, and so much more
                </h5>
                <EmailInput />
              </div>
              <div className="links-container">
                <div>
                  <h3>Parth</h3>
                  <Link href={"./"}>Hub</Link>
                  <Link href={"./"}>Roadmap</Link>
                </div>
                <div>
                  <h3>Store</h3>
                  <Link href={"./"}>Home</Link>
                  <Link href={"./"}>Cart</Link>
                </div>
                <div>
                  <h3>Support</h3>
                  <Link href={"./"}>Contact</Link>
                  <Link href={"./"}>FAQs</Link>
                </div>
              </div>
              <div className="socials"></div>
            </footer>
          </div>
        </body>
      </html>
    </ProductsProvider>
  );
}
