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
export const productdata=({limit,title,style,sort,order})=>{

    return(
        axios.get(`http://localhost:8080/clothing?category=Mens`,{
            params:{
                title:title,
                style:style,
                _sort:sort,
                _order:order
            }
        })
    )

}

export const dataforfilter=({title,style,sort,order})=>{

    return(
        axios.get(`http://localhost:8080/clothing?category=Mens`,{
            params:{
                title:title,
                style:style,
                _sort:sort,
                _order:order
            }
        })
    )

}