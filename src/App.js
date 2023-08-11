import React, { useState } from 'react'
import Cart from './components/Cart/Cart.js'
import DishList from './components/DishList/DishList'
import Header from './components/Header/Header'
function App() {
	const [cartIsVis, setCartIsVis] = useState(false)
	const cartOpenHandler = () => {
		setCartIsVis(true)
	}
	const cartCloseHandler = () => {
		setCartIsVis(false)
	}
	return (
		<div>
			{cartIsVis && <Cart onCartClose={cartCloseHandler} />}
			<Header onCartOpen={cartOpenHandler} />
			<DishList />
		</div>
	)
}

export default App
