import ThemeContext from '@/store/theme-context';
import { useContext } from 'react';
import { BsMoonFill , BsMoon } from "react-icons/bs";
export default function Header(props) {
  const themeCxt = useContext(ThemeContext);
  return (
    <header
      className={
        themeCxt.isThemeDark
          ? "flex items-center px-3 sm:px-20 py-6 justify-between shadow-md bg-header-dark"
          : "flex items-center px-3 sm:px-20 py-6 justify-between shadow-md bg-white"
      }
    >
      <h1
        className={
          themeCxt.isThemeDark
            ? "font-bold sm:text-2xl text-white"
            : " font-bold sm:text-2xl"
        }
      >
        Where in the world?
      </h1>
      <nav className={themeCxt.isThemeDark ? " text-white" : ""}>
        <button className="flex items-center" onClick={themeCxt.changeTheme}>
          {themeCxt.isThemeDark ? <BsMoonFill className="mr-2 text-white"/> : <BsMoon className="mr-2"/>}
          
          <span className="font-semibold">
            {themeCxt.isThemeDark ? "Light" : "Dark"} Mode
          </span>
        </button>
      </nav>
    </header>
  );
}
