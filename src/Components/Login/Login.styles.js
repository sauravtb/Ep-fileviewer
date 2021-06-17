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
  padding: 30px;
  height: 60vh;
  background-color: white;
  border-radius: 5px;

  & p {
    font-size: 2rem;
    font-weight: 800;
    margin-bottom: 56px;
  }
`;

export const Input = styled.input`
  height: 60px;
  width: 350px;
  font-size: 1.4rem;
  margin: 1.2rem;
  padding-left: 56px;
  border-radius: 5px;
  background-color: #e6e6e6;
  border: none;
  outline: none;
`;

export const InputDiv = styled.div`
  display: flex;
  position: relative;
`;

export const MailIcon = styled(FiMail)`
  position: absolute;
  left: 35px;
  bottom: 39px;
  color: #0007;
  font-size: 1.5rem;
`;
export const PassIcon = styled(RiLockPasswordLine)`
  position: absolute;
  left: 35px;
  bottom: 39px;
  color: #0007;
  font-size: 1.5rem;
`;

export const ButtonDiv = styled.button`
  margin-top: 36px;
  width: 415px;
  height: 60px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.4rem;
  background-color: #4c569c;
  color: #fff;
  margin-top: 56px;
`;
