import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { ThemeProvide } from "./theme/ThemeProvider";

render( 
    <BrowserRouter>
        <ThemeProvide>
             <App/>
        </ThemeProvide>
    </BrowserRouter>,
    document.getElementById('root'),
)