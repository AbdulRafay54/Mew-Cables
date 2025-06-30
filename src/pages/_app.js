

// pages/_app.js
import "@/styles/globals.css";
import Footer from "./Footer/page";
import Header from "./Header/pages";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${poppins.variable} bg-white text-gray-800`}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}
