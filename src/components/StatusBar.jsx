import iconsImg from "../assets/images/icons-right.svg";

export default function StatusBar() {
  return (
    <div className="py-2 flex justify-between items-center sticky top-0 bg-black z-10">
      <div>
        <p>9:14</p>
      </div>
      <div>
        <div className="flex gap-1">
          <img src={iconsImg} alt="battery" />
        </div>
      </div>
    </div>
  );
}
