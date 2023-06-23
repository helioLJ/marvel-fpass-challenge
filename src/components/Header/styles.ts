import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  width: 100%;
  padding: 24px 80px;
  height: 98px;
  gap: 14px;
  justify-content: space-between;
  align-items: center;
  background: #ed1d24;

  > .input-wrapper {
    display: flex;
    padding: 10px 16px;
    align-items: center;
    gap: 14px;
    border-radius: 10px;
    background: #fff;

    > form {
      > input {
        border: none;
        font-family: 'Inter';
      }
    }
  }

  @media (max-width: 768px) {
    padding: 24px;

    > .input-wrapper {
      > form {
        > input {
          width: 100%;
        }
      }
    }
  }
`
