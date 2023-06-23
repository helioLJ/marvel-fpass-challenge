import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled(Link)`
  display: flex;
  max-width: 274px;
  width: 100%;
  height: 300px;
  padding: 45px 46px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 2px;
  flex-shrink: 0;
  border-radius: 14px;
  text-align: center;
  position: relative;
  gap: 14px;

  > p {
    color: #fff;
    text-align: center;
    font-size: 14px;
    font-family: Inter;
    position: relative;
    z-index: 10;
  }

  &::before {
    content: '';
    background-color: ${({ theme }) => theme.COLORS.BLACK};
    opacity: 50%;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    border-radius: 14px;
  }
`
