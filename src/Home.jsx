// import { useState } from "react";
import gadite_Logo1 from "./assets/gadite_Logo1.png";
import warrior from "./assets/warrior.png";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/displaypicture");
  };

  return (
    <div className="px-10">
      {/* Navbar */}
      <nav className="relative mt-9">
        {/* Flex container */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="w-[86px] h-[119px]">
            <img src={gadite_Logo1} alt="Gadites logo" className="w-full" />
          </div>
          {/* Menu Items */}
          <div className="hidden font-medium text-xl leading-[30px] space-x-20 md:flex md:max-xl:text-sm md:max-xl:space-x-16">
            <div className="flex items-center justify-center gap-[15px] cursor-pointer md:max-xl:gap-2.5">
              <a href="#" className="">
                Follow GBS online
              </a>
              <ion-icon name="chevron-down-outline"></ion-icon>
              {/* <img
                src={dropdown}
                alt="dropdown menu"
                className="w-[14.88px] h-[5px]"
              /> */}
            </div>
          </div>
          {/* Button */}
          <a
            href="#"
            className="hidden font-medium text-lg text-white bg-[#333333] pt-[14px] pb-[13px] px-[35px] rounded-lg leading-[30px] md:block md:max-xl:px-5"
          >
            Back Home
          </a>

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

        {/* Mobile Menu */}
        {/* <div className="md:hidden">
          <div className={isClassActive ? "block" : ""}>
            <div
              id="menu"
              className="absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
            >
              <a href="#">Pricing</a>
              <a href="#">Product</a>
              <a href="#">About Us</a>
              <a href="#">Careers</a>
              <a href="#">Community</a>
            </div>
          </div>
        </div> */}
      </nav>

      <div className="grid grid-cols-2 gap-[87px] mt-40">
        <div className="">
          <h1 className="font-bold text-[45px] leading-[75px]">
            Generate your Personal GBS Invite DP!
          </h1>
          <div className="mt-[75px]">
            <p className="font-light text-[43px] leading-[75px] mb-6">
              <span className="font-semibold">G</span>adites{" "}
              <span className="font-semibold">B</span>ible{" "}
              <span className="font-semibold">S</span>eminar ‘23
            </p>
            <p className="font-light text-[43px] leading-[75px] mb-6">
              <span className="font-semibold">G</span>adites{" "}
              <span className="font-semibold">B</span>ible{" "}
              <span className="font-semibold">S</span>eminar ‘23
            </p>
            <p className="font-light text-[43px] leading-[75px]">
              <span className="font-semibold">G</span>adites{" "}
              <span className="font-semibold">B</span>ible{" "}
              <span className="font-semibold">S</span>eminar ‘23
            </p>
          </div>
          <div className="mt-[114px]">
            <img
              src={warrior}
              alt="warrior"
              className="w-[297.15px] h-[375.9px]"
            />
          </div>
        </div>

        <div
          className="h-[951px] rounded-[10px] px-9 pt-[34px] pb-8"
          style={{
            boxShadow:
              "-2px -2px 2px 2px rgba(0, 0, 0, 0.08), 20px 16px 20px 1px rgba(0, 0, 0, 0.08)",
          }}
        >
          <form action="#" onSubmit={handleSubmit}>
            <input
              type="text"
              className="block font-normal text-base text-black p-3 leading-6 p-2 mb-6 border border-black rounded-xl w-full outline-none"
              placeholder="Name"
            />
            <input
              type="text"
              className="block font-normal text-base text-black p-3 leading-6 p-2 border border-black rounded-xl w-full outline-none"
              placeholder="School / Location"
            />
            <div className="flex items-center justify-center mt-12">
              <label
                htmlFor="image_upload"
                className="cursor-pointer focus-within:outline-none"
              >
                <span className="pl-[15px] pr-10 py-2.5 bg-black font-bold text-base text-center text-white rounded-[10px]">
                  Choose an image
                </span>
                <input
                  id="image_upload"
                  name="file-upload"
                  type="file"
                  className="hidden"
                />
              </label>
            </div>
            <div className="flex items-center justify-center">
              <div className="border border-dashed border-black mt-[37px] w-[450px] h-[450px] rounded-[5px]"></div>
            </div>
            <div className="flex flex-col mt-5 gap-[9px] px-8">
              <label
                htmlFor="image_resize"
                className="font-normal text-base leading-6"
              >
                Resize image
              </label>
              <input type="range" min="0" max="100" className="" />
            </div>
            <div className="flex items-center justify-center mt-20 mb-2">
              <button
                className="bg-[#807C7C] px-10 py-2.5 font-bold text-base text-center text-white rounded-[10px]"
                type="submit"
                style={{ boxShadow: "5px 5px 4px rgba(0, 0, 0, 0.25)" }}
              >
                GENERATE DP
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
