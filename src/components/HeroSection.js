import React from 'react'
import {Button} from './Button'
import {Link} from 'react-router-dom'
import './HeroSection.css'

// the props that comes in and is called in its specific locations
function HeroSection({
    lightBg, topLine, lightText, lightTextDesc, headline, description, 
    buttonLabel, img, alt, imgStart
}) {
    return (
        <>
            <div 
            className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}
            >
                <div className="container">

                    <div className="row home__hero-row"
                    // study why this moves the images to opposite sides, more like get a deeper understanding
                    style={{display: 'flex', flexDirection: imgStart === 'start' ?
                    'row-reverse' : 'row'}}
                    >
                        <div className="col">
                            <div className="home__hero-text-wrapper">
                                <div className="top-line">{topLine}</div>
                                <h1 className={lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                                <p className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>{description}</p>
                                <Link to="/sign-up">
                                    <Button buttonSize='btn--wide' buttonColor='blue'>{buttonLabel}</Button>
                                </Link>
                            </div>
                        </div>
                        <div className="col">
                            <div className="home__hero-img-wrapper">
                                <img src={img} alt={alt} className="home__hero-img"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection
