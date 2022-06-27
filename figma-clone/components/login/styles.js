import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
`;

export const Logo = styled.Image`
  width: 150px;
  height: 150px;
  border-radius: 100px;
  margin-bottom: 50px;
`;

export const TituloLogin = styled.Text`
  font-size: 18px;
  color: #120a8f;
  font-weight: bold;
`;

export const TextoInput = styled.TextInput`
  background-color: white;
  font-size: 14px;
  border-radius: 5px;
  border-width: 2px;
  border-color: #00ffff;
  margin-top: 30px;
  height: 30px;
  padding: 12px;
`;

export const TextoPergunta = styled.Text`
  color: #120a8f;
  font-weight: bold;
  font-size: 11px;
  margin-top: 3px;
`;

export const BotaoEntrar = styled.View`
  background-color: white;
  border-radius: 5px;
  border-width: 2px;
  border-color: #00ffff;
  margin-top: 30px;
  height: 30px;
  width: 130px;
`;

export const TextoEntrar = styled.Text`
  font-size: 14px;
  color: #120a8f;
  font-weight: bold;
  align-self: center;
  padding-top: 3px;
  padding-bottom: 3px;
`;
