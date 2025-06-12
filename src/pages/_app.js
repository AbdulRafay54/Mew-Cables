import "@/styles/globals.css";
import Footer from "./Footer/page.js";
import Header from "./Header/pages.js";

export default function App({ Component, pageProps }) {
  return <>
  <Header/>
  <Component {...pageProps} />;
  
  <Footer/>
  </> 
}
