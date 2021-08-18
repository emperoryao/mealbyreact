import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const allCategories=['all',...new Set(items.map((item)=>item.category))]
   console.log(allCategories);
  const[menuItem,setMenuItem]=useState(items)
  const[category,setCategory]=useState(allCategories)

   
   const filterItems=((category)=>{ 
    if(category==='all'){
      setMenuItem(items)
      return;
    }
    const newItems=items.filter((newItem)=>newItem.category===category)
    setMenuItem(newItems)
  })
  return <main>
    <section className="menu section">
      <div className="title">
        <h2>瓦城菜單</h2>
        <div className="underline"></div>
      </div>
      <Categories categories={category} filterItems={filterItems}/>
      <Menu item={menuItem}/>
    </section>
  </main>;
}

export default App;
