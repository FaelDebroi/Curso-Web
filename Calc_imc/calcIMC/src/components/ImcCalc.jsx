import Button from "./Button"
import { useState } from "react"
import "./ImcCalc.css"

const ImcCalc = ({calcImc}) => {
  const[height,setHeight] = useState("");
  const[weight,setWeight] = useState("");

const clearForm = (e) =>{
  e.preventDefault();
  setHeight("");
  setWeight("");
}

const handleHeightChange = (e) =>{
  const updatedValue = validDigits(e.target.value);

  setHeight(updatedValue)
}

const handleWeightChange = (e) =>{
  const updatedValue = validDigits(e.target.value);

  setWeight(updatedValue)
}

const validDigits = (text) =>{
  return text.replace(/[^0-9,]/g,"")
}


  return (
    <div>
      <h2>Calculadora de IMC</h2>
      <form id="imc-form">
        <div className="form-inputs">
            <div className="form-control">
                <label htmlFor="height">Altura:</label>
                <input type="text" 
                name='height' 
                id='height' 
                placeholder='Exemplo 1,80'
                onChange={(e)=> handleHeightChange(e)}
                value={height}
                />
            </div>
            <div className="form-control">
                <label htmlFor="weight">Peso:</label>
                <input type="text" 
                name='weight' 
                id='weight' 
                placeholder='Exemplo 70kg'
                onChange={(e)=> handleWeightChange(e)}
                value={weight}
                />
            </div>
        </div>
      </form> 
      <div className="action-control">
      <Button id="calc-btn" text="Calcular" action={(e) => calcImc(e,height,weight)}/>
      <Button id="clear-btn" text="Limpar" action={clearForm}/>
      </div>
    </div>
  )
}

export default ImcCalc
