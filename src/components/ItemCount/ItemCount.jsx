import React, { useState } from 'react';
import { Button, Flex } from '@chakra-ui/react';

const ItemCount = ({ onAdd }) => {
  const [count, setCount] = useState(1);
  const stock = 5;

  const incrementar = () => {
    count < stock && setCount(count + 1);
  };

  const decrementar = () => {
    count > 1 && setCount(count - 1);
  };

  return (
    <Flex align="center" justify="center" color="white">
      <Button colorScheme="white" onClick={decrementar}>
        -
      </Button>
      <span>{count}</span>
      <Button colorScheme="white" onClick={incrementar}>
        +
      </Button>
      <Button onClick={() => onAdd(count)}>Agregar al carrito</Button>
    </Flex>
  );
};

export default ItemCount;

