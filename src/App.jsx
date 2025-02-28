import React, { useEffect, useState } from 'react';
import Search from './Search';

function App() {
  const [data,setData] = useState('');
  const [loading, setLoading] = useState(false)
  const handelSearch=(event)=>{     
    if (event.keyCode == 13) {
      setLoading(true)
      setData("")
      const api = `https://api.openweathermap.org/data/2.5/weather?q=${event.target.value}&appid=9352353ca8ba98321ade842e2d406342&units=metric`;
      fetch(api).then(response => response.json()).then(
        response => {setTimeout(()=>{
          setLoading(false)
           setData(response) },2000)
           }
       ) 
      
         
    }
  }
  return (
   <div>
    {loading ? <h1 className='text-3xl text-white absolute top-20 left-[50%] z-10'>Loading...</h1> : null} 
     <Search data={data} handelSearch={handelSearch}/>
   </div>
  )
}

export default App
