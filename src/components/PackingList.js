import { useState } from 'react';
import Item from './Item'

export default function PackingList({items, onDeleteItem , onToggleItem,onClearList}){
  const [sortBy, setSortBy] = useState("input")

  let sortedItems

  if(sortBy === "input") sortedItems = items;
  else if(sortBy === "description") sortedItems = items.sort((a,b)=>a.description.localeCompare(b.description));
  else if(sortBy === "packed") sortedItems = items.sort((a,b)=>a.packed - b.packed);
  else if(sortBy === "empty") sortedItems = [];

  function handleSortByChange(e){
    setSortBy(e.target.value)
  }


  return (
  <div className='list'>
    <ul>
     {sortedItems.map((item)=>(
      <Item 
      item={item} 
      onDeleteItem={onDeleteItem} 
      onToggleItem={onToggleItem} 
      key={item.id}
      />
      ))}
    </ul>
    <div className='actions'>
      <select value={sortBy} onChange={handleSortByChange}>
        <option value="input">Sort by input order</option>
        <option value="description">Sort by description</option>
        <option value="packed">Sort by status</option>
       
      </select>
      <button onClick={onClearList}>Clear list</button>
    </div>
  </div>
  )
}