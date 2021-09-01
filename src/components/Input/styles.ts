import styled, { css } from 'styled-components/native';
import { TextInput } from 'react-native';
import { MaterialCommunityIcons as Icons } from '@expo/vector-icons';
import Colors from '../../styles/colors';

interface ContainerProps {
  isFocused: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 80%;
  height: 50px;
  padding: 10px;
  margin-bottom: 8px;
  border-radius: 6px;
  background: ${Colors.white};
  border-width: 2px;
  border-color: ${Colors.secondary};
  align-items: center;
  flex-direction: row;

  ${props =>
    props.isFocused &&
    css`
      border-color: ${Colors.primary};
  `}
`;

export const ContainerInput = styled(TextInput)`  
  flex: 1;
  font-size: 18px;
  margin-left: 8px;
  font-family: Jost_400Regular;
  color: ${Colors.primary};
`;

export const Icon = styled(Icons)`
  margin-right: 6px;
`;