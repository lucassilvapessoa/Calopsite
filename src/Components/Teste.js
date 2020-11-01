import React from 'react'
import {Paper,Grid,Container} from '@material-ui/core'
  import deslogar from '../deslogar.png'
  import gastos from '../gastos.png'
  import consumo from '../consumo.png'
  import gaiola from '../gaiola.png'
  import passaro from '../passaro.png'
  import detalhes from '../detalhes.png'
  import HomeTeste from '../Components/HomeTeste'
  import CadastrarGaiola from '../Components/CadastrarGaiola'
  import CadastrarPassaro from '../Components/CadastrarPassaro'
  import VisualizarGastos from '../Components/VisualizarGastos'
  import RegistrarGasto from '../Components/RegistrarGasto'
  import {
    BrowserRouter as Router,
    Switch,
    Route,
    useHistory,
    Link,
    Redirect,
  } from "react-router-dom";
  
export default function BasicExample({id}) {
  const history = useHistory()
    return (
      <Router>
        <Container style={{backgroundColor:"black",zoom:"70%"}}>
        <h1 style={{color:"rgb(233, 184, 114)",textAlign:"center",padding:"2%"}}>Id: {id} Seja bem vindo</h1>
        <Paper>
          <Grid container direction="row">
          <Grid item sm={2} >
          
          <Link  className="lin" to={`/${id}`}>Detalhes Gerais
          <img  width="55%" src={detalhes}/>
          </Link>
      
          </Grid>  
              <Grid item sm={2} >
              <Link className="lin"  to={`/VizualizarGastos/${id}`} >Visualizar Gastos
              <img  width="55%" src={gastos}/>
              </Link>
                  
              </Grid>
              <Grid item sm={2} >
              <Link className="lin" to={`/CadastrarGaiola/${id}`} >Cadastrar Gaiola
              <img  width="55%" src={gaiola}/>
              </Link>
                  
              </Grid>
              <Grid item sm={2} >
              <Link className="lin" to={`/CadastrarPassaro/${id}`} >Cadastrar Passaro
               <img  width="55%" src={passaro}/>
               </Link>
                 
              </Grid>
              <Grid item sm={2} >
              <Link className="lin" to={`/RegistrarGasto/${id}`} >Registrar Gasto
              <img  width="55%" src={consumo}/>
              </Link>
   
              </Grid>
              <Grid item sm={2} >
              <Link className="lin" onClick={()=>{
                history.push("/")
              }} > 
                Deslogar
                <img width="60%" src={deslogar}/>
                </Link>
              </Grid>
          </Grid>
          <Switch>
            <Route  path="/:id" exact component={HomeTeste}/>
            <Route  path="/CadastrarPassaro/:id" component={CadastrarPassaro}/>
            <Route  path="/CadastrarGaiola/:id" component={CadastrarGaiola}/>
            <Route path="/VizualizarGastos/:id" component={VisualizarGastos}/>
            <Route path="/RegistrarGasto/:id" component={RegistrarGasto}/>
          </Switch>
          </Paper>
          </Container>
      </Router>
    );
  }

  