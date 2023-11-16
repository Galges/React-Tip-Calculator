import React, { useEffect, useState } from 'react'

function TipCalculator({ price, tip, people, setResetCalculator }) {
	const [tipAmount, setTipAmount] = useState('')
	const [total, setTotal] = useState('')

	useEffect(() => {
		if (price !== '' && tip !== '' && people !== '') {
			const priceValue = parseFloat(price)
			const peopleValue = parseInt(people)
			const selectValue = parseFloat(tip)
			if (priceValue > 0 && peopleValue > 0 && selectValue > 0) {
				const calculatedTip = (priceValue * selectValue) / peopleValue
				const calculatedTotal = priceValue / peopleValue + calculatedTip

				setTipAmount(calculatedTip.toFixed(2))
				setTotal(calculatedTotal.toFixed(2))
			}
		}
	}, [price, tip, people])

	useEffect(() => {
		setResetCalculator(() => resetCalculator)
	}, [setResetCalculator])

	const resetCalculator = () => {
		setTotal('')
		setTipAmount('')
	}

	return (
		<>
			<div className='top'>
				<div className='tip-amount'>
					<p className='text'>Tip Amount</p>
					<p className='person'>/ person</p>
				</div>
				<div className='amount'>${tipAmount !== '' ? tipAmount : '0.00'}</div>
			</div>
			<div className='bottom'>
				<div className='total'>
					<p className='text'>Total</p>
					<p className='person'>/ person</p>
				</div>
				<div className='amount'>${total !== '' ? total : '0.00'}</div>
			</div>
		</>
	)
}

export default TipCalculator
