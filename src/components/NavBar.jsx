import {
  HeartIcon,
  MapPinIcon,
  SearchIcon,
  ShoppingCart,
  User2Icon,
} from "lucide-react";

const NavBar = () => {
  return (
    <nav className="flex justify-between w-full p-3 px-5 border-b-2 border-orange-500">
      <div className="flex items-center gap-3">
        <img src="/favicon.png" alt="" height={100} width={100} />
        <div className="flex gap-2">
          <MapPinIcon />
          <p>Deliver to Delhi</p>
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex items-center gap-5 bg-gray-200 justify-between h-1/2 p-4">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="w-full bg-transparent"
          />
          <SearchIcon />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <p>Become a partner</p>
        <HeartIcon />
        <ShoppingCart />
        <div className="h-10 flex items-center justify-center w-10 rounded-full bg-orange-500">
          <User2Icon />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
