import styled from 'styled-components'

export const Container = styled.div`
  z-index: 10;
  position: relative;

  > h1 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: 'Permanent Marker', cursive;
  }

  > .line {
    width: 100%;
    border-radius: 10px;
    height: 5px;
    background-color: ${({ theme }) => theme.COLORS.MARVEL_RED};
  }
`
