import ThemeContext from '@/store/theme-context';
import { useContext } from 'react';
import {BsMoon} from 'react-icons/bs'
export default function Header(props) {
  const themeCxt = useContext(ThemeContext);
  return (
    <header
      className={
        themeCxt.isThemeDark
          ? "flex px-8 md:px-20 py-6 justify-between shadow-md bg-header-dark"
          : "flex px-8 md:px-20 py-6 justify-between shadow-md bg-white"
      }
    >
      <h1
        className={
          themeCxt.isThemeDark
            ? "font-bold text-2xl text-white"
            : " font-bold text-2xl"
        }
      >
        Where in the world?
      </h1>
      <nav className={themeCxt.isThemeDark ? " text-white" : ""}>
        <button className="flex items-center" onClick={themeCxt.changeTheme}>
          <BsMoon className="mr-2" />
          <span className="font-semibold">
            {themeCxt.isThemeDark ? "Light" : "Dark"} Mode
          </span>
        </button>
      </nav>
    </header>
  );
}
