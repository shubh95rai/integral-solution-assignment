import homeIcon from "../assets/images/home.svg";
import searchIcon from "../assets/images/search.svg";
import plusIcon from "../assets/images/plus.svg";
import heartIcon from "../assets/images/heart.svg";
import userIcon from "../assets/images/user.svg";

export default function Navigation() {
  return (
    <div className="bg-[#1D1F24] py-3 px-4 flex items-center justify-between fixed w-[393px] bottom-0 mx-auto  left-0 right-0 ">
      <div className="bg-[#d1f46233] p-3 rounded-full">
        <img src={homeIcon} alt="home" />
      </div>

      <div>
        <img src={searchIcon} alt="search" />
      </div>

      <div>
        <img src={plusIcon} alt="plus" />
      </div>

      <div>
        <img src={heartIcon} alt="heart" />
      </div>

      <div>
        <img src={userIcon} alt="user" />
      </div>
    </div>
  );
}
