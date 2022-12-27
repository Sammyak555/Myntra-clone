
import { Box, Button, Checkbox, Flex, Grid, GridItem, Icon, Menu, MenuButton, MenuItem, MenuList, Stack } from "@chakra-ui/react"
import { useContext, useEffect } from "react"
import { useState } from "react"
import { dataforfilter, productdata } from "../Components/Api"
import { CartContext } from "../CartContext/CartContextProvider"

import '../Styles/Shirts.css'
import Clothcard from "../Components/Clothcard"
import { useSearchParams } from "react-router-dom"

const itemalreadyexist = (id, cartitems) => {
    if (cartitems.find((item) => item.id === id)) {
        return true
    } else {
        return false
    }
}

const Shirts = () => {
    const [data, setData] = useState([])
    const [searchparams, setSearchparams] = useSearchParams()
    const initialtitle = searchparams.getAll("title")
    const initialSort=searchparams.getAll("sort")
    const [title, settitle] = useState(initialtitle || [])
    const[sort,setSortBy]=useState(initialSort[0]||"")
    const sortBy=searchparams.get("sort")
    console.log(sort)
    useEffect(() => {
        const wparams = {
            params: {
                title: title,
                _sort:sort&&("discounted_price"),
                _order:sort,
                _limit: 20,
                
            }
        }
        setSearchparams(wparams.params)
        productdata(setData, wparams)
    }, [setData,sort, title, setSearchparams])

    const handleCheckbox = (e) => {
        const newtitle = [...title]
        if (newtitle.includes(e.target.value)) {
            newtitle.splice(newtitle.indexOf(e.target.value), 1)
        } else {
            newtitle.push(e.target.value)
        }
        settitle(newtitle)
    }
    // console.log(title)
    const handlesort = (e) => {
        setSortBy(e.target.value)
    }

    return (
        <div>
            <div className='sorting'></div>
            <div className='flexbox'>
              <div className="leftsidebox">
              <div className='wfilter' style={{width:"100%"}}>
                    <h2 style={{fontWeight:"500"}}>Filter By Brand</h2>
                   
                    <div>
                        <input type="checkbox" value="Roadster"
                            onChange={handleCheckbox}
                            checked={title.includes("Roadster")}
                        />
                        <label >Roadster</label>
                    </div>
                    <div>
                        <input type="checkbox" value="HIGHLANDER"
                            onChange={handleCheckbox}
                            checked={title.includes("HIGHLANDER")}
                        />
                        <label >HIGHLANDER</label>
                    </div>
                    <div>
                        <input type="checkbox" value="LOCOMOTIVE"
                            onChange={handleCheckbox}
                            checked={title.includes("LOCOMOTIVE")}
                        />
                        <label>Locomotive</label>
                    </div>
                </div>
                <div className="sortingbox">
                    <h2 style={{fontWeight:"500"}}>Sorting</h2>
              
                    <div onChange={handlesort}>
                        <input type="radio" name="sortBy" value={'asc'}
                        defaultChecked={sort==="asc"}
                        />
                        <label>Ascending</label>
                        <br />
                    </div>
                    <div onChange={handlesort}>
                        <input type="radio" name="sortBy" value={'desc'}
                        defaultChecked={sort==="desc"}
                        />
                        <label>Decending</label>
                        <br />
                    </div>
                </div>
              </div>
                <div className='wproducts'>
                    {
                        data.length > 0 &&
                        data.map((item) => {
                            if (item.images !== ""&&item.title!=="HERE&NOW") {
                                return (<Clothcard key={item.id} {...item} />)
                            }
                        })
                    }
                </div>
            </div>
        </div>
    )

}
export default Shirts
