import react from 'react'
import { TextField,Container,Grid,MenuItem,InputLabel,Typography,Button} from '@material-ui/core'
import Select from 'react-select'
import axios from 'axios'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Formik } from 'formik'

export default function  VizualizarEspecies () {
    const {id} = useParams()
    const[especies,setEspecies] = useState([])
    const [opcaoEscolhida,setOpcao] = useState("")
    const[valores,setValores] = useState({id:"",descricao:"",valor:""})
    const [dados,setDados] = useState([])

    useEffect(()=>{
          const url = `http://localhost:8080/mutations/user`
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
         setDados([...dados,dat])
      
             }).catch((err)=>{
               console.log(err)
             })
            }).catch((err)=>{
              console.log(err)
            })
         
         
       },[])

       useEffect(()=>{
        if(opcaoEscolhida!= ""){
            async function VizualizarEspecie(){
               const obj = dados[0].filter(x=> x.id == opcaoEscolhida)
                console.log(obj)
               setValores({...valores,valor:obj[0].base_price,id:obj[0].id,descricao:obj[0].mutation})
            }
            VizualizarEspecie()
        }
       },[opcaoEscolhida])


    return (
        <Container style={{width:"fit-content",marginTop:"2%"}}>
              <h1 style={{textAlign:"center"}}> {id}: Vizualizar Especies</h1>
              <br></br>
                  <Grid direction="row" container spacing={4}>
                  <Grid item>
                       <h2>Escola a especie</h2>
                       <br></br>
                       <Select onChange={e => setOpcao(e.value)} id="sexo" placeholder={<Typography variant="headline" value={opcaoEscolhida}  component="h3">Especie</Typography>} options={especies} />
                  </Grid>
                  <Grid item>
                       <h2>Informações sobre a espécie</h2>
                       <br></br>
                        {valores.id!='' ?    <h3>Id: {valores.id}</h3> : <h3>Id: NULL</h3>}
                        {valores.valor!='' ?    <h3>Valor: {valores.valor}</h3> : <h3>Valor: NULL</h3>}
                        {valores.descricao!='' ?    <h3>Descricao: {valores.descricao}</h3> : <h3>Descricao: NULL</h3>}
                  </Grid>
              </Grid>
         
        
        </Container>
   )
    
}
