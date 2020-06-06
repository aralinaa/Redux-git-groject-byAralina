import React from 'react'
import './footer.scss'

const Footer = () => {
  return (
    <div className="flex items-center justify-between flex-wrap footer-cl p-10 font-serif">
      <ul className="flex">
        <li className="mr-6">
          <a
            className="no-underline hover:underline text-white text-lg"
            href="https://github.com/about"
          >
            About
          </a>
        </li>
        <li className="mr-6">
          <a
            className="no-underline hover:underline text-white text-lg"
            href="https://github.blog/"
          >
            Blog
          </a>
        </li>
        <li className="mr-6">
          <a
            className="no-underline hover:underline text-white text-lg"
            href="https://github.myshopify.com/"
          >
            Shop
          </a>
        </li>
        <li className="mr-6">
          <a
            className="no-underline hover:underline text-white text-lg"
            href="https://support.github.com/contact"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  )
}
export default Footer
