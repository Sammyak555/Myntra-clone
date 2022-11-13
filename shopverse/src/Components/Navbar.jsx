import { Avatar, Box, Button, Center, Flex, Icon, Input, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Stack, useColorMode, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import  {AiOutlineHeart}  from 'react-icons/ai'
import  {RiAdminFill}  from 'react-icons/ri'
import  {BsHandbag}  from 'react-icons/bs'
import { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthContextProvider";
import { loginFailure, loginLoading } from "../AuthContext/action";

import {
  Topwear, indian_festive, bottomwear,
  Innerwear_Sleepwear, Footwear,
  Sports_Active_Wear, Gadgets, Fashion_Accessories,
} from '../Components/Navsub'

export default function Navbar(){
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { state, dispatch } = useContext(AuthContext);
  console.log(state.token)
  return(
    <div>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} height="80px" >
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
      <Link to="/">
            <img style={{height:"70px",marginLeft:"50px"}} src="https://cdn.iconscout.com/icon/free/png-256/myntra-2709168-2249158.png" alt="" />
            </Link>
        <Link to="/">
        <Menu isOpen={isOpen}>
                <MenuButton onMouseEnter={onOpen} onMouseLeave={onClose}>
                  <span className="mr-1"  style={{fontWeight:"500"}}>
                    Mens
                  </span>
                </MenuButton>
                <MenuList className="drop" onMouseEnter={onOpen} onMouseLeave={onClose}>
                 <div style={{display:"flex"}}>
                 <div>
                 <MenuItem >
                    <Link to="/men/shirts">
                      Shirts
                    </Link>    
                  </MenuItem>
                 </div>
                  <div style={{marginLeft:"10px",marginRight:"10px"}}>
                 <Link> <h1 style={{fontWeight:"500"}}>Topwear</h1></Link>
                          {Topwear.map((data) =>
                            <ul >{data.title}</ul>
                        )}
                  
                  </div>
                 <div style={{marginLeft:"10px",marginRight:"10px"}}>
                  <h1 style={{fontWeight:"500"}}>Indian Festivals</h1>
                  {indian_festive.map((data) =>
                <ul >{data.title}</ul>
              )}
              <br />
                  <h1  style={{fontWeight:"500"}}>Bottomwear</h1>
              {bottomwear.map((data) =>
                <ul>{data.title}</ul>
              )}
                 </div>
                 <div>
                 <h1  style={{fontWeight:"500"}}>Footwear</h1>
              {Footwear.map((data) =>
                <ul>{data.title}</ul>
              )}
                <br />
                <h1  style={{fontWeight:"500"}}>Innerwear & Sleepwear</h1>
              {Innerwear_Sleepwear.map((data) =>
                <ul>{data.title}</ul>
              )}

                 </div>
                 <div style={{marginLeft:"10px",marginRight:"10px"}}>
                 <h1  style={{fontWeight:"500"}}>Sports & Active Wear</h1>
                  {Sports_Active_Wear.map((data) =>
                <ul>{data.title}</ul>
                  )}
                 </div>
                 </div>
                </MenuList>
              </Menu>
              </Link> 
        <Link to="/women" >Women</Link> 
        <Link to="/kids">Kids</Link> 
        <Link >Home&Living</Link>  
        <Link>Beauty</Link>
        <Box><Input size='md' bg={"white.900"} width="500px" placeholder="Search for Products, Brands and Many more"/></Box>

       
          
           <Flex alignItems={'center'}>
             <Stack direction={'row'} spacing={7}>
                <Link to="/wishlist">  
                <Center>
                <Icon as={AiOutlineHeart} w={6} h={6} />
                  </Center>
                <p >Wishlist</p>
                </Link>

                <Link to="/cart">  
                <Center>
                <Icon as={BsHandbag} w={6} h={6} />
                  </Center>
                <p>bag</p>
                </Link>

                {/*  */}
               <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
               </Button> 
               <Menu >
                 <MenuButton
                   as={Button}
                   rounded={'full'}
                   variant={'link'}
                   cursor={'pointer'}
                   minW={0}>
                   <Icon as={RiAdminFill} w={6} h={6} />
                   <p >Profile</p>
                 </MenuButton>
                 <MenuList alignItems={'center'}>
                 {!state.isAuth&&<>
                  <Center>
                    <h2>Welcome</h2>
                  </Center>
                    
                   <Center>
                    <p>To access account and manage orders</p>
                  </Center>
                  <br />                      
                    <Center>
                     <Button>
                      <Link to={'/login'}>Login/SignUp</Link>
                     </Button>
                   </Center><br /></>
                   }
                   {
                    state.isAuth&&<>
                    <Center>
                    <h2>Welcome</h2>
                  </Center>
                    
                   <Center>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy7nFdX1g_CVR4WyP5LgKOGytP0J8PE53_RQ&usqp=CAU" alt="" />
                  </Center>
                  <br />                      
                    <Center>
                    <p>Sammyak Deosale</p>
                   </Center><br />
                   <Center>
                    <p>Administator</p>
                   </Center><br /></>
                    
                   }

                   <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                   <MenuItem>Account Settings</MenuItem>
                  {state.isAuth&&<Button bg={"none"} onClick={()=>dispatch(loginLoading())}><MenuItem>Logout</MenuItem></Button>}
                 </MenuList>
               </Menu>
          </Stack>  
      </Flex>
      </Flex>
      </Box>
    </div>
  )

}