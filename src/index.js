    import React, { createContext, useContext, useState,Provider} from 'react';
    import ReactDOM from 'react-dom';
    import reportWebVitals from './reportWebVitals';
    import {Button,ButtonGroup,Container,Grid,Paper,IconButton,TextField,Select,Menu, colors} from '@material-ui/core'
    import{Delete,ArrowBack,Facebook,LinkedIn,Email} from '@material-ui/icons'
    import {useFormik,Formik} from 'formik'
    import Logo from './Logo3.png'
    import Sobre from './Sobre.png'
    import './Style.css'
    import Basic from'./Basic'
    import {BrowserRouter as Router,Switch,Route,Link, useHistory} from "react-router-dom";
    
        const LoginForm = ()=>{
          
                let history = useHistory()
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
                    const obj = {login:localStorage.getItem("login"),password:localStorage.getItem("password")}
                    if(obj.login==formik.values.email && obj.password == formik.values.password){
                      history.push("/gerenciamento")
                    }else{
                      
                    }
                  }
                })
          return(
            <Container>
              <h1 style={{textAlign:"center",marginTop:"2%",fontSize:"50px",color:"rgba(225, 187, 116, 1)"}}>Login</h1>
               <form style={{width:"fit-content",margin:"0 auto",marginTop:"5%"}} onSubmit={formik.handleSubmit}>
                 <Grid direction="column" container spacing={2}>
                   <Grid item>
                   <TextField onBlur={formik.handleBlur} label="E-mail" id="email" nome="email" type="email" onChange={formik.handleChange} value={formik.values.email}/>
                  {formik.errors.email && formik.touched.email ?<div style={{color:"red"}}> {formik.errors.email}</div>:null}
                   </Grid>
                   <Grid item>
                   <TextField onBlur={formik.handleBlur} label="Senha" id="password" nome="password" type="password" onChange={formik.handleChange} value={formik.values.password}/>
                   {formik.touched.password &&  formik.errors.password ? <div style={{color:"red"}}>{formik.errors.password}</div> : null}
                   </Grid>
                   <Grid item>
                   <Button style={{backgroundColor:"rgba(225, 187, 116, 1)",fontWeight:"bold"}}  variant="contained" fullWidth type="onSubmit">Entrar</Button>
                   </Grid>
                 </Grid>
            </form>
            </Container>
          )
        }
        const RegisterForm = ()=>{
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
                  localStorage.setItem("login",values.email)
                  localStorage.setItem("password",values.password)
                  formik.handleReset()
                }
              })
              return(
                <Container>
                  <h1 style={{textAlign:"center",marginTop:"2%",fontSize:"50px",color:"rgba(225, 187, 116, 1)"}}>Cadastrar</h1>
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
                      <Button style={{backgroundColor:"rgba(225, 187, 116, 1)",fontWeight:"bold"}}  variant="contained" fullWidth type="onSubmit">Cadastrar</Button>
                      </Grid>
                    </Grid>
                </form>
                  </Formik>
                </Container>
              )
          }
          const Title = ()=>{
          return (
            <h1 style={{color:"rgba(225, 187, 116, 1)",fontSize:"50px",marginLeft:"25%"}} >Calopsite</h1>
          )
          }
          const Home = ()=>{
            let history = useHistory()
            return(
              <Container>
                <Grid container style={{backgroundColor:"black",padding:"2%"}}  alignItems="center" justify="space-around">
                  <Grid item>
                    <Title/>
                  </Grid>
                  <Grid item>
                  <ButtonGroup style={{marginLeft:"39%"}} size="large" variant="text" color="secondary" aria-label="outlined primary button group">
                  <Button onClick={()=> history.push("/cadastrar")} style={{color:"rgba(225, 187, 116, 1)"}}>Cadastrar</Button>
                  <Button  onClick={()=> history.push("/login")} style={{color:"rgba(225, 187, 116, 1)"}} >Logar</Button>
                  <Button onClick={()=> history.push("/sobre")} style={{color:"rgba(225, 187, 116, 1)"}} >Contato</Button>
                </ButtonGroup>
                  </Grid>
                </Grid>
                <img width="100%" src={Logo}></img>
              </Container>
            )
          }
          const Routes = ()=>{
            return(
              <Router>
                <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/cadastrar" component={Register}/>
            <Route path="/sobre" component={About}/>
            <Route path="/gerenciamento" component={ManagedArea}/>
                </Switch>
              </Router>
            )
          }
          const Login = ()=>{
            const history = useHistory()
            return(
              <Container>
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
                <div style={{width:"100%",height:"400px",backgroundColor:"white",marginTop:"3%"}}>
                  <LoginForm/>
                </div>
              </Grid>
            </Container>
            )
          } 
          const About = ()=>{
            const history = useHistory()
            return(
              <Container>
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
              </Grid>
              <img width="100%" src={Sobre}></img>
              <Grid container style={{backgroundColor:"black"}}  alignItems="center" justify="center">
              <Grid item>
                <IconButton style={{color:"rgba(225, 187, 116, 1)"}}>
                  <Facebook/>
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton style={{color:"rgba(225, 187, 116, 1)"}}>
                  <LinkedIn/>
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton style={{color:"rgba(225, 187, 116, 1)"}}>
                  <Email/>
                </IconButton>
              </Grid>
              </Grid>
            </Container>
            )
          }
          const Register = ()=>{
            const history = useHistory()
            return(
              <Container>
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
                <div style={{width:"100%",height:"400px",backgroundColor:"white",marginTop:"3%",padding:"2%"}}>
                <RegisterForm/>
                </div>
              </Grid>
            </Container>
            )
          }
        
           const ManagedArea = ()=>{
              return(
                <h1> Área De Gerenciamento</h1>
              )
          }
        
        ReactDOM.render(
          <React.StrictMode>
        <Routes/>
          </React.StrictMode>,
          document.getElementById('root')
        );

