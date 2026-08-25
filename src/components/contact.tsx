import { contactInfo } from "../utils/constant";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h1 className="text-white/30 text-center text-3xl md:text-7xl font-black pb-10 ">Contact me</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {contactInfo.map(({ url, icon: Icon, label, type }) => (
          <a href={url} key={type} className="bg-dark flex flex-col py-10 justify-center items-center">
            <Icon />
            <p className="text-white mt-3 font-black">{label}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
