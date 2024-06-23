interface Props {
  DropDownList: {
    value: number;
    Level: string;
  }[];
  onSelectItem: (object: { value: number; Level: string }) => void;
}

const DropDown = ({ DropDownList, onSelectItem }: Props) => {
  const handleOnchange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const ddlValue = parseInt(event.target.value);

    const ddlObj = DropDownList.find((x) => x.value === ddlValue);

    if (ddlObj?.Level) onSelectItem(ddlObj);
  };

  return (
    <>
      <select
        className="form-select"
        aria-label="Default select example"
        onChange={handleOnchange}
      >
        {DropDownList.map((item) => (
          <option value={item.value}>{item.Level}</option>
        ))}
      </select>
    </>
  );
};

export default DropDown;
