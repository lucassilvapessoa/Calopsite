
import {useHistory} from 'react-router-dom'
import Title from '../Components/Title'
import{Container,Grid,Button,ButtonGroup} from "@material-ui/core"
import Logo from '../Logo3.png'

export default function Home(){
  localStorage.clear()
  console.log(localStorage)
    let history = useHistory()
    return(
      <Container  style={{zoom:"67%"}}>
        <Grid id="grid-container"  container   alignItems="center" justify="space-around">
          <Grid   item xl={12} sm={2}>
            <Title/>
          </Grid>
          <Grid  item xl={12} sm={3}>
          <ButtonGroup   size="large" variant="text" color="secondary" aria-label="outlined primary button group">
          <Button  id="btn1"  onClick={()=> history.push("/cadastrar")}>Cadastrar</Button>
          <Button id="btn2" onClick={()=> history.push("/login")}  >Logar</Button>
          <Button id="btn3" onClick={()=> history.push("/sobre")}  >Contato</Button>
        </ButtonGroup>
          </Grid>
        </Grid>
        <img width="100%" src={Logo}></img>
      </Container>
    )
}