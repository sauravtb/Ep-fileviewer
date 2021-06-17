import styled from "styled-components";

export const ParentDiv = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(15deg, #dc2424 -40%, #4a569d 100%);
`;

export const LoginDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  height: 60vh;
  background-color: white;
  border-radius: 5px;
  position: relative;

  & p {
    font-size: 2rem;
    font-weight: 800;
    margin-bottom: 56px;
  }

  & input {
    height: 60px;
    width: 400px;
    font-size: 1.4rem;
    margin: 1.2rem;
    padding-left: 16px;
    border-radius: 5px;
    background-color: #e6e6e6;
    border: none;
    outline: none;
    position: relative;
  }
`;

export const ButtonDiv = styled.button`
  margin-top: 36px;
  width: 415px;
  height: 60px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.6rem;
  background-color: #4c569c;
  color: #fff;
  margin-top: 56px;
`;
