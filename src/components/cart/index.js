import React from 'react'
import './cart.scss'
import {connect} from 'react-redux'
import {getActiveCart} from '../../actions'

class Cart extends React.Component {
    componentDidMount() {
        this.props.getActiveCart()
    }
    handleCheckoutGuest = () => {
        this.props.history.push('/checkout/guest')
    }
    render() {
        const tableProducts = this.props.cartItems.map((product,index) => {
            return (
                <tr key={index} className="products">
                    <td className="imageRow"><img src={product.thumbnail.url} align="right" className="productImage"></img></td>
                    <td className="">{product.name}</td>
                    <td className=""> ${(product.each/100).toFixed(2)} </td>
                    <td className="">{product.quantity}</td>
                    <td className=""> ${(product.total/100).toFixed(2)} </td>
                </tr>
        )})
        return(
            <div className="checkoutOutline">
                <h1 className="heading center brown">Cart</h1>
                <table align="center">
                    <tbody>
                        <tr className="brown">
                            <th>Image</th>
                            <th>Product</th>
                            <th>Each</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                        {this.props.cartItems ? tableProducts : <tr></tr>}
                        <tr >
                            <td className="white"></td>
                            <td className="blue mergeCells" colSpan="2">Cart Total:</td>
                            <td className="blue">{this.props.total ? this.props.total.items : 0}</td>
                            <td className="blue">${this.props.total ? this.props.total.cost/100 : 0}</td>
                        </tr>
                    </tbody>
                </table>
                <button className="guestCheckoutBtn center" onClick={this.handleCheckoutGuest}>Checkout as Guest</button>
            </div>
        )
    }
}
function mapStateToProps(state){
    console.log("state", state)
    return {
        cartItems: state.cart.items,
        total: state.cart.total
    }
}

export default connect(mapStateToProps, {
    getActiveCart: getActiveCart,
})(Cart)