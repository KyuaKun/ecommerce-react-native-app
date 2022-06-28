import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  margin: 20px 10px 0 10px;
`;
export const Navbar = styled.View`
  /* border: 1px solid black; */
  padding: 5px 15px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Titlemarketplace = styled.Text`
  font-weight: bold;
  font-size: 25px;
  color: #120a8f;
`;

export const Icon = styled.Text`
  color: #120a8f;
`;

export const Content = styled.View`
  /* border: 1px solid red; */
  padding: 5px 15px;
  flex-direction: column;
  margin: 7px 0;
`;

export const TitleContent = styled.Text`
  color: #120a8f;
  font-weight: bold;
  font-size: 22px;
  margin-bottom: 18px;
`;

export const AboutUs = styled.Text`
  font-size: 16px;
  margin-bottom: 18px;
  text-align: center;
  font-weight: bold;
`;

export const ContainerImage = styled.View`
  /* border: 1px solid green; */
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
  margin-bottom: 3px;
`;

export const Fuuter = styled.View`
  /* border: 1px solid black; */
  padding: 0px 15px;
`;

export const ImgCreators = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  border: 2px solid #120a8f;
`;

export const NameCreators = styled.View`
justify-content: space-around;
flex-direction: row;
`
export const Names = styled.Text`
font-size: 12px;
font-weight: bold;
`

export const IconAction = styled.View`
  /* border: 1px solid red; */
  height: 38px;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
`;