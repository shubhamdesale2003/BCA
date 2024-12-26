import React from 'react'
import './Home.scss'
import { FaComputer } from "react-icons/fa6";
import { SiBookstack } from "react-icons/si";
const Home = () => {
    return (
        <div className="hero">
            <h1>BCA HUB: Learn, Explore, Achieve</h1>
            <h5>Learn, Explore, Achieve</h5>
            <div className="container">
                <div className="box">
                    {/* <h2> 📚</h2> */}
                    <SiBookstack className='icon'/>

                    <h4>Handwritten Notes</h4>
                    <p>Clear and easy-to-read material to help you exel in your studies.</p>
                </div>
                <div className="box">
                    {/* <h2>🖥️</h2> */}
                    <FaComputer className='icon'/>
                    <h4>Practical Assignments</h4>
                    <p>Ready-to-use assignments designed to enhanced your practical learning experience.</p>
                </div>
            </div>
        </div>
    )
}

export default Home