import React from 'react';
import blog1 from "../../assets/images/blog-1.jpg";
import blog2 from "../../assets/images/blog-2.jpg";
import blog3 from "../../assets/images/blog-3.jpg";
import Image from 'next/image';
import { Singleblog } from '.';

const blogdata = [
  {
    image: blog1,
  },
  {
    image: blog2,
  },
  {
    image: blog3,
  },
]

const Blogs = () => {
  return (
    <div className="container">
      <div className="text-center mb-5">
        <h6 className="main-title">Our Blog</h6>
        <h1 className='sub-title'>Latest From Our Blog</h1>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {blogdata.map((item, i) => (
          <Singleblog item={item} key={i} />
        ))}
      </div>

    </div>
  )
}

export default Blogs