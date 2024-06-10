import React, { useEffect, useState } from 'react';
import { Box, Text, Flex } from '@chakra-ui/react'; // Agregué la importación de Box y Text de Chakra-UI
import './ItemListContainer.css';
import { getProducts, getProductsByCategory } from '../../data/asyncMock';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { PacmanLoader } from 'react-spinners';

const ItemListContainer = ({ title }) => {
  const [products, setProducts] = useState([]);
  const [ loading, setLoading ] = useState (true)

  const { categoryId } = useParams();
  

  useEffect(() => {
    setLoading(true)
    const dataProductos = categoryId ? getProductsByCategory(categoryId) : getProducts();
    dataProductos  
      .then((data) => setProducts(data))
      .catch((error) => console.log(error))
      .finally(()=> setLoading(false))
  }, [categoryId]);

  
  return (
    <Box bg="black" align="center" color="white" p="4">
      <Text textAlign="center" fontSize="2xl" fontWeight="bold">{title}</Text> 
      {
        loading ? 
        <Flex justify={'center'} align={'center'} h={'50vh'}>
          <PacmanLoader color="#36d7b7" />
        </Flex>
        : 
        <ItemList products={products} />
      }
    </Box>
  );
};

export default ItemListContainer;




