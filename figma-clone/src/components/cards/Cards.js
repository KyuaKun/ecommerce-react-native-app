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

export const Cards = (props) => {
  return (
    <ProdutosContainer>
      <Produto>
        <FotoProduto source={require("../../../assets/img/5.jpg")} />
        <InfoProduto>{props.nome}</InfoProduto>
        <InfoProduto>{props.preco}</InfoProduto>
        <Estoque>{props.estoque}</Estoque>
        <Contador>
          <QtdContador>{props.contador}</QtdContador>
        </Contador>
        <ContainerIcones>
          <AntDesign
            name="minus"
            size={16}
            color="darkblue"
            style={{
              marginStart: 6,
              position: "absolute",
              alignSelf: "flex-end",
              marginVertical: 15,
            }}
          />
          <AntDesign
            name="plus"
            size={16}
            color="darkblue"
            style={{
              marginStart: 60,
              position: "absolute",
              alignSelf: "flex-end",
              marginVertical: 15,
            }}
          />
        </ContainerIcones>
        <ContainerIcones>
          <Feather name="trash" size={18} color="red" />
          <Octicons name="pencil" size={18} color="blue" />
        </ContainerIcones>
        <ContainerIcones>
          <AntDesign
            name="check"
            size={23}
            color="darkblue"
            style={{
              marginStart: 95,
              position: "absolute",
              alignSelf: "flex-end",
              marginVertical: 30,
            }}
          />
          <Entypo
            name="star-outlined"
            size={23}
            color="darkblue"
            style={{
              marginStart: 120,
              position: "absolute",
              alignSelf: "flex-end",
              marginVertical: 30,
            }}
          />
        </ContainerIcones>
      </Produto>
    </ProdutosContainer>
  );
};
