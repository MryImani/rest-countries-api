import { Fragment } from "react";
import Header from "../global/Header";

export default function MainLayout(props) {
    return(
        <Fragment>
            <Header/>
            <main>
                { props.children}
            </main>
        </Fragment>
    )
}