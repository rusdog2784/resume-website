import React, { Component } from 'react';
import View from "./View";
import "./grid.scss";


class Grid extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPosition: {
                x: 0,
                y: 0,
            },
            views: [
                {
                    title: "Hobbies",
                    position: {
                        x: -1,
                        y: 0
                    }
                },
                {
                    title: "Home",
                    position: {
                        x: 0,
                        y: 0
                    }
                },
                {
                    title: "Work Experience",
                    position: {
                        x: 1,
                        y: 0
                    }
                },
                {
                    title: "Skills",
                    position: {
                        x: 0,
                        y: 1
                    }
                },
            ]
        }

        this.handleViewClick = this.handleViewClick.bind(this);
    }

    handleViewClick(position) {
        if (this.state.currentPosition.x !== position.x || this.state.currentPosition.y !== position.y) {
            this.setState({ currentPosition: position });
        }
    }

    render() {
        const { currentPosition, views } = this.state;
        
        const translateX = (currentPosition.x * (100 / 3) * -1);
        const translateY = (currentPosition.y * (100 / 2) * -1);
        const wrapperTransform = {
            'transform': `translateX(${translateX}%) translateY(${translateY}%)`
        }

        return (
            <div className="grid-root">
                <div className="views-wrapper" style={wrapperTransform}>
                    {views.map(view => {
                        return <View 
                            title={view.title} 
                            position={view.position}
                            currentPosition={currentPosition}
                            handleViewClick={this.handleViewClick}
                        />
                    })}
                </div>
            </div>
        )
    }
}


export default Grid;