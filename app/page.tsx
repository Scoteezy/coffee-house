import About from "@/components/homePage/About";
import Best from "@/components/homePage/Best";
import Hero from "@/components/homePage/Hero";
import Footer from "@/components/shared/Footer";
const Home = () => {
  return (
    <main className="w-full">
      <Hero />
      <About />
      <Best />
      <Footer />
    </main>
  );
};

export default Home;
