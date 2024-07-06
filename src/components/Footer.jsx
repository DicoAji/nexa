import SribogaImg from "./../../public/img/saiboga-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <footer className="bg-[#012FA7] text-white ">
      <div className="max-w-7xl mx-auto sm:py-[80px] py-[50px]  grid sm:grid-cols-2 grid-cols-1">
        <div className="">
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 space-y-[10px]">
            <a
              href=""
              className="pb-1 border-transparent border-b-2 hover:border-white w-fit  hover:border-b-2"
            >
              Tentang Kami
            </a>
            <a
              href=""
              className="pb-1 border-transparent border-b-2 hover:border-white w-fit  hover:border-b-2"
            >
              Produk
            </a>
            <a
              href=""
              className="pb-1 border-transparent border-b-2 hover:border-white w-fit  hover:border-b-2"
            >
              Inspirasi Baking
            </a>
            <a
              href=""
              className="pb-1 border-transparent border-b-2 hover:border-white w-fit  hover:border-b-2"
            >
              Baking & Consulting
            </a>
            <a
              href=""
              className="pb-1 border-transparent border-b-2 hover:border-white w-fit  hover:border-b-2"
            >
              Pemberdayaan UKM
            </a>
            <a
              href=""
              className="pb-1 border-transparent border-b-2 hover:border-white w-fit  hover:border-b-2"
            >
              Acara
            </a>
            <a
              href=""
              className="pb-1 border-transparent border-b-2 hover:border-white w-fit  hover:border-b-2"
            >
              Hubungi Kami
            </a>
          </div>
          <div className="flex  h-fit mt-[40px]">
            <FontAwesomeIcon
              icon={faPhoneVolume}
              className=" h-[50px] my-auto"
            />
            <div className=" ml-3 h-fit">
              <p>Customer Care</p>
              <p className="text-[28px] font-bold">0-800-140-1109</p>
            </div>
          </div>
        </div>
        <div className="sm:mx-auto space-y-[30px] max-sm:pt-[40px]">
          <div className="flex">
            <img src={SribogaImg} className="h-full block my-auto " alt="" />
            <div className="ml-1 ">
              <p className="text-[34px] h-fit logo-brand leading-8 ">SRIBOGA</p>
              <p className="text-[9px] h-fit logo-brand tracking-[0.6px]">
                PIONEER IN FLOUR INNOVATION
              </p>
            </div>
          </div>
          <p>Follow Us</p>
          <div className="flex text-white space-x-[20px]">
            <a href="">
              <FontAwesomeIcon
                className="text-[40px] block"
                icon={faInstagram}
              />
            </a>
            <a href="">
              <FontAwesomeIcon
                className="text-[40px] block"
                icon={faFacebook}
              />
            </a>
            <a href="">
              <FontAwesomeIcon
                className="text-[40px] block"
                icon={faXTwitter}
              />
            </a>
          </div>
          <p className="text-[16px] max-sm:pt-[20px] max-sm:text-center">
            © 2024 Develop by NEXA
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
