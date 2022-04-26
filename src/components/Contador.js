import { useState, useEffect , onAdd} from "react"


const Contador = ({init, stock}) => {

  
  const [contador, setContador] = useState(init)

  const sumar = () =>{
    setContador(contador + 1)
  }

  const restar = () =>{
    setContador(contador - 1)
  }
  
  const confirmar = () =>{
    onAdd(contador)
  }

  return (
    <div>
      <p>Contador Actual : {contador}</p>
        <button onClick={sumar} className="material-icons">add</button>
        <button onClick={confirmar}>confirmar</button>
        <button onClick={restar} className="material-icons">remove</button>
    </div>
  )
}
  
export default Contador