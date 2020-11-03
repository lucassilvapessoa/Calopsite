    import {useHistory} from 'react-router-dom'
    import {Container,Grid,IconButton} from '@material-ui/core'
    import {Facebook,LinkedIn,Email,ArrowBack} from '@material-ui/icons'
    import Title from '../Components/Title'
    import Sobre from '../Sobre.png'



    export default function About(){
        const history = useHistory()
        return(
          <div style={{position:"fixed",height:"100%", width:"100%"}}> 
          <Grid  direction="row"  container style={{backgroundColor:"black",padding:"2%",position:"absolute"}}  justify="space-around"  alignItems="center">
            <Grid  item xs={12} sm={2} >
                <Title/>
            </Grid> 
            <Grid item   xs={12} sm={1} >
              <IconButton  size="large" onClick={()=> history.push("/")}  style={{color:"rgba(225, 187, 116, 1)"}}>
              <ArrowBack enableBackground="true"/>
              Inicio
              </IconButton>
          </Grid>
            </Grid> 
            <Grid container direction="row"  >
              <Grid item xs={12} sm={12}>
                <img  style={{width:"100%",position:"absolute",height:"88%",top:"12%"}} src={Sobre}></img>
              </Grid>
            </Grid>
            </div>
        )
    }