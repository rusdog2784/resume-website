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
            current: 0,
            slides: [
                {
                    index: -1,
                    title: "Hobbies and Interests",
                    point: {
                        x: -1,
                        y: 0
                    }
                },
                {
                    index: 0,
                    title: "Home"
                    ,
                    point: {
                        x: 0,
                        y: 0
                    }
                },
                {
                    index: 1,
                    title: "Work Experience",
                    point: {
                        x: 1,
                        y: 0
                    }
                },
                // {
                //     index: 2,
                //     title: "Skills",
                //     point: {
                //         x: 0,
                //         y: -1
                //     }
                // }
            ],
            topSlides: [
                {
                    index: -1,
                    title: "Hobbies and Interests",
                    point: {
                        x: -1,
                        y: 0
                    }
                },
                {
                    index: 0,
                    title: "Home"
                    ,
                    point: {
                        x: 0,
                        y: 0
                    }
                },
                {
                    index: 1,
                    title: "Work Experience",
                    point: {
                        x: 1,
                        y: 0
                    }
                }
            ],
            bottomSlides: [
                
            ]
        };
        this.handlePreviousClick = this.handlePreviousClick.bind(this);
        this.handleNextClick = this.handleNextClick.bind(this);
        this.handleSlideClick = this.handleSlideClick.bind(this);
    }

    handlePreviousClick() {
        const previous = this.state.current - 1

        this.setState({
            current: previous
        })
    }

    handleNextClick() {
        const next = this.state.current + 1;

        this.setState({
            current: next
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
        
        var x = 0;
        var y = 0;
        slides.map(slide => {
            if (current === slide.index) {
                x = slide.point.x;
                y = slide.point.y;
            }
        });

        
        // const translateX = (current * (100 / 3) * -1);


        const translateX = (current * (100 / 3) * -1);
        // console.log("Current: " + current);
        // console.log("translateX: " + translateX);
        const wrapperTransform = {
            'transform': `translateX(${translateX}%)`
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

                {/* <div className="slider__controls">
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
                </div> */}
            </div>
        )
    }

}

export default Slides;