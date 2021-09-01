import React, { useRef, useEffect, useState } from 'react';
import { MaterialCommunityIcons as Icons } from '@expo/vector-icons';
import { Modalize } from 'react-native-modalize';
import Modal from '../../components/Modal';
import { Input } from '../../components/Input';
import colors from '../../styles/colors';
import { Container, ContainerFilter, ButtonFilter, ContainerList, IndicatorView } from './styles'
import CardCli from '../../components/CardCli';

import { ActivityIndicator, Alert, FlatList } from 'react-native';


import api from '../../services';

import IRandomUserResponse from '../../global/IRandomUserResponse';

export default function Home() {  
   const modalizeRef = useRef<Modalize>(null);
   const [infoCli, setInfoCli] = useState<IRandomUserResponse[]>([]);   
   const [loading, setLoading] = useState(true);
   const [cli, setCli] = useState<IRandomUserResponse>(); 
   const [loadingList, setLoadingList] = useState(false);
   const [limit, setLimit] = useState(0);

    useEffect(() => {
        loadCli();  
    },[]);

   const loadCli = async() => {
        if (loadingList) return;
        
        setLoadingList(true);
        await api.get('?results='+limit+'&nat=br')
        .then((response) => {

           
            setInfoCli(response.data.results);   
           
            setLoading(false);
            setLoadingList(false);
            setLimit(limit + 10)
            console.log(infoCli);
            
        })
        .catch((error) => {
            Alert.alert('Location error', `${(error.code, error.message)}`);
        });
    };
    

    const renderFooter = () => {
        if (!loadingList) return null;
        return (
          <IndicatorView>
            <ActivityIndicator size="large" color={colors.blue}/>
          </IndicatorView>
        );
      };

    const onOpen = (item) => {
        modalizeRef.current?.open();  
        setCli(item);      
    };

return (
    loading ? (
        <IndicatorView>
          <ActivityIndicator size="large" color={colors.blue}/>
        </IndicatorView>
      ) : (
    <Container>  
        <ContainerFilter>
            <Input
                name="search"
                icon="account-search"
            />   

            <ButtonFilter>        
                <Icons
                name="filter"
                size={40}
                color={colors.secondary}
                />        
            </ButtonFilter>  
        </ContainerFilter>

        <ContainerList>
            <FlatList
                data={infoCli}     
                onEndReached={loadCli}
                onEndReachedThreshold={0.1}                            
                ListFooterComponent={renderFooter}                 
                keyExtractor={(item) => item.login.uuid} 
                renderItem={({item}) =>(
                    <CardCli
                        onPress={() => onOpen(item)}
                        data={item}
                    />
                )}                
                showsVerticalScrollIndicator={false}
            />
        </ContainerList>   

        <Modalize
            ref={modalizeRef}
            snapPoint={500}
            modalHeight={500}
        >
            <Modal
                data={cli}
            />
        </Modalize>
        
    </Container>
    )
)
}
