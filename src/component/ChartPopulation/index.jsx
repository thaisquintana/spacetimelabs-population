import React from 'react'

import { colors } from '../../constant'
import population from '../../data/populacao_bairros.json'
import { PopulationData, Container, Chart, Year, People } from './styles'
const ChartPopulation = (props) => {
  const columns = (district) => {
    return district.id_geometria === props.district
  }

  const filterDistrict = population.filter(columns)

  return (
    <PopulationData>
      <Container>
        {filterDistrict.map((data) => {
          const valueInDecimals = data.populacao.toLocaleString({ maximumSignificantDigits: 2 })
          const randomColors = colors[Math.floor(Math.random() * colors.length)]
          const heightBars = Math.round(parseInt(valueInDecimals))
          const totalPopulation = data.populacao.toLocaleString()
          return (
            <Chart key={data.ano}>
              <People height={heightBars * 4} colors={randomColors}>
                <p>{totalPopulation}</p>
              </People>
              <Year>{data.ano}</Year>
            </Chart>
          )
        })}
      </Container>
    </PopulationData>
  )
}

export default ChartPopulation
