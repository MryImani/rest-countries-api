export default function Filter(props){
  const theme = props.theme;
    const region = ["Africa", "America", "Asia", "Europe", "Oceania"];
    const onOptionChangeHandler =(e) => {
        props.filter(e.target.value);
    }
  return (
    <select
      className={
        theme
          ? "py-3 px-6 shadow-xl rounded-md w-52 mt-12 lg:mt-0 bg-header-dark text-gray-200"
          : "py-3 px-6 shadow-xl rounded-md w-52 mt-12 lg:mt-0"
      }
      onChange={onOptionChangeHandler}
    >
      <option value="all">Filter by Region</option>
      {region.map((rg) => (
        <option value={rg} key={rg}>
          {rg}
        </option>
      ))}
    </select>
  );  
}