import React, { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT, VIEW_CART } from '../../utils/queries';
import CartItem from '../CartItem';
import Auth from '../../utils/auth.js';
import { useStoreContext } from '../../utils/globalState';
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from '../../utils/actions';
import { Box, Heading, Text, Button, VStack, Center } from '@chakra-ui/react';

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx')

const Cart = () => {
    const [state, dispatch] = useStoreContext();
    const [getCheckout, { data} ] = useLazyQuery(QUERY_CHECKOUT);
    const [viewCart, { cartData}] = useLazyQuery(VIEW_CART);

    useEffect(() => {
        if (data) {
            stripePromise.then((res) => { 
                res.redirectToCheckout({sessionId: data.checkout.session})
            })
        }
    }, [data]);

    useEffect(() => {
        async function getCart() {
            console.log('getting cart drom db...')
            const cartDb = await viewCart();
            if(!cartDb) return (<div>Loading Cart...</div>)

            const cart = cartDb.data.viewCart.cart;

            dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart]})
        }

        if (!state.cart.length) {
            getCart();
        }
    }, [state.cart.length, dispatch]);

    function toggleCart() {
        dispatch({ type: TOGGLE_CART});
    }

    function calculateTotal() {
        let sum = 0;
        state.cart.forEach((item) => {
            sum += item.price;
        });
        return sum.toFixed(2);
    }

    function submitCheckout() {
        const productIds = [];

        state.cart.forEach((item) => {
            for( i=0; i< item.purchaseQuanitity; ++i) {
                productIds.push(item._id);
            }
        });

        getCheckout({
            variables: { products: productIds}
        });
    }

    if(!state.cartOpen) {
        return (
            <div className='cart-closed' onClick={toggleCart}>
                <span role='img' aria-label='trash'>
                    <img src={icon} alt="cart-icon" />
                </span>
            </div>
        )
    }

    return (
        <Box classname='cart'>
            <Box className='close' onClick={toggleCart}>
                [close]
            </Box>
            <Heading as='h1' p={4}>Shopping Cart</Heading>
            {state.cart.length ? (
                <VStack width='100%' alignItems='center' spacing={4}>
                    {state.cart.map((item) => (
                        <CartItem key={item._id} item={item} />
                    ))}
                    <Box m={4}>
                        <Text fontWeight='bold'>Total: ${calculateTotal()}</Text>

                        {Auth.loggedIn() ? (
                            <Button onClick={submitCheckout}>Checkout</Button>
                        ) : (
                            <Text>(sign in to checkout)</Text>
                        )}
                    </Box>
                </VStack>
            ) : (
                <Center>
                    <Box>
                        <img src='images/cart-icon.jpg' alt='cart-icon' style={{width: "350px", height: "350px", marginRight: "5px"}} />
                        <Heading as='h1'>
                            {Auth.loggedIn() ? 'cart is empty' : 'please log in to add items to your cart.'}
                        </Heading>
                    </Box>
                </Center>
            )}
        </Box>
    );
};

export default Cart;