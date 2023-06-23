import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  gap: 44px;
  z-index: 10;
  position: relative;
  margin-top: 200px;

  > button {
    width: 16px;
    height: 16px;
    border-radius: 999px;
    background: #fff;
    border: none;
  }

  .redball {
    background-color: red;
  }
`
