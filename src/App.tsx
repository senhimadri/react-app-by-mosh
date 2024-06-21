import ListGroup from "./components/ListGroup";


function App(){
    let items =['New York','San Francisco','Tokyo','London','Paris'];

    const onSelectHandler = (item : string)=>{

        console.log(item);
    }

    return <div> <ListGroup items={items} heading="Cities" onSelectItem={onSelectHandler} /> </div>
}

export default App;