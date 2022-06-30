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
  margin-top: 10px;
  width: 60%;
  padding: 5px;
`;

export const TextInfo = styled.TouchableOpacity`
    color: #120a8f;
    font-size: 10px;
    font-weight: 700;
    line-height: 12px;
    padding: 10px;
    font-family: 'Roboto';
`;
export const TextLink = styled.Text`
    color: #120a8f;
    font-size: 10px;
    font-weight: 700;
    line-height: 12px;
    font-family: 'Roboto';
`;