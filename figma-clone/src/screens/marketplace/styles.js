import styled from "styled-components/native";
import { View } from "react-native";

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
`;

export const Content = styled.View`
  padding: 5%;
  flex-direction: column;
`;

export const TitleContent = styled.Text`
  color: #120a8f;
  font-weight: bold;
  font-size: 18px;
  margin: 1.5% 0 1.5% 0;
`;

export const AboutUs = styled.Text`
  font-size: 11px;
  margin-bottom: 18px;
  text-align: center;
  font-weight: bold;
  margin: 3% 0 3% 0;
`;

export const ContainerImage = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
  margin: 1% 0 1% 0;
`;

export const ImgCreators = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  border: 3px solid #120a8f;
  margin: 1% 0 1% 0;
`;

export const NameCreators = styled.View`
  justify-content: space-around;
  flex-direction: row;
`;
export const Names = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #120a8f;
`;

export const WrapperImageText = styled.View`
  flex-direction: column;
`;

export const ImageName = styled.Text`
  font-weight: bold;
  align-self: center;
  color: #120a8f;
`;

export const ContainerIcons = styled.TouchableOpacity`
  flex-direction: row;
  align-self: flex-end;
`;

export const ContainerIconPlus = styled.View`
  flex-direction: row;
`;

export const IconPlus = styled.TouchableOpacity`
  margin-top: 10px;
  margin-left: 5px;
`;
