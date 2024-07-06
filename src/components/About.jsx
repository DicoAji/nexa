import Building from "./../../public/img/building.png";
import FlourIcon from "./../../public/img/icons-flour.svg";
const About = () => {
  return (
    <div className="mx-auto max-w-7xl py-[60px]">
      <div className="grid md:grid-cols-2 grid-cols-1">
        <div className="space-y-[20px]  h-fit my-auto">
          <h2 className="text-[38px] josefin-sans h-fit ">
            Pioneer in Flour Innovation
          </h2>
          <p>
            Pt. Sriboga Raturaya berdiri pada tahun 1995. Pada tahun 2011
            berubah menjadi PT. Sriboga Flour Mill sebagai pelopor Produsen
            Tepung Terigu yang memiliki gizi tinggi di Indonesia
          </p>
          <button className="border-blue-700 border-[2px] hover:bg-blue-700 hover:text-white py-2 px-5 rounded-md text-blue-700">
            Learn More
          </button>
        </div>
        <div className="relative max-sm:pt-[50px]">
          <img
            src={Building}
            className="md:w-[90%] border mx-auto rounded-lg"
            alt=""
          />
          <img
            src={FlourIcon}
            className="absolute bottom-0 -left-20 -rotate-12 w-[150px]"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
