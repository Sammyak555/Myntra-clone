import { Route, Routes } from "react-router-dom";
import { About } from "../Pages/About";
import { Home } from "../Pages/Home";
import  Login  from "../Pages/Login";
import  Shirts  from "../Pages/Shirts";
import {Wishlist} from "../Pages/Wishlist";
import PrivateRoute from "./PrivateRoute";


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
        </Routes>
       </div>
    )

}