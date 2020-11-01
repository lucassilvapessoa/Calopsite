     import axios from 'axios'
    import  {useParams} from 'react-router-dom'
    import {Formik,useFormik} from 'formik'
    import { TextField,Container,Grid,MenuItem,InputLabel,Typography,Button} from '@material-ui/core'
    import {DatePicker} from 'react-datepicker'
    import {Calendar} from '@material-ui/pickers'
    import Select from 'react-select'
    import { useState,useEffect } from 'react'
    export default function CadastrarPassaro(){
        const {id}  = useParams()
         const[valores,setValores] = useState({nome:"",anilha:"",sexo:"",data_nascimento:""})
         useEffect(()=>{
          async function cadastrarPassaro(){
              const resultado = await axios.post(`http://localhost:8089/inserirPassaro/${valores.anilha}/${valores.nome}/${valores.especie}/${valores.sexo}/${valores.data_nascimento}/${id}`)
          }
          cadastrarPassaro()

         },[valores])
       

        const validate = values=>{  
            const errors = {}
            if(!values.anilha){
                errors.anilha = "anilha e obrigátoria"
            }
            if(!values.nome){
                errors.nome = "nome e obrigatorio"
            }
            if(!values.especie){
                errors.especie = "especie e obrigátoria"
            }
            if(!values.data_nascimento){
                errors.data_nascimento = "data nascimento e obrigatória"
            }
            return errors
        }
        const options = [
            { value: 'masculino', label: 'Macho' },
            { value: 'feminino', label: 'Femea' },
            { value: 'indefinido', label: 'Indefinido' }
        ];

        const formik = useFormik({initialValues:{
            nome:"",
            anilha:"",
            especie:"",
            sexo:"",
            data_nascimento:"",
            },validate,
            onSubmit:values=>{
                setValores({nome:values.nome,especie:values.especie,sexo:values.sexo,data_nascimento:values.data_nascimento,anilha:values.anilha})
                alert(JSON.stringify(values, null, 2));
            }
        })
        return (
            <Container style={{width:"fit-content",marginTop:"2%"}}>
                <h1 style={{textAlign:"center"}}> {id}: Cadastrar Passaro</h1>
                <Formik>
                <form style={{width:"fit-content",margin:"0 auto",marginTop:"5%"}} onSubmit={formik.handleSubmit}>
                    <Grid direction="column" container spacing={4}>
                        <Grid item >
                            <TextField id="anilha" onChange={formik.handleChange} value={formik.values.anilha} label={ <Typography variant="headline" component="h3"> Anilha </Typography>}  inputProps={{style:{fontSize:30}}}/>
                        </Grid>
                        <Grid item>
                            <TextField id="nome" onChange={formik.handleChange} value={formik.values.nome} label={<Typography variant="headline" component="h3">Nome</Typography>}  inputProps={{style:{fontSize:30}}}/>
                        </Grid>
                        <Grid item>
                            <TextField id="especie" onChange={formik.handleChange} value={formik.values.especie} inputProps={{style:{fontSize:30}}}  label={<Typography variant="headline" component="h3">Especie</Typography>}/>
                           
                        </Grid>
                        <Grid item >
                            <Select id="sexo"  onChange={valor=> formik.setFieldValue('sexo',valor.value)}
                             placeholder={<Typography variant="headline" component="h3">Sexo</Typography>} options={options}/>
                        </Grid>
                        <Grid item>
                                <TextField type="date"  inputProps={{style:{fontSize:25}}} style={{width:"100%"}}
                                 laberl="Data Nascimento"
                                 value={formik.values.data_nascimento}
                                 onChange={value=> formik.setFieldValue('data_nascimento',value.target.value)}
                                 InputLabelProps={{
                                    shrink: true,
                                  }}>
                                </TextField>
                        </Grid>
                        <Grid item>
                            <Button style={{backgroundColor:"rgba(225, 187, 116, 1)",fontWeight:"bold",fontSize:"20px",marginTop:"5%"}}  variant="contained" fullWidth type="onSubmit">Cadastrar Passaro</Button>
                        </Grid>
                
                    </Grid>
                    </form>
                </Formik>

            </Container>
    
        

        )
    }