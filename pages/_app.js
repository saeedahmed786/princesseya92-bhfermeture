import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Basic Meta Tags */}
        <title>BH FERMETURE | Travaux experts en PVC et en aluminium</title>
        <meta name="google-site-verification" content="-7aeV9vAEld5zJQbywQejKZaElJOAB0nn6X3RWuE4MM" />
        <meta name="description" content="Services professionnels de serrurerie, de menuiserie métallique PVC et aluminium. Offrant un savoir-faire de haute qualité pour tous vos besoins en matière de sécurité et de ferronnerie. Contactez-nous pour un devis !" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="BH FERMETURE" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="BH FERMETURE | Travaux experts en PVC et en aluminium" />
        <meta property="og:description" content="Nous sommes spécialisés dans la serrurerie ainsi que dans les prestations de menuiserie métallique PVC et aluminium. Contactez-nous pour un savoir-faire fiable et professionnel." />
        <meta property="og:url" content="https://www.bhfermeture.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.bhfermeture.com/assets/logo.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="BH FERMETURE | Travaux experts en PVC et en aluminium" />
        <meta name="twitter:description" content="Proposant des services de serrurerie, de menuiserie métallique PVC et aluminium. Un savoir-faire professionnel pour vos besoins domestiques ou professionnels." />
        <meta name="twitter:image" content="https://www.bhfermeture.com/assets/logo.jpg" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.bhfermeture.com" />

        {/* Keywords */}
        <meta name="keywords" content="serrurerie, menuiserie PVC, menuiserie métal aluminium, services de ferronnerie, services de serrurerie, menuiserie professionnelle, services de sécurité, serrurier à proximité, menuiserie métallique sur mesure, pose de fenêtres PVC, portes aluminium" />

        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Favicons */}
        <link rel="icon" href="/assets/logo.jpg" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
