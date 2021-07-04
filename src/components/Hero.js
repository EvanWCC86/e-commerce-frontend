import React, {useState, useRef, useEffect} from 'react'
import {heroData} from '../data/heroData'
import { AiOutlineArrowLeft, AiOutlineArrowRight  } from 'react-icons/ai';
import {Link} from 'react-router-dom'
const Hero = () => {
    const [sliderIndex, setSliderIndex] = useState(0)
    const currentImage = heroData[sliderIndex]
    console.log(currentImage)
    // const timeout = useRef(null)
    const next = () => {
        
        if(sliderIndex === heroData.length - 1) {
            setSliderIndex(0)
        } else setSliderIndex(sliderIndex + 1)
        
    }
    const previous = () => {
       
        if(sliderIndex === 0) {
            setSliderIndex(heroData.length - 1)
        } else setSliderIndex(sliderIndex - 1)
    }

    // useEffect(() => {
    
    //         const next = () => {
    //             setSliderIndex(sliderIndex === heroData.length - 1 ? 0 : sliderIndex + 1 );
    //         }
    //         timeout.current = setTimeout(next, 2000);

    //         return function () {
    //             if(timeout.current) {
    //                 clearTimeout(timeout.current)
    //             }
    //         }
        
    // },[sliderIndex])
    

    return (
        <div className="hero">
            <div className="hero_container container">
                
                <div className="hero_content">
                    <h1>{currentImage.title}</h1>
                    <p>{currentImage.dec}</p>
                    <Link to={`/${currentImage.category}`}>
                        <button>{currentImage.button}</button>
                    </Link>
                </div>
                <div className="hero_image_container">
                    <img src={currentImage.image} alt={currentImage.title} />
                </div>
                <div className="hero_dots">
                {Array.from({length:heroData.length}).map((item, index) => (
                    <span className={`dot ${sliderIndex === index ? "dot_active" : ""}`}>

                    </span>
                ))}
                </div>
            </div>
            <div className="hero_arrow">
                <span onClick={previous}><AiOutlineArrowLeft /></span>
                <span onClick={next}><AiOutlineArrowRight /></span>
            </div>
        </div>
    )
}

export default Hero
