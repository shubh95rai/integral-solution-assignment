import StatusBar from "../components/StatusBar";
import locationImg from "../assets/images/Group.svg";
import calendarImg from "../assets/images/uil_calendar.svg";
import chevronImg from "../assets/images/tabler_chevron-up.svg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <StatusBar />
      <div className="mt-12">
        <h1 className="text-xl font-bold">Plan Your Journey, Your Way!</h1>
        <p className="text-sm">
          Let’s create your personalised travel experience
        </p>
      </div>

      <div className="mt-9 space-y-2.5">
        <h3 className="text-lg">Where would you like to go?</h3>
        <div className="flex items-center  bg-[#333] rounded-lg p-2.5 gap-2.5">
          <img src={locationImg} alt="location" />
          <input
            type="text"
            placeholder="Enter Destination"
            className="w-full outline-none"
          />
        </div>
      </div>

      <div className="mt-7 space-y-2.5">
        <h3 className="text-lg">How long will you stay?</h3>
        <div className="flex items-center  bg-[#333] rounded-lg p-2.5 gap-2.5 justify-between">
          <div className="flex items-center gap-2.5">
            <img src={calendarImg} alt="calendar" />
            <input
              type="text"
              placeholder="Select Duration"
              className="w-full outline-none"
            />
          </div>
          <img src={chevronImg} alt="chevronDown" />
        </div>
      </div>

      <div className="mt-7 space-y-2.5">
        <h3 className="text-lg">Who are you traveling with?</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center  bg-[#333] rounded-lg p-2.5 gap-2.5 justify-center cursor-pointer">
            <div className="flex items-center gap-2.5">
              <img src={calendarImg} alt="calendar" />
              <p>Solo</p>
            </div>
          </div>
          <div className="flex items-center  bg-[#333] rounded-lg p-2.5 gap-2.5 justify-center cursor-pointer">
            <div className="flex items-center gap-2.5">
              <img src={calendarImg} alt="calendar" />
              <p>Couple</p>
            </div>
          </div>
          <div className="flex items-center  bg-[#333] rounded-lg p-2.5 gap-2.5 justify-center cursor-pointer">
            <div className="flex items-center gap-2.5">
              <img src={calendarImg} alt="calendar" />
              <p>Family</p>
            </div>
          </div>
          <div className="flex items-center  bg-[#333] rounded-lg p-2.5 gap-2.5 justify-center cursor-pointer">
            <div className="flex items-center gap-2.5">
              <img src={calendarImg} alt="calendar" />
              <p>Friends</p>
            </div>
          </div>
        </div>
      </div>

      <Link
        to="/dashboard"
        className="mt-16 block text-center p-2.5 rounded-lg bg-[#3643FB] w-full font-medium hover:bg-blue-700"
      >
        Continue
      </Link>
    </div>
  );
}
