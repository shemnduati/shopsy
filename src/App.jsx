import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Products from './components/Products/Products';
import AOS from  'aos';
import  'aos/dist/aos.css';
import TopProducts from './components/TopProducts/TopProducts';
import Banner from './components/Banner/Banner';
import Subscribe from './components/Suscribe/Subscribe';
import Testimonials from './components/Testimonials/Testimonials';
import Shop from './components/Shop/Shop';
import Footer from './components/Footer/Footer';


const  App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration:800,
      easing:"ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <>
    <Navbar />
    <Hero />
    <Products />
    <TopProducts />
    <Banner />
    <Subscribe />
    <Shop />
    <Testimonials />
    <Footer />
    </>
  )
}

export default App
