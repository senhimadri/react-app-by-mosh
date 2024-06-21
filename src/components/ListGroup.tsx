import { useState } from "react";

interface Props{
    items : string[];
    heading : string;
}


function ListGroup({items,heading} : Props){


    const [selectedIndex,setSelectedIndex] = useState(-1);

    return (
    <>
        <h1>{heading}</h1>
        <ul className="list-group">
            { items.map((item,index)=> 
                    <li 
                        key={item} 
                        className={index===selectedIndex? "list-group-item active" : "list-group-item"} 
                        onClick={()=> { setSelectedIndex(index) }  }
                    >
                        {item}
                    </li>) 
            }
        </ul>
    </>
)}

export default ListGroup;