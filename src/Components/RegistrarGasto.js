import {useParams} from 'react-router-dom'
export default function RegistrarGasto(){
    const {id} = useParams()
    return (
    <h1> {id} : Registrar Gasto</h1>
    )
}