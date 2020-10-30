  import {Paper,Grid,Container,IconButton,Button} from '@material-ui/core'
  import {ArrowBack,Email} from '@material-ui/icons'
  import ca from '../ca.png'
  import job from '../job.svg'
  import deslogar from '../deslogar.png'
  import gastos from '../gastos.png'
  import consumo from '../consumo.png'
  import gaiola from '../gaiola.png'
  import passaro from '../passaro.png'
  import detalhes from '../detalhes.png'
import {
  useParams,
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";


export default function ManagedArea(){
  const params = useParams()
  const history = useHistory()
    return(
      <Router>
<Container style={{backgroundColor:"black",zoom:"90%"}}>
          <h1 style={{color:"rgb(233, 184, 114)",textAlign:"center",padding:"2%"}}>Id: {params.id} Seja bem vindo</h1>
          <Paper>
            <Grid container direction="row">
              <Grid item sm={2} >
                <Button variant="outlined">
                  <img style={{display:"block"}} width="40%" src={detalhes}/>
                  <p>Gaiolas detalhadas</p>
                </Button>
              </Grid>    
              <Grid item sm={2} >
                <Button variant="outlined">
                  <img style={{display:"block"}} width="40%" src={gastos}/>
                  <p>Vizualizar Gastos</p>
                </Button>
              </Grid>
              <Grid item sm={2} >
                <Button variant="outlined">
                  <img style={{display:"block"}} width="40%" src={gaiola}/>
                  <p>Cadastrar Gaiola</p>
                </Button>
              </Grid>
              <Grid item sm={2} >
                <Button variant="outlined">
                  <img style={{display:"block"}} width="40%" src={passaro}/>
                  <p>Cadastrar Passaro</p>
                </Button>
              </Grid>
              <Grid item sm={2} >
                <Button variant="outlined">
                  <img style={{display:"block"}} width="40%" src={consumo}/>
                  <p>Registrar Gasto</p>
                </Button>
              </Grid>
              <Grid item sm={2} >
                <Button variant="outlined">
                  <img style={{display:"block"}} width="40%" src={deslogar}/>
                  <p>Deslogar</p>
                </Button>
              </Grid>
          </Grid>
            <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home id={params.id} />
          </Route>
        </Switch>
          </Paper>
        </Container>
      </Router>
     
      )
}
function Home({id}) {
return(
  <div style={{height:"300px",width:"100%",margin:"0 auto",padding:"2%"}}>
    <Paper elevation={3}>
      <h1>Total gaiola : 1</h1>
      <h1>Total de aves : 2</h1>
      <h1>Aves disponiveis :3</h1>
      <h1>Aves masculinas:3</h1>
      <h1>Aves femininas:5</h1>
    </Paper>
  </div>
)
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
    