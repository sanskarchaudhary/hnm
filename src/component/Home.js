import React from 'react';
// import Head from "next/head";
import Hero from "../component/Hero";
import Testimonials from "../component/Testimonials";
import Footer from "../component/Footer";

// import Carousal from "../component/Carousal";


function Home() {
  return (
      <>
         

          <main className="">
            
              <Hero />
              {/* <Carousal /> */}
              <Testimonials />
          </main>

          <Footer />
      </>
  )
}

export default Home