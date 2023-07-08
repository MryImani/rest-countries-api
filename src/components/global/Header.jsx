import {BsMoon} from 'react-icons/bs'
export default function Header(props) {
  return (
    <header className="flex px-8 md:px-20 py-6 justify-between shadow-md bg-white">
      <h1 className=" font-bold text-2xl">Where in the world?</h1>
      <nav className="">
        <button className="flex items-center">
          <BsMoon className="mr-2" />
          <span className='font-semibold'>Dark Mode</span>
        </button>
      </nav>
    </header>
  );
}
