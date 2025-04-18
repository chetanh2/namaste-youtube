import React from 'react'
import Button from './Button'

const List = ["All","Gaming","React","Anime","Live","Food","Music","Movies"]
const ButtonList = () => {
  return (
    <div className='flex '>
      {/* <Button name="All"/>
      <Button name="Gaming"/>
      <Button name="React"/>
      <Button name="Anime"/>
      <Button name="Live"/>
      <Button name="Food"/>
      <Button name="Music"/>
      <Button name="Movies"/> */}
      {List.map((btn)=><Button name={btn}/>)}
    </div>
  )
}

export default ButtonList