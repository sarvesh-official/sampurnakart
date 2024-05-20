import { WrenchIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="flex items-center justify-center pt-44">
      <Link to={"/repair/categories"}>
        <div className="flex pt-3 pr-5 items-center justify-center hover:bg-orange-400 h-[400px] w-[400px] bg-orange-500 rounded-full">
          <WrenchIcon color="white" height={200} width={200} />
        </div>
      </Link>
    </div>
  );
};

export default Welcome;
