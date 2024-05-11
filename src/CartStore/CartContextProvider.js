import React, { useState } from 'react'

import CartContext from './CartContext'

class Dish {
	constructor(id, name, description, price, isInCart) {
		this.id = id
		this.name = name
		this.description = description
		this.price = price
		this.isInCart = isInCart
	}
}
const dishCapital = new Dish(
	0,
	'Capital',
	'potato, chicken fillet, pickled cucumber, tomato, cucumber, spicy sauce',
	2.99,
	false
)
const dishRegularWithChicken = new Dish(
	1,
	'Regular with chicken',
	'chicken fillet, tomato, cucumber, signature sauce',
	1.99,
	false
)
const dishOrientalBuzz = new Dish(
	2,
	'Oriental buzz',
	'satsebeli, cilantro, bell pepper, cucumber, tomato, soy-ginger sauce',
	0.99,
	false
)

const reducer = (state, action) => {
	const isInCartState = state[state.action].isInCart

	return state.filter(obj => obj.isInCartState === true)
}
const CartContextProvider = props => {
	const [dishes, dispatchDishes] = useState([
		dishCapital,
		dishRegularWithChicken,
		dishOrientalBuzz,
	])

	return (
		<CartContext.Provider value={{ dishes, dispatchDishes }}>
			{props.children}
		</CartContext.Provider>
	)
}
export default CartContextProvider
