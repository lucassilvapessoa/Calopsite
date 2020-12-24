
import {useHistory} from 'react-router-dom'
import Title from '../Components/Title'
import{Container,Grid,Button,ButtonGroup} from "@material-ui/core"
import Logo from '../Logo3.png'
export default function Home(){
  localStorage.clear()
  console.log(localStorage)
    let history = useHistory()
    return(
      <div style={{position:"fixed",height:"100%",width:"100%"}}> 
      <img src={Logo} style={{position:"absolute",top:"10%",width:"100%",height:"90%"}}/>
        <Grid style={{position:"absolute",backgroundColor:"black",padding:"2%"}}  container   alignItems="center" justify="space-around">
          <Grid  item xl={9} sm={2}>
            <Title/>
          </Grid>
          <Grid  item xl={3} sm={3}>
          <ButtonGroup   size="large" variant="text" color="secondary" aria-label="outlined primary button group">
          <Button  id="btn1"  onClick={()=> history.push("/cadastrar")}>Cadastrar</Button>
          <Button id="btn2" onClick={()=> history.push("/login")}  >Logar</Button>
          <Button id="btn3" onClick={()=> history.push("/sobre")}  >Contato</Button>
        </ButtonGroup>
          </Grid>
        </Grid>
      </div>
      

    )
}