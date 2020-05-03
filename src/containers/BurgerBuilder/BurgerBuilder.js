import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
// import axios from '../../axios-orders'
import Spinner from '../../components/UI/Spinner/Spinner'


const INGREDIENT_PRICES = {
    salad: 40,
    cheese: 20,
    bacon: 30,
    meat: 50
}


class BurgerBuilder extends Component {

    state={
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }, 
        totalPrice: 40,
        purchasable: false,
        purchasing: false,
        loading: false
    }

    updatePurchaseState (ingredients) {
        
        const sum = Object.keys(ingredients)
            .map((igKey) => {
                return ingredients[igKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0)

            this.setState ({ purchasable : sum > 0 })
    }

    purchaseHandler = () => {
        this.setState({purchasing: true})
    }

    addIngredientsHandler = (type) => {
        const oldCount = this.state.ingredients[type]
        const updatedCount = oldCount + 1
        
        const updatedIngredinets = {
            ...this.state.ingredients
        }
        updatedIngredinets[type] = updatedCount

        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredinets
        })
        this.updatePurchaseState(updatedIngredinets)
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false})
    }

    purchaseContinueHandler = () => {

        const queryParams = [];
        for (let i in this.state.ingredients) {
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]))
        }
        queryParams.push('price=' + this.state.totalPrice)
        const quesryString = queryParams.join('&')
        this.props.history.push({
            pathname: '/checkout',
            search: '?' + quesryString
        })

    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1
        
        const updatedIngredinets = {
            ...this.state.ingredients
        }
        updatedIngredinets[type] = updatedCount

        const priceSubtraction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceSubtraction;

        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredinets
        })  
        this.updatePurchaseState(updatedIngredinets)
    }

    

    render() {

        let orderSummary = <OrderSummary 
            ingredients= {this.state.ingredients}
            purchaseCancelled={this.purchaseCancelHandler}
            price={this.state.totalPrice}
            purchaseContinued={this.purchaseContinueHandler} />

        if (this.state.loading) {
            orderSummary = <Spinner />
        }

        const disabledInfo = {
            ...this.state.ingredients
        }

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        const {ingredients} = this.state
        return (
            <React.Fragment>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                <Burger ingredients={ingredients}/>
                <BuildControls 
                addIngredientsHandler={this.addIngredientsHandler}
                removeIngredientHandler={this.removeIngredientHandler}
                disabled={disabledInfo}
                purchasable={this.state.purchasable}
                price={this.state.totalPrice}
                ordered={this.purchaseHandler}
                />
            </React.Fragment>
        );
    }
}

export default BurgerBuilder;