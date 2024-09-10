// import { useState } from "react";


import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from '../../services/apiRestaurant';
import Button from "../../ui/Button";
import { useSelector } from "react-redux";
import store from '../../store';
import { clearCart } from "../cart/cartSlice";
// https://uibakery.io/regex-library/phone-number

const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );


function CreateOrder() {

  const navigation=useNavigation('');
  const isSubmitted=navigation.state==="submitting";
const formErrors=useActionData()
  // const [withPriority, setWithPriority] = useState(false);

  const cart = useSelector(state=>state.cart.cart);
  console.log(cart)
  const username=useSelector((state)=>state.user.username)
  return (
    <div className="text-base sm:text-lg m-5 mb-48">
      <h2 className="my-8 font-semibold  text-xl">Ready to order? Lets go!</h2>

      <Form method="Post">
        <div className="mb-5 flex flex-col sm:flex-row grow">
          <label  className="sm:basis-40 mb-3">First Name</label>
          <input className="input grow" type="text" name="customer" defaultValue={username} required />
        </div>

        <div className="mb-5 flex flex-col sm:flex-row">
          <label className="sm:basis-40 mb-3">Phone number</label>
          <div className="grow">
            <input className="input w-full" type="tel" name="phone" required />
            {formErrors?.phone&&<p className="p-1 text-xs text-red-600 bg-red-100 mt-2 ml-2 rounded-lg">{formErrors.phone}</p>}
          </div>
         
        </div>

        <div className="mb-5 flex flex-col sm:flex-row">
          <label  className="sm:basis-40 mb-3">Address</label>
          <div className="grow">  
            <input className="input w-full"type="text" name="address" required />
          </div>
        </div>

        <div className="mt-3">
          <input className="accent-emerald-400 h-4 w-4 mr-2"
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div className="mt-7">
         <Button disabled={isSubmitted}>{isSubmitted?"Placing order....":"Order now"}</Button>
        </div>
        <input type="hidden" name='cart' value={JSON.stringify(cart)} />
      </Form>
    </div>
  );
}

export async function action({request}) {
  const DataForm=await request.formData();
  const data=Object.fromEntries(DataForm);



  const order={
    ...data,
    cart:JSON.parse(data.cart),
    priority:data.priority==='on',

  };
 const errors={}
if(!isValidPhone(order.phone)){
errors.phone='please enter your real number'
  
if(Object.keys(errors).length>0)return errors
}

const newOrder= await createOrder(order)
store.dispatch(clearCart());
return redirect(`/order/${newOrder.id}`) 
}
export default CreateOrder;
