import React from 'react';
import { Container, ContainerButton, PhotoCli, NameCli, DadosCli, ViewDados } from './styles';
import { Text } from 'react-native';


export default function CardCli({onPress, data, ...rest}) {    
    
    const d = new Date(data.registered.date);
    let dataf = d.toLocaleDateString('pt-BR', {timeZone: 'UTC'});    

  return(
    <ContainerButton         
        {...rest}
    >
      <Container
         onPress={onPress} 
      >
         <PhotoCli
            source={{uri: data.picture.medium}}
         />      

         <ViewDados>
         
         <NameCli>
            <Text>
               {data.name.first} {data.name.last}
            </Text>
         </NameCli>

         <DadosCli>
            <Text>
                {data.gender === 'male' ? 'Masculino' : 'Feminino'}
            </Text>

            <Text>
               {dataf}
            </Text>
         </DadosCli>

         </ViewDados>
      </Container>

    </ContainerButton>
)
}
