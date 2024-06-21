import { MouseEvent } from "react";


function ListGroup(){
    let items =['New York','San Francisco','Tokyo','London','Paris'];

    // items=[];

    // if(items.length===0)
    //     return (
    //         <>
    //             <h1>List</h1>
    //             <p>No Items Found</p>
    //         </>
    //     )
        
    const Message = items.length===0 ? <p>No Items Found</p> : null;

    const getMessage = ()=> items.length===0 ? <p>No Items Found</p> : null;

    // Event Handler
    const handleClick =( event : MouseEvent)=>{
        console.log(event);
    }

    return (
    <>
        <h1>List</h1>

        {getMessage()}
        {Message}
        {items.length===0 && <p>No Items Found</p> }
        <ul className="list-group">
            { items.map((item)=> 
                    <li 
                        key={item} 
                        className="list-group-item" 
                        onClick={handleClick}
                    >
                        {item}
                    </li>) 
            }
        </ul>
    </>
)}

export default ListGroup;