import { useState } from 'react';
import {AiOutlineSearch} from 'react-icons/ai'
export default function SearchBar(props) {
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
      <div className="form-control flex items-center bg-white py-3 px-6 shadow-xl rounded-md">
        <AiOutlineSearch />
        <input
          className="border-0 outline-none mx-3 w-full"
          type="text"
          placeholder="Search for a country..."
          onChange={handleChange}
          value={searchInput}
        />
      </div>
    </form>
  );
}