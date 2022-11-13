import { useContext } from "react"
import {CheckoutContext} from "../CkeckoutContext/CheckoutContextProvider"
import { Alert, AlertIcon, Box, Button, Center, Container, Grid, Heading, Icon, Link, Stack, StackDivider, Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr, VStack } from "@chakra-ui/react"

import { CartContext } from "../CartContext/CartContextProvider"
import  {CiDiscount1}  from 'react-icons/ci'
import StripeCheckout from "react-stripe-checkout";
//  import { STRIPE_KEY,razorpayHandler  } from "../Components/Config";


const Address=()=>{

    const{state2,dispatch2}=useContext(CheckoutContext)
    const{state,dispatch}=useContext(CartContext)
    console.log(state2)

    


    let totalmrp=0;
    let discount=0;
    let total=0
    for(let i=0;i<state2.length;i++){
        totalmrp+=Number(state2[i].strike_price)
        discount+=Number(state2[i].strike_price-state2[i].discounted_price)
        total+=Number(state2[i].discounted_price)
    }

    return(
        <div>
        <Center>
        <div style={{}}>

        <div style={{display:"flex"}}>
            <div style={{width:"600px",height:"800px"}}>
                <div style={{border:"1px solid grey", borderRadius:"6px" ,width:"600px",height:"150px",marginBottom:"30px",marginTop:"20px"}}>
                <div style={{ margin:"auto",width:"580px",marginTop:"5px",height:"140px"}}>
                    <div style={{display:"flex"}}>
                    <Icon  as={CiDiscount1} w={7} h={7}/>
                    <Text fontWeight={"600"} fontSize='xl'>Bank Offers</Text>
                    </div>
                    <div>
                        <p>⚪5% Unlimited Cashback on Flipkart Axis Bank Credit Card. TCA</p>
                        <p>⚪5% Cashback on Paytm Postpaid transactions on a min spend of Rs 1,500. TCA</p>
                       
                        <span>⚪10% Cashback upto Rs 150 on Freecharge Paylater transaction. TCA</span>
                       
                        <p>⚪5% Cashback upto Rs 75 on a minimum spend of Rs 1,500 with PayZapp. TCA</p>
                        
                    </div>
                </div>
                </div>
                <div style={{border:"1px solid red"}}>
                  <h1 style={{fontWeight:"500"}} >CHOOSE PAYMENT METHOD</h1>


                  <Grid >
          <Grid
            item
            xs={12}
            sm={12}
            md={8}
            lg={8}
            xl={8}
            
          >
           
            {(
              <div >
                <img style={{width:"150px",height:"170px"}}
                  src="https://github.com/kr017/MyntraUI/blob/main/src/images/StripeLogo.png?raw=true"
                  alt="StripeLogo"
                 
                />

                <div style={{ margin: "8px" }}>
                  To Pay with Stripe add <b>4242 4242 4242 4242</b> as card
                  number with any future date as expiry and any 3digits as CVC.
                  <div style={{ marginTop: "4px" }}>
                    <StripeCheckout
                      // stripeKey={STRIPE_KEY}
                      // token={checkout}
                      name="Checkout"
                      amount={total}
                      
                      currency="INR"
                      // email={userState?.email}
                    ></StripeCheckout>
                  </div>
                </div>
              </div>
            )}
          </Grid>

          
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={4}
            xl={4}
            // className={classes.second}
          >
            {/* <OrderTile /> */}
          </Grid>
          {/* )} */}
        </Grid>
      



                </div>
                           </div>
            <div style={{border:"1px solid red",width:"370px",height:"500px"}}>
                <div style={{border:"1px solid red",width:"350px",height:"460px",margin:"auto",marginTop:"20px"}}>
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
                
               
                </div>
            </div>
        </div>
    </div>

    </Center>
<Center>
    <div style={{display:"flex"}}>
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
export default Address