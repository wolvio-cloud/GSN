import React from "react";
import Navigation from "../components/home/Navigation1";
import Hero from "../components/home/Hero";
import Impact from "../components/home/Impact3";
import Connect from "../components/home/Connect";
import Card from "../components/home/Card";
import Path from "../components/home/Path";
import Testimonials from "../components/home/Testimonial";
import Form from "../components/home/Form";
// import Footer from "../components/home/Footer";
const Home = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <Impact />
      <Connect />
      <Card />
     <Path />
      <Testimonials />
       <Form />
      {/* // <Footer />  */}
    </>
  );
};
export default Home;
