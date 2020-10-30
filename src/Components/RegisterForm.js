import {Grid,Button,CircularProgress,TextField,Container} from '@material-ui/core'
import {useHistory} from 'react-router-dom'
import {Formik,useFormik} from 'formik'
import axios from 'axios'
import {useState,useEffect} from 'react'


export default function RegisterForm(){
    const history = useHistory()
          const [pronto,setPronto] = useState({email:"",password:""})
          const[register,setRegister] = useState(false)
          const [loader,setLoader] = useState(false)
          useEffect(()=>{
            if(pronto.email.length>0){
              registrar()
            }
            async function registrar(){
               let resultado = await axios.post(`http://localhost:8089/cadastrar/${pronto.email}/${pronto.password}`)
               if(resultado.data=="Escolha usuario e senha diferentes"){
                 setRegister(true)
                 setTimeout(()=>{
                  setRegister(false)
                 },3000)
               }else{
                 setLoader(true)
                setTimeout(()=>{
                 history.push("/")
                },4000)
               }
            }
           },[pronto])
          
              const validate = values =>{
                const errors = {}
                if(!values.email){
                  errors.email = "E-mail obrigatório"
                }
                if(!values.password){
                  errors.password = "Senha obrigatória"

                }else if(values.password.length <6){
                  errors.password = "A senha de no miínimo 6 digítos"
                }
                return errors
              }
              const formik = useFormik({
                initialValues:{
                  email:"",
                  password:"",
                },validate,
                onSubmit:values=>{
                  setPronto({email:values.email,password:values.password})
                }
              })
              return(
                <Container>
                  <h1 id="titulo2" style={{textAlign:"center",marginTop:"2%",fontSize:"50px",color:"rgba(225, 187, 116, 1)"}}>Cadastrar</h1>
                  <Formik >
                  <form style={{width:"fit-content",margin:"0 auto",marginTop:"5%"}} onSubmit={formik.handleSubmit}>
                    <Grid direction="column" container spacing={2}>
                      <Grid item>
                     <TextField onBlur={formik.handleBlur} label="E-mail" id="email" nome="email" type="email" onChange={formik.handleChange} value={formik.values.email}/>
                       {formik.errors.email && formik.touched.email ? <div style={{color:"red"}}>{formik.errors.email}</div>:null}
                      </Grid>
                      <Grid item>
                      <TextField onBlur={formik.handleBlur}  label="Senha" id="password" nome="password" type="password" onChange={formik.handleChange} value={formik.values.password}/>
                    {formik.errors.password && formik.touched.password ? <div style={{color:"red"}}>{formik.errors.password}</div>:null}
                      </Grid>
                      <Grid item>
                        {register ? <h4 style={{color:"red"}}>Usuario e senha já existem</h4>:null}
                      </Grid>
                      <Grid item>
                      <Button disabled={loader===true} style={{backgroundColor:"rgba(225, 187, 116, 1)",fontWeight:"bold"}}  variant="contained" fullWidth type="onSubmit">Cadastrar</Button>
                      </Grid>
                      <Grid item>
                        <Grid container direction="row" alignItems="center">
                          <Grid item>
                          {loader ? < CircularProgress style={{color:"rgba(225, 187, 116, 1)",display:"inline-block"}} ></CircularProgress> :null}
                          </Grid>
                          <Grid item>
                            {loader ? <h4 style={{color:"rgba(225, 187, 116, 1)"}}>Realizando cadastro</h4>:null}
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                </form>
                  </Formik>
                </Container>
              )
}