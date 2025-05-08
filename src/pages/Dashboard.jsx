import StatusBar from "../components/StatusBar";
import TokyoCard from "../components/Card/TokyoCard";
import FlightDetails from "../components/Card/FlightDetails";
import Accomodation from "../components/Accomodation";
import Activities from "../components/Activities";
import Navigation from "../components/Navigation";

export default function Dashboard() {
  return (
    <div className="pb-20 overflow-x-hidden h-screen relative">
      <StatusBar />

      <div className="flex items-center justify-between mt-4">
        <div>
          <h1 className="text-2xl font-bold">Hello Chhavi!</h1>
          <p>Ready for a trip?</p>
        </div>

        <div className="bg-[#FF7339] rounded-full size-9.5 flex items-center justify-center font-medium text-xl">
          C
        </div>
      </div>

      <TokyoCard />

      <FlightDetails />

      <Accomodation />

      <Activities />

      <Navigation />
    </div>
  );
}
