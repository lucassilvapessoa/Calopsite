import {useParams} from 'react-router-dom'
export default function VisualizarGastos(){
    const {id} = useParams()
    return (
        <h1> {id} :Gastos até o momento</h1>
    )
}