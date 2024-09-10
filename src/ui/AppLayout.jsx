
import { Outlet,useNavigation  } from "react-router-dom"
import CartOverview from "../features/cart/CartOverview"
import Header from "./Header"
import Loader from "./loader"

function AppLayout(){
const navigation=useNavigation()

 const isLoading=navigation.state==='loading'
  return(


<div className="grid bg-stone-200 grid-rows-[auto,1fr,auto] h-screen ">

  {isLoading&&<Loader />}
    <Header /> 

    <div className="overflow-y-scroll">
        <main className="bg-stone-200">
          <Outlet />
        </main>
    </div>
   
    <CartOverview /> 
</div>
  )
}
export default AppLayout