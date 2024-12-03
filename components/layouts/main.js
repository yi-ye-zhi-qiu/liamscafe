import Head from "next/head";
import Footer from "../footer";
import NavBar from "../navBar";

const Main = ({ children }) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="shortcut icon" href="/ico/favicon.ico" type="image/x-icon" />
      <meta name="description" content="Liam Isaacs' cafe-themed developer portfolio" />
      <meta name="author" content="Liam Isaacs" />
      <meta property="og:site_name" content="Liam's Cafe" />
      <meta name="og:title" content="Liam's Cafe" />
      <title>Liam&apos;s Caf&eacute;</title>
    </Head>
    <NavBar />
    <div>{children}</div>
    <Footer />
  </>
);

export default Main;
