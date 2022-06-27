import styled from "styled-components/native";

export const Container = styled.View`
  border: 1px solid black;
  flex: 1;
  flex-direction: column;
  margin: 30px 10px 0 10px;
`;

export const Navbar = styled.View`
  border: 1px solid red;
  padding: 5px 15px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TitleFavoritos = styled.Text`
  font-weight: bold;
  font-size: 25px;
  color: #120a8f;
`;

export const Icon = styled.Text`
  color: #120a8f;
`;

export const Content = styled.View`
  border: 1px solid blue;
`;
