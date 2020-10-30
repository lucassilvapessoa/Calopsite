
  import {BrowserRouter as Router,Switch,Route,Link, useHistory} from "react-router-dom";
  import Home from '../Components/Home'
  import Login from '../Components/Login'
 import Register from '../Components/Register'
 import About from '../Components/About'
 import ManagedArea from '../Components/ManagedArea'
 import '../Style.css'
 

export default function Routess (){
    return(
        <Router>
          <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/cadastrar" component={Register}/>
      <Route path="/sobre" component={About}/>
      <Route path="/gerenciamento/:id" component={ManagedArea}/>
          </Switch>
        </Router>
      )
}