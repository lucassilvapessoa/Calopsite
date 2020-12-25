import react from 'react'
import {useState,useEffect} from 'react'
import {Container} from '@material-ui/core'
import axios from 'axios'
import  {useParams} from 'react-router-dom'

export default function VerificarLicenca(){
    const {id} = useParams()
    const [data,setData] = useState('');
  useEffect(()=>{
    const datas = new Date();
   setData(datas.toISOString())
  },[])
  return(
      <Container style={{width:"fit-content",marginTop:"2%"}}>
           <h1 style={{textAlign:"center"}}> {id}: Verificar Licença</h1>
           <hr></hr>
           <h2>Dispónivel até {data} </h2>
         
      </Container>
  )

}