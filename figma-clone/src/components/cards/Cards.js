import {
  Produto,
  ProdutosContainer,
  FotoProduto,
  InfoProduto,
  Estoque,
  Contador,
  ContainerIcones,
  QtdContador,
} from "./styles";
import { Feather, Octicons, AntDesign, Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export const Cards = (props) => {
  const nav = useNavigation();

  function telaAlteraProduto() {
    nav.navigate("AlteraProduto");
  }

  return (
    <ProdutosContainer>
      <Produto>
        <FotoProduto source={props.path} />
        <InfoProduto>{props.nome}</InfoProduto>
        <InfoProduto>{props.preco}</InfoProduto>
        <Estoque>{props.estoque}</Estoque>
        <Contador>
          <QtdContador>{props.contador}</QtdContador>
        </Contador>
        <ContainerIcones>
          <AntDesign
            name="minus"
            size={11}
            color="darkblue"
            style={{
              marginStart: 6,
              position: "absolute",
              alignSelf: "flex-end",
              marginVertical: 5,
            }}
          />
          <AntDesign
            name="plus"
            size={11}
            color="darkblue"
            style={{
              marginStart: 50,
              position: "absolute",
              alignSelf: "flex-end",
              marginVertical: 5,
            }}
          />
        </ContainerIcones>
        <ContainerIcones>
          <AntDesign
            name="check"
            size={15}
            color="darkblue"
            style={{
              marginStart: 80,
              position: "absolute",
              alignSelf: "flex-end",
              marginVertical: 1,
            }}
          />
          <Entypo
            name="star-outlined"
            size={15}
            color="darkblue"
            style={{
              marginStart: 108,
              position: "absolute",
              alignSelf: "flex-end",
              marginVertical: 1,
            }}
          />
        </ContainerIcones>
      </Produto>
      <ContainerIcones onPress={telaAlteraProduto}>
        <Feather name="trash" size={14} color="red" />
        <Octicons name="pencil" size={14} color="blue" />
      </ContainerIcones>
    </ProdutosContainer>
  );
};
