import Story1 from "./../../public/img/cooking1.png";
import Story2 from "./../../public/img/cooking2.png";
import iconsCheeseCake from "./../../public/img/icons-cheese-cake.svg";
const Story = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto relative">
        <img
          src={iconsCheeseCake}
          className="absolute bottom-0 opacity-50 right-0 md:w-[200px] w-[120px] translate-y-1/2 -z-10 rotate-12 
        "
          alt=""
        />
        <h2 className="text-[38px] josefin-sans">Our Newest Story</h2>
        <div className="grid md:grid-cols-2 grid-cols-1">
          <div className="space-y-[10px] p-4">
            <img src={Story1} className="w-full mx-auto rounded-lg" alt="" />
            <p className="text-[24px] font-normal">Story 1</p>
            <p className="text-[24px] font-normal">14 Januari 2023</p>
          </div>
          <div className="space-y-[10px] p-4">
            <img src={Story2} className="w-full mx-auto rounded-lg" alt="" />
            <p className="text-[24px] font-normal">Story 2</p>
            <p className="text-[24px] font-normal">14 Januari 2023</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Story;
