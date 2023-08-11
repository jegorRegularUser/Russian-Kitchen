import { useRef } from 'react'
import Input from '../../UI/Input'
import styles from './DishItem.module.css'
const DishItem = ({ id, name, price, description }) => {
	const inputData = useRef()
	const takeInCartHandler = () => {
		console.log(id)
		console.log(inputData.current.value)
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
