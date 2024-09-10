import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function CartOverview() {

  const totalcartQuantity=useSelector((state)=>state.cart.cart.reduce((sum,item)=>sum+item.quantity,0))
  const totalcartPrice=useSelector((state)=>state.cart.cart.reduce((sum,item)=>sum+item.totalPrice,0))
if(!totalcartQuantity) return null;
  return (



    <div className= " z-[1] flex items-center justify-between bg-[#13195e] px-4 py-4 text-sm sm:uppercase text-stone-200 sm:px-6 md:text-base">
      <p className=" space-x-2 text-sm sm:text-lg  ">
        <span>Quantity: {totalcartQuantity}</span>
        <span> Total Price: ${totalcartPrice}</span>
      </p>
      <Link className="pl-2 text-sm sm:text-lg" to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
