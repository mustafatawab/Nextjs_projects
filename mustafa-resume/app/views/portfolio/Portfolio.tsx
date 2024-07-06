import Project from '@/app/components/project'
import React from 'react'
import ecommerce from '../../assets/images/porfolio/ecommerce.png'
import msptechstack from '../../assets/images/porfolio/msptechstack.png'
import panaverse from '../../assets/images/porfolio/panaverse.png'
import porfolioLandinpage from '../../assets/images/porfolio/portfolioLandingpage.png'

const Porfolio = () => {
  return (
    <main id='portfolio' className='py-20'>
      <h1 className='text-white text-5xl font-bold text-center'>A small selection of <span className='text-purple-300'>recent projects</span></h1>
      <div className='grid grid-cols-1 lg:grid-cols-2 py-5 gap-10'>
        <Project image={ecommerce} title='Ecommerce Store' description='An ecommerce store with all functionalities. It is been developed with Nexjts, Tailwind css , Vercel Database and Sanity ' sourceCode='https://github.com/mustafatawab/ecommerce_hackathon' live='https://ecommerce-hackathon-two.vercel.app/' />
        <Project image={panaverse} title='Panaverse DAO - Landing Page' description='Just a landing page desing for the panaverse company with Tailwind css and Nexjts' sourceCode='https://github.com/mustafatawab/ecommerce_hackathon' live='https://panaverse-tailwind-blush.vercel.app/' />
        <Project image={msptechstack} title='MSP Tech Stack' description='MSP Tech Stack is full stack web application which is a B2B Marketplace and is developed using Nextjs, MongoDB , Tailwind CSS , Shadcn UI , and Vercel' sourceCode='https://github.com/mustafatawab/MSPTech_Stack' live='https://msp-tech-stack.vercel.app/' />
        <Project image={porfolioLandinpage} title='Developer Porfolio' description='Developer porfolio landing page which is a nice design and designed using Tailwind CSS' sourceCode='https://github.com/mustafatawab/MSPTech_Stack' live='https://ezitech.vercel.app/' />
      </div>
    </main>
  )
}

export default Porfolio