import styled from 'styled-components'

export const Container = styled.div`
  h1 {
    text-align: center;
  }
`
export const GrowthPop = styled.div`
  background-color: #fff;
  border-radius: 8px;
  font-size: 16px;
  color: #333;
  position: absolute;
  right: 37px;
  top: 113px;
  border: 1px solid rgb(58 58 58 / 40%);
  z-index: 9999;
  height: auto;
  width: 26%;
  padding: 16px;

  p {
    font-weight: bold;
    margin-bottom: 6px;
  }
  label {
    font-size: 14px;
  }
`
export const GrowthTitle = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    color: #333;
    opacity: 0.6;
    text-align: center;
    &:hover {
      opacity: 1;
    }
  }
`
