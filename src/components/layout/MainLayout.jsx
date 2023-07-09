import { Fragment} from "react";
import Header from "../global/Header";
import ThemeContext from "@/store/theme-context";
import { useContext } from "react";
export default function MainLayout(props) {
  const themeCxt = useContext(ThemeContext);
    return (
      <Fragment>
        <Header/>
        <main className={themeCxt.isThemeDark && "bg-body-bg-dark"} >{props.children}</main>
      </Fragment>
    );
}