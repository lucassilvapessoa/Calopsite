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
        const url = "http://localhost:8080/login"
        const data = {email: pronto.email,password:pronto.password}
        const headers = {
          "Content-Type": "application/json",
    
      }
        const result = await axios.post(url, data, headers)
        if(result){
        const url = "http://localhost:8080/users/logged"
       const dados = await axios.get(url,{params:{},headers:{
        'Authorization': result.headers.authorization
       }})
       if(dados){
        setMatch("loader")
        setTimeout(() => {
          let id = dados.data.id
          localStorage.setItem("id",id)
          history.push(`/gerenciamento/${id}`)
          localStorage.setItem("token",result.headers.authorization)
        }, 3000);
       }else{
        setMatch(false)
        setTimeout(()=>{
         setMatch(true)
        },3000)
       }
      }
            
        /*
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
        */
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
         <TextField onBlur={formik.handleBlur} style={{width:"100%",fontSize:30}} label={ <Typography variant="headline" component="h3"> Senha </Typography>} id="password" nome="password" type="password" onChange={formik.handleChange} value={formik.values.password}/>
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