import React from 'react'
import styles from './Input.module.css'
const Input = React.forwardRef((props, ref) => {
	return (
		<div className={styles.input}>
			<input
				placeholder='1'
				ref={ref}
				type='number'
				step={1}
				min={1}
				max={10}
			></input>
		</div>
	)
})

export default Input
