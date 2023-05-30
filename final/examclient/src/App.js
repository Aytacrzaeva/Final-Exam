import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Add from "./pages/Add/Add";
import Detail from "./pages/Detail/Detail";
import Wishlist from "./pages/Wishlist/Wishlist";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/add" element={<Add/>}></Route>
      <Route path="/:id" element={<Detail/>}></Route>
      <Route path="/wishlist" element={<Wishlist/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
