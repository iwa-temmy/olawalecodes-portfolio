import Icon from "./ui/icon";
import { tools } from "../utils/constant";

const Hero = () => {
  return (
    <section className="flex flex-col justify-center hero md:justify-start items-center md:items-start mt-40">
      <img
        src="/assets/olawale.png"
        className="w-[78px] h-[78px] block md:hidden object-contain rounded-full bg-[#ffffff50]"
        alt="Iwaloye Olawale Samuel"
      />
      <h4 className="font-axiforma text-white text-sm mt-3 mb-4 md:text-3xl">
        Hi 👋 , I'm Olawale
      </h4>
      <div className="text-[#ffffff30] text-[32px]  text-center md:text-left md:text-[80px] leading-10 md:leading-[88px] font-black">
        <h1>An Amazing</h1>
        <h1>Front End Developer</h1>
      </div>
      <div className="flex gap-4 md:gap-6 border border-[#ffffff10] bg-[#ffffff10] px-6 rounded-[100px] mt-7 py-2">
        {tools?.map((tool) => (
          <img src={tool.url} alt={tool.name} key={tool.name} />
        ))}
      </div>
      <div className="text-white flex items-center gap-10 mt-8">
        <button className="bg-white text-base font-semibold leading-[56px] px-10 rounded-[100px] text-[#111111]">
          Hire me
        </button>
        <button className="flex gap-4 text-base font-semibold ">
          See my works <Icon icon="fluent:arrow-right" height={20} width={20} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
