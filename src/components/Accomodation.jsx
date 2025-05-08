import accomodation1 from "../assets/images/accomodation1.png";
import accomodation2 from "../assets/images/accomodation2.png";
import accomodation3 from "../assets/images/accomodation3.png";
import starImg from "../assets/images/star.svg";
import pendingImg from "../assets/images/pending.svg";
import confirmCircleImg from "../assets/images/confirm-circle.svg";

export default function Accomodation() {
  return (
    <div className="mt-8">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Accomodation</h3>
        <p className="underline underline-offset-2 text-xs font-semibold text-[#D1F462]">
          See all
        </p>
      </div>

      <div className="mt-4  overflow-x-auto  w-[377px] accomodation-grid">
        <div className=" flex items-center gap-4">
          <div className="flex-shrink-0 w-[198px] h-[239px] rounded-2xl bg-[#4d4d4d] overflow-hidden">
            <div className="relative">
              <img src={accomodation1} alt="" />
              <div className="inline-flex justify-center items-center gap-0.5  bg-[#3643fb] absolute bottom-2 left-2 px-1">
                <img src={starImg} alt="star" />
                <p className="text-[9px]">4.0</p>
                <p className="text-[9px]">Very Good</p>
              </div>
            </div>

            <div className="p-2 space-y-1">
              <div className=" text-sm font-semibold">
                Shinagawa Prince Hotel
              </div>
              <div className="flex items-center gap-1 ">
                <div className=" text-xs font-semibold">Check in:</div>
                <div className=" text-xs">26.01.2025, 11:15 pm</div>
              </div>
              <div className="flex items-center gap-">
                <div className=" text-xs font-semibold">Check out:</div>
                <div className=" text-xs">28.01.2025, 11:15 am</div>
              </div>
              <div className=" flex items-center justify-between mt-4 ">
                <div className=" text-xs font-semibold">2 Nights</div>
                <div className="flex justify-center items-center">
                  <img src={confirmCircleImg} alt="confirmCircle" />
                  <div className="text-[#90eb61] text-xs font-semibold">
                    Confirmed
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 w-[198px] h-[239px] rounded-2xl bg-[#4d4d4d] overflow-hidden">
            <div className="relative">
              <img src={accomodation2} alt="" />
              <div className="inline-flex justify-center items-center gap-0.5  bg-[#3643fb] absolute bottom-2 left-2 px-1">
                <img src={starImg} alt="star" />
                <p className="text-[9px]">4.2</p>
                <p className="text-[9px]">Very Good</p>
              </div>
            </div>

            <div className="p-2 space-y-1">
              <div className=" text-sm font-semibold">Mercure Tokyo Hotel</div>
              <div className="flex items-center gap-1 ">
                <div className=" text-xs font-semibold">Check in:</div>
                <div className=" text-xs">26.01.2025, 11:15 pm</div>
              </div>
              <div className="flex items-center gap-">
                <div className=" text-xs font-semibold">Check out:</div>
                <div className=" text-xs">28.01.2025, 11:15 am</div>
              </div>
              <div className=" flex items-center justify-between mt-4 ">
                <div className=" text-xs font-semibold">2 Nights</div>
                <div className="flex justify-center items-center">
                  <img src={pendingImg} alt="pending" />
                  <div className="text-[#FF6525] text-xs font-semibold">
                    Pending
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 w-[198px] h-[239px] rounded-2xl bg-[#4d4d4d] overflow-hidden">
            <div className="relative">
              <img src={accomodation1} alt="" />
              <div className="inline-flex justify-center items-center gap-0.5  bg-[#3643fb] absolute bottom-2 left-2 px-1">
                <img src={starImg} alt="star" />
                <p className="text-[9px]">4.0</p>
                <p className="text-[9px]">Very Good</p>
              </div>
            </div>

            <div className="p-2 space-y-1">
              <div className=" text-sm font-semibold">
                Shinagawa Prince Hotel
              </div>
              <div className="flex items-center gap-1 ">
                <div className=" text-xs font-semibold">Check in:</div>
                <div className=" text-xs">26.01.2025, 11:15 pm</div>
              </div>
              <div className="flex items-center gap-">
                <div className=" text-xs font-semibold">Check out:</div>
                <div className=" text-xs">28.01.2025, 11:15 am</div>
              </div>
              <div className=" flex items-center justify-between mt-4 ">
                <div className=" text-xs font-semibold">2 Nights</div>
                <div className="flex justify-center items-center">
                  <img src={confirmCircleImg} alt="confirmCircle" />
                  <div className="text-[#90eb61] text-xs font-semibold">
                    Confirmed
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
