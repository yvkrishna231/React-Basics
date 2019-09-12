import React from 'react';
class Welcome extends React.Component {
    render() {
        return (
            <div>
                <h4 className={this.props.color}>{this.props.name} </h4>
            </div>
        )
    }
}
export default Welcome