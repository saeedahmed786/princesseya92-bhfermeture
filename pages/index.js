import Head from 'next/head';
// import Layout from '../components/Layout';
import Hero from '../components/Hero/Hero';
import Contact from '../components/Contact/Contact';
import OurPartners from '../components/OurPartners/OurPartners';
import OurAchievements from '../components/OurAchievements/OurAchievements';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/footer';
import Locksmithing from '@/components/Locksmithing/Locksmithing';
import PVCAndAluminum from '@/components/PVCAndAluminum/PVCAndAluminum';
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {


  useEffect(() => {
    AOS.init();
    AOS.refresh();

    return () => {

    }
  }, []);


  return (
    <div>
      <Head>
        <Head>
          {/* Basic Meta Tags */}
          <title>BH FERMETURE | Expert PVC & Aluminum Work</title>
          <meta name="description" content="Professional locksmithing, PVC, and aluminum metal joinery services. Offering high-quality craftsmanship for all your security and metalwork needs. Contact us for a quote!" />
          <meta name="robots" content="index, follow" />
          <meta name="author" content="Your Company Name" />

          {/* Open Graph / Facebook */}
          <meta property="og:title" content="BH FERMETURE | Expert PVC & Aluminum Work" />
          <meta property="og:description" content="We specialize in locksmithing as well as PVC and aluminum metal joinery services. Contact us for reliable and professional craftsmanship." />
          <meta property="og:url" content="https://www.BHFERMETURE.com" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://www.BHFERMETURE.com/images/og-image.jpg" />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="BH FERMETURE | Expert PVC & Aluminum Work" />
          <meta name="twitter:description" content="Offering locksmithing, PVC, and aluminum metal joinery services. Professional craftsmanship for your home or business needs." />
          <meta name="twitter:image" content="https://www.BHFERMETURE.com/images/twitter-image.jpg" />

          {/* Canonical URL */}
          <link rel="canonical" href="https://www.BHFERMETURE.com" />

          {/* Keywords */}
          <meta name="keywords" content="locksmithing, PVC joinery, aluminum metal joinery, metalwork services, locksmith services, professional joinery, security services, locksmith near me, custom metal joinery, PVC window installation, aluminum doors" />

          {/* Viewport */}
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          {/* Favicons */}
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </Head>
      <Navbar />
      <Hero />
      <OurAchievements />
      <Locksmithing />
      <PVCAndAluminum />
      <OurPartners />
      <Contact />
      <Footer />
    </div>
  );
}