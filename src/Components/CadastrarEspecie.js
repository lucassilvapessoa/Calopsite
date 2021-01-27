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
   const[valores,setValores] = useState({especie:"",valor:"",descricao:""})
   useEffect (()=>{
       alert("Entrei aqui tudo pronto para enviar")
   },valores)

   const validate = values=>{  
      const errors = {}
      if(!values.especie){
          errors.especie = "especie é obrigatório"
      }
      if(!values.valor){
          errors.valor = "valor é obrigatório"
      }
      if(!values.descricao){
          errors.valor = "descricao é obrigatório"
      }
   
      return errors
  }
  const formik = useFormik({initialValues:{
   nome:"",
   valor:"",
   descricao:""
   },validate,
   onSubmit:values=>{
       setValores({especie:values.especie,valor:values.valor,descricao:values.descricao})
       alert(JSON.stringify(values, null, 2));
   }
})


    return (
       <Container style={{width:"fit-content",marginTop:"2%"}}>
            <h1 style={{textAlign:"center"}}> {id}: Cadastrar Especie</h1>
            <Formik>
               <form style={{width:"fit-content",margin:"0 auto",marginTop:"5%"}} onSubmit={formik.handleSubmit}>
                    <Grid direction="column" container spacing={4}>
                        <Grid item >
                            <TextField id="especie" onChange={formik.handleChange} value={formik.values.especie} label={ <Typography variant="headline" component="h3"> Especie </Typography>}  inputProps={{style:{fontSize:30}}}/>
                        </Grid>

                        <Grid item >
                            <TextField id="valor" onChange={formik.handleChange} value={formik.values.valor} label={ <Typography variant="headline" component="h3"> Valor </Typography>}  inputProps={{style:{fontSize:30}}}/>
                        </Grid>

                        <Grid item >
                            <TextField id="descricao" onChange={formik.handleChange} value={formik.values.descricao} label={ <Typography variant="headline" component="h3"> Descricao </Typography>}  inputProps={{style:{fontSize:30}}}/>
                        </Grid>
                     
                        <Grid item>
                            <Button style={{backgroundColor:"rgba(225, 187, 116, 1)",fontWeight:"bold",fontSize:"20px",marginTop:"5%"}}  variant="contained" fullWidth type="onSubmit">Cadastrar Espécie</Button>
                        </Grid>
                    </Grid>
               </form>
            </Formik>
       </Container>
    )
}