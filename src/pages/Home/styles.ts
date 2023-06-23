import styled from 'styled-components'

export const Container = styled.div`
  height: calc(100vh - 98px);
  padding: 170px 80px;
  transition: all 0.5s;
  position: relative;

  > main {
    display: flex;
    max-width: 800px;
    flex-direction: column;
    align-items: flex-start;
    gap: 44px;
    z-index: 10;
    position: relative;

    > p {
      color: #fff;
      font-size: 16px;
      font-family: 'Inter';
      font-weight: 500;
    }
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
  }

  @media (max-width: 768px) {
    padding: 170px 24px;

    > main {
      a {
        margin-top: 50px !important;
      }
    }

    h1 {
      font-size: 44px !important;
    }
  }
`
