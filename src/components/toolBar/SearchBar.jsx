import { useState } from 'react';
import {AiOutlineSearch} from 'react-icons/ai'
export default function SearchBar(props) {
  const theme = props.theme;
  const [searchInput, setsearchInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    props.submit(searchInput);
  };
  const handleChange = (e) => {
    const value = e.target.value;
    setsearchInput(value);
    props.submit(value);
  };
  return (
    <form className="w-full lg:w-4/12" onSubmit={handleSubmit}>
      <div
        className={
          theme
            ? "form-control flex items-center bg-header-dark py-3 px-6 shadow-xl rounded-md"
            : "form-control flex items-center bg-white py-3 px-6 shadow-xl rounded-md"
        }
      >
        <AiOutlineSearch className={theme ? "text-white h1" : "text-gray-500"}/>
        <input
          className={
            theme
              ? "border-0 outline-none mx-3 w-full bg-header-dark text-gray-200"
              : "border-0 outline-none mx-3 w-full"
          }
          type="text"
          placeholder="Search for a country..."
          onChange={handleChange}
          value={searchInput}
        />
      </div>
    </form>
  );
}