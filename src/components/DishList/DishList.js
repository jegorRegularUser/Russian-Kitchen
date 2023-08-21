import { useContext } from 'react'
import CartContext from '../../CartStore/CartContext'
import {
	dishCapital,
	dishOrientalBuzz,
	dishRegularWithChicken,
} from '../../DishesDescriptionList'
import DishItem from './DishItem'
import styles from './DishList.module.css'

const DishList = props => {
	const { _ } = useContext(CartContext)
	const dishes = [dishCapital, dishRegularWithChicken, dishOrientalBuzz]
	const dishListSort = dishes?.map(meal => {
		return (
			<DishItem
				// onSetDishes={setDishes}
				isInCart={meal.isInCart}
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
