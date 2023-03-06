import { createRoot } from 'react-dom/client' 
const App = () => {           
    return (                     
        <div>                             
            <h2>Hello World!</h2>            
        </div> ) }
const appElement = document.getElementById("app")
const root = createRoot(appElement)
root.render(<BrowserRouter><App /></BrowserRouter>);