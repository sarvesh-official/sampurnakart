import React from "react";
import { useNavigate } from "react-router";

const WokOrderRequest = () => {
  const navigate = useNavigate();
  return (
    <div class="sm:w-[38rem] mx-auto my-10 overflow-hidden rounded-2xl bg-white shadow-lg sm:max-w-lg">
      <div class="bg-orange-500 px-10 py-10 text-center text-white">
        <p class="font-serif text-2xl font-semibold tracking-wider">
          Work Order Request
        </p>
        <p class="text-center text-blue-100">Please Fill the Details Below</p>
      </div>

      <div class="space-y-4 px-8 py-10">
        <label class="block" for="name">
          <p class="text-gray-600">Name</p>
          <input
            class="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
            type="text"
            placeholder="Enter your name"
          />
        </label>
        <label class="block" for="name">
          <p class="text-gray-600">Email Address</p>
          <input
            class="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
            type="email"
            placeholder="Enter your email"
          />
        </label>
        <label class="block" for="contact">
          <p class="text-gray-600">Contact No</p>
          <input
            class="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
            type="text"
            placeholder="Enter your number"
          />
        </label>
        <label class="block" for="address">
          <p class="text-gray-600">Address</p>
          <input
            class="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
            type="text"
            placeholder="Enter your Address"
          />
        </label>
        <label class="block" for="name">
          <p class="text-gray-600">Issue Description</p>
          <textarea
            class="h-32 w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
            type="text"
            placeholder="Tell us about the issue"
          ></textarea>
        </label>
        <button
          class="mt-4 rounded-full bg-orange-500 px-10 py-2 font-semibold text-white"
          onClick={() => {
            navigate("/repair/payment-method");
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default WokOrderRequest;
