import React from "react";
import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'
import classes from './CheckoutSummary.module.css'
const checkoutSummary = (props) =>{
    return (
        <div className={classes.CheckoutSummary}>
            <h1>We Hope it tastes well!</h1>

            <div style={{
                width:'300px',
                height:'300px',
                marginTop:'100px',
                marginBottom:"100px"
            }}>
                <Burger ingredients={props.ingredients} />

            </div>
            <Button btnType="Danger" clicked={props.checkoutCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.checkoutContinued}>CONTINUE</Button>
        </div>
    );
}

export default checkoutSummary;
