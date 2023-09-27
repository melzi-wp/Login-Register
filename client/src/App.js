import { BrowserRouter, Routes, Route } from "react-router-dom";
import home from "./components/home.js"
import login from "./components/login.js"
import register from "./components/register.js"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = { <login /> } />
          <Route path = "/register" element = { <register /> } />
          <Route path = "/home" element = { <home /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;