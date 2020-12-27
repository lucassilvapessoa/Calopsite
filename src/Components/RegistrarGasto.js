import axios from 'axios'
import  {useParams} from 'react-router-dom'
import {Formik,useFormik} from 'formik'
import { TextField,Container,Grid,MenuItem,InputLabel,Typography,Button} from '@material-ui/core'
import {DatePicker} from 'react-datepicker'
import {Calendar} from '@material-ui/pickers'
import Select from 'react-select'
import { useState,useEffect } from 'react'


export default function RegistrarGasto(){
    const {id} = useParams()
    const [valores,setValor] = useState({tipo:"",preco:"",data_gasto:"",quantidade:"",idgaiola:""})
    const [gaiolas,setGaiolas] = useState([])

    const options = [
        { value: "1", label: 1 },
        { value: "2", label: 2 },
        { value: '3', label: 3 },
        { value: '4', label: 4 },
        { value: '5', label: 5 },
        { value: '6', label: 6 },
        { value: '7', label: 7 },
        { value: '8', label: 8 },
        { value: '9', label: 9 },
        { value: '10', label: 10 }
    ];

    const options2 = [
        { value: 'remedio', label: 'Remedio' },
        { value: 'racao', label: 'Racao' },
    ];



    useEffect(()=>{
         async function carregarGaiolas(){
            const teste = await axios.get(`https://pokeapi.co/api/v2/pokemon`)
            const options = teste.data.results.map(d => ({
                "value" : d.name,
                "label" : d.name
              }))
              setGaiolas(options)
         }
         carregarGaiolas()
    },[valores])

    const validate = values=>{  
        const errors = {}
        if(!values.tipo){
            errors.tipo = "tipo e obrigátoria"
        }
        if(!values.preco){
            errors.preco = "preco e obrigatorio"
        }
        if(!values.data_gasto){
            errors.data_gasto = "data e obrigátoria"
        }
        if(!values.idgaiola){
            errors.idgaiola = "idgaiola e obrigátoria"
        }
        if(!values.quantidade){
            errors.quantidade = "quantidade e obrigatória"
        }
        return errors
    }
     
    const formik = useFormik({initialValues:{
        tipo:"",
        idgaiola:"",
        preco:"",
        data_gasto:"",
         quantidade:"",
        },validate,
        onSubmit:values=>{
            setValor({tipo:values.tipo,preco:values.preco,data_gasto:values.data_gasto,idgaiola:values.idgaiola, quantidade:values.quantidade})
            alert(JSON.stringify(values, null, 2));
        }
    })


    return (
        <Container style={{width:"fit-content",marginTop:"2%"}}>
            <h1> {id} : Registrar Gasto</h1>
            <Formik>
               <form style={{width:"fit-content",margin:"0 auto",marginTop:"5%"}} onSubmit={formik.handleSubmit}>
                   <Grid direction="column" container spacing={4}>
                

                   <Grid item >
                            <Select  id="idgaiola"  onChange={valor=> formik.setFieldValue('idgaiola',valor.value)}
                             placeholder={<Typography variant="headline" component="h3">Gaiola</Typography>} options={gaiolas}/>
                   </Grid>
                
                       
                   <Grid item >
                            <Select  id="tipo"  onChange={valor=> formik.setFieldValue('tipo',valor.value)}
                             placeholder={<Typography variant="headline" component="h3">Tipo</Typography>} options={options2}/>
                    </Grid>

                    <Grid item >
                            <Select  id="quantidade"  onChange={valor=> formik.setFieldValue('quantidade',valor.value)}
                             placeholder={<Typography variant="headline" component="h3">quantidade</Typography>} options={options}/>
                    </Grid>


               
                   <Grid item >
                            <TextField id="preco" onChange={formik.handleChange} value={formik.values.preco} label={ <Typography variant="headline" component="h3"> Preço </Typography>}  inputProps={{style:{fontSize:30}}}/>
                        </Grid>

                        <Grid item>
                                <TextField type="date"  inputProps={{style:{fontSize:25}}} style={{width:"100%"}}
                                 laberl="Data Gasto"
                                 value={formik.values.data_gasto}
                                 onChange={value=> formik.setFieldValue('data_gasto',value.target.value)}
                                 InputLabelProps={{
                                    shrink: true,
                                  }}>
                                </TextField>
                        </Grid>

                        <Grid item>
                            <Button style={{backgroundColor:"rgba(225, 187, 116, 1)",fontWeight:"bold",fontSize:"20px",marginTop:"5%"}}  variant="contained" fullWidth type="onSubmit">Confirmar Gasto</Button>
                        </Grid>
                


                        </Grid>
               
               </form>


            </Formik>


        </Container>
    
    )
}