import React from 'react'
import { useSelector } from 'react-redux'

const Cards = () => {
   const cards =  useSelector(state => state.store.Storecards)
  return (
    <div>Cards</div>
  )
}

export default Cards