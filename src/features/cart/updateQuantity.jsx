import { useDispatch } from "react-redux";


import PropTypes from 'prop-types';
import { decreaseItemQuantity } from "./cartSlice.jsx";
import { increaseItemQuantity } from "./cartSlice.jsx";

function UpdateQuantity({pizzaId,currentQuantity}){
    const dispatch=useDispatch();
    return(
        <div>
                 <button onClick={()=>dispatch(decreaseItemQuantity(pizzaId))} 
                 className=' text-xl uppercase py-1 px-3 bg-[#161D6F] hover:bg-[#0B2F9F]
        text-stone-100 rounded-full m-3'>-</button>
                 <span>{currentQuantity}</span>
        <button onClick={()=>dispatch(increaseItemQuantity(pizzaId)) } 
        className='text-xl uppercase py-1 px-3 bg-[#161D6F] hover:bg-[#0B2F9F]
        text-stone-100 rounded-full m-3'>+</button>  
        </div>
    )
}


UpdateQuantity.propTypes = {
    pizzaId: PropTypes.string.isRequired,
    currentQuantity: PropTypes.string.isRequired
  };
export default  UpdateQuantity;