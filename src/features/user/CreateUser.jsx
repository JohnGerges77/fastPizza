import { useState } from 'react';
import Button from '../../ui/Button';
import { useDispatch } from 'react-redux';
import { updateName } from './userSlice';
import { Link } from 'react-router-dom';


function CreateUser() {
  
 

  const [username, setUsername] = useState('');

const dispatch=useDispatch()
  function handleSubmit(e) {
    e.preventDefault();
    if(!username) return;
    dispatch(updateName(username))
   
  }

  return (<div className='m-auto text-center z-[1]'>


    <form onSubmit={handleSubmit} className='flex justify-center flex-col' >
      <p>👋 <span className='text-[#161D6F] text-2xl'>Welcome!</span>  Please start by telling us your name:</p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className='bg-stone-100 text-stone-900 input w-64 sm:w-80 m-auto mt-5 z-0'
      />

      {username !== '' &&(
        <div>
         <Link to='/menu'> <Button>Start Ordering</Button></Link>
        </div>
      )}
    </form>
    </div>
  );
}

export default CreateUser;
