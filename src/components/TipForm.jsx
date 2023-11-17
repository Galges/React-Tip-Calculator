import React, { useState } from 'react'
import './TipForm.css'
import TipCalculator from './TipCalculator'
import TipsButtons from './TipsButtons'

function TipForm() {
	const [resetCalculator, setResetCalculator] = useState('')
	const [state, setState] = useState({
		price: '',
		tip: '',
		people: '',
		custom: '',
	})
	const { price, tip, people, custom } = state

	const resetBtn = () => {
		setState({
			price: '',
			tip: '',
			people: '',
			custom: 'Custom',
		})
		if (resetCalculator) {
			resetCalculator()
		}
	}

	return (
		<div className='container'>
			<div className='firstPart'>
				<label type='number'>Bill</label>
				<input
					onChange={e => setState({ ...state, price: e.target.value })}
					value={price}
					className='cash-icon'
					type='number'></input>

				<div>
					<p className='select-tip'>Select Tip %</p>
				</div>
				<div className='tips'>
					<TipsButtons
						setTip={newTip => setState(prev => ({ ...prev, tip: newTip }))}
						tip={tip}
						custom={custom}
						setCustom={newCustom => setState(prev => ({ ...prev, custom: newCustom }))}
					/>
				</div>
				<div className='labelgroup'>
					<label type='text'>Number of People</label>
					<p className='error' style={{ display: people !== '0' ? 'none' : 'block' }}>
						Can't be zero
					</p>
				</div>
				<input
					style={{ borderColor: people !== '0' ? '' : 'red' }}
					onChange={e => {
						setState({ ...state, people: e.target.value })
					}}
					value={people}
					type='number'
					className='input-people'></input>
			</div>
			<div className='partTwo'>
				<TipCalculator price={price} tip={tip} people={people} setResetCalculator={setResetCalculator} />

				<div className='btn-reset'>
					<button onClick={resetBtn} className='reset'>
						RESET
					</button>
				</div>
			</div>
		</div>
	)
}

export default TipForm
