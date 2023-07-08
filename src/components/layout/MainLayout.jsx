import { Fragment, useState } from "react";
import Header from "../global/Header";

export default function MainLayout(props) {
    const [theme,setTheme] = useState('Light');
    const handleChangeTheme = () => {
        if(theme === 'Dark')
        {
            setTheme('Light')
        }
        else if(theme === 'Light')
        {
             setTheme("Dark");
        }
    }
    return (
      <Fragment>
        <Header theme={theme} changeTheme={handleChangeTheme} />
        <main >{props.children}</main>
      </Fragment>
    );
}