import ContactSection from "../components/home/contact";
import Hero from "../components/home/hero";
import Features from "../components/home/features";
import Navbar from "../components/home/navbar";
import About from "../components/home/about";
import Mission from "../components/home/mission";
import ProductSection from "../components/home/products";
import OrderSteps from "../components/home/order";
import TestimonialSection from "../components/home/testimonials";
import Footer from "@/components/home/footer";

export default function Home() {
  return (
    <div className="font-sans text-gray-800">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Mission />
      <ProductSection />
      <OrderSteps />
      <TestimonialSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
