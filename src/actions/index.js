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
export default {
    getSchedule: getSchedule
}