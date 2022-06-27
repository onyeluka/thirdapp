import React, {useState} from 'react';
import './App.css';
import axios from 'axios';
 import { FaTemperatureLow } from 'react-icons/fa';

const App = () => {
  
const [query, setQuery] = useState('');
const [cond, setCond] = useState([]);
  const url = `http://api.weatherstack.com/current?access_key=9167cbe6b1ef09d19e3296b3834d0860&query=${query}`;
 const getData = async() => {
  const result = await axios.get(url);
  setCond([result.data])
  console.log(result.data)

 }
const onSubmit = (e) => {
  e.preventDefault();
  getData();
}
  return (
    <div className='App text-center m-auto'>
<form  onSubmit={onSubmit}>
  <input type='text' value={query} onChange={e => setQuery(e.target.value)} />
  <button type='submit' className='button-1 '>Enter</button>
</form>
<div  className='box text-center '>
{
  cond.map((item,index) => {

    return(

      <div key={index} className=' flex m-4 p-4 text-white'>
      <div className='flex-none'>{item.current.temperature} ° C <FaTemperatureLow /> </div>
      <div className='flex-auto w-64'>{item.current.weather_descriptions}</div>
      <div className='flex-auto w-64'><img src={item.current.weather_icons} alt='image' className='object-cover' /></div>
      <div className='flex-auto w-64'>{item.location.country}</div>
      <div className='flex-auto w-72'>{item.location.localtime}</div>
          </div>
    )
 
  })
}
</div>
    </div>
  )
}

export default App
