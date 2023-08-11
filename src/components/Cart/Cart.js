import React from 'react'
import Modal from '../../UI/Modal'
import styles from './Cart.module.css'
const Cart = props => {
	return (
		<Modal onHideCart={props.onCartClose}>
			<ul className={styles['cart-items']}></ul>
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
