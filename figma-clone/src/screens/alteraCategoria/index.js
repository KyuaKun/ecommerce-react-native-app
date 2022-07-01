import Botao from "../../components/botao/Botao";
import Input from "../../components/input/Input";
import Navbar from "../../components/navbar/Navbar";
import { Container } from "./styles";
import { useNavigation } from "@react-navigation/native";
import Gradiente from "../../components/gradiente/index";

const AlteraCategoria = () => {
  const nav = useNavigation();

  function telaMarketplace() {
    nav.navigate("Marketplace");
  }

  return (
    <React.Fragment>
      <Navbar titulo="Alterar Categoria" />
    <Container>

      <Input placeholder="Tec 1" />
      <Input placeholder="imagem5.png" />
      <Botao onPress={telaMarketplace} texto="ALTERAR" />
    </Container>
    </React.Fragment>
  );
};

export default AlteraCategoria;
