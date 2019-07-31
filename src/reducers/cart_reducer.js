import types from '../actions/types'

const DEFAULT_STATE = {
    total: null,
    cartID: null,
    items: []
}

export default(state = DEFAULT_STATE, action) => {
    switch(action.type){
        case types.ADD_ITEMS_TO_CART:
            return {
                ...state,
                total: action.cartTotal
            }
        case types.GET_ACTIVE_CART:
            return {
                ...state,
                cartID: action.cart.cartID,
                items: action.cart.items,
                total: action.cart.total
            }
        case types.GET_CART_TOTALS:
            return {
                ...state,
                total: action.total
            }
        default:
            return state
    }

}