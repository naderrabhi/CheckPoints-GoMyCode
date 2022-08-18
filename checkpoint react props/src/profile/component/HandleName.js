import PropTypes from 'prop-types';
import { Component } from 'react';

class HandleName extends Component {
    render() {
    return (
        alert(`Hello Mr. ${this.props.name}`)
    )}}
HandleName.defaultProps = {
    name: 'Anonymous'
};

HandleName.propTypes = {
    name: PropTypes.string,
};

export default HandleName;