import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 150px;
  height: 150px;
  border-radius: 100px;
  margin-bottom: 50px;
`;

export const TituloSenha = styled.Text`
  font-size: 18px;
  color: #120a8f;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const TextoInput = styled.TextInput`
  background-color: white;
  font-size: 14px;
  border-radius: 5px;
  border-width: 2px;
  border-color: #00ffff;
  margin-top: 30px;
  height: 30px;
  padding: 1px;
`;

export const BotaoAlterar = styled.View`
  background-color: white;
  border-radius: 5px;
  border-width: 2px;
  border-color: #00ffff;
  margin-top: 30px;
  height: 30px;
  width: 130px;
`;

export const TextoAlterar = styled.Text`
  font-size: 14px;
  color: #120a8f;
  font-weight: bold;
  align-self: center;
  padding-top: 3px;
  padding-bottom: 3px;
`;
