import React from 'react'
import './Notes.scss'
import Banners from '../Assets/bg3.jpeg'
import Cpp from '../Assets/cpp/4-1-768x1089.webp'
import Java from '../Assets/java/2-1-768x1089.webp'
import Dsa from '../Assets/dsa/Complete-PYhton-Handwritten-Notes-17-1-768x1089.webp'
import Dbms from '../Assets/dbms/11-768x1089.webp'
import Js from '../Assets/js/9-768x1089.webp'
const Notes = () => {
  return (
    <div className="main">
        <div className="banner">
            <img src={Banners}/>
        </div>
        <div className="notes">
            <div className="box">
                <div className="innerBox">
                <img src={Java} />
                <a href="../Assets/java/JAVA HANDWRITTEN NOTES.pdf" download="Java PDF">Download</a>
                </div>
            </div>
            <div className="box">
            <div className="innerBox">
                <img src={Cpp} />
                <a href="../Assets/cpp/C++ Complete Handwritten Notes.pdf" download="CPP PDF">Download</a>
                </div>
            </div>
            <div className="box">
            <div className="innerBox">
                <img src={Dsa} />
                <a href="../Assets/dsa/DSA Handwritten Notes (1).pdff" download="DSA PDF">Download</a>
                </div>
            </div>
            <div className="box">
            <div className="innerBox">
                <img src={Dbms} />
                <a href="../Assets/dbms/DBMS Notes - TutorialsDuniya.pdf" download="DBMS PDF">Download</a>
                </div>

            </div>
            <div className="box">
            <div className="innerBox">
                <img src={Js} />
                <a href="../Assets/js/Java Hand Written notes.pdf" download="JavaScript PDF">Download</a>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Notes
