import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  /* border: 1px solid black; */
  flex: 1;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

export const BuyInfo = styled.View`
  border: 3px solid #00ffff;
  height: 250;
  border-radius: 10;
  width: 95%;
  flex-direction: column;
  justify-content: space-around;
`;

export const UpperInfo = styled.View`
  flex-direction: row;
  flex: 4;
`;

export const Column = styled.View`
  /* border: 1px solid black; */
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
  width: 25%;
`;

export const LowerInfo = styled.View`
  flex: 1;
  flex-direction: row;
  /* padding: 10px; */
`;

export const Description = styled.Text`
  color: #120a8f;
  font-weight: bold;
  font-size: 13;
`;

export const Shop = styled.View`
  width: 50%;
  align-items: flex-start;
  justify-content: space-between;
  padding: 5px 0px 5px 20px;
`;

export const Price = styled.View`
  width: 50%;
  align-items: flex-end;
  justify-content: space-between;
  padding: 5px 20px 5px 0px;
`;
