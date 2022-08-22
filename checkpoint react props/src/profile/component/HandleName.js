import PropTypes from 'prop-types';
    
    const HandleName = (props) => {
      return (
        alert(`Hello Mr. ${props.name}`)
      )
    }
    
HandleName.defaultProps = {
    name: 'Anonymous'
};

HandleName.propTypes = {
    name: PropTypes.string,
};

export default HandleName;