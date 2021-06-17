import styled from "styled-components";
import { FiMail } from "react-icons/fi";
import { RiLockPasswordLine } from "react-icons/ri";

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
  padding: 2.5rem;
  height: 55vh;
  background-color: white;
  border-radius: 5px;

  & p {
    font-size: 2rem;
    font-weight: 800;
    margin-bottom: 3.5rem;
  }
`;

export const Input = styled.input`
  height: 60px;
  width: 350px;
  font-size: 1.4rem;
  margin: 1.4rem;
  padding-left: 4.2rem;
  border-radius: 5px;
  background-color: #e6e6e6;
  border: none;
  outline: none;
  transition: all 0.2s ease-in-out;
  box-shadow: 0px;

  :focus {
    box-shadow: 2px 5px #4c569c;
  }
`;

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  & span {
    color: red;
    position: absolute;
    bottom: 0px;
    left: 1.6rem;
  }
`;

export const MailIcon = styled(FiMail)`
  position: absolute;
  left: 2.4rem;
  bottom: 2.6rem;
  color: #4c569c;
  font-size: 1.5rem;
`;
export const PassIcon = styled(RiLockPasswordLine)`
  position: absolute;
  left: 2.4rem;
  bottom: 2.6rem;
  color: #4c569c;
  font-size: 1.5rem;
`;

export const ButtonDiv = styled.button`
  margin-top: 3rem;
  width: 415px;
  height: 60px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.4rem;
  background: linear-gradient(15deg, #dc2424 -40%, #4a569d 50%);
  color: #fff;
  margin-top: 4rem;
  transition: all 0.2s ease-in-out;
  box-shadow: 0px;
  opacity: 0.9;

  :hover {
    box-shadow: 0px 2px #4a569d;
    width: 420px;
    opacity: 1;
  }
`;
