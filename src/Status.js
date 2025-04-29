/* eslint-disable react/prop-types */
import React from 'react';

export class Status extends React.Component {
    constructor(props) {
        super(props);
        this.state = { dots: '' };
        this.updateDots = this.updateDots.bind(this);
        this.timer = setInterval(() => {
            this.updateDots();
        }, 700);
    }

    updateDots() {
        if (this.state.dots.length === 3) {
            this.setState({ dots: '' });
            return;
        }

        this.setState({ dots: this.state.dots + '.' });
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        return (
            <div style={{ marginTop: '20px' }}>
                <h1 className="fomo_status">
                    {this.props.status}
                    {this.props.showLoading ? this.state.dots : ''}
                </h1>
            </div>
        );
    }
}
