import React from 'react'

const Header = ({tours, onRefresh}) => {
  return (
    <div>
        {tours.length > 0 ?
        <div>
            <h1>Our Tours</h1>
            <div className='line'></div>
        </div>: 
        <div>
            <h1>No Tours Left</h1>
            <div className='btn'>
                <button className='refresh' onClick={onRefresh}>Refresh</button>
            </div>
        </div>}
    </div>
  )
}

export default Header

