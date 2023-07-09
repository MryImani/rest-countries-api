import { createContext, useState } from "react";

const ThemeContext = createContext({
  isThemeDark: null,
  changeTheme: () => {},
});

export function ThemeContextProvider(props) {
  const [darkActive, setDarkActive] = useState(true);

  function handleChangeTheme() {
    setDarkActive((prevState) => !prevState);
  }
  const context = {
    isThemeDark: darkActive,
    changeTheme: handleChangeTheme,
  };
  return (
    <ThemeContext.Provider value={context}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
