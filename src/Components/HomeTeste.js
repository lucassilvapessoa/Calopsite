import React from 'react'
import { useParams } from 'react-router-dom'
import {useEffect,useState} from 'react'
import {BarChart,Bar,XAxis,YAxis,Tooltip, CartesianGrid, Legend, } from 'recharts';
import {Paper,Grid,Container,IconButton,Button} from '@material-ui/core'
import axios from 'axios'

export default function HomeTeste() {
    const {id} = useParams()
    const [resultado,setQuantidadeGenero] = useState([{Macho:0,Femea:0,Indefinido:2}])
  const valores=[{Macho:resultado.Macho,Femea:resultado.Femea,Indefinido:resultado.Indefinido}]
  const [pd,setPd] = useState(0)
  const [pt,setPt] = useState(0)
  const[mt,setMt] = useState(0)
  const [rende,setRend] = useState(0)
  const [dados,setDados] = useState([])


 useEffect(()=>{
  const url = `http://localhost:8080/birds`
          fetch(url,{
            method:'get',headers:new Headers({
              'Authorization':localStorage.getItem("token")
            })
          }).then((res)=>{
             res.json().then((dat)=>{
               let male = 0;
               let female = 0;
               let indefinido = 0;
              for(let i=0; i<dat.length; i++){
                   if(dat[i].gender === "MALE"){
                     male++
                   }else if(dat[i].gender === "FEMALE"){
                     female++
                   }else{
                     indefinido++;
                   }
              }
              setQuantidadeGenero(prevState=>{
                return {
                  Indefinido:indefinido,
                  Macho:male,
                  Femea:female
                }
              })
              setPt(dat.length)
              setPd(dat.length)
            
             }).catch((err)=>{
               console.log(err)
             })

             const url2 = `http://localhost:8080/vivarium/user`
             fetch(url2,{
              method:'get',headers:new Headers({
                'Authorization':localStorage.getItem("token")
              })
            }).then((res)=>{
               res.json().then((dat)=>{
                setMt(dat.length)
              
                
        })
      }).catch((err)=>{
        console.log(err)
      })
      setRend(1)
    })             

  /*
  async function buscarDados(){
    const buscarPD = await axios.get(`http://localhost:8089/buscarPassarosDisponiveis/${id}`)
    const buscarPT = await axios.get(`http://localhost:8089/totalPassaros/${id}`)
    const buscarPfM = await axios.get(`http://localhost:8089/buscarPassaroGenero/${id}/masculino`)
    const buscarPfF = await axios.get(`http://localhost:8089/buscarPassaroGenero/${id}/feminino`)
    const buscarPfI = await axios.get(`http://localhost:8089/buscarPassaroGenero/${id}/indefinido`)
    const passarosDisponiveis =  buscarPD.data[0]["count(passaro.id)"]
    const passarosTotal =  buscarPT.data[0]["count(passaro.id)"]
    const passarosMacho =  buscarPfM.data[0]["count(passaro.id)"]
    const passarosFemea =  buscarPfF.data[0]["count(passaro.id)"]
    const passarosIndefinidos = buscarPfI.data[0]["count(passaro.id)"]
    setPd(passarosDisponiveis)
    setPt(passarosTotal)
   setQuantidadeGenero(prevState=>{
     return {
       Indefinido:passarosIndefinidos,
       Macho:passarosMacho,
       Femea:passarosFemea
     }
   })

    setRend(1)
  }
  if(id!=undefined){
    buscarDados()
  }

  */
 },[id])
       return(
         <>
        {rende ?  <Grid container spacing={3} direction="row"  justify="center"  alignItems="center" style={{marginTop:"2%"}}>
        <Grid item xs={12} >
        <Paper elevation={10} style={{width:"fit-content",margin:"0 auto"}}>
       <h1 style={{textAlign:"center"}}>Aves</h1>
              <BarChart  width={800} height={250} data={valores}>
                <CartesianGrid   strokeDasharray="3 3"/>
                <XAxis  allowDecimals={false} dataKey="key"/>
                <YAxis allowDecimals={false}/>
                <Tooltip/>
                <Legend/>
                <Bar dataKey="Femea" fill="red"/>
                <Bar  dataKey="Macho" fill="blue"/>
                <Bar dataKey="Indefinido" fill="orange"/>
                <BarChart/>  
              </BarChart>
          </Paper>
        </Grid>
        <Grid item xs={4}>
             <Paper elevation={8} style={{padding:"2%"}}>
               <h2>Pássaros Disponíveis</h2>
               <h3>São: {pd} ave(s)</h3>
             </Paper>
        </Grid>
        <Grid item xs={4} >
              <Paper elevation={8} style={{padding:"2%"}}>
              <h2>Gaiolas disponiveis</h2>
               <h3>São:  {mt} gaiola(s)</h3>
              </Paper>
        </Grid>
        <Grid item xs={8} >
              <Paper elevation={8} style={{padding:"2%"}}>
              <h2>Pássaros no total</h2>
               <h3>São: {pt} ave(s)</h3>
              </Paper>
        </Grid>
    
 
      </Grid>
:<h1>Carregando</h1>}
</>
       )}