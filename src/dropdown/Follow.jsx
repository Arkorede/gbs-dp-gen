import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import mixlr from "../assets/mixlr.png";
import whatsapp from "../assets/whatsapp.png";

const Follow = () => {
  return (
    <div
      className="w-[397px] h-[157px] rounded-[10px] p-7"
      style={{ boxShadow: "0px 6px 30px rgba(0, 0, 0, 0.15)" }}
    >
      <div className="flex items-center justify-center justify-between">
        <div className="flex flex-col items-start justify-center gap-5">
          <a href="#" className="flex items-center justify-center gap-2">
            <img src={instagram} alt="instagram logo" className="h-5 w-5" />
            <p className="font-normal text-xs leading-[21px]">Instagram</p>
          </a>
          <a href="#" className="flex items-center justify-center gap-2">
            <img src={twitter} alt="twitter logo" className="h-5 w-5" />
            <p className="font-normal text-xs leading-[21px]">Twitter</p>
          </a>
        </div>
        <div className="flex flex-col items-start justify-center gap-5">
          <a href="#" className="flex items-center justify-center gap-2">
            <img src={facebook} alt="facebook logo" className="h-5 w-5" />
            <p className="font-normal text-xs leading-[21px]">Facebook</p>
          </a>
          <a href="#" className="flex items-center justify-center gap-2">
            <img src={mixlr} alt="mixlr logo" className="h-5 w-5" />
            <p className="font-normal text-xs leading-[21px]">Mixlr</p>
          </a>
        </div>
      </div>
      <a href="#" className="flex items-center justify-center mt-[15px] gap-2">
        <img src={whatsapp} alt="whatsapp logo" className="h-5 w-5" />
        <p className="font-normal text-xs leading-[21px]">
          Whatsapp @ +2348101115649
        </p>
      </a>
    </div>
  );
};

export default Follow;
