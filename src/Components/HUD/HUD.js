import React, { Component } from 'react';
import View from "Components/HUD/View";


class HUD extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPosition: {
                x: 0,
                y: 0,
            },
            views: [
                {
                    index: 0,
                    title: "Hobbies",
                    position: {
                        x: -1,
                        y: 0
                    }
                },
                {
                    index: 1,
                    title: "About Me",
                    position: {
                        x: 0,
                        y: 0
                    }
                },
                {
                    index: 2,
                    title: "Work Experience",
                    position: {
                        x: 1,
                        y: 0
                    }
                },
                {
                    index: 3,
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
                            view={view}
                            currentPosition={currentPosition}
                            handleViewClick={this.handleViewClick}
                            key={view.index}
                        />
                    })}
                </div>
            </div>
        )
    }
}


export default HUD;