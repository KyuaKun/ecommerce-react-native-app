import styled from "styled-components/native";

export const TextoInput = styled.TextInput`
  background-color: white;
  font-size: 14px;
  border-radius: 5px;
  border-width: 2px;
  border-color: #00ffff;
  margin-top: 10px;
  width: 60%;
  padding: 5px;
`;

const Input = ({ placeholder }) => {
  return (
    <>
      <TextoInput placeholder={placeholder} />
    </>
  );
};

export default Input;
