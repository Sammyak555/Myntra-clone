import { useState } from "react";
import { Alert, AlertDescription, AlertIcon, AlertTitle,  Button, Center, Container, FormControl, FormLabel, Input } from "@chakra-ui/react";
import React from "react";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getLogin } from "../Redux/Auth/action";


export default function Login() {
  const loggeddata=useSelector((store)=>store.auth)
 
  const dispatch=useDispatch()
  const [userData, setUserData] = useState({
    email: "",
    password: ""
  });
 
  const onSubmit = (e) => {
    e.preventDefault();
      if(userData.email&&userData.password){
        dispatch(getLogin(userData));
      }
  }


  const onChangeData = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  if (loggeddata.isAuth) {
    return <Navigate to="/" />;
  }


  if (loggeddata.isError) {
    return (
      <Container
        width={{
          base: "full",
          sm: "full",
          md: "container.xl",
          lg: "container.lg"

        }}
        centerContent={true}
      >
        <Alert
          status='error'
          variant='subtle'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          textAlign='center'
          height='200px'
        >
          <AlertIcon boxSize='40px' mr={0} />
          <AlertTitle mt={4} mb={1} fontSize='lg'>
            Login Failed!
          </AlertTitle>
          <AlertDescription maxWidth='sm'>
            Please check your login credentials.
          </AlertDescription>
        </Alert>
      </Container>
    )
  }


  return <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',

    }}
  >
    <div style={{ border: '1px solid grey', width: "340px", borderRadius: "20px" }}>

      <Container w={'300px'} h="600px" >
        <form onSubmit={onSubmit}>
          <br />
          <Center><FormLabel fontSize={'25px'}>Login</FormLabel> </Center>
          <FormControl isRequired>

            <br />
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              placeholder="Email Address"
              size="lg"
              value={userData.email}
              onChange={onChangeData}
            />
          </FormControl>
          <FormControl isRequired mt={6}>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="Password"
              size="lg"
              name="password"
              onChange={onChangeData}
              value={userData.password}
            />
          </FormControl>
          <Button
            variantColor="teal"
            variant="outline"
            type="submit"
            width="full"
            mt={4}
            backgroundColor="teal.400"
          >
            LOGIN
          </Button>
        </form>
        <br />
        <p>Having trouble logging in?</p><Link style={{ fontWeight: "700", color: "teal" }} to="/"> GET HELP </Link>

      </Container>
    </div>

  </div>;
};