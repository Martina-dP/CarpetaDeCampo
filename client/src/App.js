import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PagPrincipal from "./components/PagPrincipal/PagPrincipal";
import SingIn from "./components/Forms/SingIn";
import LogIn from "./components/Forms/LogIn";
import ResetPassword from "./components/Forms/ResetPassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path = "/" element = {<PagPrincipal/>} />
        <Route path = "/SingIn" element = {<SingIn/>} />
        <Route path = "/LogIn" element = {<LogIn/>} />
        <Route path = "/ResetPassword" element = {<ResetPassword/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
