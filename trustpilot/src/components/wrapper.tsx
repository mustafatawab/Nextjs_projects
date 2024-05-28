import React from 'react'

const Wrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className='px-40 py-20'>
            {children}
        </main>
    )
}

export default Wrapper