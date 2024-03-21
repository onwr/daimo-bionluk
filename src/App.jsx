import React from "react";
import bg from "./images/bg.png";
import Landing from "./components/Landing";
import WhySlide from "./components/WhySlide";
import Soz from "./components/Soz";
import Footer from "./components/Footer";
import Faq from "./components/Faq";

function App() {
  const backgroundImageStyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundColor: "var(--primaryDark)",
  };

  return (
    <div className="font-yeni">
      <div style={backgroundImageStyle}>
        <Landing />
      </div>
      <WhySlide />
      <Soz />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
