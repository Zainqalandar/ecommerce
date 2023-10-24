import React from 'react'
import { Cards } from '../../../components'
import { useSelector } from 'react-redux'

const GirlShirt = () => {
    const cards = useSelector(state => state.store.Storecards)
    const fltrcard = cards.filter((cards) => cards.category === "women's shirts")
    return (
       <>
       <Cards cards={fltrcard} />
       </>
    )
}

export default GirlShirt