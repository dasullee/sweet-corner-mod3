import './products.scss'
import React from 'react'
import {connect} from 'react-redux'
import {getAllProducts} from '../../actions'

class Products extends React.Component {
    componentDidMount(){
        console.log("Products Component Mounted")
        this.props.getAllProducts()
    }
    render() {
        const {products} = this.props
        console.log(products)
        return(
        <div className="products">
            <h1>Products Page</h1>
        </div>
        )
    }
} 
function mapStateToProps(state) {
    return {
        products: state.products.list
    }
}

export default connect(mapStateToProps, {
    getAllProducts: getAllProducts
}) (Products)