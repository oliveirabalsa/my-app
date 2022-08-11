import styled from "styled-components";

export const Container = styled.div`
  padding: 10px;
  background-color: ${(props: {dark: boolean}) => props.dark ? "black" : "white"};
  
`;

export const Button = styled.button`
  background: linear-gradient(green, lightgreen);
  color: white;
  height: 20vh;
  width: 20vw;
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 8px;
  margin-inline: 10px;
  &:hover {
      filter: brightness(0.8);
  }
`;
