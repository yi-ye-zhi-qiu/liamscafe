import "../styles/global.css";
import Layout from "../components/layouts/main";
import { CartProvider } from "../context/cart";
import { OverlayProvider } from "../context/overlay";

export default function App({ Component, pageProps, router }) { 
  return (
    <>
      <CartProvider>  
        <OverlayProvider>
          <Layout router={router}>
            <Component {...pageProps} />
          </Layout>
        </OverlayProvider>
      </CartProvider>      
    </>
  );
}