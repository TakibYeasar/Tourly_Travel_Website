import React from 'react';
import Image from 'next/image';

const Singleblog = (item) => {
  return (
      <div className="">
          <div className="transition duration-500 m-4 relative">
              <div className="relative">
                  <Image className='h-[50vh] w-[30vw]' src={item?.image} alt="" />
                  <div className="absolute bg-primary-color top-0 left-0 p=[0.5rem, 1rem] text-font-color">
                      <h6 className="">01</h6>
                      <small className="">Jan</small>
                  </div>
              </div>
              <div className="p-2 bg-card-bg">
                  <div className="flex">
                      <a className='no-underline text-base font-medium text-primary-color uppercase' href="">Admin</a>
                      <span className="px-2 no-underline text-base font-medium text-primary-color uppercase">|</span>
                      <a className='no-underline text-base font-medium text-primary-color uppercase' href="">Tours & Travel</a>
                  </div>
                  <a className='no-underline text-base font-medium text-primary-color uppercase' href="">Dolor justo sea kasd lorem clita justo diam amet</a>
              </div>
          </div>
      </div>
  )
}

export default Singleblog