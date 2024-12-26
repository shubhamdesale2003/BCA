import React from 'react'
import './Route.scss'
import img1c from '../Assets/PR-IMG/cpp/cns.png'
import img2c from '../Assets/PR-IMG/cpp/Enc.png'
import img3c from '../Assets/PR-IMG/cpp/ff.png'
import img4c from '../Assets/PR-IMG/cpp/fo.png'
import img4cs from '../Assets/PR-IMG/cpp/mi.png'
import img5c from '../Assets/PR-IMG/cpp/oover.png'
import img6c from '../Assets/PR-IMG/cpp/pr1.png'
import img7c from '../Assets/PR-IMG/cpp/si.png'

const Cpp = () => {
  return (
    
    <div className="image-container">
        <div className="java-img">
            <img src={img1c} />
            <img src={img2c} />
            <img src={img3c} />
            <img src={img4c} />
            <img src={img5c} />
            <img src={img6c} />
        </div>
    </div>
  )
}

export default Cpp