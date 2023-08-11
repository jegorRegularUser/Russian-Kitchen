import React from 'react'
import styles from './Header.module.css'
import PromoText from './PromoText'
const Header = props => {
	return (
		<>
			<div className={styles.list}>
				<h2>Russian Kitchen</h2>
				<button onClick={props.onCartOpen}>Cart</button>
			</div>
			<PromoText />
		</>
	)
}

export default Header
