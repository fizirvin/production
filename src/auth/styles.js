import styled from '@emotion/styled'

export const LoginDiv = styled.div`
  background-color: #191919;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: Center;
`

export const LoginFormDiv = styled.div`
  background-color: #191919;
  margin: 100px auto;
  height: 25vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 850px) {
    height: 45vh;
  }
`

export const LoginInput = styled.input`
  height: 6vh;
  padding-left: 5px;
  background-color: #191919;
  border: 0;
  :focus {
    outline: none;
  }
  color: #f1f1f1;
  font-size: 1.5rem;
  border-bottom: #0013ff solid 0.1px;

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: white;
    opacity: 0.5; /* Firefox */

    ::-ms-input-placeholder {
      /* Microsoft Edge */
      color: white;
    }
  }
`

export const LoginSubmit = styled.button`
  height: 6vh;
  width: 10rem;
  padding: 5px;
  color: whitesmoke;
  border: 3px solid;
  background-color: #191919;
  outline: none;
  cursor: pointer;
  box-shadow: 0 2px 0 1px #0e0c0c;

  :hover {
    background-color: #0f0f0f;
  }

  :active {
    background-color: #000000;
    box-shadow: 0 0px #666;
    transform: translateY(2px);
  }
  @media (max-width: 850px) {
    height: 5rem;
  }
`
