import styled from "styled-components/native";

export const Container = styled.View`
  box-sizing: border-box;
  flex-wrap: nowrap;
  border: 1px solid black;
  flex: 1;
  flex-direction: column;
  margin: 9% 2% 0 2%;
`;

export const Navbar = styled.View`
  border: 1px solid red;
  padding: 2%;
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
  box-sizing: border-box;
  flex: 1;
  border: 1px solid blue;
  justify-content: center;
  align-items: center;
`;

export const Item = styled.View`
  box-sizing: border-box;
  border: 3px solid #00ffff;
  border-radius: 8px;
  margin: 3% 0px;
  padding: 1%;
  width: 90%;
  height: 12%;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-start;
`;

export const ItemDescription = styled.View`
  height: 100%;
  margin-left: 15px;
`;
