import React from 'react'

import { render, screen } from '@testing-library/react'

import ChartPopulation from './index'
describe('Load population data', () => {
  test('should render properly the population data', async () => {
    render(<ChartPopulation />)
    expect(screen.getByText('Crescimento Populacional de 2000 a 2006')).toBeInTheDocument()
    expect(screen.getByText('Jd. Alvorada - Zona Oeste')).toBeInTheDocument()
    expect(screen.getByText('Jd. Colinas - Zona Oeste')).toBeInTheDocument()
    expect(screen.getByText('Jd. das Industrias - Zona Oeste')).toBeInTheDocument()
    expect(screen.getByText('Pq. Res. Aquarius - Zona Oeste')).toBeInTheDocument()
    expect(screen.getByTestId('growth-11567')).toBeInTheDocument()
    expect(screen.getByTestId('year-2000')).toBeInTheDocument()
    expect(screen.getByTestId('district-1'))
    fireEvent.click(screen.getByTestId('district-1'))
    expect(screen.getByTestId()).toHaveBeenCalled()
  })
})
