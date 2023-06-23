import styled from 'styled-components'

export const Container = styled.div`
  min-height: calc(100vh - 98px);
  padding: 44px 80px;

  .tab {
    margin-top: 24px;
    display: grid;
    gap: 24px;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    margin-bottom: 44px;

    > a {
      justify-self: center;
    }
  }

  > section {
    display: flex;
    gap: 44px;

    > div:nth-child(1) {
      width: 50%;
      display: flex;
      flex-direction: column;
      gap: 44px;

      > p {
        color: #fff;
        font-size: 16px;
        font-family: Inter;
        font-weight: 400;
      }
    }

    > div:nth-child(2) {
      width: 50%;

      > img {
        width: 100%;
        max-width: 544px;
        border-radius: 10px;
      }

      .img {
        background-color: gray;
        width: 100%;
        height: 544px;
        max-width: 544px;
        border-radius: 10px;
        opacity: 50%;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 44px 44px;

    > section {
      flex-direction: column;
      margin-bottom: 44px;

      > div:nth-child(1) {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 44px;

        h1 {
          font-size: 44px !important;
        }
      }

      > div:nth-child(2) {
        width: 100%;

        > img {
        }

        .img {
        }
      }
    }
  }
`
