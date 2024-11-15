import Head from "next/head";
import Footer from "../footer";
import NavBar from "../navBar";

const Main = ({ children }) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="og:title" content="website" />
      <title>Liam&apos;s Caf&eacute;</title>
    </Head>
    <NavBar />
    <div>{children}</div>
    <Footer />
  </>
);

export default Main;
