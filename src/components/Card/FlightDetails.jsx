import planeImg from "../../assets/images/Plane.svg";
import rightArowImg from "../../assets/images/rightArrow.svg";

export default function FlightDetails() {
  return (
    <div className="h-[124px] bg-[#3643FB] rounded-2xl flex items-center justify-center p-2 relative mt-8">
      <div className="absolute right-0">
        <img src={planeImg} alt="plane" />
      </div>
      <div className="size-full bg-[#313DDF] rounded-xl flex flex-col justify-between p-1">
        <div className="flex items-start justify-between ">
          <div>
            <h3 className="font-medium text-lg">Flight Details</h3>
            <p className="text-sm">26.01.2025, 10:50 am</p>
          </div>
          <p className="underline text-xs  underline-offset-2 font-semibold text-[#D1F462]">
            See all
          </p>
        </div>

        <div className="flex items-center  gap-4">
          <div>
            <p className=" font-semibold">DEL</p>
            <p className="text-xs">Delhi, India</p>
          </div>
          <div>
            <img src={rightArowImg} alt="rightArrow" />
          </div>
          <div>
            <p className=" font-semibold">NRT</p>
            <p className="text-xs">Narita, Tokyo</p>
          </div>
        </div>
      </div>
    </div>
  );
}
