import { Route, Routes } from "react-router-dom";
import { About } from "../Pages/About";
import { Home } from "../Pages/Home";


export function AllRoutes(){

    return(
       <div>
         <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/men" element="Men"/>
            <Route path="/women" element={<Home/>}/>
            <Route path="/kids" element={<Home/>}/>
        </Routes>
       </div>
    )

}