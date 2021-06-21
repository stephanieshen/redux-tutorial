import { cartActions } from "./cart";
import { uiActions } from "./ui";

export const fetchCartData = () => {
    return async (dispatch) => {
        const getData = async () => {
            const response = await fetch(
                'https://cart-6d435-default-rtdb.firebaseio.com/cart.json'
            )

            if (!response.ok) {
                dispatch(uiActions.showNotification({
                    title: 'Failed',
                    message: 'Failed getting cart items!',
                    status: 'error'
                }));
            }

            return await response.json();
        }

        try {
            const cartData = await getData();
            dispatch(cartActions.setItems(cartData));
        } catch (error) {
            dispatch(uiActions.showNotification({
                title: 'Failed',
                message: 'Failed getting cart items!',
                status: 'error'
            }));
        }
    }
}

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(uiActions.showNotification({
            title: 'Sending...',
            message: 'Sending card data...',
            status: 'pending'
        }));

        const sendData = async () => {
            const response = await fetch(
                'https://cart-6d435-default-rtdb.firebaseio.com/cart.json', 
                {
                  method: 'PUT',
                  body: JSON.stringify(cart)
                }
            );
        
            if (!response.ok) {
                dispatch(uiActions.showNotification({
                  title: 'Failed',
                  message: 'Sending cart data failed',
                  status: 'success'
                }))
            }
        }

        try {
            await sendData();
            dispatch(uiActions.showNotification({
                title: 'Success',
                message: 'Sent cart data successfully!',
                status: 'success'
            }));
        } catch (error) {
            sendData().catch(() => {
                dispatch(uiActions.showNotification({
                  title: 'Error',
                  message: 'Sending cart data failed',
                  status: 'error'
                }))
            })
        }
    }
}
