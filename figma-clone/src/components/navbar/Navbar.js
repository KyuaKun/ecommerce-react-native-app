import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Container, Titulo } from "./styles";

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
