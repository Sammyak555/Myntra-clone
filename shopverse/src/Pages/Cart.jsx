import { useContext } from "react"
import {CheckoutContext} from "../CkeckoutContext/CheckoutContextProvider"
import { Alert, AlertIcon, Box, Button, Center, Container, Grid, Heading, Icon, Link, Stack, StackDivider, Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr, VStack } from "@chakra-ui/react"
import { removecart } from "../CkeckoutContext/action"
import  {GrClose}  from 'react-icons/gr'
import { addtowish } from "../CartContext/action"
import { CartContext } from "../CartContext/CartContextProvider"
import  {CiDiscount1}  from 'react-icons/ci'
import  {BiArrowBack}  from 'react-icons/bi'
import { Navigate, useNavigate } from "react-router-dom"
import { useEffect } from "react"




 function Cart(){
    const{state2,dispatch2}=useContext(CheckoutContext)
    const{state,dispatch}=useContext(CartContext)
    const navigate=useNavigate()
    console.log(state2)
    let moveandremove

     useEffect(()=>{
        moveandremove=(item)=>{
        
            dispatch2(removecart(item.id))
            dispatch(addtowish(item))
            alert("Your Poduct Will be moved to WishList!!!")
               
        }
     })


    let totalmrp=0;
    let discount=0;
    let total=0
    for(let i=0;i<state2.length;i++){
        totalmrp+=Number(state2[i].strike_price)
        discount+=Number(state2[i].strike_price-state2[i].discounted_price)
        total+=Number(state2[i].discounted_price)
    }

    const  handleclick=()=>{
         navigate("/address")
    }

    const  prevlist=()=>{
        navigate("/wishlist")
   }
    

    
    return(
        
            <div>
                <Center>
                <div style={{}}>

                <div style={{display:"flex"}}>
                    <div style={{width:"600px"}}>
                        <div style={{border:"1px solid grey", borderRadius:"6px" ,width:"600px",height:"150px",marginBottom:"30px",marginTop:"20px"}}>
                        <div style={{ margin:"auto",width:"580px",marginTop:"5px",height:"140px"}}>
                            <div style={{display:"flex"}}>
                            <Icon  as={CiDiscount1} w={7} h={7}/>
                            <Text fontWeight={"600"} fontSize='xl'>Avilable Offers</Text>
                            </div>
                            <div>
                                <p>⚪5% Unlimited Cashback on Flipkart Axis Bank Credit Card. TCA</p>
                                <p>⚪5% Cashback on Paytm Postpaid transactions on a min spend of Rs 1,500. TCA</p>
                               
                                <span>⚪10% Cashback upto Rs 150 on Freecharge Paylater transaction. TCA</span>
                               
                                <p>⚪5% Cashback upto Rs 75 on a minimum spend of Rs 1,500 with PayZapp. TCA</p>
                                
                            </div>
                        </div>
                        </div>
                        <div>
                                <VStack
                                  divider={<StackDivider borderColor='gray.200' />}
                                  spacing={4}
                                  align='stretch'
                                >
                                    {
                                        state2.map((item)=>
                                        <Box key={item.id} >
                                            <div style={{display:"flex",border:"1px solid grey", borderRadius:"7px",width:"600px" , height:"200px",position: "relative"}}>
                                            <div style={{marginLeft:"20px",marginTop:"20px" }}>
                                                <img style={{width:"110px", height:"140px" }} src={item.images[0]} alt="" />
                                            </div>
                                            <div>
                                                <h1 style={{marginLeft:"10px",marginTop:"20px",color:"black",fontWeight:"500"}}>{item.title}</h1>
                                                <p style={{marginLeft:"10px"}}>{item.subtitle}</p>
                                                <div style={{display:"flex",justifyContent:"space-between",marginTop:"20px",marginLeft:"10px"}}>
                                                    <p style={{color:"#0C0B0B",fontWeight:"500"}}>₹{item.discounted_price}</p>
                                                    <p style={{textDecoration:"line-through",marginLeft:"10px"}}>₹{item.strike_price}</p>
                                                    <p style={{color:"green", fontWeight:"500",marginLeft:"10px"}}>{item.discount}</p>
                                                </div>
                                            </div>
                                            <div style={{position: "absolute",right:"20px",marginTop:"20px"}}>
                                            <Icon  onClick={()=>moveandremove(item)}  as={GrClose} w={7} h={7}/>
                                            {/*  */}
                                            </div>
                                            </div>
                                            
                                        </Box>
                                        )
                                    }
                                  
                                  <Button onClick={prevlist}> <Icon  as={BiArrowBack} w={7} h={7}/>  ADD MORE FROM WISHLIST</Button>
                                </VStack>
                        </div>
                    </div>
                    <div style={{width:"370px",height:"500px"}}>
                        <div style={{width:"350px",height:"460px",margin:"auto",marginTop:"20px"}}>
                        <br />
                        <h2 style={{ fontWeight:"700",marginLeft:"33%"}}>ORDER DETAILS</h2>
                        <br />
                        <div></div>
                        <div>
                        <TableContainer>
                           <Table variant='simple'>
                             
                             <Thead>
                               <Tr>
                                 <Th >Price Details({state2.length} Items)</Th>
                         
                                 <Th isNumeric></Th>
                               </Tr>
                             </Thead>
                             <Tbody>
                               <Tr>
                                 <Td>Total MRP</Td>
                                 
                                 <Td isNumeric>₹{totalmrp}</Td>
                               </Tr>
                              <Tr>
                                 <Td>Discount On MRP</Td>
                                 
                                 <Td style={{color:"green", fontWeight:"500"}} isNumeric>-₹{discount}</Td>
                               </Tr>
                               <Tr>
                                 <Td>Coupon Discount</Td>
                                 
                                 <Td  style={{color:"orangered", fontWeight:"400"}}>Apply Coupon</Td>
                               </Tr>
                               <Tr>
                                 <Td>Convenience Fee<p style={{color:"orangered", fontWeight:"600"}}>Know More</p></Td>
                                 
                                 <Td isNumeric >
                                   <p style={{textDecoration:"line-through"}}>₹90 </p>
                                    <p style={{color:"green", fontWeight:"500"}}>FREE</p>
                                    </Td>
                               </Tr>
                             </Tbody>
                             <Tfoot>
                               <Tr>
                                 <Th>total Amount</Th>
                                
                                 <Th isNumeric>₹{total}</Th>
                               </Tr>
                             </Tfoot>
                           </Table>
                         </TableContainer>
                        </div>
                      <Button onClick={handleclick} style={{width:"100%",backgroundColor:"#ff3f6c",borderRadius:"2px"}}> PLACE ORDER</Button>
                     
                        </div>
                    </div>
                </div>
            </div>

            </Center>
        <Center>
            <div style={{display:"flex",marginTop:"50px"}}>
                <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-bhim.png" alt="" />
                <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-ssl.png" alt="" />
                <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-visa.png" alt="" />
                <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-mc.png" alt="" />
                <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-dc.png" alt="" />
                <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-ae.png" alt="" />
                <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-nb.png" alt="" />
                <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-cod.png" alt="" />
                <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-rupay.png" alt="" />
                <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-paypal.png" alt="" />

            </div>
        </Center>
            </div>
    )

 }
export default Cart