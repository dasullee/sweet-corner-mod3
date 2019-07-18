import React from 'react'
import {connect} from 'react-redux'
import {getProductDetails, clearProductDetails} from '../../actions/index'
import './product-details.scss'
import Money from '../general/money'

class ProductDetails extends React.Component{
    componentDidMount() {
        const {getProductDetails, match: {params}} = this.props
        getProductDetails(params.product_id)
    }
    componentWillUnmount() {
        this.props.clearProductDetails()
    }
    render() {
        const {product} = this.props
        if (product == null) {
            return <h1>Loading product...</h1>
        }
        else {
            return (
                <div className="product-details">
                
                    <img className="productImage" src={product.image.url}></img>
                    <div className="text">
                        <h1>{product.name}</h1>
                        <h3 className="caption">{product.caption}</h3>
                        <h2>Description</h2>
                        <p>{product.description}</p>
                        <h1 className="right">{Money(product.cost)}</h1>
                    </div>
                </div>
            )
        }
    }
}
function mapStateToProps(state) {
    return {
        product: state.products.details
    }
}

export default connect(mapStateToProps, {
    getProductDetails: getProductDetails,
    clearProductDetails: clearProductDetails
})(ProductDetails)