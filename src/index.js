import { createRoot } from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
// import './index.css';
import App from './Components/App';


const appElement = document.getElementById("app");
const root = createRoot(appElement);
root.render(
<BrowserRouter>
<App/>
</BrowserRouter>);








