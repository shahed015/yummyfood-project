import AboutHero from "@/components/about/AboutHero";
import HeroGallery from "@/components/about/HeroGallery";
import HowItWorks from "@/components/about/HowItWorks";
import OurStory from "@/components/about/OurStory";
import Banner from "@/components/home/Banner";
import Newsletter from "@/components/home/Newsletter";

export const metadata = {
  title: "About Us | YummyFood",
  description:
    "Learn about YummyFood: fresh ingredients, thoughtful preparation, and a simple way to order food you love.",
};

export default function AboutPage() {
  return (
    <>
      <main>
        <AboutHero />
        <HeroGallery />
        <OurStory />
        <Banner />
        <HowItWorks />
        <Newsletter />
      </main>
    </>
  );
}
