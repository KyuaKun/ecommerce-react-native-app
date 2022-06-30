import styled from "styled-components/native";
import React from "react";

export const FormatoBotao = styled.View`
  background-color: white;
  border-radius: 5px;
  border-width: 2px;
  border-color: #00ffff;
  margin-top: 30px;
  height: 30px;
  width: 130px;
`;

export const TextoBotao = styled.Text`
  font-size: 14px;
  color: #120a8f;
  font-weight: bold;
  align-self: center;
  padding-top: 3px;
  padding-bottom: 3px;
`;

export const Botao = (props) => {
  return (
    <FormatoBotao>
    <TextoBotao>{props.texto}</TextoBotao>
    </FormatoBotao>
  );
};

export default Botao;