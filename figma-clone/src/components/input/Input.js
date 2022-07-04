import styled from "styled-components/native";

export const TextoInput = styled.TextInput`
  background-color: white;
  font-size: 14px;
  border-radius: 5px;
  border-width: 2px;
  border-color: #00ffff;
  margin-top: 10px;
  width: 188px;
  height: 31px;
  padding: 5px;
`;

export const Input = ({ placeholder }) => {
  return (
    <>
      <TextoInput placeholder={placeholder} />
    </>
  );
};

export default Input;
