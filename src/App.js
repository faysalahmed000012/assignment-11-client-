import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home/Home/Home";
import Header from "./Components/Shared/Header/Header";
import Footer from "./Components/Shared/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Blogs from "./Components/Blogs/Blogs";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
      </Routes>
    </div>
  );
}

export default App;
