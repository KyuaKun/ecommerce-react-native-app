import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  margin: 20px 5px 0 5px;
`;
export const Navbar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const TituloProduto = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: #120a8f;
`;

export const ProdutosContainer = styled.View`
  // border: 1px solid green;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
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

export const NomeProduto = styled.Text`
  font-size: 14;
  color: #120a8f;
  font-weight: bold;
`;

export const Preco = styled.Text`
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
`;

export const Icones = styled.View`
  /* border: 1px solid red; */
  height: 8px;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
`;
