export default function Filter(props){
    const region = ["Africa", "America", "Asia", "Europe", "Oceania"];
    const onOptionChangeHandler =(e) => {
        props.filter(e.target.value);
    }
  return (
    <select
      className="py-3 px-6 shadow-xl rounded-md w-52"
      onChange={onOptionChangeHandler}
    >
      <option value="all">Filter by Region</option>
      {region.map((rg) => (
        <option value={rg} key={rg}>{rg}</option>
      ))}
    </select>
  );  
}