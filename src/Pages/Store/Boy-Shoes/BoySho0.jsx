import React from 'react'
import { Cards } from '../../../components'
import { useSelector } from 'react-redux'

const BoySho0 = () => {
  const cards = useSelector(state => state.store.Storecards)
  return (
    <>
      <Cards cards={cards.slice(0,17)} />
    </>
  )
}

export default BoySho0