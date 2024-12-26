import React from 'react'
import './Route.scss'
import img1d from '../Assets/PR-IMG/dsimg/bubble.png'
import img2d from '../Assets/PR-IMG/dsimg/quick.png'
import img3d from '../Assets/PR-IMG/dsimg/selection.png'
import img4d from '../Assets/PR-IMG/dsimg/inserImg.png'
import img5d from '../Assets/PR-IMG/dsimg/linear2.png'
import img6d from '../Assets/PR-IMG/dsimg/Binary.png'


const Cpp = () => {
  return (
    
    <div className="image-container">
        <div className="java-img">
            <img src={img1d} />
            <img src={img2d} />
            <img src={img3d} />
            <img src={img4d} />
            <img src={img5d} />
            <img src={img6d} />
        </div>
    </div>
  )
}

export default Cpp