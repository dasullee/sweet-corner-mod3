import types from './types'
import axios from 'axios'

export const getSchedule = () => async dispatch => {
    try {
        dispatch({
            type: types.FETCH_DATA
        })
        const {data} = await axios.get('/data/schedule.json')
        if (data){
            dispatch({
                type: types.GOT_DATA,
                payload: data
            })
        }
    }
    catch(error){
        console.log(error)
    }
}
const BASE_URL = 'http://api.sc.lfzprototypes.com'
export const getAllProducts = () => async dispatch => {
    try {
        const response = await axios.get(BASE_URL + '/api/products')
        dispatch({
            type: types.GET_ALL_PRODUCTS,
            products: response.data.products
        })
    }
    catch(error) {
        console.log(error)
    }
}
export const getProductDetails = (productID) => async dispatch => {
    try {
        const response = await axios.get(`${BASE_URL}/api/products/${productID}`)
        dispatch({
            type: types.GET_PRODUCT_DETAILS,
            product: response.data
        })
    }
    catch (error) {
        console.log(error)
    }
}
export const clearProductDetails = () => (
    
    {
        type: types.CLEAR_PRODUCT_DETAILS
    }
    
)
export const addItemToCart = (productID, quantity) => async dispatch => {
    try {
        const cartToken = localStorage.getItem('sc-cart-token');
        const axiosConfig = {
            headers: {
                'X-Cart-Token': cartToken
            }
        }
        const response = await axios.post(`${BASE_URL}/api/cart/items/${productID}`, {
            quantity: quantity
         }, axiosConfig)
         localStorage.setItem('sc-cart-token', response.data.cartToken)
         dispatch({
             type: types.ADD_ITEMS_TO_CART,
             cartTotal: response.data.total
         })
    }
    catch(error) {
        console.log('Add Item To Cart Error: Something Went Wrong')
        console.log(error)
    }
}
export const getActiveCart = () => async dispatch => {
    try {
        const cartToken = localStorage.getItem('sc-cart-token')
        const axiosConfig = {
            headers: {
                'X-Cart-Token': cartToken
            }
        }
        const response = await axios.get(`${BASE_URL}/api/cart`, axiosConfig)
        dispatch({
            type: types.GET_ACTIVE_CART,
            cart: response.data
        })
    }
    catch(error){
        console.log("Error in Cart:", error)
    }
}
export default {
    getSchedule: getSchedule
}