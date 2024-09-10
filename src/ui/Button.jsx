import PropTypes from 'prop-types';

function Button({children,onClick}){
    return(
        <button onClick={onClick} className="text-base uppercase py-2 px-3 bg-[#161D6F] hover:bg-[#0B2F9F]
        text-stone-100 transition-color duration-300 rounded-3xl mt-3 tracking-wide font-semibold text-md m-4">{children}
        
        
        </button>
    )
}

Button.propTypes = {
    children: PropTypes.string.isRequired,
    onClick: PropTypes.string.isRequired
  };

export default Button