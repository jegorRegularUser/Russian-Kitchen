import DishItem from './DishItem'
import styles from './DishList.module.css'
const DUMMY_DISHES = [
	{
		id: 'm1',
		name: 'Capital',
		description:
			'potato, chicken fillet, pickled cucumber, tomato, cucumber, spicy sauce',
		price: 2.99,
	},
	{
		id: 'm2',
		name: 'Regular with chicken',
		description: 'chicken fillet, tomato, cucumber, signature sauce',
		price: 1.99,
	},
	{
		id: 'm3',
		name: 'Oriental buzz',
		description:
			'satsebeli, cilantro, bell pepper, cucumber, tomato, soy-ginger sauce',
		price: 0.99,
	},
]

const DishList = props => {
	const dishListSort = DUMMY_DISHES.map(meal => {
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
