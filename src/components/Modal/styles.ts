import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';
import fonts from '../../styles/fonts';


export const Container = styled.View`
   flex: 1;   
   padding: 10px;
`;

export const ContainerHeader = styled.View`   
   flex-direction: row;
   justify-content: center;
   align-items: center;
   margin-bottom: 10px;
`;

export const PhotoCli = styled.Image`  
  width: 110px;
  height: 110px;
  border-radius: 50px;    
`;

export const ContainerTitle = styled.View`
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40px;
`;

export const TitleCli = styled.Text`
    font-size: 18px;
    font-family: ${fonts.textBold};
    margin: 0 0 12px 0;
`;

export const ContainerText = styled.View`
    margin-top: 20px;
    padding: 20px;
`;

export const TextCli = styled.Text`
    font-size: 14px;
    font-family: ${fonts.text};
    margin-bottom: 4px;
`;
