import React, { Component } from 'react';
import Home from "../Home";


class View extends Component {
    constructor(props) {
        super(props);

        this.handleViewClick = this.handleViewClick.bind(this);
        this.getViewComponent = this.getViewComponent.bind(this);

        this.slide = React.createRef();
    }

    handleViewClick(event) {
        this.props.handleViewClick(this.props.position);
    }

    getViewComponent() {
        if (this.props.title == "Home") {
            return <Home />
        }
    }

    render() {
        const { title, position } = this.props;
        const currentPosition = this.props.currentPosition;
        let classNames = "view glass-effect";

        if (currentPosition.x === position.x && currentPosition.y === position.y) {
            classNames += ' view--current';
        } else if (currentPosition.x - 1 === position.x) {
            classNames += ' view--left';
        } else if (currentPosition.x + 1 === position.x) {
            classNames += ' view--right';
        } else if (currentPosition.x === 0 && currentPosition.y - 1 === position.y) {
            classNames += ' view--top';
        } else if (currentPosition.x === 0 && currentPosition.y + 1 === position.y) {
            classNames += ' view--bottom';
        }

        return (
            <div className={classNames} onClick={this.handleViewClick}>
                <div className={`blur`}></div>
                <div>
                    {this.getViewComponent()}
                </div>
            </div>
        )
    }
}


export default View;