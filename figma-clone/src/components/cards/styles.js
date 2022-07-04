import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

export const ProdutosContainer = styled.View`
  margin-top: 6px;
`;

export const Produto = styled.View`
  width: 140px;
  height: 140px;
  padding: 2px;
  border: 2px solid #00ffff;
  border-radius: 8px;
`;

export const FotoProduto = styled.Image`
  width: 98%;
  height: 50%;
  border-radius: 5px;
  align-self: center;
`;

export const InfoProduto = styled.Text`
  font-size: 11;
  color: #120a8f;
  font-weight: bold;
  margin-left: 2%;
`;

export const Estoque = styled.Text`
  font-size: 9;
  color: #120a8f;
  margin-left: 2%;
`;

export const Contador = styled.View`
  width: 50%;
  height: 15%;
  margin: 2% 2%;
  border: 1px solid #00ffff;
  flex-direction: row;
`;

export const QtdContador = styled.Text`
  font-size: 11;
  color: #120a8f;
  font-weight: bold;
  margin-inline-start: 43%;
  align-self: center;
`;

export const ContainerIcones = styled.TouchableOpacity`
  flex-direction: row;
`;
