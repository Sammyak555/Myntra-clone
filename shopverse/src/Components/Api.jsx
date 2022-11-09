import axios from "axios"

export const getdata=({limit,title})=>{

    return(
        axios.get(`http://localhost:8080/${title}`,{
            params:{
                _limit:limit
            }
        })
    )

}