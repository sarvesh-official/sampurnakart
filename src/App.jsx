import { Route, Routes } from "react-router";
import NavBar from "./components/NavBar";
import Categories from "./components/Categories";
import Welcome from "./components/Welcome";
import MobileBrands from "./components/mobile/MobileBrands";
import Apple from "./components/mobile/Apple";
import Issue from "./components/Issue";
import RepairMode from "./components/RepairMode";
import WokOrderRequest from "./components/WokOrderRequest";
import Payment from "./components/Payment";
import OrderBooked from "./components/OrderBooked";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="repair/order-booked" element={<OrderBooked />} />
        <Route path="/repair/issue/:name" element={<Issue />} />
        <Route
          path="/repair/work-order-request"
          element={<WokOrderRequest />}
        />
        <Route path="/repair/payment-method" element={<Payment />} />
        <Route path="/repair-mode/:price" element={<RepairMode />} />
        <Route path="/repair/categories" element={<Categories />} />
        <Route
          path="/repair/categories/smartphones/apple"
          element={<Apple />}
        />
        <Route
          path="/repair/categories/smartphones"
          element={<MobileBrands />}
        />
        <Route path="/" element={<Welcome />} />
      </Routes>
    </>
  );
}

export default App;
