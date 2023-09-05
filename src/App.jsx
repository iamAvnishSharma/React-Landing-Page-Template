import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Kediya } from "./components/kediya";
import { Chorni } from "./components/chorni";
import { Chakda } from "./components/chakda";
import { Koti } from "./components/koti";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Highlights } from "./components/Highlights";
import { Collections } from "./components/Collections";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";


export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Highlights data={landingPageData.Highlights} />
      <Collections data={landingPageData.Collections} />
      {/* <Highlights data={landingPageData.Highlights} /> */}
      {/* <Features data={landingPageData.Features} /> */}
      <About data={landingPageData.About} />
      {/* <Features data={landingPageData.Features} /> */}
      {/* <Services data={landingPageData.Services} /> */}
      <Kediya data={landingPageData.Kediya} />
      <Chorni data={landingPageData.Chorni} />
      <Chakda data={landingPageData.Chakda} />
      <Koti data={landingPageData.Koti} />
      {/* <Testimonials data={landingPageData.Testimonials} /> */}
      {/* <Team data={landingPageData.Team} /> */}
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
