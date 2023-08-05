import styles from './DishItem.module.css'
const DishItem = ({ id, name, price, description }) => {
	return (
		<li>
			<div className={styles.description}>
				{name} ${price} {description}
			</div>
		</li>
	)
}
export default DishItem
