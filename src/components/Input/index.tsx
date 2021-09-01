import React, {useState, useCallback} from 'react';
import { TextInputProps } from 'react-native';
import { Container, ContainerInput, Icon } from './styles';

import Colors from '../../styles/colors';

interface Props extends TextInputProps {
  name: string;
  icon: string;
  
}

export function Input({ name, icon, onBlur, ...rest }: Props) {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
    setIsFilled(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(false);
  }, []);

  return (
    <Container isFocused={isFocused} >      
      <ContainerInput      
        onBlur={handleInputBlur}
        onFocus={handleInputFocus}
        placeholder="Searching"
        {...rest}
      />
      <Icon
        name={icon}
        size={30}
        color={isFocused || isFilled ? Colors.primary : Colors.secondary}
      />
    </Container>
  );
};

