    import axios from 'axios'
    import  {useParams} from 'react-router-dom'
    import {Formik,useFormik} from 'formik'
    import { TextField,Container,Grid,MenuItem,InputLabel,Typography,Button} from '@material-ui/core'
    import {DatePicker} from 'react-datepicker'
    import {Calendar} from '@material-ui/pickers'
    import Select from 'react-select'
    import { useState,useEffect } from 'react'

    export default function CadastrarPassaro(){

        /*
http://localhost:8080/birds/new?mutation=1&vivarium=2&gender=male
        */
        const {id}  = useParams()
         const[valores,setValores] = useState({sexo:""})

         const[especies,setEspecies] = useState([]);
         const[gaiolas,setGaiolas] = useState([]);

         useEffect(()=>{
         
            const url = `http://localhost:8080/mutations/user`
            const ur2 = `http://localhost:8080/vivarium/user`

            fetch(url,{
              method:'get',headers:new Headers({
                'Authorization':localStorage.getItem("token")
              })
            }).then((res)=>{
               res.json().then((dat)=>{
                const options = dat.map(d => ({
              "value" : d.id,
              "label" : d.mutation
            }))    
           setEspecies(options)
        }).catch((err)=>{
            console.log(err)
          })
         }).catch((err)=>{
           console.log(err)
         })


         
         fetch(ur2,{
            method:'get',headers:new Headers({
              'Authorization':localStorage.getItem("token")
            })
          }).then((res)=>{
             res.json().then((dat)=>{
              const options = dat.map(d => ({
            "value" : d.id,
            "label" : d.description
          }))    
         setGaiolas(options)
      }).catch((err)=>{
          console.log(err)
        })
       }).catch((err)=>{
         console.log(err)
       })
         
          
         },[])
        

        const validate = values=>{  
            const errors = {}
            
            if(!values.especie){
                errors.especie = "especie e obrigátoria"
            }
            
            return errors
        }
        const options = [
            { value: 'male', label: 'Macho' },
            { value: 'female', label: 'Femea' },
            { value: 'undefined', label: 'Indefinido' }
        ];


        const formik = useFormik({initialValues:{
           gaiola:"",
            especie:"",
            sexo:"",
            },validate,
            onSubmit:values=>{
                setValores({especie:values.especie,sexo:values.sexo,gaiola:values.gaiola})
                alert(JSON.stringify(values, null, 2));
            }
        })
        return (
            <Container style={{width:"fit-content",marginTop:"2%"}}>
                <h1 style={{textAlign:"center"}}> {id}: Cadastrar Passaro</h1>
                <Formik>
                <form style={{width:"fit-content",margin:"0 auto",marginTop:"5%"}} onSubmit={formik.handleSubmit}>
                    <Grid direction="column" container spacing={4}>
                        
                        
                        <Grid item>
                        <Select id="especie"  onChange={valor=> formik.setFieldValue('especie',valor.value)}
                             placeholder={<Typography variant="headline" component="h3">Especie</Typography>} options={especies}/>          
                        </Grid>


                        <Grid item>
                        <Select id="gaiola"  onChange={valor=> formik.setFieldValue('gaiola',valor.value)}
                             placeholder={<Typography variant="headline" component="h3">Gaiola</Typography>} options={gaiolas}/>          
                        </Grid>

                        <Grid item >
                            <Select id="sexo"  onChange={valor=> formik.setFieldValue('sexo',valor.value)}
                             placeholder={<Typography variant="headline" component="h3">Sexo</Typography>} options={options}/>
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