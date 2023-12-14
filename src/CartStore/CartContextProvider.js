import React, { useState } from 'react'
import {
	dishCapital,
	dishOrientalBuzz,
	dishRegularWithChicken,
} from '../DishesDescriptionList'
import CartContext from './CartContext'

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
