import "./App.css";
import Products from "./components/Products";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import DetailPage from "./page/DetailPage";

function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home/>}/>
          <Route path={"/product/:productId"} element={<DetailPage/>}/>
        </Routes>
        
      </BrowserRouter>
    </>
  );
}

export default App;
