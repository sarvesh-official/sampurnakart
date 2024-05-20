import { Route, Routes } from "react-router";
import NavBar from "./components/NavBar";
import Categories from "./components/Categories";
import Welcome from "./components/Welcome";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/repair/categories" element={<Categories />} />
        <Route path="/" element={<Welcome />} />
      </Routes>
    </>
  );
}

export default App;
