import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { issues } from "../constants/issues";

const Issue = () => {
  const { name } = useParams();
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [selectedItems, setSelectedItems] = useState({});

  const navigate = useNavigate();

  const toggleCart = (issue) => {
    if (selectedItems[issue.issue]) {
      setCart((prevCart) =>
        prevCart.filter((item) => item.issue !== issue.issue)
      );
      setTotal(
        (prevTotal) =>
          prevTotal - parseInt(issue.price.replace("₹", "").replace(",", ""))
      );
      setSelectedItems((prevSelected) => ({
        ...prevSelected,
        [issue.issue]: false,
      }));
    } else {
      setCart((prevCart) => [...prevCart, issue]);
      setTotal(
        (prevTotal) =>
          prevTotal + parseInt(issue.price.replace("₹", "").replace(",", ""))
      );
      setSelectedItems((prevSelected) => ({
        ...prevSelected,
        [issue.issue]: true,
      }));
    }
  };

  return (
    <div className="flex p-20">
      <div>
        <h1 className="text-2xl">
          Selected Model <span className="font-bold">{name.toUpperCase()}</span>
        </h1>
        <div className="grid grid-cols-3 gap-10 pt-11 pb-11">
          {issues.map((issue) => (
            <div
              key={issue.issue}
              className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md"
            >
              <img src={issue.img} alt={issue.issue} />
              <div className="mt-4 px-5 pb-5">
                <h5 className="text-xl tracking-tight text-slate-900">
                  {issue.issue}
                </h5>

                <div className="mt-2 mb-5 flex items-center justify-between">
                  <p>
                    <span className="text-3xl font-bold text-slate-900">
                      {issue.price}
                    </span>
                  </p>
                  <div className="flex items-center">
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
                      {issue.rating}
                    </span>
                  </div>
                </div>
                <button
                  className={`flex cursor-pointer items-center justify-center rounded-md ${
                    selectedItems[issue.issue]
                      ? "bg-orange-400"
                      : "bg-orange-500"
                  } px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-yellow-500 focus:outline-none`}
                  onClick={() => toggleCart(issue)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  {selectedItems[issue.issue] ? "Selected" : "Select Service"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Cart */}
        <div className="fixed -bottom-2 right-3 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white mx-auto mt-8 max-w-2xl md:mt-12 rounded-md shadow-md border">
            <h1 className="text-2xl ml-5 mt-6 font-semibold text-gray-900">
              Your Cart
            </h1>
            <div className="bg-white shadow">
              <div className="px-4 py-6 sm:px-8 sm:py-10">
                <div className="flow-root">
                  <ul className="-my-8">
                    {cart.map((item, index) => (
                      <li
                        key={index}
                        className="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0"
                      >
                        <div className="relative flex flex-1 flex-col justify-between">
                          <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
                            <div className="pr-8 sm:pr-5">
                              <p className="text-base font-semibold text-gray-900">
                                {item.issue}
                              </p>
                            </div>
                            <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                              <p className="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">
                                {item.price}
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">Total</p>
                  <p className="text-2xl font-semibold text-gray-900">
                    <span className="">₹</span> {total}
                  </p>
                </div>
                <div className="mt-6 text-center">
                  <button
                    onClick={() => {
                      if (total == 0) {
                        console.log("No products selected");
                      } else {
                        navigate(`/repair-mode/${total}`);
                      }
                    }}
                    type="button"
                    className="group inline-flex w-full items-center justify-center rounded-md bg-orange-500 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-orange-400"
                  >
                    Checkout
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="group-hover:ml-8 ml-4 h-6 w-6 transition-all"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Issue;
