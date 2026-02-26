import React from 'react'

const TextError = (props) => {
  console.log(props)
  return (
    <div className='text-red-700 text-sm'>
      {props.children}
    </div>
  )
}

export default TextError