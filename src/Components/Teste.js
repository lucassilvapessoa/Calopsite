import React from 'react'
import {Paper,Grid,Container} from '@material-ui/core'
  import deslogar from '../deslogar.png'
  import gastos from '../gastos.png'
  import consumo from '../consumo.png'
  import gaiola from '../gaiola.png'
  import passaro from '../passaro.png'
  import detalhes from '../detalhes.png'
  import HomeTeste from '../Components/HomeTeste'
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
        <Container style={{backgroundColor:"black",zoom:"90%"}}>
        <h1 style={{color:"rgb(233, 184, 114)",textAlign:"center",padding:"2%"}}>Id: {id} Seja bem vindo</h1>
        <Paper>
          <Grid container direction="row">
          <Grid item sm={2} >
          <Link to="/1" >Detalhes Gerais</Link>
                  <img style={{display:"block"}} width="40%" src={detalhes}/>
          </Grid>  
              <Grid item sm={2} >
              <Link to="/1" >Visualizar Gastos</Link>
                  <img style={{display:"block"}} width="40%" src={gastos}/>
              </Grid>
              <Grid item sm={2} >
              <Link to="/1" >Cadastrar Gaiola</Link>
                  <img style={{display:"block"}} width="40%" src={gaiola}/>
              </Grid>
              <Grid item sm={2} >
              <Link to="/CadastrarPassaro/1" >Cadastrar Passaro</Link>
                  <img style={{display:"block"}} width="40%" src={passaro}/>
              </Grid>
              <Grid item sm={2} >
              <Link to="/1" >Registrar Gasto</Link>
                  <img style={{display:"block"}} width="40%" src={consumo}/>
              </Grid>
              <Grid item sm={2} >
              <Link onClick={()=>{
                history.push("/")
              }} >Deslogar</Link>
                  <img style={{display:"block"}} width="40%" src={deslogar}/>
              </Grid>
          </Grid>
          <Switch>
            <Route  path="/:id" exact component={HomeTeste}/>
            <Route  path="/CadastrarPassaro/:id">
              <h1 style={{color:"black"}} >About</h1>
            </Route>
            <Route  path="/CadastrarGaiola">
              <h1 style={{color:"black"}}>Area gerenciamneto</h1>
            </Route>
          </Switch>
          </Paper>
          </Container>
      </Router>
    );
  }

  