import React from 'react'

const Button = ({name}) => {

    
  return (
    <div>
        <button className='py-1 m-2 px-4 bg-gray-200 rounded-lg'>{name}</button>
    </div>
  )
}

export default Button