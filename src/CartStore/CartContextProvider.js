import React, { useState } from 'react'
import {
	dishCapital,
	dishOrientalBuzz,
	dishRegularWithChicken,
} from '../DishesDescriptionList'
import CartContext from './CartContext'

const CartContextProvider = props => {
	const [dishes, setDishes] = useState([
		dishCapital,
		dishRegularWithChicken,
		dishOrientalBuzz,
	])
	return (
		<CartContext.Provider value={{ dishes, setDishes }}>
			{props.children}
		</CartContext.Provider>
	)
}
export default CartContextProvider
