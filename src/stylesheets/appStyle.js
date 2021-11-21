import styled, { createGlobalStyle } from "styled-components";

export const Main = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    font-family: "Roboto Mono";
}
body{
    background-color: #121212;
    color:#fff;

    div{
      text-align: center;
    }

}

`;
export const AppMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const Input = styled.input`
  padding: 10px;
  margin: 5px;
  background-color: #fff;
  border: 1px solid #aaa1;
  color: #000;
`;
