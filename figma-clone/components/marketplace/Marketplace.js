import { Image, Text } from "react-native";
import {
  AboutUs,
  Container,
  ContainerImage,
  Content,
  Fuuter,
  Icon,
  IconAction,
  ImgCreators,
  NameCreators,
  Names,
  Navbar,
  TitleContent,
  Titlemarketplace,
} from "./styles";

const Marketplace = () => {
  return (
    <Container>
      <Navbar>
        <Icon>Icone</Icon>
        <Titlemarketplace>Marketplace</Titlemarketplace>
        <Image
          source={require("../../assets/img/logo.jpeg")}
          style={{ width: 60, height: 60, borderRadius: 30 }}
        />
      </Navbar>
      <Content>
        <TitleContent>Sobre nós...</TitleContent>
        <AboutUs>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </AboutUs>

        <TitleContent>Categorias +</TitleContent>
        <ContainerImage>
          <Image
            source={require("../../assets/img/3.jpg")}
            style={{ width: 80, height: 95, borderRadius: 10 }}
          />
          <Image
            source={require("../../assets/img/5.jpg")}
            style={{
              width: 175,
              height: 120,
              borderRadius: 10,
            }}
          />
          <Image
            source={require("../../assets/img/1.jpg")}
            style={{ width: 80, height: 95, borderRadius: 10 }}
          />
        </ContainerImage>
      </Content>
      <Fuuter>
        <TitleContent>Criadores</TitleContent>
        <ContainerImage>
          <ImgCreators source={require("../../assets/img/logo.jpeg")} />
          <ImgCreators source={require("../../assets/img/logo.jpeg")} />
          <ImgCreators source={require("../../assets/img/logo.jpeg")} />
          <ImgCreators source={require("../../assets/img/logo.jpeg")} />
        </ContainerImage>
        <NameCreators>
          <Names>Alex</Names>
          <Names>Beatriz</Names>
          <Names>Carlos</Names>
          <Names>Alie</Names>
        </NameCreators>
        <IconAction>
          <Text>Casa</Text>
          <Text>Bolsa</Text>
          <Text>Estrela</Text>
          <Text>Carrinho</Text>
        </IconAction>
      </Fuuter>
    </Container>
  );
};

export default Marketplace;
