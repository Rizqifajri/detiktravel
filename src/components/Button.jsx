import React from 'react'

const Button = ({onClick, title}) => {
  return (
    <div>
      <button onClick={onClick} className='px-10 py-2 bg-yellow-500 hover:scale-105 hover:bg-yellow-400 shadow-yellow-500 transition-all rounded-full text-white font-semibold text-[14px]'>{title}</button>
    </div>
  )
}

export default Button
