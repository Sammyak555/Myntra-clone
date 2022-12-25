import axios from "axios"

export const getdata=({limit,title})=>{

    return(
        axios.get(`https://myntra-db-server.onrender.com/${title}`,{
            params:{
                title:title,
                _limit:limit
            }
        })
    )

}

// export const dataforfilter=({title,style,sort,order})=>{

//     return(
//         axios.get(`https://myntra-db-server.onrender.com/clothing?category=Mens`,{
//             params:{
//                 title:title,
//                 style:style,
//                 _sort:sort,
//                 _order:order
//             }
//         })
//     )

// }
export const productdata=(setData,params)=>{

    return axios.get(`https://myntra-db-server.onrender.com/clothing?category=Mens`,params)
        .then((r)=>{
            console.log(r.data)
            setData(r.data)
        })
        .catch((e)=>{
            console.log(e)
        })     
}


export const getwomendata=(setData,params)=>{
    return axios.get(`https://myntra-db-server.onrender.com/clothing?category=Womens`,params)
    .then((r)=>{
        setData(r.data)
    })
    .catch((e)=>{
        console.log(e)
    })
}