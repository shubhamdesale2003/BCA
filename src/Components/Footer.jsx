import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import { MdDeveloperMode } from "react-icons/md";
import { CgNotes } from "react-icons/cg";
import { MdAssignment } from "react-icons/md";

const Footer = () => {
    return (
        <div className="row">
            <div className="child">
                <FaHome className='icon'/>
                <Link to="/">Home</Link>
            </div>
            <div className="child">
                <MdAssignment className='icon'/>

                <Link to="/assignments">Assignments</Link>
            </div>
            <div className="child">
                <CgNotes className='icon' />
                <Link to="/notes">Notes</Link>
            </div>
            <div className="child">
                <MdDeveloperMode className='icon' />
                <Link to="/developer">Developer</Link>
            </div>
        </div>
    )
}

export default Footer