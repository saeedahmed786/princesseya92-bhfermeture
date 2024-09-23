import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Basic Meta Tags */}
        <title>BH FERMETURE | Expert PVC & Aluminum Work</title>
        <meta name="description" content="Professional locksmithing, PVC, and aluminum metal joinery services. Offering high-quality craftsmanship for all your security and metalwork needs. Contact us for a quote!" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Your Company Name" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="BH FERMETURE | Expert PVC & Aluminum Work" />
        <meta property="og:description" content="We specialize in locksmithing as well as PVC and aluminum metal joinery services. Contact us for reliable and professional craftsmanship." />
        <meta property="og:url" content="https://www.bhfermeture.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.bhfermeture.com/assets/logo.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="BH FERMETURE | Expert PVC & Aluminum Work" />
        <meta name="twitter:description" content="Offering locksmithing, PVC, and aluminum metal joinery services. Professional craftsmanship for your home or business needs." />
        <meta name="twitter:image" content="https://www.bhfermeture.com/assets/logo.jpg" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.bhfermeture.com" />

        {/* Keywords */}
        <meta name="keywords" content="locksmithing, PVC joinery, aluminum metal joinery, metalwork services, locksmith services, professional joinery, security services, locksmith near me, custom metal joinery, PVC window installation, aluminum doors" />

        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Favicons */}
        <link rel="icon" href="/assets/logo.jpg" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
