import Banner from "@/components/home/Banner";
import Hero from "@/components/home/Hero";
import Newsletter from "@/components/home/Newsletter";
import Testimonials from "@/components/home/Testimonials";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Hero />
      <Banner />
      <WhyChooseUs />
      <Newsletter />
      <Testimonials />
    </>
  );
}
