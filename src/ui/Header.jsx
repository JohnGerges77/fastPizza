import { Link } from "react-router-dom"

import { useSelector } from "react-redux"

function Header(){

 const name=useSelector(state=>state.user.username)

    return(
        <header className="bg-[#161D6F] p-5 flex  z-[1]
        justify-between items-center font-semibold text-stone-200 
        text-lg sm:text-2xl " >
          <div className="flex gap-2 justify-center items-center">
           <img src="/public/543-pizza-1.svg.png" className="w-10" alt="" />
              <Link to='/fastPizza' className="tracking-widest">
   Fast Pizaa
  </Link>     
          </div>
      
  <div>

 
              <Link to='/menu' className="tracking-widest px-2 sm:px-10">
   Menu
  </Link>
              <Link to='/cart' className="tracking-widest px-2 sm:px-10">
 Cart
  </Link>
 </div>
{name?
  <p className="hidden md:block uppercase">{name}</p>:null
}
        </header>

    )
  }
  export default Header