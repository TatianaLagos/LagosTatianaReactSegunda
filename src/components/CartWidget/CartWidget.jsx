// CartWidget.jsx
import React from 'react';
import { IconButton } from '@chakra-ui/react';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CartWidget = () => {
  return (
    <IconButton
      icon={<FontAwesomeIcon icon={faShoppingCart} />} 
      aria-label="Carrito de Compras"
      bg="black" 
      color="white" 
    />
  );
};

export default CartWidget;

