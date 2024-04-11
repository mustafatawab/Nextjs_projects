import React from 'react'
import { categories } from '@/utility/categories'
import Link from 'next/link'

const Categories = () => {
    return (
        <section className='bg-[#FCFBF3] px-20 py-5'>
            <h1 className='font-bold text-2xl '>Explore Categories</h1>
            <div className='grid grid-cols-4 grid-rows-2 gap-5 py-5'>
                {categories.map((category) => <Link key={category.id} href={`/categories/${category.path}`}>
                    <div className='bg-white rounded-md border  p-5 hover:mt-2 duration-300 hover:shadow-xl hover:bg-gray-100' >
                        <h2>{category.title}</h2>
                    </div>

                </Link>
                )}
            </div>
        </section>
    )
}

export default Categories