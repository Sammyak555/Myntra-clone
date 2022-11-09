import { useState } from "react"
import { useEffect } from "react"
import { getdata } from "../Components/Api"

export function Home(){
    const [data,setData]=useState([])

    useEffect(()=>{
        getdata().then((res)=>setData(res.data))
    },[])

    return(
        <div>
            <h1>DEAL OF THE DAY</h1>
                {
                    data.map((item)=>
                    <div key={item.id}>
                        <img src={item.url} alt="" />
                    </div>)
                }
            
        </div>
    )

}