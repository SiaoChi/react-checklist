
import { useState } from 'react';

export default function Form({onAddItems}){
  const [description, setDescription] =useState('input')
  const [quantity,setQuantity] = useState(5)


  function handleSubmit(e){
    e.preventDefault();

    if(!description) return;

    const newItem = {description,quantity,packed:false,id:Date.now()};

    onAddItems(newItem)

    setDescription('')
    setQuantity(1)
  }
    return <form className='add-form' onSubmit={handleSubmit}>
    <h3>what do need for your 🥰 trip?</h3>
    <select value={quantity} onChange={(e)=>setQuantity(Number(e.target.value))}>
      {Array.from({length:20},(_,i)=> i+1).map
      ((num) => (
        <option value={num} key={num}>
        {num}
        </option>))}
    </select>
    <input type='text' placeholder='Item...' 
    value={description} onChange={(e)=>{
      // console.log(e.target.value);
      setDescription(e.target.value)}}></input>
    <button>Add</button>
  </form>
}