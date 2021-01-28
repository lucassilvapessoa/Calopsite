    import React from 'react'
    import {Paper,Grid,Container} from '@material-ui/core'
      import deslogar from '../deslogar.png'
      import diagrama from '../diagrama.png'
      import gastos from '../gastos.png'
      import consumo from '../consumo.png'
      import gaiola from '../gaiola.png'
      import verifica from '../verifica.png'
      import apresentacao from '../apresentacao.png'
      import deslog from '../deslog.png'
      import passaro from '../passaro.png'
      import passaro2 from '../passaro2.png'
      import detalhes from '../detalhes.png'
      import recibo from '../recibo.png'
      import apresentacao2 from '../apresentacao2.png'
      import HomeTeste from '../Components/HomeTeste'
      import CadastrarGaiola from '../Components/CadastrarGaiola'
      import CadastrarPassaro from '../Components/CadastrarPassaro'
      import CadastrarEspecie from '../Components/CadastrarEspecie'
      import VisualizarGastos from '../Components/VisualizarGastos'
      import RegistrarGasto from '../Components/RegistrarGasto'
      import EntreEmContato from '../Components/EntreEmContato'
      import VerificarLicenca from '../Components/VerificarLicenca'
      import VisualizarEspecies from '../Components/VizualizarEspecies'
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
            <div style={{width:"100%",backgroundColor:"black",margin:"0 auto"}}>
            <h1 style={{color:"rgb(233, 184, 114)",textAlign:"center",padding:"2%"}}>Id: {id} Seja bem vindo</h1>
            <Paper style={{padding:"2%"}}>
            <Grid container direction="row" spacing={2}>
              <Grid item sm={1} >
                <Link  className="lin" to={`/${id}`}>Detalhes Gerais
                  <img   width="55%" src={detalhes} style={{marginTop:"10%"}}/>
                </Link>
              </Grid> 

                <Grid item sm={1} >
                      <Link className="lin" to={`/CadastrarPassaro/${id}`} >Cadastrar Passaro
                        <img  width="55%" src={passaro} style={{marginTop:"10%"}}   />
                  </Link>
                  </Grid>

                <Grid item sm={1} >
                  <Link className="lin" to={`/CadastrarGaiola/${id}`} >Cadastrar Gaiola
                      <img  width="55%"    src={gaiola} style={{marginTop:"10%"}}/>
                  </Link>      
                </Grid>



                  <Grid item sm={1} >
                    <Link className="lin" to={`/RegistrarGasto/${id}`} >Registrar Gasto Gaiola 
                      <img  width="54%" src={consumo} style={{marginTop:"10%"}}/>
                    </Link>
                  </Grid>

                  <Grid item sm={1} >
                  <Link className="lin"  to={`/VizualizarGastos/${id}`} >Visualizar Gastos
                    <img  width="55%" src={recibo} style={{marginTop:"10%"}}/>
                  </Link>
                </Grid>


                <Grid item sm={1} >
                  <Link className="lin"  to={`/VerificarLicenca/${id}`} >CadastrarInsumo
                    <img  width="55%" src={verifica} style={{marginTop:"10%"}}/>
                  </Link>
                </Grid>

                <Grid item sm={1} >
                  <Link className="lin"  to={`/VizualizarGastos/${id}`} >Historico de vendas
                    <img  width="55%" src={apresentacao} style={{marginTop:"10%"}}/>
                  </Link>
                </Grid>


                <Grid item sm={1} >
                  <Link className="lin"  to={`/CadastrarEspecie/${id}`} >Cadastrar Especies
                    <img  width="55%" src={apresentacao2} style={{marginTop:"10%"}}/>
                  </Link>
                </Grid>

                <Grid item sm={1} >
                  <Link className="lin"  to={`/VizualizarEspecies/${id}`} >Vizualizar Especies
                    <img  width="55%" src={diagrama} style={{marginTop:"10%"}}/>
                  </Link>                                         
                </Grid>


                <Grid item sm={1} >
                  <Link className="lin"  to={`/VizualizarGastos/${id}`} >Vender Passaro
                    <img  width="55%" src={passaro2} style={{marginTop:"10%"}}  />
                  </Link>
                </Grid>
              

                <Grid item sm={1} >
                  <Link className="lin"  to={`/EntreEmContato/${id}`} >Entre em contato
                    <img  width="55%" src={gastos} style={{marginTop:"10%"}}/>
                  </Link>
                </Grid>


                  <Grid item sm={1} >
                      <Link className="lin" onClick={()=>{
                    history.push("/")
                  }} > 
                    Sair
                    <img width="75%" src={deslog} style={{marginTop:"10%"}} />
                      </Link>
                  </Grid>
              </Grid>

              <Switch>
                <Route  path="/:id" exact component={HomeTeste}/>
                <Route  path="/CadastrarPassaro/:id" component={CadastrarPassaro}/>
                <Route  path="/CadastrarGaiola/:id" component={CadastrarGaiola}/>
                <Route path="/VizualizarGastos/:id" component={VisualizarGastos}/>
                <Route path="/RegistrarGasto/:id" component={RegistrarGasto}/>
                <Route path="/CadastrarEspecie/:id" component={CadastrarEspecie}/>
                <Route path="/VerificarLicenca/:id" component={VerificarLicenca}/>
                <Route path="/EntreEmContato/:id" component={EntreEmContato}/>
                <Route path="/VizualizarEspecies/:id" component={VisualizarEspecies}/>

              </Switch>
              </Paper>


            </div>
            
            
          
          </Router>
        );                                                              
      }

      