import React from 'react'
import AboutUSImg from '../../assets/image/png/about-us.png'

const AboutUs = () => {
  return (
    <div className='bg-[#0C0B0B] min-h-screen flex items-center justify-center'>
      <div className="container mx-auto max-lg:px-4">
        <div className="flex flex-wrap w-full">
          <div className="flex lg:w-1/2 w-full flex-col items-start justify-center">
            <h3 className='flex text-5xl font-semibold max-w-[660px] text-white'>
              Cursus ligula habitant sed integer.
            </h3>
            <p className='text-[#B6B6B6] text-lg pt-6 pb-8 max-w-[660px] '>Urna, dictum volutpat augue tortor. Fermentum vulputate convallis viverra facilisis. Aliquam porttitor sem rhoncus rhoncus, quis. Arcu, ut enim eget pellentesque neque. Nibh pellentesque lobortis etiam sed. Cursus donec porttitor fames tellus.</p>
            <button className='py-[7px] px-[23px] font-semibold text-lg bg-[#F98F01] rounded-lg'>Learn more</button>
          </div>
          <div className="flex lg:w-1/2 w-full">
            <img src={AboutUSImg} alt="img"/>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AboutUs