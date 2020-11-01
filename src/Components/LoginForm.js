import {useHistory} from 'react-router-dom'
import {useState,useEffect,useRef} from 'react'
import {useFormik} from 'formik'
import {Grid,Container,Button,TextField,CircularProgress,Typography} from '@material-ui/core'
import axios from 'axios'
import RegisterForm from '../Components/RegisterForm'

export default function LoginForm(){
    let history = useHistory()
    const butonRef = useRef()
     const [pronto,setPronto] = useState({email:"",password:""})
     const[match,setMatch] = useState(true)
     useEffect(()=>{
      if(pronto.email.length>0){
        logar()
      }
      async function logar(){
        const result = await axios.get(`http://localhost:8089/login/${pronto.email}/${pronto.password}`)
        if(result.data==false){
          setMatch(false)
          setTimeout(()=>{
           setMatch(true)
          },3000)
        }else{
          setMatch("loader")
          setTimeout(() => {
            let id = result.data.id
            localStorage.setItem("id",id)
          let token = result.data.token
          localStorage.setItem("token",result.data.token)
           history.push(`/gerenciamento/${result.data.id}`)
          }, 3000);
          
        }
      }
     },[pronto])  
      const validate = values =>{
        const errors = {};
        if(!values.password){
          errors.password = "Senha obrigatório"
        }
        if(!values.email){
          errors.email = "E-mail obrigatório"
        } 
        return errors;
      }
      const formik = useFormik({initialValues:{ email:"", password:"",invalido:false},validate,
        onSubmit:values=>{
            setPronto({email:values.email,password:values.password})
        }
      })
return(
  <Container>
    <h1 style={{textAlign:"center",marginTop:"2%",fontSize:"50px",color:"rgba(225, 187, 116, 1)"}}>Login</h1>
     <form style={{width:"fit-content",margin:"0 auto",marginTop:"5%"}} onSubmit={formik.handleSubmit}>
       <Grid direction="column" container spacing={4}>
         <Grid item>
         <TextField  inputProps={{style:{fontSize:30}}}  onBlur={formik.handleBlur} label={ <Typography variant="headline" component="h3"> E-mail</Typography>} id="email" nome="email" type="email" onChange={formik.handleChange} value={formik.values.email}/>
        {formik.errors.email && formik.touched.email ?<div style={{color:"red",fontSize:"25px"}}> {formik.errors.email}</div>:null}
         </Grid>
         <Grid item>
         <TextField onBlur={formik.handleBlur} style={{width:"100%"}} label={ <Typography variant="headline" component="h3"> Senha </Typography>} id="password" nome="password" type="password" onChange={formik.handleChange} value={formik.values.password}/>
         {formik.touched.password &&  formik.errors.password ? <div style={{color:"red",fontSize:"25px"}}>{formik.errors.password}</div> : null}
         </Grid>
         <Grid item>
           <Grid item>
             {!match ? <Typography style={{color:"red"}} variant="headline" component="h2"> Usuario e senha não encontrados </Typography>:null}
           </Grid>   
         <Button disabled={match==="loader"} style={{backgroundColor:"rgba(225, 187, 116, 1)",fontWeight:"bold",fontSize:"20px"}}  variant="contained" fullWidth type="onSubmit">Entrar</Button>
         <Grid item >
         {match ==="loader" ? < CircularProgress style={{marginTop:"5%",color:"rgba(225, 187, 116, 1)"}}></CircularProgress> :null}
         </Grid>
         </Grid>
       </Grid>
  </form>
  </Container>
)
}