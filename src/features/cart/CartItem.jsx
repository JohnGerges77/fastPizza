
import PropTypes from 'prop-types';
import { deleteCart } from './cartSlice';
import {

  formatCurrency,

} from "../../utils/helpers";
import Button from '../../ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import UpdateQuantity from './updateQuantity';
import { getCurrentQuantityById } from './cartSlice';

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));
const dispatch=useDispatch()
  return (
    <li className='py-2 sm:flex sm:justify-between sm:items-center'>
      <p className='text-lg mb-1 sm:mb-0 text-center'>
        {quantity}&times; {name}
      </p>
      <div className='block text-center sm:justify-between sm:items-center gap-5 sm:flex'>
        <p className='text-lg'>{formatCurrency(totalPrice)}</p>
        <UpdateQuantity pizzaId={pizzaId} currentQuantity={currentQuantity} />
        <Button onClick={()=>dispatch(deleteCart(pizzaId))}>Delete</Button>
      </div>
    </li>
  );
}

CartItem.propTypes = {
  item: PropTypes.string.isRequired,
  pizzaId: PropTypes.string.isRequired
};

export default CartItem;
