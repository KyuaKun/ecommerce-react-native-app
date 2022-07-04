import React from "react";
import { ReactFragment } from "react";
import { TextoInserir } from "./styles";
import { AntDesign } from "@expo/vector-icons";

export const InserirImagem = () => {
  return (
    <TextoInserir>
      Selecionar imagem{" "}
      <AntDesign
        name="upload"
        size={14}
        color="#120a8f"
        style={{ marginLeft: "4px" }}
      />
    </TextoInserir>
  );
};
