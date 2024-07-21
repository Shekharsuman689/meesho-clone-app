
import Home from './pages/Home';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  } from "react-router-dom";
import { productsData } from './api/api';
import SearchProducts from './pages/SearchProduct'
import Login from './pages/Login';
import Registration from './pages/Registration';
import AddToCart from './pages/AddToCart';
import Payment from './pages/Payment';
import Product from './pages/Product';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify"

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route path='/' element={<Home/>} loader={productsData}></Route> {/*giving default path to home page*/}
    <Route path='/Login' element={<Login/>}></Route>
    <Route path='/Registration' element={<Registration/>}></Route>
    <Route path="/product/:id" element={<SearchProducts/>} loader={productsData}></Route>
    <Route path='/AddToCart' element={<AddToCart/>}></Route>
    <Route path='/payment' element={<Payment/>}></Route>
    <Route path='/Product' element={<Product/>} loader={productsData}></Route>
  </Route>
  ))

  return (
    <div>
    <RouterProvider router={router}></RouterProvider>
    <ToastContainer/>
    </div>
  );
}

export default App;
