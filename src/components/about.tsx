import { tools } from "../utils/constant";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="flex flex-col justify-start h-full w-full md:w-2/5 pt-20 md:pt-40">
        <h4 className="text-white text-sm font-black mb-4 md:text-3xl">About me</h4>
        <p className="text-[#ffffff60] text-xl md:text-2xl leading-[34px]">
          I'm Olawale Iwaloye, but you can call me Olawalecodes — a
          Front-end Engineer based in Lagos State, Nigeria. I strive to
          create elegant solutions that surprise and delight users, while
          keeping complex technical dependencies in mind for implementation,
          scalability, and developer sanity. I'm focused on creating web
          applications that strike a balance between functional and
          aesthetic designs. Outside of code, I'm sometimes a music junkie
          and also a car enthusiast.
        </p>
        <div className="mt-8">
          <h4 className="text-white text-sm font-black mb-4 md:text-3xl">Skills</h4>
          <div className="flex flex-wrap gap-6 border border-[#ffffff20] rounded-[24px] p-6 max-w-md">
            {tools.map((tool) => (
              <img
                key={tool.name}
                src={tool.url}
                alt={tool.name}
                className="w-8 h-8 object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
