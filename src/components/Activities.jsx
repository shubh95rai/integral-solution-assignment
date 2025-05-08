import hikingImg from "../assets/images/hiking.svg";
import activity1 from "../assets/images/activity1.png";
import activity2 from "../assets/images/activity2.png";
import activity3 from "../assets/images/activity3.png";

export default function Activities() {
  return (
    <div className="mt-8">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Activities</h3>
        <p className="underline underline-offset-2 text-xs font-semibold text-[#D1F462]">
          See all
        </p>
      </div>

      <div className="mt-4">
        <div className="bg-[#333] rounded-xl h-[114px] relative overflow-hidden p-3 ">
          <div className="flex flex-col gap-[18px] items-start justify-center ">
            <div className="flex flex-row gap-2 items-center justify-start shrink-0 relative">
              <div className="bg-primary-light-green rounded-lg p-1 flex flex-row gap-2.5 items-center justify-center shrink-0 w-[73px] h-7 relative overflow-hidden">
                <div className="text-gray-900 text-left text-xs font-semibold relative flex items-center justify-start bg-light-green p-1 rounded-lg">
                  Day Plan
                </div>
              </div>
              <div className="bg-[#292929] rounded-lg border-solid border-primary-light-green border-[0.5px] p-1 flex flex-row gap-2.5 items-center justify-center shrink-0 h-7 relative overflow-hidden">
                <div className="text-primary-light-green text-left  text-xs  font-semibold relative flex items-center justify-start p-1">
                  14 Activities
                </div>
              </div>
            </div>

            <div className="flex flex-row gap-2 items-center justify-start self-stretch shrink-0 relative overflow-auto">
              <div className="bg-[#292929] rounded-lg border-solid border-primary-light-green border pt-1 pr-2 pb-1 pl-1 flex flex-row gap-2 items-center justify-center shrink-0 w-[73px] h-11 relative overflow-hidden">
                <div className="bg-primary-light-green rounded-tl-lg rounded-bl-lg p-1 flex flex-row gap-2.5 items-center justify-center shrink-0 w-7 h-11 relative overflow-hidden">
                  <div className="text-gray-900 text-left text-xs leading-3 font-semibold relative flex items-center justify-start text-gray-900 rotate-270">
                    JAN
                  </div>
                </div>
                <div className="flex flex-col gap-2 items-start justify-center shrink-0 relative">
                  <div className="text-text-white text-left  text-xs leading-3 font-medium relative w-[33px] flex items-center justify-start">
                    MON
                  </div>
                  <div className="text-text-white text-left  text-sm leading-3 font-semibold relative w-[33px] flex items-center justify-start">
                    27
                  </div>
                </div>
              </div>
              <div className="bg-[#292929] rounded-lg pt-1 pr-2 pb-1 pl-2 flex flex-row gap-2 items-center justify-center shrink-0 w-[46px] h-11 relative overflow-hidden">
                <div className="flex flex-col gap-2 items-center justify-center shrink-0 relative">
                  <div className="text-[#808080] text-center text-xs leading-3 font-medium relative w-[33px] flex items-center justify-center">
                    TUE
                  </div>
                  <div className="text-[#808080] text-center text-sm leading-3 font-semibold relative w-[33px] flex items-center justify-center">
                    28
                  </div>
                </div>
              </div>
              <div className="bg-[#292929] rounded-lg pt-1 pr-2 pb-1 pl-2 flex flex-row gap-2 items-center justify-center shrink-0 w-[46px] h-11 relative overflow-hidden">
                <div className="flex flex-col gap-2 items-center justify-center shrink-0 relative">
                  <div className="text-[#808080] text-center text-xs leading-3 font-medium relative w-[33px] flex items-center justify-center">
                    WED
                  </div>
                  <div className="text-[#808080] text-center text-sm leading-3 font-semibold relative w-[33px] flex items-center justify-center">
                    29
                  </div>
                </div>
              </div>
              <div className="bg-[#292929] rounded-lg pt-1 pr-2 pb-1 pl-2 flex flex-row gap-2 items-center justify-center shrink-0 w-[46px] h-11 relative overflow-hidden">
                <div className="flex flex-col gap-2 items-center justify-center shrink-0 relative">
                  <div className="text-[#808080] text-center text-xs leading-3 font-medium relative w-[33px] flex items-center justify-center">
                    THU
                  </div>
                  <div className="text-[#808080] text-center text-sm leading-3 font-semibold relative w-[33px] flex items-center justify-center">
                    30
                  </div>
                </div>
              </div>
              <div className="bg-[#292929] rounded-lg pt-1 pr-2 pb-1 pl-2 flex flex-row gap-2 items-center justify-center shrink-0 w-[46px] h-11 relative overflow-hidden">
                <div className="flex flex-col gap-2 items-center justify-center shrink-0 relative">
                  <div className="text-[#808080] text-center text-xs leading-3 font-medium relative w-[33px] flex items-center justify-center">
                    FRI
                  </div>
                  <div className="text-[#808080] text-center  text-sm leading-3 font-semibold relative w-[33px] flex items-center justify-center">
                    31
                  </div>
                </div>
              </div>
              <div className="bg-[#292929] rounded-lg pt-1 pr-2 pb-1 pl-1 flex flex-row gap-2 items-center justify-center shrink-0 w-[73px] h-11 relative overflow-hidden">
                <div className="bg-[#808080] rounded-tl-lg rounded-bl-lg p-1 flex flex-row gap-2.5 items-center justify-center shrink-0 w-7 h-11 relative overflow-hidden">
                  <div className="text-gray-900 text-left text-xs font-semibold relative flex items-center justify-start rotate-270">
                    FEB
                  </div>
                </div>
                <div className="flex flex-col gap-2 items-start justify-center shrink-0 relative">
                  <div className="text-[#808080] text-left  text-xs leading-3 font-medium relative w-[33px] flex items-center justify-start">
                    SAT
                  </div>
                  <div className="text-[#808080] text-left text-sm leading-3 font-semibold relative w-[33px] flex items-center justify-start">
                    1
                  </div>
                </div>
              </div>
              <div className="bg-[#292929] rounded-lg pt-1 pr-2 pb-1 pl-2 flex flex-row gap-2 items-center justify-center shrink-0 w-[46px] h-11 relative overflow-hidden">
                <div className="flex flex-col gap-2 items-center justify-center shrink-0 relative">
                  <div className="text-[#808080] text-center text-xs leading-3 font-medium relative w-[33px] flex items-center justify-center">
                    SUN
                  </div>
                  <div className="text-[#808080] text-center text-sm leading-3 font-semibold relative w-[33px] flex items-center justify-center">
                    2
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex  gap-2 items-center mt-6">
        <div className="bg-primary-light-green rounded-lg p-1 inline-flex flex-row gap-2.5 items-center justify-center ">
          <div className="text-gray-900 text-left  text-xs  font-semibold relative flex items-center justify-start">
            Day 1
          </div>
          <div className="text-gray-900 text-left  text-xs  font-semibold relative flex items-center justify-start">
            27.01.2025
          </div>
        </div>

        <div className="flex flex-row gap-0 items-center justify-start shrink-0 relative">
          <img src={hikingImg} alt="hiking" />
          <div className="text-primary-light-green text-left  text-xs font-semibold relative flex items-center justify-start">
            3 Activities
          </div>
        </div>
      </div>

      <div className="mt-6">
        <div className="rounded-lg border-primary-light-green border p-2 flex-col flex gap-2">
          <div className="bg-[#4d4d4d] rounded-lg overflow-hidden flex items-center gap-2 ">
            <div className="flex-none">
              <img src={activity1} alt="activity1" className="" />
            </div>

            <div className="space-y-4">
              <p className="font-semibold text-sm">
                Senso-ji Temple & Nakamise Shopping Street Senso-ji
              </p>

              <div className="space-y-1">
                <div className="flex items-center gap-2 *:text-xs">
                  <p className="font-medium">Timing:</p>
                  <p>8:15 am Morning</p>
                </div>
                <div className="flex items-center gap-2 *:text-xs">
                  <p className="font-medium">Duration:</p>
                  <p>3 hours</p>
                </div>
                <div className="flex items-center gap-2 *:text-xs">
                  <p className="font-medium">Pick up:</p>
                  <p>From Hotel</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#4d4d4d] rounded-lg overflow-hidden flex items-center gap-2 ">
            <div className="flex-none">
              <img src={activity2} alt="activity1" />
            </div>

            <div className="space-y-4">
              <p className="font-semibold text-sm">Tokyo Sky Tree</p>

              <div className="space-y-1">
                <div className="flex items-center gap-2 *:text-xs">
                  <p className="font-medium">Timing:</p>
                  <p>1:00 pm Afteroon</p>
                </div>
                <div className="flex items-center gap-2 *:text-xs">
                  <p className="font-medium">Duration:</p>
                  <p>3 hours</p>
                </div>
                <div className="flex items-center gap-2 *:text-xs">
                  <p className="font-medium">Pick up:</p>
                  <p>From Nakamise Street</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#4d4d4d] rounded-lg overflow-hidden flex items-center gap-2 ">
            <div className="flex-none">
              <img src={activity3} alt="activity1" />
            </div>

            <div className="space-y-4">
              <p className="font-semibold text-sm">Kimono Wearing</p>

              <div className="space-y-1">
                <div className="flex items-center gap-2 *:text-xs">
                  <p className="font-medium">Timing:</p>
                  <p>Anytime before 8:00pm</p>
                </div>
                <div className="flex items-center gap-2 *:text-xs">
                  <p className="font-medium">Duration:</p>
                  <p>1-2 hours</p>
                </div>
                <div className="flex items-center gap-2 *:text-xs">
                  <p className="font-medium">Pick up:</p>
                  <p>From Hotel</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
