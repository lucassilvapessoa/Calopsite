
      import LoginForm from '../Components/LoginForm'
      import Title from '../Components/Title'
      import {useHistory} from 'react-router-dom'
      import {Container,Grid,IconButton} from '@material-ui/core'
      import {ArrowBack} from '@material-ui/icons'
      
  export default function Login(){
      const history = useHistory()
      return(
        <div style={{position:"fixed",height:"100%",width:"100%"}}> 
        <Grid container style={{position:"absolute",backgroundColor:"black",padding:"2%"}}  alignItems="center" justify="space-around">
          <Grid item>
          <Title/>
          </Grid>
          <Grid item>
          <IconButton  onClick={()=> history.push("/")}  aria-label="delete"  style={{color:"rgba(225, 187, 116, 1)"}} >
        <ArrowBack enableBackground="true"/>
        Inicio
      </IconButton>
          </Grid>
          <div style={{padding:"2%",margin:"0 auto",position:"absolute",top:"100%",left:"25%",right:"25%"}}>
            <LoginForm/>
          </div>
        </Grid>
        </div>
      )
  }