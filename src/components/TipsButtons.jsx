import React from 'react'

function TipsButtons({setTip, tip, custom, setCustom}) {
    const tips = [0.05,0.1,0.15,0.25,0.5]

    const handleClick = (e) => {
        setTip(e.target.getAttribute('value'))
        setCustom('Custom')   
      };
     
  return (
    <>
    
    {tips.map((number) => {
        return <div style={{ backgroundColor: tip ===  number.toString()? '#9FE8DF'  : '',color: tip === number.toString() ? '#265253' : '' }} className='tip'onClick={handleClick} key={number} value={number}>{number*100}%</div>
      })}
      <div onClick={handleClick} className='custom'>
						<input onChange={(e)=>{
							setTip(e.target.value / 100)
							setCustom(e.target.value)}} value={custom} className='custom-tip' type='number' placeholder='Custom'></input>
					</div>
    </>

  )
}

export default TipsButtons