import React from 'react'
import { Cards } from '../../../components'
import { useSelector } from 'react-redux'

const GirlSho0 = () => {
  const cards = useSelector(state => state.store.Storecards)
  return (
    <>
      <Cards cards={cards.slice(18)} />
    </>
  )
}

export default GirlSho0