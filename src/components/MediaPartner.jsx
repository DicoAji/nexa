import Marquee from "react-marquee-slider";
import pizzahut from "./../../public/img/pizzahut.png";
import miBurungDara from "./../../public/img/mi-burung-dara.png";
import sariRoti from "./../../public/img/sari-roti.png";
import jco from "./../../public/img/jco.png";
import onissin from "./../../public/img/onissin.png";
import ajinomoto from "./../../public/img/ajinomoto.png";
import marugameUdon from "./../../public/img/marugame-udon.png";

const images = [
  pizzahut,
  miBurungDara,
  sariRoti,
  jco,
  onissin,
  ajinomoto,
  marugameUdon,
];

const MediaPartner = () => {
  return (
    <>
      <div className="bg-[#FFFBF0] py-[20px]">
        <h2 className="josefin-sans text-center text-[38px] pb-[20px] ">
          Our Client Trust
        </h2>
        <Marquee
          velocity={25}
          minScale={0.7}
          className="mx-auto border"
          resetAfterTries={10}
        >
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              className="sm:w-[120px] mx-[10px] w-[100px] h-fit my-auto lg:mx-[50px] "
              alt={`Media Partner ${index + 1}`}
            />
          ))}
        </Marquee>
      </div>
    </>
  );
};

export default MediaPartner;
