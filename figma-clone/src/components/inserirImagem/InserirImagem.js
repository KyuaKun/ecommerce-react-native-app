import React from 'react';
import { ReactFragment } from 'react';
import { TextoInserir } from './styles';
import { AntDesign } from '@expo/vector-icons';

export const InserirImagem = () => {
    return (
        
        <TextoInserir>Inserir uma imagem <AntDesign name="upload" size={12} color="blue" /></TextoInserir>
      
    )
};

