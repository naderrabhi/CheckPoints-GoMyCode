import React, {Component} from 'react';

class Items extends Component {
    render() {
    return (
        <li>{this.props.item}</li>
    )}}

Items.defaultProps = {
    item : "Web Developer",
};

export default Items;