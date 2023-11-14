import { useEffect, useState } from 'react'
import './TipFrom.css'

function TipForm() {

	

	const [price, setPrice] = useState('')
	const [tip, setTip] = useState('')
	const [tipValue,setTipValue] = useState('')
	const [people,setPeople] = useState('')
	const [tipAmount, setTipAmount] = useState('')
	const [total, setTotal] = useState('')
	const [custom, setCustom] = useState('')
	const [error, setError] = useState(false)


	useEffect(() => {
		if (price !== '' && tip !== '' && people !== '') {
			const priceValue = parseFloat(price)
			const peopleValue = parseInt(people)
			const selectValue = parseFloat(tip)
			if (priceValue > 0 && peopleValue > 0 && selectValue > 0) {
				const calculatedTip = (priceValue * selectValue) / peopleValue
				const calculatedTotal = priceValue / peopleValue + calculatedTip

				setTipAmount(calculatedTip)
				setTotal(calculatedTotal)
			}
		}
	},[price, tip, people])

	useEffect(() => {
		let timer;
	
		if (price !== '' && tip !== '') {
		  timer = setTimeout(() => {
			if (people === '') {
			  setError(true);
			}
		  }, 5000);
		}
	
		return () => clearTimeout(timer);
	  }, [price, tip, people]);


	const handleClick = (e) => {
		setTip(e.target.getAttribute('value')) 
		setTipValue(e.target.getAttribute('value')) 

		setCustom('Custom')
	} 

	const resetBtn = () => {
		setPrice('')
		setTip('')
		setPeople('')
		setTipAmount('')
		setTotal('')
		setCustom('Custom')
	}

	return (
		<div className='container'>
		
				<div className='firstPart'>
					<label type='number'>Bill</label>
					<input onChange={(e)=>setPrice(e.target.value)} value={price} className='cash-icon' type='number'></input>
				
				<div>
					
					<p className='select-tip'>Select Tip %</p>
				</div>
				<div className='tips'>
					<div onClick={handleClick} style={{ backgroundColor: tipValue === '0.05' ? '#9FE8DF'  : '',color: tipValue === '0.05' ? '#265253' : '' }} className='tip' value='0.05'>5%</div>
					<div onClick={handleClick} style={{ backgroundColor: tipValue === '0.1' ? '#9FE8DF'  : '',color: tipValue === '0.1' ? '#265253' : '' }} className='tip' value='0.1'>10%</div>
					<div onClick={handleClick} style={{ backgroundColor: tipValue === '0.15' ? '#9FE8DF'  : '',color: tipValue === '0.15' ? '#265253' : '' }} className='tip' value='0.15'>15%</div>
					<div onClick={handleClick} style={{ backgroundColor: tipValue === '0.25' ? '#9FE8DF'  : '',color: tipValue === '0.25' ? '#265253' : '' }} className='tip' value='0.25'>25%</div>
					<div onClick={handleClick} style={{ backgroundColor: tipValue === '0.5' ? '#9FE8DF'  : '',color: tipValue === '0.5' ? '#265253' : '' }} className='tip' value='0.5'>50%</div>
					<div onClick={handleClick} className='custom'>
						<input onChange={(e)=>{
							setTip(e.target.value / 100)
							setCustom(e.target.value)}} value={custom} className='custom-tip' type='number' placeholder='Custom'></input>
					</div>
				</div>
				<div className='labelgroup'>
					<label type='text'>Number of People</label>
					<p className='error' style={{display: error ? 'block' : 'none'}}>Can't be zero</p>
				</div>
				<input onChange={(e)=> {
					setPeople(e.target.value)
					setError(false)
				}} value={people} type='number' className='input-people'></input>
				</div>
				<div className='partTwo'>
					<div className='top'>
						<div className='tip-amount'>
							<p className='text'>Tip Amount</p>
							<p className='person'>/ person</p>
						</div>
						<div className='amount'>${tipAmount !== '' ? tipAmount.toFixed(2) : '0.00'}</div>
					</div>
					<div className='bottom'>
						<div className='total'>
							<p className='text'>Total</p>
							<p className='person'>/ person</p>
						</div>
						<div className='amount'>${total !== '' ? total.toFixed(2) : '0.00'}</div>
					</div>
					<div className='btn-reset'>

					<button onClick={resetBtn} className='reset'>RESET</button>
					</div>
				</div>
			</div>
		
	)
}

export default TipForm
