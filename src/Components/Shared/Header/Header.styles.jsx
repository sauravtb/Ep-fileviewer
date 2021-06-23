import styled from "styled-components";

export const HeaderDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  width: 100%;
  background: linear-gradient(15deg, #dc2424 -40%, #4a569d 50%);
`;
export const LeftDiv = styled.div`
  margin-left: 3.6rem;
  font-size: 2.2rem;
  font-family: "Roboto", sans-serif;
  font-weight: 800;
  color: #fff;
`;
export const RightDiv = styled.div`
  display: flex;
  margin-right: 3.6rem;
  font-size: 2.2rem;
  font-family: "Roboto", sans-serif;
  color: #fff;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
`;
export const Container = styled.div`
  margin: 0 1.5rem;
  padding: 1rem;
  font-style: italic;
  color: ${(props) => (props.logout ? "red" : null)};
  border: ${(props) => (props.logout ? "1px solid red" : null)};
  :hover {
    color: ${(props) => (props.logout ? "red" : null)};
    box-shadow: 1px 1px 8px 8px #953d5f;
  }
`;
