import React, { useState } from 'react'
import 'leaflet/dist/leaflet.css'
import { MapContainer, GeoJSON, TileLayer } from 'react-leaflet'

import districts from '../../data/geometrias_bairros.json'

const Map = () => {
  // eslint-disable-next-line no-unused-vars
  const [color, setColor] = useState('#fff')

  const districtStyle = {
    fillColor: 'red',
    fillOpacity: 1,
    color: 'black',
    weight: 2,
  }

  const changeCountryColor = (e) => {
    e.target.setStyle({
      color: 'green',
      fillColor: setColor('green'),
      fillOpacity: 1,
    })
  }

  const onEachDistrict = (district, layer) => {
    const districtName = district.properties.name
    console.log(districtName)
    layer.bindPopup(districtName)

    layer.options.fillOpacity = Math.random()

    layer.on({
      click: changeCountryColor,
    })
  }

  return (
    <>
      <h1>Population</h1>
      <MapContainer
        style={{ height: '80vh' }}
        zoom={13.4}
        center={[-23.20827026939924, -45.908432084467613]}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <GeoJSON data={districts.features} style={districtStyle} onEachFeature={onEachDistrict} />
      </MapContainer>
    </>
  )
}

export default Map
