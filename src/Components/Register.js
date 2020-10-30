import {useHistory} from 'react-router-dom'
import {Container,Grid,IconButton} from '@material-ui/core'
import Title from '../Components/Title'
import RegisterForm from '../Components/RegisterForm'
import {ArrowBack} from '@material-ui/icons'


export default function Register(){
    const history = useHistory()
    return(
      <Container style={{zoom:"67%"}}>
      <Grid container style={{backgroundColor:"black",padding:"2%"}}  alignItems="center" justify="space-between">
        <Grid item>
        <Title/>
        </Grid>
        <Grid item>
        <IconButton  onClick={()=> history.push("/")}  aria-label="delete"  style={{color:"rgba(225, 187, 116, 1)"}} >
      <ArrowBack enableBackground="true"/>
      Inicio
    </IconButton>
        </Grid>
        <div style={{width:"100%",backgroundColor:"white",marginTop:"3%",padding:"2%"}}>
        <RegisterForm/>
        </div>
      </Grid>
    </Container>
    )
}