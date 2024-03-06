import { useState } from 'react';
import './index.css';
import Stats from './components/Stats';
import Logo from './components/Logo'; 
import Form from './components/Form';
import PackingList from './components/PackingList';


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

  function handleClearList(){
    const confirmed = window.confirm('Are you sure to delete items?')
    if(confirmed) setItems([])
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
    onDeleteItem={handleDeleteItem}
    onClearList={handleClearList}/>
    <Stats items={items}/>
  </dic>
}


