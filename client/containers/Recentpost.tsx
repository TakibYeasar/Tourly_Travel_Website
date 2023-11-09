import React from 'react'
import Image from 'next/image';
import blog1 from "../../assets/images/blog-1.jpg";
import blog2 from "../../assets/images/blog-2.jpg";
import blog3 from "../../assets/images/blog-3.jpg";

const recentpost = [
    {
        image: blog1,
        title: "Diam lorem dolore justo eirmod lorem dolore",
        date: "Jan 01, 2050",
    },
    {
        image: blog2,
        title: "Diam lorem dolore justo eirmod lorem dolore",
        date: "Jan 01, 2050",
    },
    {
        image: blog3,
        title: "Diam lorem dolore justo eirmod lorem dolore",
        date: "Jan 01, 2050",
    },
]

const Recentpost = () => {
  return (
      <div className='container'>
          <div className="mb-5">
              <h4 className="uppercase mb-4">Recent Post</h4>

              {recentpost.map((item, i) => (
                  <a className="flex items-center" href="" key={i}>
                      <Image className="" src={item?.image} alt="" />
                      <div className="pl-3">
                          <h6 className="m-1">{item?.title}</h6>
                          <small>{item?.date}</small>
                      </div>
                  </a>
              ))}

          </div>
    </div>
  )
}

export default Recentpost