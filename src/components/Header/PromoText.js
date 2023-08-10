import React from 'react'
import styles from './Header.module.css'
const PromoText = () => {
	return (
		<div className={styles.img}>
			<div className={styles['promo-text']}>
				<p>
					Welcome to our cozy restaurant, where you will find an unforgettable
					culinary journey! Imagine warm and cozy get-togethers with friends or
					family, where every meal before turns into a true work of art.
				</p>
				<p>
					Here you can enjoy not only the dishes, but also the atmosphere, which
					creates the illusion of traveling to old village huts, where every
					bite of food is prepared with love and respect for traditions.
				</p>
			</div>
		</div>
	)
}

export default React.memo(PromoText)
