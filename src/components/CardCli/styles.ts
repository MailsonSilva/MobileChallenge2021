import styled from 'styled-components/native';
import colors from '../../styles/colors';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`     
  flex-direction: row;
  align-items: center;  
`;

export const ContainerButton = styled.View`     
  border-width: 2px;
  margin: 8px;
  border-width: 2px;
  border-radius: 6px;
  border-color: ${colors.secondary};
  flex-direction: row;
  align-items: center;
  justify-content: center;    
`;

export const PhotoCli = styled.Image`  
  width: 110px;
  height: 110px;
  margin: 14px;
  border-radius: 70px;
`;

export const ViewDados = styled.View`
   flex: 1;
   height: 100%;
   padding: 10px;
`;

export const NameCli = styled.View`
   flex: 2;
`;

export const DadosCli = styled.View`
   flex: 1;   
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
`;
