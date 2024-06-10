import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { ToastContainer, toast } from 'react-toastify';
import { Box, Card, CardBody, Text } from '@chakra-ui/react';

const ItemDetail = ({ nombre, stock }) => {
  const onAdd = (quantity) => {
    toast(`Agregaste ${quantity} unidades`);
  };

  return (
    <Box textAlign="center">
      <Card
        maxW="md"
        borderWidth="1px"
        borderRadius="md"
        borderColor="white"
        boxShadow="lg"
        bg="black"
        color="white"
        p="4"
        mx="auto"
        my="4"
      >
        <CardBody>
          <Text fontSize="xl" mb="4">
            {nombre}
          </Text>
          <ItemCount stock={stock} valorInicial={1} onAdd={onAdd} />
          <ToastContainer />
        </CardBody>
      </Card>
    </Box>
  );
};

export default ItemDetail;

