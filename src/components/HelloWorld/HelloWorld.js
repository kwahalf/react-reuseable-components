import React from 'react';
import PropTypes from 'prop-types';

/** A super lame component that says hello with a custom message*/
function HelloWorld({message}){
    return <div> hello {message}</div>
}
HelloWorld.propTypes = {
    /** message to display */
    message: PropTypes.string
};

HelloWorld.defaultProps = {
    message: 'World'
}
export default HelloWorld;
