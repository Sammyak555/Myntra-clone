import { Avatar, Box, Button, Center, Flex, Icon, Input, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Stack, useColorMode, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import  {AiOutlineHeart}  from 'react-icons/ai'
import { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthContextProvider";

export default function Navbar(){
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { state, dispatch } = useContext(AuthContext);
  return(
    <div>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} height="80px" >
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
      <Link to="/">
            <img style={{height:"70px"}} src="https://cdn.iconscout.com/icon/free/png-256/myntra-2709168-2249158.png" alt="" />
            </Link>
        <Link to="/men">
        <Menu isOpen={isOpen}>
                <MenuButton onMouseEnter={onOpen} onMouseLeave={onClose}>
                  <span className="mr-1">
                    Mens
                  </span>
                </MenuButton>
                <MenuList className="drop" onMouseEnter={onOpen} onMouseLeave={onClose}>
                  <MenuItem className="menu_item hover:opacity-60 hover:text-black ">
                    
                  </MenuItem>
                  <MenuItem className="menu_item hover:opacity-60 hover:text-black ">
                    <Link to="/men">
                      Men
                    </Link>
                  </MenuItem>
                  <MenuItem className="menu_item hover:opacity-60 hover:text-black ">
                    <Link to="/men/shirts">
                      Shirts
                    </Link>    
                  </MenuItem>
                  <MenuItem className="menu_item hover:opacity-60 hover:text-black ">
                    <Link to="/men/shirts">
                      T-Shirts
                    </Link>
                  </MenuItem>
                  <MenuItem className="menu_item hover:opacity-60 hover:text-black ">
                    <Link to="/life-at-sirocco">
                      LIFE AT SIROCCO
                    </Link>
                  </MenuItem>
                </MenuList>
              </Menu>
              </Link> 
        <Link to="/women">Women</Link> 
        <Link to="/kids">Kids</Link> 
        <Link >Home&Living</Link>  
        <Link>Beauty</Link>
        <Box><Input size='md' bg={"white.900"} width="500px"/></Box>

       
          
           <Flex alignItems={'center'}>
             <Stack direction={'row'} spacing={7}>
                <Link to="/wishlist">  
                <Center>
                <Icon as={AiOutlineHeart} w={6} h={6} />
                  </Center>
                <p>Wishlist</p>
                </Link>
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
                   <Avatar
                     size={'sm'}
                     src={'https://avatars.dicebear.com/api/male/username.svg'}
                   />
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

                   <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                   <MenuItem>Account Settings</MenuItem>
                  {state.isAuth&&<MenuItem>Logout</MenuItem>}
                 </MenuList>
               </Menu>
          </Stack>  
      </Flex>
      </Flex>
      </Box>
    </div>
  )

}