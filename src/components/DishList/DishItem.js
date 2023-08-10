import Input from '../../UI/Input'
import styles from './DishItem.module.css'
const DishItem = ({ id, name, price, description }) => {
	return (
		<li>
			<div className={styles.description}>
				{name} ${price} {description}
			</div>
			<div>
				<Input />
				<button>take in cart</button>
			</div>
		</li>
	)
}
export default DishItem
