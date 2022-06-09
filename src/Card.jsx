import React from "react"

const Card =(items)=>{
    return(
        <div style={{display:"inline-block"}}>
            {
                items.items.map((item) =>{

                    return(
                    <div className="card" key={item.id} style={{width:"300px",border:"1px solid black",marginBottom:"10px"}}>
                        <div className="header">
                            <h3>
                                {item.title}
                            </h3>
                            <p>{item.category}</p>
                            <p>{item.price}</p>
                        </div>
                        <div className="body">
                         <p>{item.desc}</p>
                        </div>
                    </div>
                    );
                })
            }
        </div>
    )
}

export default Card