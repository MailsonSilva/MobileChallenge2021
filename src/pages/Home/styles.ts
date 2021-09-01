import { TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import Colors from '../../styles/colors';

export const Container = styled(SafeAreaView)`
  flex: 1;    
  background: ${Colors.champagne};
`;

export const ContainerFilter = styled.View`
  margin-top: 80px;
  margin-bottom: 40px;
  flex-direction: row;  
  justify-content: center;  
`;

export const ButtonFilter = styled(TouchableOpacity)`
  margin: 0 14px;
`;

export const ContainerList = styled.View`
   width: 100%;   
   height: 76%;
`;

export const IndicatorView = styled.View`
  align-Self: center;
`;
