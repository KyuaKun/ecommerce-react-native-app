import { InputContainer, WrapperInputSenha } from "./styles"
import { Ionicons } from '@expo/vector-icons';


 export const InputSenha = ({ placeholder }) => {
    return (
        <WrapperInputSenha>
            <InputContainer
                placeholder={placeholder}
            />
            <Ionicons
                name="eye"
                size={24}
                color="#120a8f"
                style={{
                    position: 'absolute',
                    marginStart: 160,
                    alignSelf: 'center',
                    marginTop: '10px',
                }}
            />
        </WrapperInputSenha>

    )
}

export default InputSenha;