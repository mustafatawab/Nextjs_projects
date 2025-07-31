import React from 'react'

const Wrapper = ({ children }: any) => {
  return (

    <>
      <div className='max-w-7xl m-auto p-10'>
        {children}
      </div>
    </>
  )
}

export default Wrapper