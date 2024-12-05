import AmazonLogo from "../assets/logo";
import LocationSVG from "../assets/location";
import SearchIcon from "../assets/searchIcon";
import CartIcon from "../assets/cartIcon";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { totalCartItems } from "../assets/store/productInfo";

export function Navbar() {
  const { totalItems } = useRecoilValue(totalCartItems);

  return (
    <div className="bg-navbar-background px-2 md:px-10 py-3 flex justify-between ">
      <Link to="/" className="flex justify-center pt-3 pl-2 text-nowrap">
        <AmazonLogo />
        <span className="text-navbar-txt text-sm md:text-base">.in</span>
      </Link>
      <div className="hidden md:flex ml-4 mr-10 pt-1 text-nowrap">
        <div className="pt-2">
          <LocationSVG />
        </div>
        <div className="flex flex-col">
          <span className="text-navbar-txt text-xs">
            Delivering to Kolkata 700131
          </span>
          <span className="text-white font-bold text-sm ">Update location</span>
        </div>
      </div>
      <div className="hidden lg:flex bg-navbar-search w-full rounded ">
        <div className="bg-navbar-txt text-black flex justify-center items-center w-12 pr-px rounded-l">
          All
        </div>
        <input
          type="text"
          placeholder="Search Amazon.in"
          className="w-full outline-none pl-2"
        />
        <div className="flex justify-center items-center rounded-r w-9">
          <SearchIcon />
        </div>
      </div>
      <div className="text-navbar-txt leading-3 ml-20 pt-1 text-nowrap hidden md:block">
        <p className="text-xs">Hello, User</p>
        <p className="text-sm font-bold">Account & Lists</p>
      </div>

      <div className="text-navbar-txt leading-3 pt-1 ml-20 text-nowrap hidden md:block">
        <p className="text-xs">Returns</p>
        <p className="text-sm font-bold">& Orders</p>
      </div>
      <Link to="/cart" className="flex justify-center align-center mr-4 pt-1">
        <CartIcon />
        <span className="text-white absolute translate-y-3 translate-x-8 text-sm font-bold">
          Cart
        </span>
        <div className="text-red-500 font-bold text-xl absolute -translate-y-2 translate-x-1">
          {totalItems}
        </div>
      </Link>
    </div>
  );
}
