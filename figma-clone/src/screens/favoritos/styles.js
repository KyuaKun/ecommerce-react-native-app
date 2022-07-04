import styled from "styled-components/native";

export const Container = styled.View`
  box-sizing: border-box;
  flex-wrap: nowrap;
  flex: 1;
  flex-direction: column;
`;

export const Content = styled.View`
  box-sizing: border-box;
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: -50;
`;

export const Item = styled.View`
  box-sizing: border-box;
  border: 3px solid #00ffff;
  border-radius: 8px;
  margin: 3% 3%;
  padding: 1%;
  width: 90%;
  height: 15%;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-start;
`;

export const ItemDescription = styled.View`
  height: 100%;
  justify-content: center;
`;

export const TextInfo = styled.Text`
  font-weight: bold;
  color: #120a8f;
  font-size: 15px;
`;
export const TextStock = styled.Text`
  color: #120a8f;
  font-size: 13px;
`;

export const FavImage = styled.Image`
  width: 40%;
  height: 100%;
  border-radius: 10px;
`;
