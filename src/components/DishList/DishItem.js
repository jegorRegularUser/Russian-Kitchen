import { useRef } from 'react'
import Input from '../../UI/Input'
import styles from './DishItem.module.css'
const DishItem = ({ id, name, price, description, isInCart, onSetDishes }) => {
	const inputData = useRef()
	const takeInCartHandler = () => {
		console.log(id, isInCart)
		isInCart = true
		console.log(inputData.current.value, isInCart)

		onSetDishes(prevDishes => {
			return prevDishes.filter(dish => {
				console.log(dish)
				return dish.isInCart === true
			})
		})
	}
	return (
		<li>
			<div className={styles.description}>
				<div className={styles.nameAndPrice}>
					{name} ${price}
				</div>
				{description}
			</div>
			<div>
				<Input ref={inputData} />
				<button onClick={takeInCartHandler}>take in cart</button>
			</div>
		</li>
	)
}
export default DishItem
