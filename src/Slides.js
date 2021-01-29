import React, { Component } from "react";
import Slide from "./Slide";
import "./test.scss";


const SliderControl = ({ type, title, handleClick }) => {
    return (
        <button className={`btn btn--${type}`} title={title} onClick={handleClick}>
            <svg className="icon" viewBox="0 0 24 24">
                <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
            </svg>
        </button>
    )
}


class Slides extends Component {
    constructor(props) {
        super(props)

        this.state = { 
            current: 1,
            slides: [
                {
                    index: 0,
                    title: "Hobbies and Interests",
                    headline: 'New Fashion Apparel',
                    button: 'Shop now',
                    src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/fashion.jpg'
                },
                {
                    index: 1,
                    title: "Home",
                    headline: 'In The Wilderness',
                    button: 'Book travel',
                    src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/forest.jpg'
                },
                {
                    index: 2,
                    title: "Work Experience",
                    headline: 'For Your Current Mood',
                    button: 'Listen',
                    src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/guitar.jpg'
                },
                {
                    index: 3,
                    title: "Skills",
                    headline: 'Focus On The Writing',
                    button: 'Get Focused',
                    src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/typewriter.jpg'
                }
            ]
        };
        this.handlePreviousClick = this.handlePreviousClick.bind(this);
        this.handleNextClick = this.handleNextClick.bind(this);
        this.handleSlideClick = this.handleSlideClick.bind(this);
    }

    handlePreviousClick() {
        const previous = this.state.current - 1

        this.setState({ 
            current: (previous < 0) ? this.state.slides.length - 1 : previous
        })
    }

    handleNextClick() {
        const next = this.state.current + 1;

        this.setState({ 
            current: (next === this.state.slides.length) ? 0 : next
        })
    }

    handleSlideClick(index) {
        if (this.state.current !== index) {
            this.setState({
                current: index
            })
        }
    }

    render() {
        const { current, slides } = this.state;
        
        const wrapperTransform = {
            'transform': `translateX(-${current * (100 / slides.length)}%)`
        }

        return (
            <div className="slider">
                <ul className="slider__wrapper" style={wrapperTransform}>

                    {slides.map(slide => {
                        return (
                            <Slide
                                key={slide.index}
                                slide={slide}
                                current={current}
                                handleSlideClick={this.handleSlideClick}
                            />
                        )
                    })}

                </ul>

                <div className="slider__controls">
                    <SliderControl 
                        type="previous"
                        title="Go to previous slide"
                        handleClick={this.handlePreviousClick}
                    />

                    <SliderControl 
                        type="next"
                        title="Go to next slide"
                        handleClick={this.handleNextClick}
                    />
                </div>
            </div>
        )
    }

}

export default Slides;