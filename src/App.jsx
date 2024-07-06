import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import MediaPartner from "./components/MediaPartner";
import ProductComponent from "./components/Product";
import StoryComponent from "./components/Story";
import FooterComponent from "./components/Footer";
import Logo from "./components/Logo";
import CsImg from "./../public/img/cs.png"; // pastikan path ini benar

function App() {
  return (
    <>
      <div className="max-w-[1990px] overflow-hidden mx-auto relative">
        <Logo className="border" />
        <Header />
        <Hero />
        <div className="space-y-[60px]">
          <About />
          <MediaPartner />
          <ProductComponent />
          <StoryComponent />
          <FooterComponent />
        </div>
        <a
          href=""
          className="right-0 bottom-0 -translate-x-1/4 -translate-y-1/4 fixed z-20 h-auto"
        >
          <img
            src={CsImg}
            alt="Customer Service"
            className="sm:w-[90px] w-[60px] "
          />
        </a>
      </div>
    </>
  );
}

export default App;
