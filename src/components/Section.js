import React from 'react'

const Section = ({tours, onDelete}) => {
  return (
    <div>
      {tours.map((tour) => {
        const {id, img, description, price, paragraph} = tour;
        return (
          <div key={id} className="section">
            <img src={require(`../tour-images/${img}`)} className="image"/>
            <div className='main'>
              <div className='desc-price'>
                <h5>{description}</h5>
                <div className='price'>{price}</div>
              </div>
              <p>{paragraph}</p>
              <div className='btn'>
                <button onClick={(id) => onDelete(tour.id)}>Not Interested</button>
              </div>
            </div>
          </div>
        )
      }
      )}
    </div>
  )
}

export default Section
