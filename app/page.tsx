import Hero from "./components/Hero";
import ValueProposition from "./components/WearYourStory";
import FeatureCarousel from "./components/FeatureCarousel";
import Timeline from "./components/Timeline";
import Marquee from "./components/Marquee";
import ContactForm from "./components/ContactForm";
import NewsletterSubscribe from "./components/NewsletterSubscribe";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <ValueProposition /> */}
      {/* <FeatureCarousel /> */}
      <Timeline />
      <Marquee />
      <ContactForm />
      {/* <NewsletterSubscribe /> */}
    </>
  );
}
