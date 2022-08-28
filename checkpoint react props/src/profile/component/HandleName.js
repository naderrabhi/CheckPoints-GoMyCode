import PropTypes from 'prop-types';
    
    const HandleName = ({followMe}) => {
      return (
        <button className="btn btn-primary" onClick={followMe.bind(this)}>follow Me!</button>
      )
    }
    
HandleName.defaultProps = {
    name: 'Anonymous'
};

HandleName.propTypes = {
    name: PropTypes.string,
};

export default HandleName;