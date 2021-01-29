import React, { Component } from 'react';


class View extends Component {
    constructor(props) {
        super(props);

        this.slide = React.createRef();
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
            <div className={classNames}>
                {title}
            </div>
        )
    }
}


export default View;