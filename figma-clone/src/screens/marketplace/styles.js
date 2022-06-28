import styled from "styled-components/native";

export const Container = styled.View`
  /* border: 1px solid red; */
  flex: 1;
  flex-direction: column;
`;

export const Content = styled.View`
  /* border: 1px solid red; */
  padding: 5%;
  flex-direction: column;
`;

export const TitleContent = styled.Text`
  color: #120a8f;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 6%;
`;

export const AboutUs = styled.Text`
  font-size: 11px;
  margin-bottom: 18px;
  text-align: center;
  font-weight: bold;
`;

export const ContainerImage = styled.View`
  /* border: 1px solid green; */
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
`;

export const Fuuter = styled.View`
  /* border: 1px solid black; */
  padding: 0px 15px;
`;

export const ImgCreators = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  border: 3px solid #120a8f;
`;

export const NameCreators = styled.View`
  justify-content: space-around;
  flex-direction: row;
`;
export const Names = styled.Text`
  font-size: 12px;
  font-weight: bold;
`;

export const IconAction = styled.View`
  /* border: 1px solid red; */
  height: 38px;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
`;
