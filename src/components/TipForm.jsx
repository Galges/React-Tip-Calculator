

import './TipFrom.css'

function TipForm() {

	return (
		<div className='container'>
		
				<div className='firstPart'>
					<label type='number'>Bill</label>
					<input className='cash-icon' type='number'></input>
				
				<div>
					<p className='select-tip'>Select Tip %</p>
				</div>
				<div className='tips'>
					<div className='tip' value='0.05'>5%</div>
					<div className='tip' value='0.1'>10%</div>
					<div className='tip' value='0.15'>15%</div>
					<div className='tip' value='0.25'>25%</div>
					<div className='tip' value='0.35'>35%</div>
					<div className='custom'>
						<input  className='custom-tip' type='number' placeholder='Custom'></input>
					</div>
				</div>
				<div className='labelgroup'>
					<label type='text'>Number of People</label>
					<p className='error'> Can't be zero</p>
				</div>
				<input type='number' className='input-people'></input>
				</div>
				<div className='partTwo'>
					<div className='top'>
						<div className='tip-amount'>
							<p className='text'>Tip Amount</p>
							<p className='person'>/ person</p>
						</div>
						<div className='amount'>$ 0.00</div>
					</div>
					<div className='bottom'>
						<div className='total'>
							<p className='text'>Total</p>
							<p className='person'>/ person</p>
						</div>
						<div className='amount'>$ 0.00</div>
					</div>
					<div className='btn-reset'>

					<button className='reset'>RESET</button>
					</div>
				</div>
			</div>
		
	)
}

export default TipForm
