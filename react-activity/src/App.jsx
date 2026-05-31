import React from 'react'
import MsgBox from './components/MsgBox'
import ProductTab from './components/ProductTab'

const App = () => {
  return (
    <>
      <MsgBox username="Sahib" textColor="blue" />
      <ProductTab />
    </>
  )
}

export default App
