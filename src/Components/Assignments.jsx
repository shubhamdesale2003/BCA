import React from 'react'
import "./Assignment.scss"
import Banner from '../Assets/bg2.jpeg'
import { Link } from 'react-router-dom'
const Assignments = () => {
  return (
    <div className="Container">
      <div className="banner">
        <img src={Banner} alt="Banner-img" />
      </div>
      <div className="routes">
        <Link to="/assignments/html">HTML</Link>
        <Link to="/assignments/cpp">C++</Link>
        <Link to="/assignments/java">JAVA</Link>
        <Link to="/assignments/shell">SHELL</Link>
        <Link to="/assignments/dsa">DSA</Link>
      </div>
    </div>
  )
}

export default Assignments