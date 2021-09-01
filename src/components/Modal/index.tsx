import React, {useEffect} from 'react';
import { MaterialCommunityIcons as Icons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { 
    Container,
    PhotoCli,
    ContainerHeader,
    ContainerTitle,
    TitleCli,
    ContainerText,
    TextCli
} from './styles';

import IRandomUserResponse from '../../global/IRandomUserResponse';

interface IRandomUserProps {
    data: IRandomUserResponse;
}

export default function Modal({data, ...rest}:IRandomUserProps) {


    useEffect(() => {
        console.log(data.name.first)  
    },[]);

    return (
        <Container
        {...rest}
        >
            <ContainerHeader>
                <PhotoCli
                    source={{uri: data.picture.medium}}
                />
                
                <TouchableOpacity
                    style={{ position: 'absolute', right: 4, top: 2}}
                >
                    <Icons
                        name="close" size={28}
                    />           
                </TouchableOpacity> 
                    
            </ContainerHeader>
            <ContainerTitle>
                <TitleCli>
                    {data.name.first} {data.name.last}
                </TitleCli>
            </ContainerTitle>

            <ContainerText>
                <TitleCli>
                    Endereço                   
                </TitleCli>
                <TextCli>
                    { `${data.location.street.name} Nº ${data.location.street.number}`}
                </TextCli>
                <TextCli>
                    { `Cidade: ${data.location.city} Estado: ${data.location.state}`}                    
                </TextCli>
                <TitleCli>
                    Contato                   
                </TitleCli>
                <TextCli>
                    { `Fixo: ${data.phone} Cel: ${data.cell}`}                    
                </TextCli>
                <TextCli>
                    { `Email: ${data.email}`}                    
                </TextCli>
            </ContainerText>


        </Container>
    );
}

