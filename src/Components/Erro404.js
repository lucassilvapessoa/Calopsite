
import {Paper} from '@material-ui/core'
export default function Erro404(){
    return(
        <Paper style={{width:"50%",margin:"0 auto",padding:"3%",marginTop:"5%"}}>
             <h1 style={{textAlign:"center"}}> 404</h1>
             <h1 style={{textAlign:"center",marginTop:"6%"}}>Página não encontrada :/</h1>
             <h4 style={{textAlign:"center",marginTop:"6%"}}>Desculpe. A página que você está procurando não existe no site...</h4>
        </Paper>
    )
}