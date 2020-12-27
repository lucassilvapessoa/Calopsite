import axios from 'axios'
import  {useParams} from 'react-router-dom'
import {Formik,useFormik} from 'formik'
import { TextField,Container,Grid,MenuItem,InputLabel,Typography,Button} from '@material-ui/core'
import {DatePicker} from 'react-datepicker'
import {Calendar} from '@material-ui/pickers'
import Select from 'react-select'
import { useState,useEffect } from 'react'

export default function CadastrarGaiola(){
   const [cracha,setCracha] = useState("");

   const {id} = useParams()
  function enviarCadastro(){
    if(cracha!=""){
      alert("PRONTO PARA ENVIAR");
    }
  }
    
    return (
          <Container style={{width:"fit-content",marginTop:"2%"}}>
 <h1> {id} : Cadastrar Gaiola</h1>
 <br></br>
 <Grid direction="column" container spacing={4}>
                    <Grid item >
                            <TextField  onChange={(e)=> setCracha(e.target.value)} label={ <Typography variant="headline" component="h3"> Cracha da gaiola </Typography>}  inputProps={{style:{fontSize:30}}}/>
                        </Grid>
                        <Grid item>
                            <Button style={{backgroundColor:"rgba(225, 187, 116, 1)",fontWeight:"bold",fontSize:"20px",marginTop:"5%",width:"82%"}}  variant="contained" fullWidth onClick={enviarCadastro}>Cadastrar Gaiola</Button>
                        </Grid>
              </Grid>
          </Container>
       
    )
}