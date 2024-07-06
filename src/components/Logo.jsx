import SribogaLogo from "./../../public/img/saiboga-logo.png";

const Logo = () => {
  return (
    <div className="max-sm:hidden  mx-auto bg-white w-full sm:fixed  top-0 left-0 right-0 z-50 ">
      <div className="hero_logo sm:py-[10px] w-fit mx-auto h-fit max-sm:hidden">
        <div className="flex ">
          <img src={SribogaLogo} className=" h-[30px] my-auto  " alt="" />
          <p className="uppercase text-[26px] text-[#293678] logo-brand  font-semibold ml-1 h-fit my-auto">
            SRIBOGA
          </p>
        </div>
        <p className="uppercase logo-brand text-[#293678] text-[10px] tracking-[0.5px] ">
          PIONEER IN FLOUR INNOVATION
        </p>
      </div>
    </div>
  );
};

export default Logo;
