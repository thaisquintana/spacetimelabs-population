import styled from 'styled-components'

export const PopulationData = styled.div`
  max-width: 500px;
  margin-top: 20px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 16px;
`
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`

export const Chart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`

export const People = styled.div`
  height: ${(props) => props.height}%;
  background-color: ${(props) => props.colors};
  width: 80px;
  text-align: center;
  font-weight: bold;
  color: #fff;
`

export const Year = styled.div`
  font-size: 16px;
  text-align: center;
  margin-top: 8px;
  font-weight: 400;
  color: #333;
`
