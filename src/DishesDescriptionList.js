class Dish {
	constructor(id, name, description, price, isInCart) {
		this.id = id
		this.name = name
		this.description = description
		this.price = price
		this.isInCart = isInCart
	}
}
const dishCapital = new Dish(
	'm1',
	'Capital',
	'potato, chicken fillet, pickled cucumber, tomato, cucumber, spicy sauce',
	2.99,
	false
)
const dishRegularWithChicken = new Dish(
	'm2',
	'Regular with chicken',
	'chicken fillet, tomato, cucumber, signature sauce',
	1.99,
	false
)
const dishOrientalBuzz = new Dish(
	'm3',
	'Oriental buzz',
	'satsebeli, cilantro, bell pepper, cucumber, tomato, soy-ginger sauce',
	0.99,
	false
)
export { dishCapital, dishOrientalBuzz, dishRegularWithChicken }
