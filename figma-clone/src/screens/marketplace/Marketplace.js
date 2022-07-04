import React from "react";
import { Image, Text } from "react-native";
import Footer from "../../components/footerMenu/FooterMenu";
import { Gradiente } from "../../components/gradiente";
import Navbar from "../../components/navbar/Navbar";
import { Feather, Octicons, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  AboutUs,
  Container,
  ContainerImage,
  Content,
  ImageName,
  ImgCreators,
  NameCreators,
  Names,
  TitleContent,
  WrapperImageText,
  ContainerIcons,
  IconPlus,
  ContainerIconPlus,
} from "./styles";

const Marketplace = () => {
  const nav = useNavigation();

  function telaAlteraCategoria() {
    nav.navigate("AlteraCategoria");
  }

  function telaCadastroCategoria() {
    nav.navigate("CadastroCategoria");
  }

  return (
    <>
      <Gradiente position="top"></Gradiente>
      <Navbar titulo="Marketplace" />
      <Container>
        <Content>
          <TitleContent>Sobre nós...</TitleContent>
          <AboutUs>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </AboutUs>
          <ContainerIconPlus>
            <TitleContent>Categorias</TitleContent>
            <IconPlus onPress={telaCadastroCategoria}>
              <AntDesign name="plus" size={16} color="darkblue" />
            </IconPlus>
          </ContainerIconPlus>
          <ContainerImage>
            <WrapperImageText>
              <Image
                source={require("../../../assets/img/3.jpg")}
                style={{
                  width: 80,
                  height: 95,
                  borderRadius: 10,
                  filter: "blur(1.5px)",
                }}
              />
              <ImageName>Tec3</ImageName>
            </WrapperImageText>
            <WrapperImageText>
              <ContainerIcons onPress={telaAlteraCategoria}>
                <Feather
                  name="trash"
                  size={18}
                  color="red"
                  style={{ marginBottom: "5px" }}
                />
                <Octicons name="pencil" size={18} color="blue" />
              </ContainerIcons>
              <Image
                source={require("../../../assets/img/5.jpg")}
                style={{
                  width: 175,
                  height: 120,
                  borderRadius: 10,
                }}
              />
              <Text
                style={{
                  fontWeight: "bold",
                  alignSelf: "center",
                  color: "#120a8f",
                  fontSize: 15,
                }}
              >
                Tec1
              </Text>
            </WrapperImageText>
            <WrapperImageText>
              <Image
                source={require("../../../assets/img/1.jpg")}
                style={{
                  width: 80,
                  height: 95,
                  borderRadius: 10,
                  filter: "blur(1.5px)",
                }}
              />
              <ImageName>Tec2</ImageName>
            </WrapperImageText>
          </ContainerImage>
        </Content>
        <TitleContent style={{ paddingLeft: "5%" }}>Criadores</TitleContent>
        <ContainerImage>
          <ImgCreators source={require("../../../assets/img/alex.jpg")} />
          <ImgCreators source={require("../../../assets/img/beatriz.jpg")} />
          <ImgCreators source={require("../../../assets/img/carlos.jpg")} />
          <ImgCreators source={require("../../../assets/img/alie.jpg")} />
        </ContainerImage>
        <NameCreators>
          <Names>Alex</Names>
          <Names>Beatriz</Names>
          <Names>Carlos</Names>
          <Names>Alie</Names>
        </NameCreators>
        <Gradiente position="bottom"></Gradiente>
      </Container>
      <Footer />
    </>
  );
};

export default Marketplace;
