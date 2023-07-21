import React from 'react'

const Jumbutron = ({ children }) => {
  return (
    <div className="bg-blue-600 flex items-center py-10">
      <div className='max-w-md mx-auto w-full'>
        <h1 className='text-white text-center text-2xl font-bold mb-10'>Find Images</h1>
        {children}
      </div>
    </div>
  )
}

export default Jumbutron