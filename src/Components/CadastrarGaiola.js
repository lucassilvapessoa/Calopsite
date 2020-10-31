import {useParams} from 'react-router-dom'
export default function CadastrarGaiola(){
   const {id} = useParams()
    return (
        <h1> {id} : Cadastrar Gaiola</h1>
    )
}