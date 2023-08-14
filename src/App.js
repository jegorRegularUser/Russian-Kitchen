import React, { useState } from 'react'
import CartContextProvider from './CartStore/CartContextProvider.js'
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
		<>
			<CartContextProvider>
				{cartIsVis && <Cart onCartClose={cartCloseHandler} />}
				<Header onCartOpen={cartOpenHandler} />
				<DishList />
			</CartContextProvider>
		</>
	)
}

export default App
