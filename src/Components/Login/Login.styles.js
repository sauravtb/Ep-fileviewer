import styled from "styled-components";

export const ParentDiv = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 5px solid goldenrod;
  padding: 150px;
  & input {
    height: 50px;
    width: 400px;
    font-size: 1.6rem;
    margin: 24px;
    border-radius: 5px;
    border: none;
    border-bottom: 2px solid black;
    outline: none;
  }
`;

export const ButtonDiv = styled.button`
  margin-top: 36px;
  width: 400px;
  height: 50px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.6rem;
`;
