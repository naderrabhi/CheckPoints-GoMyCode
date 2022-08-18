import React, {Component} from 'react';

class ImageBio extends Component {
    render () {
        return (
            <img src={this.props.src} alt={this.props.alt} style={{ width: "200px"}}/>
)}}

ImageBio.defaultProps = {
    src: "/man.png",
    alt : "image-profile",
};

export default ImageBio;