import { Route, Routes } from "react-router-dom";
import { About } from "../Pages/About";
import Cart from "../Pages/Cart";
import { Home } from "../Pages/Home";
import  Login  from "../Pages/Login";
import  Shirts  from "../Pages/Shirts";
import {Wishlist} from "../Pages/Wishlist";
import PrivateRoute from "./PrivateRoute";
import Address from "../Pages/Address"


export function AllRoutes(){

    return(
       <div>
         <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/men" element="Men"/>
            <Route path="/men/shirts" element={<Shirts/>}/>
            <Route path="/women" element={<Home/>}/>
            <Route path="/kids" element={<Home/>}/>
            <Route path="/wishlist" element={<PrivateRoute><Wishlist/></PrivateRoute>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/cart" element={<PrivateRoute><Cart/></PrivateRoute>}/>
            <Route path="/address" element={<PrivateRoute><Address/></PrivateRoute>}/>
        </Routes>
       </div>
    )

}