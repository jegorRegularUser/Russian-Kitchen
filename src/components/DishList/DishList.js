import DishItem from './DishItem'
import styles from './DishList.module.css'
const DUMMY_DISHES = [
	{
		id: 'm1',
		name: 'Столичная',
		description:
			'картофель, куриное филе, маринованный огурец, помидор, огурец, пикантный соус',
		price: 2.99,
	},
	{
		id: 'm2',
		name: 'Обычная с курицей',
		description: 'куриное филе, помидор, огурец, фирменный соус',
		price: 1.99,
	},
	{
		id: 'm3',
		name: 'Восточный кайф',
		description:
			'сацебели, кинза, болгарский перец, огурец, помидор, соево-имбирный соус',
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
