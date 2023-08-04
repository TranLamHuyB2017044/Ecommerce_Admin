import Home from "./pages/HomePage/Home";
import { BrowserRouter, Routes, Route,  } from "react-router-dom";
import Blank from "./pages/BlankPage/Blank";
import UserList from "./pages/UserPage/UserList";
import DetailUser from "./pages/DetailUserPage/DetailUser";
import CreateUser from "./pages/CreateUserPage/CreateUser";
import ProductList from "./pages/ProductPage/ProductList";
import DetailProduct from "./pages/DetailProductPage/DetailProduct";
import CreateProduct from "./pages/CreateProductPage/CreateProduct";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/user' element={<UserList />} />
        <Route path='/user/:id' element={<DetailUser />} />
        <Route path='/user/create' element={<CreateUser/>} />
        <Route path='/product' element={<ProductList/>} />
        <Route path='/product/:id' element={<DetailProduct/>} />
        <Route path='/product/create' element={<CreateProduct/>} />
        <Route path='*' element={<Blank />} />

      </Routes>
    </BrowserRouter>

  );
}

export default App;
