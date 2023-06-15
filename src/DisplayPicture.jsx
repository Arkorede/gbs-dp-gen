import gadite_Logo1 from "./assets/gadite_Logo1.png";
import left_arrow from "./assets/left_arrow.png";
import display_picture from "./assets/display_picture.png";
import soldier from "./assets/soldier.png";
import location_mark from "./assets/location_mark.png";
import clock2 from "./assets/clock2.png";
import calendar from "./assets/calendar.png";

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
      <div className="flex flex-col items-center justify-center mt-[95px]">
        <div className="w-[800px] h-[890px] border-[5px] border-black p-6">
          <div className="w-[86px] h-[119px]">
            <img src={gadite_Logo1} alt="Gadites logo" className="w-full" />
          </div>
          <div className="relative">
            <div className="absolute w-[250px] h-[250px] border-[5px] border-black rounded-full left-0 top-[50px]">
              <img
                src={display_picture}
                alt="a person"
                className="absolute w-[240px] h-[240px] rounded-full border border-white border-8 z-50"
              />
            </div>
            <div className="">
              {/* pr-[104px] pl-[15px] pt-[47px] pb-[62px] */}
              <div className="absolute w-[529px] h-[230px] rounded-[66px] bg-[#333] left-[197px] pr-8 pl-16 py-6 top-[50px] mt-3">
                <p className="font-light text-[13px] text-white leading-5">
                  Hello, I am a{" "}
                  <span className="font-semibold">Gadite{""}</span> from{" "}
                  <span className="font semibold">University of Lagos</span>,
                  Nigeria and I’m so excited to be attending{" "}
                  <span className="font-semibold">
                    Gadites Bible Seminar 2023.
                  </span>{" "}
                  GBS is a meeting that would fulfil the yearnings in your heart
                  for God. It promises to be a life changing experience for
                  young ones seeking to{" "}
                  <span className="font-semibold">know more of God </span>and
                  looking for purpose in life. Do you fall in this category like
                  me?{" "}
                  <span className="font-semibold">
                    Then, I would see you at GBS!
                  </span>
                </p>
                <p className="font-['Montserrat_Alternates'] font-light text-[25px] text-white leading-[30px] mt-[23px]">
                  - OLUWALOBA ADESANYA
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-start justify-center justify-between mt-[384px]">
            <div className="">
              <img
                src={soldier}
                alt="a soldier"
                className="w-[300px] h-[300px]"
              />
            </div>

            <div className="flex flex-col items-start justify-center gap-[30px]">
              <div className="flex gap-3 items-center justify-center">
                <img src={location_mark} alt="location" className="w-6 h-6" />
                <p className="font-bold text-sm leading-6">
                  FAITH PLAZA, BARIGA, LAGOS STATE, NIGERIA
                </p>
              </div>
              <div className="flex gap-3 items-center justify-center">
                <img src={calendar} alt="calendar" className="w-6 h-6" />
                <p className="font-bold text-sm leading-6">
                  5TH TO 7TH OF JULY, 2023
                </p>
              </div>
              <div className="flex gap-3 items-center justify-center">
                <img src={clock2} alt="clock" className="w-6 h-6" />
                <p className="font-bold text-sm leading-6">9AM</p>
              </div>
              <div className="mt-2.5">
                <p className="font-bold text-sm leading-6">#GADITES</p>
                <p className="font-bold text-sm leading-6">#ATroopCometh</p>
              </div>
            </div>
          </div>
        </div>
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
