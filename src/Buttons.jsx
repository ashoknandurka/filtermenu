import React from "react";
import Data from "./Data";

const Buttons = ({menuItems,filterItems,setItems})=>{
    return(
        <div>
            {
                menuItems.map((item)=>{
                   return(
                        <button 
                        key ={item} 
                        style={{marginRight:"20px",marginBottom:"20px"}}
                        onClick={()=>filterItems(item)}
                        >
                            {item}
                        </button>
                   );
                })
            }
            <button
            onClick={()=>setItems(Data)}
            >All
            </button>
        </div>
    )
}

export default Buttons;