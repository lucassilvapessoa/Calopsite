import React from 'react'
import {useEffect,useState} from 'react'
import {BarChart,Bar,XAxis,YAxis,Tooltip, CartesianGrid, Legend, } from 'recharts';
import {Paper,Grid,Container,IconButton,Button} from '@material-ui/core'
import axios from 'axios'
  import {ArrowBack,Email} from '@material-ui/icons'
  import ca from '../ca.png'
  import job from '../job.svg'
  import deslogar from '../deslogar.png'
  import gastos from '../gastos.png'
  import consumo from '../consumo.png'
  import gaiola from '../gaiola.png'
  import passaro from '../passaro.png'
  import detalhes from '../detalhes.png'
  import Teste from "../Components/Teste";
    
 
import {
  useParams,
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";


export default function ManagedArea(){
  const params = useParams()
  const id = params.id
  const history = useHistory()
  if(localStorage.getItem("id")==null || localStorage.getItem("id")!=params.id){
    history.push("/@")
    }
    return(
   <Teste id={id}/>
      )
}


    