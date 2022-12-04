import React from "react"
import ReactDOM from "react-dom"

import Main from "./Main.jsx"
import Title from "./Heading.jsx"
import Footer from "./Footer.jsx"
const App = (
    <div id = "Container">
        <Title />
        <Main />
        <Footer />
    </div>
)

ReactDOM.render(App, document.querySelector("#root"));
console.log(Twitter);