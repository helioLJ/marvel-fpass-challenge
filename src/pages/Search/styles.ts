import styled from 'styled-components'

export const Container = styled.div`
  min-height: calc(100vh - 98px);
  padding: 44px 80px;
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));

  > a {
    justify-self: center;
  }

  @media (max-width: 768px) {
    padding: 44px 44px;
  }
`
