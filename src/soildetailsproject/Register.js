// import React, { useState } from 'react'
// import Login from './Login';<div className='mt-10 p-2'>
                    // <span>If you alreagy have account please to Login Here !</span>
                    // {indicate===true?<Login/>: '' }
                    // <u className='ml-3 text-blue-800' onClick={()=>setIndicate(()=>!indicate)}>Login</u>
                    
             

const Register = () => {
     // const [indicate,setIndicate]=useState(false);

  return (
     <div>
     
     
    <div  className='w-[400px]  h-[600px] bg-gray-600 float-end rounded-[50px] mt-3 '>
               <form className=' text-center'>
                    <div className='flex mt-10 ml-[150px] w-[110px] p-2 h-[50px] rounded-[100px] bg-orange-600 '>
                         <h1 className=' text-white mr-4 pl-2 font-sans font-bold'>Register</h1>
                    </div>
                   <div className='mt-[-40px] pt-20'>
                         <input className='p-3 rounded border-yellow-500' type='text' placeholder='Enter Firstname'/>
                         <input className='p-3 rounded border-yellow-500 mt-2' type='text' placeholder='Enter Last name'/>
                         <input className='p-3 rounded border-yellow-500 mt-2' type='text' placeholder='Enter E-mail '/>
                         <input className='p-3 rounded mt-2' type='password' placeholder='Enter Password'/>
                    </div>
                    <button className='mt-10 bg-green-400 p-2 rounded-[10px]'>Register</button>
               {/*  */}
               </form>
     </div>
</div>
  )
}

export default Register
