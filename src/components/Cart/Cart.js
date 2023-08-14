import React, { useContext } from 'react'
import CartContext from '../../CartStore/CartContext'
import Modal from '../../UI/Modal'
import styles from './Cart.module.css'
const Cart = props => {
	const { dishes } = useContext(CartContext)
	console.log(dishes)
	const visDishes = dishes.map(({ id, name, isInCart, price }) => {
		console.log(isInCart)
		return (
			<li key={id}>
				{name} ${price}
			</li>
		)
	})
	return (
		<Modal onHideCart={props.onCartClose}>
			<ul className={styles['cart-items']}>{visDishes}</ul>
			<div className={styles.total}>
				<span>Итого</span>
				<span>$10</span>
			</div>
			<div className={styles.actions}>
				<button className={styles['button--alt']} onClick={props.onCartClose}>
					Закрыть
				</button>
				<button className={styles.button}>Заказать</button>
			</div>
		</Modal>
	)
}

export default Cart
