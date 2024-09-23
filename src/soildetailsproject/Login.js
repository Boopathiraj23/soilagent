// import React, { useState } from 'react'
// import Header from './Header';

const Login = () => {
     // const [indicate,setIndicate]=useState(false);
//   const [indicate,setIndicate]=useState(false);

  return (
    <div>
     
          {/* <button className='text-white bg-black' onClick={()=>setIndicate(()=>!indicate)}>LOGIN</button> */}
          {/* <Header propss={indicate}/> */}
         <div  className='w-[400px]  h-[600px] bg-gray-600 float-end rounded-[50px] mt-3 '>
                    <form className=' text-center'>
                         <div className='flex mt-10 ml-[150px] w-[90px] p-2 h-[50px] rounded-[100px] bg-orange-600 '>
                         <h1 className=' text-white mr-4 pl-2 font-sans font-bold'>Login</h1>
                         {/* <h1 className=' text-white pl-2 font-sans font-bold flex'>Register</h1> */}
                         </div>
                        <div className='mt-[] pt-20'>
                              <input className='p-3 rounded border-yellow-500' type='text' placeholder='Enter Username'/>
                             
                              <input className='p-3 rounded mt-10' type='password' placeholder='Enter Password'/>
                         </div>
                         <button className='mt-10 bg-green-400 p-2 rounded-[10px]'>Login</button>
                    {/* <div className='mt-10 p-2'>
                         <span>If you have not any account please to create new account</span>
                         <u className='ml-3 text-blue-800'>Register</u>
                         
                    </div> */}
                    </form>
          </div>
    </div>
  )
}

export default Login
