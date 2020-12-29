import react from 'react'
import { TextField,Container,Grid,MenuItem,InputLabel,Typography,Button} from '@material-ui/core'
import Select from 'react-select'
import axios from 'axios'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Formik } from 'formik'


export default function VisualizarGastos(){
    const {id} = useParams()
    const [gaiolas,setGaiolas] = useState([])
    const [opcaoEscolhida,setOpcao] = useState("")

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
   },[])
    return (

        <Container style={{width:"fit-content",marginTop:"2%"}}>
                <h1> {id} :Gastos até o momento</h1>
                <Grid item>
                       <h2>Escola a gaiola</h2>
                       <br></br>
                       <Select onChange={e => setOpcao(e.value)}  placeholder={<Typography variant="headline" value={opcaoEscolhida}  component="h3">Gaiola</Typography>} options={gaiolas} />
                  </Grid>
                  <br></br>
                  <div style={{border:"1px solid black",padding:"2%"}}>
                     <h2>Gasto Com gaiola individual</h2>
                     <h3>Gasto com remedio</h3>
                     <h3>Gasto com ração</h3>
                     <h3>Media remedio</h3>
                     <h3>Media ração</h3>
                  </div>
                  <br>
                  </br>

                  <div style={{border:"1px solid black",padding:"2%"}}>
                  <h2>Gasto somaorio das gaiolas</h2>
                  <h3>Gasto total das gaiolas</h3>
                  </div>
                 


                  <Grid item>
                      
                       
                  </Grid>
              
        </Container>
     
    )
}