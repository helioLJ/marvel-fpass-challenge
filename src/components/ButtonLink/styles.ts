import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled(Link)`
  display: flex;
  padding: 25px 99px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 10px;
  background: #ed1d24;

  color: #fff;
  font-size: 20px;
  font-family: Permanent Marker;

  z-index: 10;
  position: relative;
`
