import React from 'react'

import { render, screen } from '@testing-library/react'

import Map from './index'
describe('Population Growth', () => {
  test('should render the map', async () => {
    render(<Map />)
    expect(screen.getByText('Population Growth')).toBeInTheDocument()
    const mapPrinted = screen.getByTestId('map-populations')
    expect(mapPrinted).toBeInTheDocument()
  })
})
