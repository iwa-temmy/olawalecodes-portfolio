import Icon from "./icon";

const NavBar = () => {
  return (
    <header className="flex justify-between fixed w-full top-0">
      <div className="flex items-center gap-12">
        <h1 className="bg-transparent p-2 md:bg-[#1F1F1F]">
          <img src="/assets/logo.svg" alt="Olawalecode's logo" />
        </h1>
        <div className="hidden items-center md:flex">
          <div className="bg-[#ffffff30] w-12 h-1" />
          <div className="h-6 w-6 bg-[#ffffff30] rounded-full" />
        </div>
        <ul className="text-[#ffffff50] md:flex hidden gap-12">
          <li>Home</li>
          <li>About</li>
          <li>Works</li>
        </ul>
      </div>
      <button className="bg-white hidden md:flex gap-2 px-6 py-3 rounded-lg font-black items-center text-[#1F1F1F]">
        Download CV <Icon icon="basil:download" className="text-lg" />
      </button>
      <button className="block md:hidden">
        <Icon icon="ci:hamburger" height={24} width={24} />
      </button>
    </header>
  );
};

export default NavBar;
