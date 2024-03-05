import { useState } from 'react';
import './index.css';

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "Labtop", quantity: 1, packed: false },
//   { id: 4, description: "hat", quantity: 1, packed: true },
// ];

export default function App(){
  const [items,setItems] = useState([])
  
  function handleAddItems(item){
    setItems((items)=>[...items, item])
  }

  function handleDeleteItem(id){
    setItems((items)=>items.filter((item)=>item.id !== id))
  }

  function handleToggleItem(id){
    setItems(items=> 
      items.map(item => 
        item.id === id ? {...item,packed:!item.packed} 
        : item)
    );
  }

/* onAddItems={handleAddItem} 是將一個名為handleAddItem 
的函式作為 prop 傳遞給 Form 元件的方式。
這種模式是為了在 Form 元件內部使用這個函式。
*/

  return <dic className='app'>
    <Logo />
    <Form onAddItems={handleAddItems}/>
    <PackingList items={items} 
    onToggleItem={handleToggleItem}
    onDeleteItem={handleDeleteItem}/>
    <Stats items={items}/>
  </dic>
}

function Logo(){
  return <h1>🌞 Far away 🕶</h1>
}

function Form({onAddItems}){
  const [description, setDescription] =useState('')
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

function PackingList({items, onDeleteItem , onToggleItem}){
  return (
  <div>
    <ul className='list'>
     {items.map((item)=>(
      <Item item={item} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} key={item.id}/>))}
    </ul>
  </div>
  )
}

function Item({item,onDeleteItem, onToggleItem}){
  return (
    <>
    
    <li>
      <input type="checkbox" 
      value={item.packed} 
      onChange={()=>onToggleItem(item.id)}/>

      <span style={item.packed ? { textDecoration:
      'line-through'}:{}}>{item.quantity} {item.description}</span>

    <button onClick={()=>onDeleteItem(item.id)}>❌</button>
    </li>
    </>
  )
}

function Stats({items}){
  const itemNum = items.length;
  const packedItemNum = items.filter((item)=> item.packed).length;
  const percentage = Math.round((packedItemNum / itemNum)*100) 
  
  return (
  <footer className='stats'>
    <em>
    ► You have {itemNum} items on your list, and your already packed {packedItemNum} ({percentage}%)
    </em>
  </footer>
  )
}