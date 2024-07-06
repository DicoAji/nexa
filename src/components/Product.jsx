import { useState, useEffect } from "react";
import data from "./../../public/data/product.json";
import data2 from "./../../public/data/bread.json";
import product1 from "./../../public/img/product1.png";
import product2 from "./../../public/img/product2.png";
import product3 from "./../../public/img/product3.png";
import product4 from "./../../public/img/product4.png";
import bread1 from "./../../public/img/bread1.png";
import bread2 from "./../../public/img/bread2.png";
import bread3 from "./../../public/img/bread3.png";
import bread4 from "./../../public/img/bread4.png";
import bread5 from "./../../public/img/bread5.png";
import bread6 from "./../../public/img/bread6.png";
import bread7 from "./../../public/img/bread7.png";

import useEmblaCarousel from "embla-carousel-react";
import "./css/embla-carousel.css";
import iconsPizza from "./../../public/img/icons-pizza.svg";
import iconsBaguetteBread from "./../../public/img/icons-baguette-bread.svg";
import swipeHand from "./../../public/img/swipe-hand.png";

import InspirasiBakingImg from "./../../public/img/inspirasi-baking.png";

const imageMap = {
  "product1.png": product1,
  "product2.png": product2,
  "product3.png": product3,
  "product4.png": product4,
};
const imageMapBread = {
  "bread1.png": bread1,
  "bread2.png": bread2,
  "bread3.png": bread3,
  "bread4.png": bread4,
  "bread5.png": bread5,
  "bread6.png": bread6,
  "bread7.png": bread7,
};

const Product = () => {
  const [dataProduct, setDataProduct] = useState([]);
  const [dataBread, setDataBread] = useState([]);
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [emblaRef] = useEmblaCarousel({
    slidesToScroll: 1,
    containScroll: "trimSnaps",
  });

  useEffect(() => {
    setDataProduct(data.data_product);
  }, []);

  useEffect(() => {
    setDataBread(data2.data_bread);
  }, []);

  const handleMouseEnter = (index) => {
    setHoveredProduct(index);
  };

  const handleMouseLeave = () => {
    setHoveredProduct(null);
  };

  return (
    <>
      <div className=" py-[60px]">
        <div className="flex justify-between max-w-7xl mx-auto">
          <h2 className="josefin-sans max-sm:text-center max-sm:w-fit max-sm:mx-auto text-[38px]">
            Our superior product
          </h2>
          <a
            href=""
            className="text-[16px] max-sm:hidden text-blue-600 h-fit my-auto"
          >
            See all products
          </a>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 max-w-7xl mx-auto relative mt-[40px]">
          <img
            src={iconsPizza}
            className="absolute top-0 opacity-50 -translate-y-1/4 left-0 -translate-x-1/2 w-[200px] -rotate-12 -z-10"
            alt=""
          />
          <img
            src={iconsBaguetteBread}
            className="w-[200px] opacity-50 -z-10 max-sm:hidden bottom-0 right-0 absolute"
            alt=""
          />
          {dataProduct.map((product, index) => (
            <div
              key={index}
              className="p-4 space-y-[20px]"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={
                  hoveredProduct === index
                    ? `/img/${product.imageHover}`
                    : imageMap[product.image]
                }
                className="w-full rounded-xl transition-transform duration-500 ease-in-out"
                alt={product.name}
              />
              <p className="text-center text-[20px] font-medium">
                {product.name}
              </p>
              <button className="border-[1px] mx-auto block hover:bg-blue-600 hover:text-white border-blue-600 rounded-md text-blue-600 py-1 px-5">
                See Product
              </button>
            </div>
          ))}
          <a
            href=""
            className="text-[20px] mt-[20px] font-semibold text-center sm:hidden text-blue-600 h-fit my-auto"
          >
            See all products
          </a>
        </div>
      </div>
      <div className="relative">
        <div className="bg-product-gif absolute bg-cover bg-no-repeat w-full h-full top-0 z-0"></div>
        <div className="absolute bg-[#437FCC] bg-cover bg-no-repeat w-full h-full bg-opacity-70 z-10"></div>
        <div className="text-center space-y-[20px] md:w-[40%] mx-auto text-white py-[60px] z-20 relative">
          <h1 className="text-[38px] josefin-sans">
            From us to your favorite dish
          </h1>
          <p>
            We’re passionate about feeding the ones we love delicious dishes
            made from the highest quality ingredients. Get inspired for your
            next meal or baking project by browsing through our library of
            original recipes featuring our ancient and heritage grains.
          </p>
          <button className="border-[2px] py-1 px-5 text-white bg-transparent rounded-md hover:bg-white hover:text-gray-700">
            Discover recipes
          </button>
          <img
            src={InspirasiBakingImg}
            className="w-[80px] block mx-auto"
            alt=""
          />
        </div>
      </div>
      <div className="my-8 ">
        <h2 className="josefin-sans text-[38px] font-medium mb-4 max-w-7xl mx-auto">
          Upcoming Baking Class & Demo
        </h2>
        <div className="embla  md:max-w-[90%]  ml-auto" ref={emblaRef}>
          <div className="embla__container flex">
            {dataBread.map((bread, index) => (
              <div
                key={index}
                className="embla__slide min-w-[100%] md:min-w-[25%] px-2 space-y-[10px]"
              >
                <img
                  src={imageMapBread[bread.image]}
                  className="w-full"
                  alt={bread.name}
                />
                <p className="text-[24px] font-normal">{bread.name}</p>
                <p className="text-[24px] font-normal">{bread.date}</p>
              </div>
            ))}
          </div>
          <div className="max-w-7xl  mr-auto flex mt-[20px]">
            <div className="sm:ml-auto mx-auto  flex space-x-[5px]">
              <p className="text-end text-[18px] font-semibold text-gray-300 my-auto  h-fit">
                swipe product
              </p>
              <img src={swipeHand} className="w-[14px]" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
