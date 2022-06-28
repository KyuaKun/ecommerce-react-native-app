import React from "react";
import { View, Text, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styled from "styled-components/native";

const Container = styled.View`
  /* border: 1px solid black; */
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 16%;
  padding: 0px 10px;
`;

const Titulo = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: #120a8f;
`;

const Navbar = (props) => {
  return (
    <Container>
      <AntDesign name="logout" size={24} color="#120a8f"  />
      <Titulo> {props.titulo} </Titulo>
      <Image
        source={require("../../../assets/img/logo.jpeg")}
        style={{ width: 60, height: 60, borderRadius: 30 }}
      />
    </Container>
  );
};

export default Navbar;
