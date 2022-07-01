import React from "react";
import { AntDesign } from "@expo/vector-icons";
import styled from "styled-components/native";
import { TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

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

export const Navbar = (props) => {
  const nav = useNavigation();

  function telaLogin() {
    nav.navigate("Login");
  }

  return (
    <Container>
      <TouchableOpacity onPress={telaLogin}>
        <AntDesign name="logout" size={24} color="#120a8f" />
      </TouchableOpacity>
      <Titulo> {props.titulo} </Titulo>
      <Image
        source={require("../../../assets/img/logo.jpeg")}
        style={{ width: 60, height: 60, borderRadius: 30 }}
      />
    </Container>
  );
};

export default Navbar;
