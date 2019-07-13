import types from './types'
import axios from 'axios'
import dataJSON from '../../dist/data/schedule'


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

export default {
    getSchedule: getSchedule
}