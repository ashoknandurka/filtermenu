import { useState } from 'react';
import './App.css';
import Data from './Data';
import Card from './Card';
import Buttons from './Buttons';

function App() {
  const [items,setItems] = useState(Data);
  const menuItems = [...new Set(Data.map((val)=> val.category))]

  let filterItems =(currcat)=>{
    let newMenuList = Data.filter((item)=>item.category === currcat)
    setItems(newMenuList);
  }
  return (
    <div className="App">
       <h1>our menu</h1>
       <Buttons menuItems={menuItems} filterItems={filterItems} setItems={setItems}/>
       <Card items ={items} />
    </div>
  );
}

export default App;
