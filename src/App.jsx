import React from "react"
import ReactDOM from "react-dom/client"

import Main from "./Main.jsx"
import Title from "./Heading.jsx"
import Footer from "./Footer.jsx"
// const App = (
//     <div id = "Container">
//         <Title />
//         <Main />
//         <Footer />
//     </div>
// )

// ReactDOM.render(App, document.querySelector("#root"));
// console.log(Twitter);

ReactDOM.createRoot(document.getElementById('root')).render(
    <div id = "Container">
        <Title />
        <Main />
        <Footer />
    </div>
)
