import styled from "styled-components/native";

export const TextoInput = styled.TextInput`
  background-color: white;
  font-size: 14px;
  border-radius: 5px;
  border-width: 2px;
  border-color: #00ffff;
  
  width:  188px;
  height: 31px;
  padding: 5px;
`;
//margin-top: 10px;
export const Input = ({ placeholder }) => {
  return (
    <>
      <TextoInput placeholder={placeholder} />
    </>
  );
};

export default Input;
