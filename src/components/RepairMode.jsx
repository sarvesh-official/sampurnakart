import {
  ArrowRightSquare,
  HomeIcon,
  LocateIcon,
  PinIcon,
  SendIcon,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const RepairMode = () => {
  return (
    <div className="flex gap-10 pt-20 pb-11 items-center justify-center">
      <div className="flex flex-col gap-20 w-full items-center justify-center">
        {/* div 1 */}
        <Link to={"/repair/work-order-request"}>
          <div className="flex cursor-pointer w-[500px] bg-orange-500 p-6 items-center justify-between rounded-md gap-24 hover:shadow-md">
            <div className="flex gap-4 text-2xl items-center">
              <SendIcon />
              <h1 className="font-semibold">Pick and Drop</h1>
            </div>
            <p>
              <ArrowRightSquare />
            </p>
          </div>
        </Link>
        {/* Div 2 */}
        <Link to={"/repair/work-order-request"}>
          <div className="flex cursor-pointer w-[500px] bg-orange-500 p-6 items-center justify-between rounded-md gap-24 hover:shadow-md">
            <div className="flex gap-4 text-2xl items-center">
              <HomeIcon />
              <h1 className="font-semibold">Door Step Service</h1>
            </div>
            <p>
              <ArrowRightSquare />
            </p>
          </div>
        </Link>
        {/* div 3 */}
        <Link to={"/repair/work-order-request"}>
          <div className="flex cursor-pointer w-[500px] bg-orange-500 p-6 items-center justify-between rounded-md gap-24 hover:shadow-md">
            <div className="flex gap-4 text-2xl items-center">
              <LocateIcon />
              <h1 className="font-semibold">Repair at Shop</h1>
            </div>
            <p>
              <ArrowRightSquare />
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default RepairMode;
