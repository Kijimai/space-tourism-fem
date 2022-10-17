import React from "react"
import { Link } from "react-router-dom"
import logo from "../../assets/shared/logo.svg"
const Navigator = () => {
  return (
    <header className="primary-header flex">
      <div>
        <img src={logo} alt="space tourism logo" className="logo" />
      </div>
      {/* <nav>
        <ul className="primary-navigation underline-indicators flex">
          <li>
            <Link
              className="fs-sans-cond fs-300 uppercase text-white letter-spacing-1"
              to="/"
            >
              <span>00</span> Home
            </Link>
          </li>
          <li>
            <Link
              className="fs-sans-cond fs-300 uppercase text-white letter-spacing-1"
              to="/destination"
            >
              <span>01</span> Destination
            </Link>
          </li>
          <li>
            <Link
              className="fs-sans-cond fs-300 uppercase text-white letter-spacing-1"
              to="/crew"
            >
              <span>02</span> Crew
            </Link>
          </li>
          <li>
            <Link
              className="fs-sans-cond fs-300 uppercase text-white letter-spacing-1"
              to="/technology"
            >
              <span>03</span> Technology
            </Link>
          </li>
        </ul>
      </nav> */}
    </header>
  )
}

export default Navigator
