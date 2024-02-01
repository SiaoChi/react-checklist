import { useState } from 'react';
import './index.css';

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Labtop", quantity: 1, packed: false },
  { id: 4, description: "hat", quantity: 1, packed: true },
];

export default function App(){
  return <dic className='app'>
    <Logo />
    <Form />
    <PackingList />
    <Stats />
  </dic>
}

function Logo(){
  return <h1>🌞 Far away 🕶</h1>
}
function Form(){
  const [description, setDescription] =useState('test')
  const [quantity,setQuantity] = useState(5)

  function handleSubmit(e){
    e.preventDefault();

    if(!description) return;

    const newItem = {description,quantity,packed:false,id:Date.now()};
    console.log(newItem)

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
function PackingList(){
  return (
  <div>
    <ul className='list'>
      {initialItems.map((item)=><Item key={item.id} item={item}/>)}
    </ul>
  </div>
  )
}

function Item({item}){
  return (
    <>
    <li><span style={item.packed ? { textDecoration:
      'line-through'}:{}}>{item.quantity} {item.description}</span>
    <button>❌</button></li>
    </>
  )
}

function Stats(){
  return (
  <footer className='stats'>
    <em>
    ► You have X items on your list, and your already packed X (X%)
    </em>
  </footer>
  )
}