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
          
          <Link  className="lin" to={`/${id}`}>Detalhes Gerais
          <img  width="70%" src={detalhes}/>
          </Link>
      
          </Grid>  
              <Grid item sm={2} >
              <Link className="lin"  to="/1" >Visualizar Gastos
              <img  width="70%" src={gastos}/>
              </Link>
                  
              </Grid>
              <Grid item sm={2} >
              <Link className="lin" to="/1" >Cadastrar Gaiola
              <img  width="70%" src={gaiola}/>
              </Link>
                  
              </Grid>
              <Grid item sm={2} >
              <Link className="lin" to="/CadastrarPassaro/1" >Cadastrar Passaro
               <img  width="70%" src={passaro}/>
               </Link>
                 
              </Grid>
              <Grid item sm={2} >
              <Link className="lin" to="/1" >Registrar Gasto
              <img  width="70%" src={consumo}/>
              </Link>
   
              </Grid>
              <Grid item sm={2} >
              <Link className="lin" onClick={()=>{
                history.push("/")
              }} > 
                Deslogar
                <img width="77%" src={deslogar}/>
                </Link>
                
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

  