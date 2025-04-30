import React from 'react'
import Comment from './Comment'

const CommentsContainer = () => {
  return (
    <div>
      <h2 className='text-2xl font-bold'>Comments</h2>
      <div className="">
        <Comment/>
      </div>
    </div>
  )
}

export default CommentsContainer