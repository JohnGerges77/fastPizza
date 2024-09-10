
import PropTypes from 'prop-types';

import {

  formatCurrency,

} from "../../utils/helpers";

import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../cart/cartSlice';
import { deleteCart } from '../cart/cartSlice';
import { getCurrentQuantityById } from '../cart/cartSlice';

function MenuItem({pizza}) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const isInCart = currentQuantity > 0;


  const dispatch=useDispatch()

function handleAddToCart(){
  const newItem= {

    pizzaId:id,
    name,
    quantity:1,
    unitPrice,
    totalPrice:unitPrice*1,
}
console.log(newItem)
dispatch(addToCart(newItem))
}

  return (
    <li className='flex gap-4 py-2 ml-3 '>
      <img src={imageUrl} alt={name} className=
      {` w-20 h-24 sm:w-28 sm:h-28 rounded-md ${soldOut?
      'grayscale opacity-70  ':''} `} />
      <div className='flex flex-col grow'>
        <p className='text-lg'>{name}</p>
        <p className='text-base text-stone-600 capitalize'>{ingredients.join(', ')}</p>
        <div className='mt-auto flex justify-between items-center'>
          {!soldOut ? <p className='text-base'>{formatCurrency(unitPrice)}</p> : <p className='text-red-500'>Sold out</p>
          
          }

{ isInCart&&<button onClick={()=>dispatch(deleteCart(id))} className='text-sm uppercase py-2 px-2 bg-[#161D6F] hover:bg-[#0B2F9F]
        text-stone-100 transition-color
         duration-300 rounded-full mt-3 tracking-wide 
         font-semibold text-md m-4 sm:px-3 sm:py-2 sm:text-base'>Delete</button>}

         {!soldOut&& !isInCart&& <button onClick={handleAddToCart} 
         className='text-sm uppercase py-2 px-2 bg-[#161D6F] hover:bg-[#0B2F9F]
        text-stone-100 transition-color
         duration-300 rounded-full mt-3 tracking-wide 
         font-semibold text-md m-4 sm:px-3 sm:py-2 sm:text-base' >Add To Cart</button>}
  
        </div>
      </div>
    </li>
  );
}

MenuItem.propTypes = {
  pizza: PropTypes.string.isRequired
};

export default MenuItem;
