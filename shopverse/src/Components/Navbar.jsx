import { Avatar, Box, Button, Center, Flex, Input, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Stack, useColorMode, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

export default function Navbar(){
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure()
  return(
    <div>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} height="80px" >
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
      <Link to="/">
            <img style={{height:"70px"}} src="https://cdn.iconscout.com/icon/free/png-256/myntra-2709168-2249158.png" alt="" />
            </Link>
        <Link to="/men">Men</Link> 
        <Menu key={"1"} isOpen={isOpen}>
                <MenuButton onMouseEnter={onOpen} onMouseLeave={onClose}>
                  <span className="mr-1">
                    CAREER
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
        <Link to="/women">Women</Link> 
        <Link to="/kids">Kids</Link> 
        <Link >Home&Living</Link>  
        <Link>Beauty</Link>
        <Box><Input size='md' bg={"white.900"} width="500px"/></Box>

       
          
           <Flex alignItems={'center'}>
             <Stack direction={'row'} spacing={7}>

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
                   <br />
                   <Center>
                     <Avatar
                       size={'2xl'}
                       src={'https://avatars.dicebear.com/api/male/username.svg'}
                     />
                   </Center>
                   <br />
                   <Center>
                     <p>Username</p>
                   </Center>
                   <br />
                   <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                   <MenuItem>Account Settings</MenuItem>
                   <MenuItem>Logout</MenuItem>
                 </MenuList>
               </Menu>
          </Stack>  
      </Flex>
      </Flex>
      </Box>
    </div>
  )

}