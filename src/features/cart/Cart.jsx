import { Link } from 'react-router-dom';
import Button from '../../ui/Button';
import CartItem from './CartItem'
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from './cartSlice';
import EmptyCart from './EmptyCart'
// const fakeCart = [
//   {
//     pizzaId: 12,
//     name: 'Mediterranean',
//     quantity: 2,
//     unitPrice: 16,
//     totalPrice: 32,
//   },
//   {
//     pizzaId: 6,
//     name: 'Vegetale',
//     quantity: 1,
//     unitPrice: 13,
//     totalPrice: 13,
//   },
//   {
//     pizzaId: 11,
//     name: 'Spinach and Mushroom',
//     quantity: 1,
//     unitPrice: 15,
//     totalPrice: 15,
//   },
// ];

function Cart() {
  const cart = useSelector((state)=>state.cart.cart);
  const username=useSelector((state)=>state.user.username)
  const dispatch=useDispatch()
  if(!cart.length) return <EmptyCart />
  return (
    <div className='py-2 px-3'>

      
      <Link to="/menu" className=' hover:text-blue-700 text-blue-500'>&larr; Back to menu</Link>


      <h2 className='mt-5 font-semibold'>Your cart, {username}</h2>

      <div>

<ul className='mt-3 divide-y divide-stone-400 '>
{cart.map((item)=>(
  <CartItem item={item} key={item.key} />
))}
</ul>

        <Button>
          
       
        <Link to="/order/new">Order pizzas</Link> 
        </Button>
        <button className='text-base uppercase py-2 px-3 bg-stone-400
         transition-color duration-300
       rounded-3xl mt-3 tracking-wide font-semibold text-md m-4'
        onClick={()=>dispatch(clearCart())}>Clear cart</button>
      </div>
    </div>
  );
}

export default Cart;
