import React from 'react'
import { Cards } from '../../../components'
import { useSelector } from 'react-redux'

const BoySho0 = () => {
  const cards = useSelector(state => state.store.Storecards)
  const fltrcard = cards.filter((cards) => cards.category === "men's shoes")
  return (
    <>
      <Cards cards={fltrcard} />
    </>
  )
}

export default BoySho0