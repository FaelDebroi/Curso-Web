import React from 'react'

const CarDetails = ({brand,km,color}) => {
  return (
    <div>
        <h2>Detalhes do Carro:</h2>
        <ul>
        <li>Marca: {brand}</li>
        <li>km: {km}</li>
        <li>Cor: {color}</li>
        </ul>
      
    </div>
  )
}

export default CarDetails
