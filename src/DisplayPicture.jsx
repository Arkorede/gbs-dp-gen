import gadite_Logo1 from "./assets/gadite_Logo1.png";
import left_arrow from "./assets/left_arrow.png";

const DisplayPicture = () => {
  return (
    <div className="px-10">
      {/* Navbar */}
      <nav className="relative mt-9">
        {/* Flex container */}
        <div className="flex items-start justify-between">
          {/* Logo */}
          <div className="w-[86px] h-[119px]">
            <img src={gadite_Logo1} alt="Gadites logo" className="w-full" />
          </div>
          {/* Menu Items */}
          <div className="hidden font-medium text-xl leading-[30px] space-x-20 md:flex md:max-xl:text-sm md:max-xl:space-x-16">
            <div className="flex items-center justify-center gap-2 cursor-pointer md:max-xl:gap-2.5">
              <a href="#" className="">
                Follow GBS ‘23 online
              </a>
              <ion-icon name="chevron-down-outline"></ion-icon>
              {/* <img
                src={dropdown}
                alt="dropdown menu"
                className="w-[14.88px] h-[5px]"
              /> */}
            </div>
          </div>

          {/* Hamburger Icon */}
          {/* <button
            id="menu-btn"
            className="block hamburger md:hidden focus:outline-none"
          >
            <div className={isClassActive ? "open" : ""}>
              <span className="hamburger-top"></span>
              <span className="hamburger-middle"></span>
              <span className="hamburger-bottom"></span>
            </div>
          </button> */}
        </div>
      </nav>

      {/* DISPLAY PICTURE */}
      <div className="flex flex-col items-center justify-center mt-[134px]">
        <div className="w-[700px] h-[700px] border-[5px] border-black"></div>
        <button
          className="bg-black px-10 py-2.5 my-[60px] font-bold text-base text-center text-white leading-6"
          style={{ boxShadow: "5px 5px 4px rgba(0, 0, 0, 0.25)" }}
        >
          DOWNLOAD DP
        </button>
      </div>
      {/* FOOTER */}
      <div className="flex items-center justify-center justify-between">
        <div className="flex items-center jsutify-center gap-[15px]">
          <img
            src={left_arrow}
            alt="left arrow"
            className="w-[42px] h-[22px]"
          />
          <p className="font-medium text-xl leading-[30px]">PREVIOUS</p>
        </div>
        <div className="flex flex-col">
          <p className="font-medium text-xl leading-[30px]"></p>
          <div className="text-[40px]">
            <ion-icon name="arrow-undo-circle"></ion-icon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayPicture;
