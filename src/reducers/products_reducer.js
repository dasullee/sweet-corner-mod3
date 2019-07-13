import types from '../actions'

const DEFAULT_STATE = {
    list: [],
    details: null
}

export default (state=DEFAULT_STATE, action) => {
    switch(action.types){
        case(types.GET_ALL_PRODUCTS) : 
            return {
                ...state,
                list: action.products
            }
        default: state
    }
}
