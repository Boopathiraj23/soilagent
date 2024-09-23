import React, { useState,useEffect } from 'react'
import side1 from '../assets/1.jpg'
import side2 from '../assets/2.jpg'
import side3 from '../assets/3.jpg'
import side4 from '../assets/4.jpg'
import side5 from '../assets/5.jpg'
import side6 from '../assets/6.jpg'

// import { Link, NavLink } from 'react-router-dom'
import Login from './Login'
import Register from './Register'

const Header = () => {
     const [indicate,setIndicate]=useState(false);
     const [indicateregister,setIndicateregister]=useState(false);
     const [product1,setProduct1]=useState(null)

    //  const hideandshow=()=>{
    //   setIndicate(()=> !indicate)
    //  }
//     useEffect(()=>{
//       fetch(process.env.REACT_APP_API_URL+'/singleproduct/').then(res=>
//            res.json()).then(res =>setProduct1(res.singleproduct))
//  },[])

  return (
    <>
    <div>
      {/* <Link to={'/login1/'}>Login</Link> */}
      {/* <NavLink to={"/login1"}></NavLink> */}
      <nav className='w-full h-[60px] bg-orange-600 fixed text-xl z-10'>
          <h1 className='text-white ml-[700px] mt-3 font-sans rounded-[10px] font-bold text-xl cursor-pointer w-[150px]   hover:-translate-y-0  hover:scale-110 hover:bg-indigo-500 duration-1000 p-1 '>SOIL DETAILS</h1>
          {/* <h1 className='text-green  mt-[-40px] ml-[850px] rounded-[10px] w-[100px] p-1 font-sans font-bold text-2xl    hover:-translate-y-0  hover:scale-110 hover:bg-indigo-500 duration-1000  cursor-pointer'>contact</h1> */}
     
        <h1 className='text-white ml-[1300px] mt-[-40px] font-sans rounded-[10px] font-bold text-xl cursor-pointer w-[65px]   hover:-translate-y-0  hover:scale-110 hover:bg-indigo-500 duration-1000 p-1  ' onClick={()=>setIndicate(!indicate)} >Login</h1>
        {indicate ===true ? <Login/>:' '}
        <h1 className='text-white ml-[1400px] mt-[-36px] font-sans rounded-[10px] font-bold text-xl cursor-pointer w-[85px]   hover:-translate-y-0  hover:scale-110 hover:bg-indigo-500 duration-1000 p-1 ' onClick={()=>setIndicateregister(!indicateregister)}>Register</h1>
        {indicateregister ===true ? <Register/>:' '}
          
      </nav>
      <div className='ml-[70px] overflow-hidden'>
      {/* <div className='h-full absolute group  '>
          <div className='h-[250px] w-[250px] rounded-md ml-[100px] mt-[130px] bg-red-300 border-l-pink-500'>
              <img className=' object-cover top-0 left-0 ' src={side} />
          </div>
          <hr className=' bg-gray-950 w-[1px]'/>
          <div className='ml-[100px] opacity-0 group-hover:opacity-[10] translate-y-0 grop-hover:translate-y-5  duration-[1s] '>
            <p className='h-[250px] w-[250px] text-center bg-red-300 p-3 rounded-md '>Hi, myself Boopathi,i from srivilliputhur, I did my ug course of BCA at Ayya Nadar Janaki ammal college in sivakasi and then i also did my pg course of MCA at Ayya Nadar Janaki Ammal college in Sivakasi.I have area interst in Html, css, Javascript, React js, Tailwind css and Java</p>
          </div>
     </div>    

     <div className='h-full absolute group  '>
          <div className='h-[250px] w-[250px] rounded-md ml-[400px] mt-[130px] bg-red-300 border-l-pink-500'>
              <img className=' object-cover top-0 left-0 ' src={side} />
          </div>
          <hr className=' bg-gray-950 w-[1px]'/>
          <div className='ml-[400px] opacity-0 group-hover:opacity-[10] translate-y-0 grop-hover:translate-y-5  duration-[1s] '>
            <p className='h-[250px] w-[250px] text-center bg-red-300 p-3 rounded-md '>Hi, myself Boopathi,i from srivilliputhur, I did my ug course of BCA at Ayya Nadar Janaki ammal college in sivakasi and then i also did my pg course of MCA at Ayya Nadar Janaki Ammal college in Sivakasi.I have area interst in Html, css, Javascript, React js, Tailwind css and Java</p>
          </div>
     </div>    

     <div className='h-full absolute group  '>
          <div className='h-[250px] w-[250px] rounded-md ml-[700px] mt-[130px] bg-red-300 border-l-pink-500'>
              <img className=' object-cover top-0 left-0 ' src={side} />
          </div>
          <hr className=' bg-gray-950 w-[1px]'/>
          <div className='ml-[700px] opacity-0 group-hover:opacity-[10] translate-y-0 grop-hover:translate-y-5  duration-[1s] '>
            <p className='h-[250px] w-[250px] text-center bg-red-300 p-3 rounded-md '>Hi, myself Boopathi,i from srivilliputhur, I did my ug course of BCA at Ayya Nadar Janaki ammal college in sivakasi and then i also did my pg course of MCA at Ayya Nadar Janaki Ammal college in Sivakasi.I have area interst in Html, css, Javascript, React js, Tailwind css and Java</p>
          </div>
     </div>     */}

<div class="bg-red-300 ml-[100px]  absolute mt-[100px]  max-w-sm rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105 hover:shadow-lg">
    <img class="w-full h-48 object-scale-down" src={side1} alt='Placeholder Image"'/>
    
    <div class="p-6">
      <h2 class="text-2xl font-semibold text-gray-800">Sandy soil</h2>
      <p class="text-gray-600 mt-2">
      Sandy Soil is light, warm, dry and tends to be acidic and low in nutrients. Sandy soils are often known as light soils due to their high proportion of sand and little clay (clay weighs more than sand).
These soils have quick water drainage and are easy to work with. They are quicker to warm up in spring than clay soils but tend to dry out in summer and suffer from low nutrients that are washed away by rain.
The addition of organic matter can help give plants an additional boost of nutrients by improving the nutrient and water holding capacity of the soil.</p>
      
      <button class="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg focus:outline-none hover:bg-blue-600 transition-colors">
        Distrubotor
      </button>
    </div>
  </div>

  <div class="bg-red-300 ml-[500px] absolute mt-[100px] h-[645px] max-w-sm rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105 hover:shadow-lg">
    <img class="w-full h-48 object-scale-down" src={side2} alt='Placeholder Image"'/>
    
    <div class="p-6">
      <h2 class="text-2xl font-semibold text-gray-800">Clay Soil</h2>
      <p class="text-gray-600 mt-2">
      Clay Soil is a heavy soil type that benefits from high nutrients. Clay soils remain wet and cold in winter and dry out in summer. These soils are made of over 25 percent clay, and because of the spaces found between clay particles, clay soils hold a high amount of water. Because these soils drain slowly and take longer to warm up in summer, combined with drying out and cracking in summer, they can often test gardeners. </p>
      
      <button class="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg focus:outline-none hover:bg-blue-600 transition-colors">
        Distrubotor
      </button>
    </div>
  </div>


  <div class="bg-red-300 ml-[900px] absolute mt-[100px] h-[645px] max-w-sm rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105 hover:shadow-lg">
    <img class="w-full h-48 object-scale-down" src={side3} alt='Placeholder Image"'/>
    
    <div class="p-6">
      <h2 class="text-2xl font-semibold text-gray-800"> Silt Soil</h2>
      <p class="text-gray-600 mt-2">
      Silt Soil is a light and moisture retentive soil type with a high fertility rating. As silt soils compromise of medium sized particles they are well drained and hold moisture well. As the particles are fine, they can be easily compacted and are prone to washing away with rain. By adding organic matter, the silt particles can be bound into more stable clumps.</p>
      
      <button class="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg focus:outline-none hover:bg-blue-600 transition-colors">
        Distrubotor
      </button>
    </div>
  </div>


  <div class="bg-red-300 ml-[100px] absolute mt-[800px] h-[577px] max-w-sm rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105 hover:shadow-lg">
    <img class="w-full h-48 object-scale-down" src={side4} alt='Placeholder Image"'/>
    
    <div class="p-6">
      <h2 class="text-2xl font-semibold text-gray-800">Peat soil</h2>
      <p class="text-gray-600 mt-2">
      Peat soil is high in organic matter and retains a large amount of moisture. This type of soil is very rarely found in a garden and often imported into a garden to provide an optimum soil base for planting.</p>
      
      <button class="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg focus:outline-none hover:bg-blue-600 transition-colors">
        Distrubotor
      </button>
    </div>
  </div>


  <div class="bg-red-300 ml-[500px] absolute mt-[800px] h-[577px]  max-w-sm rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105 hover:shadow-lg">
    <img class="w-full h-48 object-scale-down" src={side5} alt='Placeholder Image"'/>
    
    <div class="p-6">
      <h2 class="text-2xl font-semibold text-gray-800">Chalk soil</h2>
      <p class="text-gray-600 mt-2">
      Chalk soil can be either light or heavy but always highly alkaline due to the calcium carbonate (lime) within its structure. As these soils are alkaline they will not support the growth of ericaceous plants that require acidic soils to grow. If a chalky soil shows signs of visible white lumps then they can’t be acidified and gardeners should be resigned to only choose plants that prefer an alkaline soil.</p>
      
      <button class="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg focus:outline-none hover:bg-blue-600 transition-colors">
        Distrubotor
      </button>
    </div>
  </div>


  <div class="bg-red-300 ml-[900px] absolute mt-[800px]  max-w-sm rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105 hover:shadow-lg">
    <img class="w-full h-48 object-scale-down" src={side6} alt='Placeholder Image"'/>
    
    <div class="p-6">
      <h2 class="text-2xl font-semibold text-gray-800"> Loam soil</h2>
      <p class="text-gray-600 mt-2">
      Loam soil is a mixture of sand, silt and clay that are combined to avoid the negative effects of each type.
These soils are fertile, easy to work with and provide good drainage. Depending on their predominant composition they can be either sandy or clay loam.
As the soils are a perfect balance of soil particles, they are considered to be a gardeners best friend, but still benefit from topping up with additional organic matter.</p>
      
      <button class="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg focus:outline-none hover:bg-blue-600 transition-colors">
        Distrubotor
      </button>
    </div>
  </div>

</div>
  
    </div>
    </>
  )
}

export default Header
