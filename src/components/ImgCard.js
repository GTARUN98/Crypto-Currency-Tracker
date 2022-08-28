import React from 'react'

const ImgCard = (props) => {
  return (
    <>
      <img src={props.url} alt={props.name} className='img'/>
      <p style={{"color":"gold","fontWeight":"bold"}}>{props.name}</p>
      <p>RANK : {props.rank}</p>
      <p>PRICE IN $ : {props.price}</p>
      <p>Market Cap : {props.marketCap}</p>
    </>
  )
}

export default ImgCard
