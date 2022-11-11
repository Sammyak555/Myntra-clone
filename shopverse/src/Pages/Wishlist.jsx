import { Button, Grid, Icon } from "@chakra-ui/react"
import { useContext } from "react"
import { CartContext } from "../CartContext/CartContextProvider"
import { removecart } from "../CartContext/action";
import  {CiCircleRemove}  from 'react-icons/ci'

export function Wishlist(){
    const{state,dispatch}=useContext(CartContext)
    console.log(state)
    return(
        <div style={{marginLeft:"100px",marginTop:"120px"}}>

            <h1>My Wishlist : {state.length} Items</h1>

            <Grid templateColumns='repeat(5, 1fr)' style={{marginLeft:"40px"}} gap={'30px'} >
                {
                    state.map((item)=>
                    <div key={item.id} style={{marginTop:"40px", width:"260px"}}>
                        <img style={{width:"250px"}} src={item.images[0]} alt="" />
                        {/* <Button style={{marginTop:'0px'}}><Icon as={CiCircleRemove} w={6} h={6}/></Button> */}
                        <br />
                        <div>
                        <h1 style={{fontWeight:"400"}}>{item.title}</h1>
                        <p style={{fontWeight:"400"}}>{item.subtitle}</p>
                        <div style={{display:"flex",justifyContent:"space-around"}}>
                        <p style={{fontWeight:"600"}}>Rs:{item.discounted_price}</p>
                        <p style={{color:"orange", fontWeight:"600"}}>{item.discount}</p>
                        </div>
                        </div>
                        <br />
                        <div style={{display:"flex",justifyContent:"space-around"}}>
                        <Button
                        colorScheme="grey"
                        variant="outline"
                        onClick={()=>dispatch(removecart(item.id))}
                        >Remove</Button>
                        <Button
                        colorScheme="grey"
                        variant="outline"
                        onClick={()=>dispatch(removecart(item.id))}
                        >Move To Bag</Button>
                        </div>
                    </div>)
                }
            </Grid>

        </div>
    )
}