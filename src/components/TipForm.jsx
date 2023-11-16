import React, { useState } from 'react';
import './TipForm.css'
import TipCalculator from './TipCalculator';

function TipForm() {
  const [price, setPrice] = useState('');
  const [tip, setTip] = useState('');
  const [people, setPeople] = useState('');
  const [custom, setCustom] = useState('');
  const [tipValue, setTipValue] = useState('')
  const [resetCalculator, setResetCalculator] = useState('')

  const handleClick = (e) => {
    setTip(e.target.getAttribute('value'));
	setTipValue(e.target.getAttribute('value'))
    setCustom('Custom');
  };

  const resetBtn = () => {
    setPrice('');
    setTipValue('');
    setTip('');
    setPeople('');
    setCustom('Custom');
    if (resetCalculator) {
      resetCalculator(); 
    }
  };

  return (
    <div className='container'>
      <div className='firstPart'>
        <label type='number'>Bill</label>
        <input onChange={(e) => setPrice(e.target.value)} value={price} className='cash-icon' type='number'></input>

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
          <label  type='text'>Number of People</label>
          <p className='error'  style={{display: people !== '0' ? 'none' : 'block'}}>
            Can't be zero
          </p>
        </div>
        <input style={{borderColor: people !== '0' ? '' : 'red' }}
          onChange={(e) => {
            setPeople(e.target.value);
          }}
          value={people}
          type='number'
          className='input-people'
        ></input>
      </div>
	  <div className='partTwo'>
      <TipCalculator price={price} tip={tip} people={people} custom={custom} setResetCalculator={setResetCalculator}  />
      
      <div className='btn-reset'>
        <button onClick={resetBtn} className='reset'>
          RESET
        </button>
      </div>
	  </div>
    </div>
  );
}

export default TipForm;