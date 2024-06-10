import React from 'react';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <NavBar />
        <Routes> 
          <Route path='/' element={<ItemListContainer title='¡Bienvenido a la Tienda! Aquí encontrarás los accesorios que necesitas' />} />
          <Route path='/categorias/:categoryId' element={<ItemListContainer title='¡Bienvenido a la Tienda! Aquí encontrarás los accesorios que necesitas' />} />
          <Route path='/producto/:productId' element={<ItemDetailContainer />} />
          
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;




