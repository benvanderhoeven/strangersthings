import { createRoot } from 'react-dom/client' 
const App = () => {           
    return (                     
        <>
        <h4>Register</h4>
        <form>
          <input type="text" placeholder="username"></input>
          <input type="password" placeholder="password"></input>
          <button type="submit">Register</button>
        </form>
      </> ) }
const appElement = document.getElementById("app")
const root = createRoot(appElement)
root.render(<BrowserRouter><App /></BrowserRouter>);