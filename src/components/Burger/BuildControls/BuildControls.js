import React from 'react';

import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

const BuildControls = (props) => {

    const controls = [
        {label: 'Salad', type: 'salad'},
        {label: 'Cheese', type: 'cheese'},
        {label: 'Meat', type: 'meat'},
        {label: 'Bacon', type: 'bacon'}
    ]
    return (
        <div className={classes.BuildControls}>
            <p>Current Price : <strong>{props.price.toFixed(2)}</strong></p>
            {
                controls.map((items) => {
                    return (
                        <BuildControl 
                        key={items.label} 
                        label={items.label}
                        addIngredientsHandler={() => props.addIngredientsHandler(items.type)}
                        removeIngredientHandler={() => props.removeIngredientHandler(items.type)}
                        disabled={props.disabled[items.type]}
                        />
                    )
                })
            }
            <button 
            className={classes.OrderButton}
            disabled={!props.purchasable}
            onClick={props.ordered}>
            ORDER NOW</button>
        </div>
    );
};

export default BuildControls;