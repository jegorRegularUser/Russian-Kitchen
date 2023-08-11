import React from 'react'
import styles from './Input.module.css'
const Input = React.forwardRef((props, ref) => {
	return (
		<div className={styles.input}>
			<input
				ref={ref}
				type='number'
				step={1}
				min={1}
				max={10}
				defaultValue={1}
			></input>
		</div>
	)
})

export default Input
