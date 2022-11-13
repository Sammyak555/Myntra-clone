import axios from "axios"

export const getdata=({limit,title})=>{

    return(
        axios.get(`https://limitless-wildwood-96623.herokuapp.com/api/${title}`,{
            params:{
                _limit:limit
            }
        })
    )

}
export const productdata=({title,style,sort,order})=>{

    return(
        axios.get(`https://limitless-wildwood-96623.herokuapp.com/api/clothing?category=Mens`,{
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
        axios.get(`https://limitless-wildwood-96623.herokuapp.com/api/clothing?category=Mens`,{
            params:{
                title:title,
                style:style,
                _sort:sort,
                _order:order
            }
        })
    )

}