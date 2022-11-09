// import { ReactNode } from 'react';
// import {
//   Box,
//   Flex,
//   Avatar,
//   Link,
//   Button,
//   Menu,
//   MenuButton,
//   MenuList,
//   MenuItem,
//   MenuDivider,
//   useDisclosure,
//   useColorModeValue,
//   Stack,
//   useColorMode,
//   Center,
//   HStack,
//   Input,
// } from '@chakra-ui/react';
// import { MoonIcon, SunIcon } from '@chakra-ui/icons';

import { Avatar, Box, Button, Center, Flex, Input, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Stack, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

// const NavLink = ({ children }) => (
//   <Link
//     px={2}
//     py={1}
//     rounded={'md'}
//     _hover={{
//       textDecoration: 'none',
//       bg: useColorModeValue('gray.200', 'gray.700'),
//     }}
//     href={'#'}>
//     {children}
//   </Link>
// );

// export default function Navbar() {
//   const { colorMode, toggleColorMode } = useColorMode();
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   return (
//     <>
//       <Box bg={useColorModeValue('gray.100', 'gray.900')} height="80px" >
//         <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          
//             <Link to="/about">
//             <img style={{height:"70px"}} src="https://cdn.iconscout.com/icon/free/png-256/myntra-2709168-2249158.png" alt="" /></Link>
          
//           <Box>Logo</Box>
//           <Box>Logo</Box>
//           <Box>Logo</Box>
//           <Box>Logo</Box>
//           <Box>Logo</Box>
//           <Box><Input size='md' width="500px"/></Box>
          
//           <Flex alignItems={'center'}>
//             <Stack direction={'row'} spacing={7}>
//               <Button onClick={toggleColorMode}>
//                 {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
//               </Button>

//               <Menu>
//                 <MenuButton
//                   as={Button}
//                   rounded={'full'}
//                   variant={'link'}
//                   cursor={'pointer'}
//                   minW={0}>
//                   <Avatar
//                     size={'sm'}
//                     src={'https://avatars.dicebear.com/api/male/username.svg'}
//                   />
//                 </MenuButton>
//                 <MenuList alignItems={'center'}>
//                   <br />
//                   <Center>
//                     <Avatar
//                       size={'2xl'}
//                       src={'https://avatars.dicebear.com/api/male/username.svg'}
//                     />
//                   </Center>
//                   <br />
//                   <Center>
//                     <p>Username</p>
//                   </Center>
//                   <br />
//                   <MenuDivider />
//                   <MenuItem>Your Servers</MenuItem>
//                   <MenuItem>Account Settings</MenuItem>
//                   <MenuItem>Logout</MenuItem>
//                 </MenuList>
//               </Menu>
//             </Stack>
//           </Flex>
//         </Flex>
//       </Box>
//     </>
//   );
// }

export default function Navbar(){
  const { colorMode, toggleColorMode } = useColorMode();
  return(
    <div>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} height="80px" >
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
      <Link to="/">
            <img style={{height:"70px"}} src="https://cdn.iconscout.com/icon/free/png-256/myntra-2709168-2249158.png" alt="" />
            </Link>
        <Link to="/men">Men</Link> 
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
               <Menu>
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