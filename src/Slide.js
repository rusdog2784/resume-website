import React, { Component } from "react";


class Slide extends Component {
    constructor(props) {
        super(props)

        this.handleSlideClick = this.handleSlideClick.bind(this)
        this.imageLoaded = this.imageLoaded.bind(this)
        this.slide = React.createRef()
    }

    handleSlideClick(event) {
        this.props.handleSlideClick(this.props.slide.index)
    }

    imageLoaded(event) {
        event.target.style.opacity = 1
    }

    render() {
        const { index, title } = this.props.slide;
        const current = this.props.current;
        let classNames = "slide";

        if (current === index) classNames += ' slide--current';
        else if (current - 1 === index) classNames += ' slide--previous';
        else if (current + 1 === index) classNames += ' slide--next';

        return (
            <li
                ref={this.slide}
                className={classNames}
                onClick={this.handleSlideClick}
            >

                <div className="title-wrapper">
                    <h1 className="slide-content">{title}</h1>
                </div>

            </li>
        )
    }
}


export default Slide;