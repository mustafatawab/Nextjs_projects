import React from 'react'

const Wrapper = ({children} : {children : React.ReactNode}) => {
  return (
    <div className='px-10 md:px-20 lg:px-44'>{children}</div>
  )
}

export default Wrapper