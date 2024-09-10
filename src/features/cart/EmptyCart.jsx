import { Link } from 'react-router-dom';

function EmptyCart() {
  return (
    <div className='m-10'>
   <Link to="/menu" className=' hover:text-blue-700 text-blue-500'>&larr; Back to menu</Link>

      <p className='text-red-700'>Your cart is still empty. Start adding some pizzas :)</p>
    </div>
  );
}

export default EmptyCart;
