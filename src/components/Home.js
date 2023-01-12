import React from 'react'
import RowContainer from './RowContainer/RowContainer'
import Keyboard from './Keyboard/Keyboard'

const Home = () => {
  return (
    <div >
        <h1 className="font-extrabold text-5xl m-4">WORDLE</h1>
        <RowContainer/>
        <Keyboard />
    </div>
  )
}

export default Home