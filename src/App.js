import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import Home from "./pages/HomePage/Home";
import Blank from "./pages/BlankPage/Blank";
import UserList from "./pages/UserPage/UserList";
import DetailUser from "./pages/DetailUserPage/DetailUser";
import CreateUser from "./pages/CreateUserPage/CreateUser";
import ProductList from "./pages/ProductPage/ProductList";
import DetailProduct from "./pages/DetailProductPage/DetailProduct";
import CreateProduct from "./pages/CreateProductPage/CreateProduct";
import Login from "./pages/LoginPage/Login";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.currentUser);
  console.log(user);

  const ProtectedRouteLogin = () => {
    if (user) {
      return <Navigate to="/" replace />;
    }
    return <Outlet />;
  };
  const ProtectedRouteHome = () => {
    if (user == null) {
      return <Navigate to="/login" replace />;
    }
    return <Outlet />;
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRouteHome />}>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<UserList />} />
          <Route path="/user/:id" element={<DetailUser />} />
          <Route path="/user/create" element={<CreateUser />} />
          <Route path="/product" element={<ProductList />} />
          <Route path="/product/:id" element={<DetailProduct />} />
          <Route path="/product/create" element={<CreateProduct />} />
        </Route>
        <Route element={<ProtectedRouteLogin />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="*" element={<Blank />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
