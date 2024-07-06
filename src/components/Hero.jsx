import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SaibogaIcon from "./../../public/img/saiboga-logo.png";
import HeroImg from "./../../public/img/chef.png";
import whiteCupcake from "./../../public/img/icon-white-cupcake.svg";
import whiteCheeseCake from "./../../public/img/icon-white-cheese-cake.svg";
import whiteRiceBowl from "./../../public/img/icon-white-rice-bowl.svg";
import "./css/hero.css";

const Hero = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="relative overflow-y-hidden  max-sm:pt-[50px]">
      <Carousel
        responsive={responsive}
        infinite={true}
        showDots={true}
        arrows={true}
        autoPlay={true}
        autoPlaySpeed={3000}
      >
        <div className="relative">
          <div className="bg-hero-header absolute top-0 z-0 w-full h-full bg-no-repeat bg-cover"></div>
          <div className="bg-customYellow opacity-65 absolute top-0 z-0 w-full bg-cover bg-no-repeat h-full"></div>

          <div className="grid md:grid-cols-2 mx-auto max-w-7xl z-20 grid-cols-1 pt-[50px] max-sm:mx-auto max-sm:w-[90%] relative">
            <img
              src={whiteCupcake}
              className="absolute -top-6 w-[200px] opacity-55 sm:left-1/2 max-sm:w-[120px] right-0 sm:-translate-x-1/2 rotate-45"
              alt=""
            />
            <img
              src={whiteCheeseCake}
              className="absolute w-[200px] opacity-50 left-0 sm:-bottom-10 bottom-1/2 max-sm:translate-y-1/2 max-sm:w-[120px] -rotate-12"
              alt=""
            />
            <img
              src={whiteRiceBowl}
              className="absolute w-[200px] max-sm:w-[120px] opacity-50 rotate-12 right-0 bottom-0"
              alt=""
            />
            <div className="sm:space-y-[0px] max-sm:space-y-[5px] relative h-fit my-auto josefin-sans">
              <img src={SaibogaIcon} className="h-[36px]" alt="" />
              <h1 className="sm:text-[44px] text-[26px] text-[#29292d] font-semibold">
                „
              </h1>
              <div className="md:relative md:h-[150px]">
                <h1 className="lg:text-[48px] text-[26px] text-[#293678] md:absolute h-fit top-0 lg:-right-[60%] md:-right-[80%] md:font-semibold">
                  APAPUN USAHA ANDA SRIBOGA SEDIAKAN TERIGUNYA
                </h1>
              </div>
              <h3 className="sm:text-[24px] lg:mt-[100px] text-[#293678] md:font-semibold">
                - Chef Sriboga. P
              </h3>
            </div>
            <div className="max-sm:pt-[50px] z-20">
              <div className="w-[80%] mx-auto">
                <img
                  src={HeroImg}
                  className="sm:w-[70%] w-full mx-auto"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="bg-hero-header absolute top-0 z-0 w-full h-full bg-no-repeat bg-cover"></div>
          <div className="bg-blue-600 opacity-65 absolute top-0 z-0 w-full bg-cover bg-no-repeat h-full"></div>
          <div className="mx-auto max-w-7xl z-20">
            <div className="grid md:grid-cols-2 grid-cols-1 pt-[50px] max-sm:mx-auto max-sm:w-[90%] relative">
              <img
                src={whiteCupcake}
                className="absolute -top-6 w-[200px] opacity-55 sm:left-1/2 max-sm:w-[120px] right-0 sm:-translate-x-1/2 rotate-45"
                alt=""
              />
              <img
                src={whiteCheeseCake}
                className="absolute w-[200px] opacity-50 left-0 sm:-bottom-10 bottom-1/2 max-sm:translate-y-1/2 max-sm:w-[120px] -rotate-12"
                alt=""
              />
              <img
                src={whiteRiceBowl}
                className="absolute w-[200px] max-sm:w-[120px] opacity-50 rotate-12 right-0 bottom-0"
                alt=""
              />
              <div className="sm:space-y-[0px] max-sm:space-y-[5px] relative h-fit my-auto josefin-sans">
                <img src={SaibogaIcon} className="h-[36px]" alt="" />
                <h1 className="sm:text-[44px] text-[26px] text-white font-semibold">
                  „
                </h1>
                <div className="md:relative md:h-[150px]">
                  <h1 className="lg:text-[48px] text-[26px] text-white md:absolute h-fit top-0 lg:-right-[60%] md:-right-[80%] md:font-semibold">
                    APAPUN USAHA ANDA SRIBOGA SEDIAKAN TERIGUNYA
                  </h1>
                </div>
                <h3 className="sm:text-[24px] lg:mt-[100px] text-white md:font-semibold">
                  - Chef Sriboga. P
                </h3>
              </div>
              <div className="max-sm:pt-[50px] z-20">
                <div className="w-[80%] mx-auto">
                  <img
                    src={HeroImg}
                    className="sm:w-[70%] w-full mx-auto"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Hero;
