import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";
import { Link } from "react-router-dom";

function Home() {
  const username=useSelector((state)=>state.user.username)
  return (
    
    <div className="flex flex-col justify-center items-center text-center  overflow-hidden">
   
      <h1 className= "my-20 z-[1] text-[#0B2F9F] font-semibold text-xl sm:text-2xl">
       <span className="text-[#161D6F]">  The best pizza. </span>
        <br />
        Straight out of the oven, straight to you.
      </h1>
   
{   username===""?   (<CreateUser />):(<Link to='/menu'><Button>Continue Ordeing {username}</Button></Link> )}
    </div>
  );
}

export default Home;
