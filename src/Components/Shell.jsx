import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Routes.scss'
import IMG1 from '../Assets/PR-IMG/shell/fibo.png'
import IMG2 from '../Assets/PR-IMG/shell/time date.png'
import IMG3 from '../Assets/PR-IMG/shell/login or not.png'
import IMG4 from '../Assets/PR-IMG/shell/factorial.png'
import IMG5 from '../Assets/PR-IMG/shell/divisible.png'
import IMG6 from '../Assets/PR-IMG/shell/prime.png'
import IMG7 from '../Assets/PR-IMG/shell/palindrome.png'
import IMG8 from '../Assets/PR-IMG/shell/armstrong.png'
import IMG9 from '../Assets/PR-IMG/shell/mark.png'

import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";

function AsNavFor() {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    let sliderRef1 = useRef(null);
    let sliderRef2 = useRef(null);

    useEffect(() => {
        setNav1(sliderRef1);
        setNav2(sliderRef2);
    }, []);
    return (
        <div className="slider-container">
            {/* <h2>Slider Syncing (AsNavFor)</h2>
      <h4>First Slider</h4> */}
            <Slider asNavFor={nav2} ref={slider => (sliderRef1 = slider)}>
                <div className="main-img">
                    <div className="img-box">
                        <img src={IMG1} />
                    </div>
                </div>
                <div className="main-img">
                <div className="img-box">
                        <img src={IMG2} />
                    </div>
                </div>
                <div className="main-img">
                <div className="img-box">
                        <img src={IMG3} />
                    </div>
                </div>
                <div className="main-img">
                <div className="img-box">
                        <img src={IMG4} />
                    </div>
                </div>
                <div className="main-img">
                <div className="img-box">
                        <img src={IMG5} />
                    </div>
                </div>
                <div className="main-img">
                <div className="img-box">
                        <img src={IMG6} />
                    </div>
                </div>
                <div className="main-img">
                <div className="img-box">
                        <img src={IMG7} />
                    </div>
                </div>
                <div className="main-img">
                <div className="img-box">
                        <img src={IMG8} />
                    </div>
                </div>
                <div className="main-img">
                <div className="img-box">
                        <img src={IMG9} />
                    </div>
                </div>
            </Slider>
            <h4>Second Slider</h4>
            <Slider
                asNavFor={nav1}
                ref={slider => (sliderRef2 = slider)}
                slidesToShow={3}
                swipeToSlide={true}
                focusOnSelect={true}
            >
                <div>
                    <h3>1</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
                <div>
                    <h3>6</h3>
                </div>
                <div>
                    <h3>7</h3>
                </div>
                <div>
                    <h3>8</h3>
                </div>
                <div>
                    <h3>9</h3>
                </div>
            </Slider>
        </div>
    );
}

export default AsNavFor;
