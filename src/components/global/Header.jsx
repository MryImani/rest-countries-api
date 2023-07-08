import { useState } from 'react';
import {BsMoon} from 'react-icons/bs'
export default function Header(props) {

  return (
    <header
      className={
        props.theme === "Dark"
          ? "flex px-8 md:px-20 py-6 justify-between shadow-md bg-header-dark"
          : "flex px-8 md:px-20 py-6 justify-between shadow-md bg-white"
      }
    >
      <h1
        className={
          props.theme === "Dark"
            ? "font-bold text-2xl text-white"
            : " font-bold text-2xl"
        }
      >
        Where in the world?
      </h1>
      <nav className={props.theme === "Dark" ? " text-white" : ""}>
        <button className="flex items-center" onClick={props.changeTheme}>
          <BsMoon className="mr-2" />
          <span className="font-semibold">{props.theme} Mode</span>
        </button>
      </nav>
    </header>
  );
}
