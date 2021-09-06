import React, { useState } from 'react'
import 'leaflet/dist/leaflet.css'
import { MapContainer, GeoJSON, TileLayer } from 'react-leaflet'

import { dataLayer } from '../../constant/index'
import districts from '../../data/geometrias_bairros.json'
import PopulationChart from '../ChartPopulation'
import { Container, GrowthPop, GrowthTitle } from './styles'

const Map = () => {
  const [districtId, setDistrictId] = useState()
  const [district, setDistrict] = useState('')
  const onEachDistrict = (district, layer) => {
    const districtName = district.properties.name
    const districtZone = district.properties.zona
    const districtNumber = district.properties.id

    layer.on('click', function () {
      setDistrict(`${districtName} - Zona ${districtZone}`)
      setDistrictId(districtNumber)
    })
  }

  const onClosePopup = () => {
    setDistrictId()
  }

  return (
    <Container>
      <h1>Population Growth</h1>
      <MapContainer
        style={{ height: '100vh' }}
        zoom={14}
        center={[-23.20827026939924, -45.908432084467613]}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <GeoJSON data={districts.features} style={dataLayer} onEachFeature={onEachDistrict} />
      </MapContainer>
      {districtId && (
        <GrowthPop>
          <GrowthTitle>
            <p>Crescimento Populacional de 2000 a 2006</p>
            <span onClick={onClosePopup}>X</span>
          </GrowthTitle>
          <label>{district}</label>
          <PopulationChart district={districtId} />
        </GrowthPop>
      )}
    </Container>
  )
}

export default Map
