import React, {Component} from 'react';

class FullName extends Component {
    render() {
        return (
        <h1>Hello My Name Is <span>{this.props.name}</span></h1>
)}}

FullName.defaultProps = {
    name: "Stranger"
};

export default FullName;