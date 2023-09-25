import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Kediya } from "./components/kediya";
import { Kediyacatalogue } from "./components/kediyacatalogue";
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

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { Throwback } from "./components/throwback";
import { Throwback2022 } from "./components/throwback2022";


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
      <About data={landingPageData.About} />
      {/* <Highlights data={landingPageData.Highlights} /> */}
      <Collections data={landingPageData.Collections} />
      {/* <Highlights data={landingPageData.Highlights} /> */}
      
      {/* <Services data={landingPageData.Services} /> */}
      <Kediya data={landingPageData.Kediya} />
      {/* <Kediyacatalogue data={landingPageData.Kediyacatalogue} /> */}
      <Chorni data={landingPageData.Chorni} />
      {/* <Chakda data={landingPageData.Chakda} /> */}
      <Koti data={landingPageData.Koti} />
      {/* <Testimonials data={landingPageData.Testimonials} /> */}
      {/* <Team data={landingPageData.Team} /> */}
      <Throwback data={landingPageData.Throwback} />
      <Throwback2022 data={landingPageData.Throwback2022} />
      <Contact data={landingPageData.Contact} />
      
    </div>
  );
};

export default App;
