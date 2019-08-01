import React from 'react'
import './checkout.scss'
import { Field, reduxForm } from 'redux-form'
import Input from './guest_form'

class GuestCheckout extends React.Component {
    handleGuestCheckout = (values) =>{
        console.log(values)
    }   
    render(){
        const {handleSubmit} = this.props
        return(
            <div className="guest-checkout">
                <h1 className="center">Guest Checkout</h1>
                <form className="center" onSubmit={handleSubmit(this.handleGuestCheckout)}>
                    <Field className="contactForm orange" label="First Name" name="firstName" component={Input} />
                    <Field className="contactForm yellow" label="Last Name" name="lastName" component={Input} />
                    <Field className="contactForm teel" label="Email" name="email" component={Input} />
                    <button  className="btnCheckout orange">Submit Order</button>
                </form>
            </div>
        )
    }
}
export default reduxForm({
    form: 'custom-form'
})(GuestCheckout);