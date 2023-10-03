import PropTypes from 'prop-types';
import './Button.css';

function Button({text}) {
    return (
        <button className='btn'>
            {text}
        </button>
    );
  }

  Button.propTypes = {
    text : PropTypes.string
  }
  
  export default Button;
  