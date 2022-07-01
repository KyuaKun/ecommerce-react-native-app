import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

export const ProdutosContainer = styled.View`
  margin-top: 10px;
`;

export const Produto = styled.View`
  width: 160px;
  height: 170px;
  margin-bottom: 18px;
  padding: 4px;
  border: 2px solid #00ffff;
  border-radius: 8px;
`;

export const FotoProduto = styled.Image`
  width: 145px;
  height: 70px;
  border-radius: 5px;
  align-self: center;
`;

export const InfoProduto = styled.Text`
  font-size: 14;
  color: #120a8f;
  font-weight: bold;
`;

export const Estoque = styled.Text`
  font-size: 13;
  color: #120a8f;
`;

export const Contador = styled.View`
  width: 75px;
  height: 25px;
  margin: 10px 5px;
  border: 1px solid #00ffff;
  flex-direction: row;
`;

export const QtdContador = styled.Text`
  font-size: 13;
  color: #120a8f;
  font-weight: bold;
  margin-inline-start: 30;
`;

export const ContainerIcones = styled.TouchableOpacity`
  flex-direction: row;
`;
