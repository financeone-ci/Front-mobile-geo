import React from 'react';
import { View, Text } from 'react-native';
import * as Location from 'expo-location'
import Style from '../Style';
import { Button } from 'react-native-paper';
import {  useNavigation } from '@react-navigation/native';


export default function Position() {
    const [location, setLocation] = React.useState(null)
    const navigation = useNavigation()
    const style = Style;
    React.useEffect(()=>{
        const getCoordonnees = async () => {
          const {status} = await Location.requestForegroundPermissionsAsync()
          if(status !== "granted"){
            return
          }
          const userLocation = await Location.getCurrentPositionAsync()
          setLocation(userLocation)
        }
        getCoordonnees()
      }, [])
     
    
      if(!location){
        return (<View>
        
          <Text  style={style.text}  > Partage ta position </Text>
        </View>)
      }
  
   
 

  return (
    <View>
      
       <Button onPress={()=> navigation.navigate('Localisation', location.coords)} title="Carte">Voir la carte </Button>  
     </View>
  );
}
