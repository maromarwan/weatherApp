import React from 'react';

function Search({data,handelSearch}) {

  return (
    <div className=''>
       <div className='bg-[url("./bg.jpg")] backdrop-blur-sm place-content-center bg-no-repeat flex flex-col justify-between w-screen border border-gray-400 h-screen bg-cover p-10'>
         <div className='place-items-center gap-8'>
           <input type="text" onKeyUp={handelSearch} className='rounded-xl border bg-transparent px-4 placeholder-white lg:w-[500px] ' placeholder='Type a place...'/>      
           <p className='text-white text-4xl text-center mt-3'>{data.name}</p> 
           {data.main?<p className='text-white text-5xl font-bold text-center mt-3'>{data.main.temp}°C</p> :null}
           {data?<p className='text-white text-3xl text-center mt-3'>{data.weather[0].main}</p> :null}
           <img src={`./${data ? data.weather[0].main : null}.png`} alt="" className='w-27 place-content-center'/>
         </div>
       <div className='flex flex-row rounded-xl justify-center gap-16 mx-9 backdrop-blur-sm bg-white/30 px-5 pb-3'>
         {data.main?<p className='text-white text-center mt-3 flex flex-col'><span className='text-xl'>{data.main.feels_like}°C</span>Feels</p>:null} 
         {data.main?<p className='text-white text-center mt-3 flex flex-col'><span className='text-xl'>{data.main.humidity}%</span>Humidity</p>:null} 
         {data.wind?<p className='text-white text-center mt-3 flex flex-col'><span className='text-xl'>{data.wind.speed}MPH</span>Wind</p>:null}  
       </div>
       </div>
    </div>
  
  )
}

export default Search
