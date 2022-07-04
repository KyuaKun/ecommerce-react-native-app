import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const BuyInfo = styled.View`
  border: 3px solid #00ffff;
  height: 250;
  border-radius: 10;
  width: 95%;
  flex-direction: column;
  justify-content: space-around;
  margin-bottom: 10%;
`;

export const UpperInfo = styled.View`
  flex-direction: row;
  flex: 4;
`;

export const Column = styled.View`
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
  width: 25%;
`;

export const LowerInfo = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const Description = styled.Text`
  color: #120a8f;
  font-weight: bold;
  font-size: 12;
`;

export const Shop = styled.View`
  width: 50%;
  justify-content: space-between;
  padding: 5px 0px 5px 20px;
`;

export const Price = styled.View`
  width: 50%;
  align-items: flex-end;
  justify-content: space-between;
  padding: 5px 20px 5px 0px;
`;

export const CustomButton = styled.TouchableOpacity`
  background-color: white;
  border-radius: 5px;
  border-width: 2px;
  border-color: #00ffff;
  height: 40px;
  width: 80px;
  margin-left: 50px;
  margin-right: 50px;
`;

export const TextButton = styled.Text`
  font-size: 10.5px;
  color: #120a8f;
  font-weight: bold;
  padding-top: 4px;
  padding-bottom: 4px;
  flex-wrap: wrap;
  text-align: center;
`;

export const ContainerButton = styled.View`
  flex-direction: row;
`;
