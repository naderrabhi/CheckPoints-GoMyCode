import PropTypes from 'prop-types';
    
    const HandleName = ({followMe,name}) => {
      return (
        <button className="btn btn-primary" onClick={followMe.bind(this,name)}>follow Me!</button>
      )
    }
    
HandleName.defaultProps = {
    name: 'Anonymous'
};

HandleName.propTypes = {
    name: PropTypes.string,
};

export default HandleName;