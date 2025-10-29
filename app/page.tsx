import Image from "next/image";
import Header from './components/Header';
import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import Products from './components/Products';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function Home() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main>
                <Hero />
                <WhyUs />
                <Products />
                <Gallery />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default Home;
