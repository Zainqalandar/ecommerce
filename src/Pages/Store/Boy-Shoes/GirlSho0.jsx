import React from 'react'
import { Cards } from '../../../components'
import { useSelector } from 'react-redux'

const GirlSho0 = () => {
  const cards = useSelector(state => state.store.Storecards)
  const fltrcard = cards.filter((cards) => cards.category === "women's shoes")
  return (
    <>
      <Cards cards={fltrcard} />
    </>
  )
}

export default GirlSho0