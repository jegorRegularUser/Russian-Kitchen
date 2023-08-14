import { useContext } from 'react'
import CartContext from '../../CartStore/CartContext'
import DishItem from './DishItem'
import styles from './DishList.module.css'

const DishList = props => {
	const { dishes, setDishes } = useContext(CartContext)

	const dishListSort = dishes?.map(meal => {
		return (
			<DishItem
				key={meal.id}
				name={meal.name}
				id={meal.id}
				description={meal.description}
				price={meal.price}
			/>
		)
	})

	return (
		<section className={styles.dishes}>
			<ul>{dishListSort}</ul>
		</section>
	)
}

export default DishList
