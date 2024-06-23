import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import DropDown from "./components/DropDown";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const onSelectHandler = (item: string) => {
    console.log(item);
  };

  const onClickfunction = () => {
    console.log("Button Clicked");
  };

  const DropDownList = [
    { value: 1, Level: "Bangladesh" },
    { value: 2, Level: "India" },
    { value: 3, Level: "Pakistan" },
    { value: 4, Level: "Srilonka" },
  ];

  const DropDownListColor = [
    { value: 1, Level: "primary" },
    { value: 2, Level: "secondary" },
    { value: 3, Level: "success" },
    { value: 4, Level: "danger" },
  ];

  const [selectedValue, setSelectedValue] = useState<{
    value: number;
    Level: string;
  }>({ value: 0, Level: "All" });

  const [selectedColor, setSelectedColor] = useState<{
    value: number;
    Level: string;
  }>({ value: 0, Level: "primary" });

  return (
    <>
      <div>
        {" "}
        <ListGroup
          items={items}
          heading="Cities"
          onSelectItem={onSelectHandler}
        />{" "}
      </div>
      <Alert>
        <b>Hello</b> <span>World</span>
      </Alert>

      <Button type={selectedColor.Level} onClick={onClickfunction}>
        {selectedValue.Level}
      </Button>

      <DropDown DropDownList={DropDownList} onSelectItem={setSelectedValue} />

      <DropDown
        DropDownList={DropDownListColor}
        onSelectItem={setSelectedColor}
      />
    </>
  );
}

export default App;
