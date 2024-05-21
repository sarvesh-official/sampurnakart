import React from "react";
import { useNavigate } from "react-router";

const OrderBooked = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center flex-col gap-2 py-2">
      <img
        src="https://png.pngtree.com/png-clipart/20230824/original/pngtree-order-placed-abstract-concept-vector-illustration-picture-image_8425868.png"
        alt=""
        height={400}
        width={400}
      />
      <div className="flex items-center justify-center gap-7 flex-col font-bold">
        <h1 className="text-3xl text-orange-500">Order Booked!</h1>
        <div className="text-center">
          <p className="text-md">Your order has been placed successfully.</p>
          <p className="text-md">Thank you for choosing our app</p>
        </div>
        <button
          className="flex items-center justify-center p-4 text-xl bg-orange-500 rounded-md text-white shadow-md"
          onClick={() => {
            navigate("/");
          }}
        >
          Return to HomePage
        </button>
      </div>
    </div>
  );
};

export default OrderBooked;
