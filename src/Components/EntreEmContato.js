import axios from 'axios'
import  {useParams} from 'react-router-dom'
import {Formik,useFormik} from 'formik'
import { TextField,Container,Grid,MenuItem,InputLabel,Typography,Button} from '@material-ui/core'
import {DatePicker} from 'react-datepicker'
import {Calendar} from '@material-ui/pickers'
import Select from 'react-select'
import { useState,useEffect } from 'react'



export default function CadastrarGaiola(){
    const {id} = useParams()
    
    const[valores,setValores] = useState({email:"",texto:""})
    useEffect (()=>{
        alert("Entrei aqui tudo pronto para enviar")
    },valores)
 
    const validate = values=>{  
       const errors = {}
       if(!values.email){
           errors.email = "especie é obrigatório"
       }
       if(!values.texto){
           errors.texto = "valor é obrigatório"
       }
    
       return errors
   }
   const formik = useFormik({initialValues:{
    email:"",
    texto:"",
    },validate,
    onSubmit:values=>{
        setValores({email:values.email,texto:values.texto})
        alert(JSON.stringify(values, null, 2));
    }
 })

 return (
    <Container style={{width:"fit-content",marginTop:"2%"}}>
         <h1 style={{textAlign:"center"}}> {id}: Fale Conosco</h1>
         <Formik>
            <form style={{width:"fit-content",margin:"0 auto",marginTop:"5%"}} onSubmit={formik.handleSubmit}>
                 <Grid direction="column" container spacing={4}>
                     <Grid item >
                         <TextField id="email" onChange={formik.handleChange} value={formik.values.email} label={ <Typography variant="headline" component="h3"> E-mail </Typography>}  inputProps={{style:{fontSize:30}}}/>
                     </Grid>

                     <Grid item >

                         <textarea style={{minHeight:"150px",width:"325px"}} id="texto" onChange={formik.handleChange} value={formik.values.texto} label={ <Typography variant="headline" component="h3"> Texto </Typography>}  inputProps={{style:{fontSize:30}}}/>
                     </Grid>
                  
                     <Grid item>
                         <Button style={{backgroundColor:"rgba(225, 187, 116, 1)",fontWeight:"bold",fontSize:"20px",marginTop:"5%"}}  variant="contained" fullWidth type="onSubmit">Enviar E-mail</Button>
                     </Grid>
                 </Grid>
                 </form>
         </Formik>
    </Container>
 )
}


