import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";


function App(){
    let items =['New York','San Francisco','Tokyo','London','Paris'];
    const onSelectHandler = (item : string)=>{
        console.log(item);
    }

    const onClickfunction = ()=>{
        console.log('Button Clicked');
    }

    return (
        <>
            <div> <ListGroup items={items} heading="Cities" onSelectItem={onSelectHandler} /> </div>
            <Alert>
              <b>Hello</b>   <span>World</span> 
            </Alert>

            

            <Button type="danger" onClick={onClickfunction}>My Button</Button>
        </>
    )
    
    
    
}

export default App;