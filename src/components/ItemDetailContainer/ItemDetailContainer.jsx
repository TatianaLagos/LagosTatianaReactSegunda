import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getProductById } from '../../data/asyncMock';
import ItemDetail from '../ItemDetail/ItemDetail';
import { Flex } from '@chakra-ui/react';
import { PacmanLoader } from 'react-spinners';

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);
    const [loading, setLoading] = useState(true);
    const { productId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const result = await getProductById(productId);
                if (result) {
                    setProducto(result);
                } else {
                    navigate('/not-found'); // Navigate to a not found page if product does not exist
                }
            } catch (error) {
                console.error("Error fetching product:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [productId, navigate]);

    return (
        <>
            {loading ? 
                <Flex justify={'center'} align={'center'} h={'50vh'}>
                    <PacmanLoader color="#36d7b7" />
                </Flex>
                : 
                producto && <ItemDetail {...producto} />
            }
        </>
    );
}

export default ItemDetailContainer;

