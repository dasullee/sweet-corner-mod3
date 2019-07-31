import React from 'react'
import './cart.scss'
import {connect} from 'react-redux'
import {getActiveCart} from '../../actions'

class Cart extends React.Component {
    componentDidMount() {
        this.props.getActiveCart()
    }
    render() {
        return(
            <div>
                <h1 className="center">Cart</h1>
            </div>
        )
    }
}
function mapStateToProps(state){
    return {
        cartItems: state.cart.items
    }
}

export default connect(mapStateToProps, {
    getActiveCart: getActiveCart
})(Cart)