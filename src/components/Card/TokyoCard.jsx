import tokyoImg from "../../assets/images/image.png";
import arrowImg from "../../assets/images/arrow.svg";
import timeImg from "../../assets/images/Time.svg";
import BookImg from "../../assets/images/mdi_planner-outline.svg";

export default function TokyoCard() {
  return (
    <div className="rounded-2xl h-[330px]  overflow-hidden relative mt-6.5">
      <img src={tokyoImg} className="w-full absolute" alt="image" />

      <div className="absolute inset-0 bg-black/20"></div>

      <div className="absolute left-0 top-2 flex items-start justify-between right-0 px-4">
        <div>
          <h1 className="text-5xl  font-extrabold">TOKYO</h1>
          <p className="text-sm font-semibold">27.01.2025 - 02.02.2025</p>
        </div>
        <img src={arrowImg} alt="arrow" className="mt-2" />
      </div>

      <div className="absolute left-0 bottom-0 flex items-center justify-between right-0 p-4 backdrop-blur-xs">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-1">
            <div className="bg-[#292929] p-2 rounded-full">
              <img src={timeImg} alt="time" />
            </div>
            <div>
              <p className="text-sm font-semibold">8 Days</p>
              <p className="text-xs">Duration</p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <div className="bg-[#292929] p-2 rounded-full">
              <img src={timeImg} alt="time" />
            </div>
            <div>
              <p className="text-sm font-semibold">4 (2M,2F)</p>
              <p className="text-xs">Group Size</p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <div className="bg-[#292929] p-2 rounded-full">
              <img src={BookImg} alt="book" />
            </div>
            <div>
              <p className="text-sm font-semibold">14</p>
              <p className="text-xs">Activities</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
