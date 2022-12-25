import { useContext, useEffect, useState } from "react"
import {CheckoutContext} from "../CkeckoutContext/CheckoutContextProvider"
import { Alert, AlertIcon, Box, Button, Center, Container, Grid, Heading, Icon, Link, Stack, StackDivider, Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr, VStack } from "@chakra-ui/react"

import  {CiDiscount1}  from 'react-icons/ci'
import { useDispatch, useSelector } from "react-redux"
import { getAdd } from "../Redux/Checkout/action"
import { Wrap, WrapItem } from '@chakra-ui/react'

import AddressForm from '../Components/CheckoutComps/AddressForm'
import "../Pages/Checkout/Checkout.css"
import AddressCard from '../Components/CheckoutComps/AddressCard'
import Payment from '../Components/CheckoutComps/Payment'





const Address=()=>{
  const dispatch = useDispatch()
  const{state2,dispatch2}=useContext(CheckoutContext)
    const AllAddress = useSelector((store) => store.checkout.AllAddress)
    const [style, setStyle] = useState("AddressBoxsmall");
    const [ns, setNs] = useState("")

    console.log(AllAddress)
    useEffect(() => {
        dispatch(getAdd)
        changeStyle()
    }, [])
    const changeStyle = () => {

      if(AllAddress.length>0){
          setStyle("AddressBoxbig");
      }
  };
console.log(style)
  const cardclick = (id) => {
      setNs("AddressBoxsmall");
      console.log("hi")
  }
  
  useEffect(() => {
      if (ns !== "") {
          setStyle()
      } else {
          setStyle("AddressBoxsmall")
      }
  }, [ns])
    
    
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
                <div >
                  <h1 style={{fontWeight:"500"}} >CHOOSE PAYMENT METHOD</h1>


                  {/* <div className='leftside'>
                    <div className={style||ns} onClick={changeStyle}>
                        {/* <div className='addresscard'>
                            
                        </div> */}

                    {/*  <Wrap justify='space-between'>
                            {
                                style === "AddressBoxbig" &&
                                <WrapItem>
                                    <Center >
                                        {
                                            AllAddress.length>0 &&
                                            AllAddress.map((item) => {
                                                return (<AddressCard key={item.id} cardclick={cardclick} {...item} setStyle={setStyle} />)
                                            })
                                        }
                                    </Center>
                                </WrapItem>
                            }
                            <WrapItem justifyContent={'center'}>
                                <Center >
                                    <AddressForm />
                                </Center>
                            </WrapItem>

                        </Wrap>
                    </div>
                    </div> */}
                  <div className='leftside'>
                    <div className={style||ns} onClick={changeStyle}>
                        {/* <div className='addresscard'>
                            
                        </div> */}

                        <Wrap justify='space-between'>
                            {
                                style === "AddressBoxbig" &&
                                <WrapItem>
                                    <Center >
                                        {
                                            AllAddress.length>0 &&
                                            AllAddress.map((item) => {
                                                return (<AddressCard key={item.id} cardclick={cardclick} {...item} setStyle={setStyle} />)
                                            })
                                        }
                                    </Center>
                                </WrapItem>
                            }
                            <WrapItem justifyContent={'center'}>
                                <Center >
                                    <AddressForm />
                                </Center>
                            </WrapItem>

                        </Wrap>
                    </div>
                    
                    <div className="paymentbox" >
                        <Payment />
                    </div>
                </div>



                </div>
                           </div>
            <div style={{border:"1px dotted grey",borderRight:"0",borderTop:"0",borderBottom:"0",width:"370px",height:"500px"}}>
                <div style={{width:"350px",height:"460px",margin:"auto",marginTop:"20px"}}>
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
    <div style={{display:"flex",marginBottom:"100px"}}>
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