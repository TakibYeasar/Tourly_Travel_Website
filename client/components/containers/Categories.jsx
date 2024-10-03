import React from 'react'
import { FaAngleRight } from 'react-icons/fa'

const categories = [
    {
        title: "Web Design",
        item: "150",
    },
    {
        title: "Web Development",
        item: "131",
    },
    {
        title: "Online Marketing",
        item: "78",
    },
    {
        title: "Keyword Research",
        item: "56",
    },
    {
        title: "Email Marketing",
        item: "98",
    },
]

const Categories = () => {
  return (
      <div className='container'>
          <div className="mb-5">
              <h4 className="uppercase mb-4" >Categories</h4>
              <div className="bg-white">
                  <ul className="list-inline">

                      {categories.map((item, i) => (
                          <li className="flex items-center" key={i}>
                              <a className="text-font-color" href="#"><FaAngleRight className='icon' />{item?.title}</a>
                              <span className="">{item?.item}</span>
                          </li>
                      ))}

                  </ul>
              </div>
          </div>
    </div>
  )
}

export default Categories