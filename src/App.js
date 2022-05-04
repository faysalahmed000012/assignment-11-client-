import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home/Home/Home";
import Header from "./Components/Shared/Header/Header";
import Footer from "./Components/Shared/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Blogs from "./Components/Blogs/Blogs";
import Inventories from "./Components/Home/Inventories/Inventories";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import { ToastContainer } from "react-toastify";
import RequireAuth from "./Components/RequireAuth/RequireAuth";
import GetInventory from "./Components/GetInventory/GetInventory";
import AddItem from "./Components/AddItem/AddItem";
import ManageInventory from "./Components/ManageInventory/ManageInventory";
import NotFound from "./Components/NotFound/NotFound";
import MyItem from "./Components/MyItem/MyItem";

function App() {
  return (
    <div>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route
          path="/inventory/:id"
          element={
            <RequireAuth>
              <GetInventory></GetInventory>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/add"
          element={
            <RequireAuth>
              <AddItem></AddItem>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/manage"
          element={
            <RequireAuth>
              <ManageInventory></ManageInventory>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/myitem"
          element={
            <RequireAuth>
              <MyItem></MyItem>
            </RequireAuth>
          }
        ></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
