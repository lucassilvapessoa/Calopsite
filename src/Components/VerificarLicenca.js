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
   const[valores,setValores] = useState({nome:"",valor:"",quantidade:"",tipo:""})

 
   useEffect (()=>{
      if(valores.nome!="" && valores.valor!="" && valores.quantidade!="" && valores.tipo!=""){
           const tipo = valores.tipo === "medicament" ? "medicament" : "food"   
           const url = `http://localhost:8080/products/new?name=${valores.nome}&type=${tipo}&price=${valores.valor}&quantity=${valores.quantidade}`
        
        fetch(url,{
          method:'post',headers:new Headers({
            'Authorization':localStorage.getItem("token")
          })
        }).then((res)=>{
          alert("Insumo cadastrado com sucesso")
        }).catch((err)=>{
          alert("Erro ao cadastrar insumo")
        })
       } 
   },[valores])

   const validate = values=>{  
      const errors = {}
      if(!values.nome){
          errors.nome = "nome é obrigatório"
      }
      if(!values.valor){
          errors.valor = "valor é obrigatório"
      }
      if(!values.quantidade){
          errors.valor = "quantidade é obrigatório"
      }
  
    
   
      return errors
  }
  const options = [
    { value: 'food', label: 'ração' },
    { value: 'medicament', label: 'remedio' },
];
  const formik = useFormik({initialValues:{
   nome:"",
   valor:"",
   quantidade:"",
   tipo:""
   },validate,
   onSubmit:values=>{
       setValores({nome:values.nome,tipo:values.tipo,valor:values.valor,quantidade:values.quantidade})
       alert(JSON.stringify(values, null, 2));
   }
})

    return (
       <Container style={{width:"fit-content",marginTop:"2%"}}>
            <h1 style={{textAlign:"center"}}> {id}: Cadastrar Insumo</h1>
            <Formik>
               <form style={{width:"fit-content",margin:"0 auto",marginTop:"5%"}} onSubmit={formik.handleSubmit}>
                    <Grid direction="column" container spacing={4}>
                        <Grid item >
                            <TextField id="nome" onChange={formik.handleChange} value={formik.values.nome} label={ <Typography variant="headline" component="h3"> Nome </Typography>}  inputProps={{style:{fontSize:30}}}/>
                        </Grid>
                        <Grid item >
                            <Select id="tipo"  onChange={valor=> formik.setFieldValue('tipo',valor.value)}
                             placeholder={<Typography variant="headline" component="h3">Tipo</Typography>} options={options}/>
                        </Grid>

                        <Grid item >
                            <TextField id="valor" onChange={formik.handleChange} value={formik.values.valor} label={ <Typography variant="headline" component="h3"> Valor </Typography>}  inputProps={{style:{fontSize:30}}}/>
                        </Grid>

                        <Grid item >
                            <TextField id="quantidade" onChange={formik.handleChange} value={formik.values.quantidade} label={ <Typography variant="headline" component="h3"> Quantidade </Typography>}  inputProps={{style:{fontSize:30}}}/>
                        </Grid>

                        <Grid item>
                            <Button style={{backgroundColor:"rgba(225, 187, 116, 1)",fontWeight:"bold",fontSize:"20px",marginTop:"5%"}}  variant="contained" fullWidth type="onSubmit">Cadastrar Insumo</Button>
                        </Grid>
                    </Grid>
               </form>
            </Formik>
       </Container>
    )
}