import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./../screens/login/Login";
import CriaSenha from "./../screens/criaSenha/Index";
import RecuperarSenha from "./../screens/recuperaSenha/RecuperarSenha";
import ConfirmaSenha from "./../screens/confirmaSenha/index";
import { Cadastro } from "./../screens/cadastroUsuario/Cadastro";
import ConfirmaCadastro from "./../screens/confirmaCadastro/index";
import Marketplace from "./../screens/marketplace/Marketplace";
import Favoritos from "./../screens/favoritos/Index";
import Produtos from "./../screens/produtos/Produtos";
import Carrinho from "./../screens/carrinho/index";
import AlteraCategoria from "./../screens/alteraCategoria/index";
import CadastroCategoria from "./../screens/cadastroCategoria/index";
import CadastroProduto from "./../screens/cadastroProduto/index";
import AlteraProduto from "./../screens/alteraProduto/index";
import ConfirmaCompra from "./../screens/confirmaCompra/index";

const { Screen, Navigator } = createNativeStackNavigator();

export function Stack() {
  return (
    <Navigator>
      <Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="Cadastro"
        component={Cadastro}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="RecuperarSenha"
        component={RecuperarSenha}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="CriaSenha"
        component={CriaSenha}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="ConfirmaSenha"
        component={ConfirmaSenha}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="ConfirmaCadastro"
        component={ConfirmaCadastro}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="Marketplace"
        component={Marketplace}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="Favoritos"
        component={Favoritos}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="Produtos"
        component={Produtos}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="Carrinho"
        component={Carrinho}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="AlteraCategoria"
        component={AlteraCategoria}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="CadastroCategoria"
        component={CadastroCategoria}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="CadastroProduto"
        component={CadastroProduto}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="AlteraProduto"
        component={AlteraProduto}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="ConfirmaCompra"
        component={ConfirmaCompra}
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  );
}
