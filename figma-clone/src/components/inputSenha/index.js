import { InputContainer, WrapperInputSenha } from "./styles";
import { Feather } from "@expo/vector-icons";

export const InputSenha = ({ placeholder }) => {
  return (
    <WrapperInputSenha>
      <InputContainer placeholder={placeholder} />
      <Feather
        name="eye"
        size={18}
        color="#120a8f"
        style={{
          position: "absolute",
          marginStart: 160,
          alignSelf: "center",
          marginTop: "10px",
        }}
      />
    </WrapperInputSenha>
  );
};

export default InputSenha;
