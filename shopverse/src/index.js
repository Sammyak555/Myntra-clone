import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import  AuthContextProvider  from './AuthContext/AuthContextProvider';
import CartContextProvider from './CartContext/CartContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <AuthContextProvider>
        <CartContextProvider>
      <BrowserRouter>
      <App />
      </BrowserRouter>
      </CartContextProvider>
      </AuthContextProvider>
    </ChakraProvider>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
