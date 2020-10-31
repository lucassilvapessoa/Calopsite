
import  {useParams} from 'react-router-dom'
export default function CadastrarPassaro(){
    const {id}  = useParams()
    return (
    <h1> {id} :Cadastrar Passaro</h1>
    )
}