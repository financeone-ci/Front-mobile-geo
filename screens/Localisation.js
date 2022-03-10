import React from 'react';
import { View, Text, StyleSheet, Image, Alert } from 'react-native';
import MapView,{ Marker }from 'react-native-maps';
import AppBarBottom from '../components/AppBarBottom';
import Style from '../Style'

export default function Localisation({navigation, route}) {
    const detail =  route.params
    const style = Style;
  return (
    <View style={style.container}>
      <MapView
      style={StyleSheet.absoluteFill}
    initialRegion={{
      latitude: detail.latitude,
      longitude: detail.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
    >
        <Marker
             onPress={() =>  Alert.alert("Latitude"+detail.latitude, "Longitude"+ detail.longitude)}
            icon={<Image 
                // uri={"../assets/a.jpg"} 
                    source={require('../assets/a.jpg')}

                    />}
            coordinate={{
            latitude: detail.latitude,
            longitude: detail.longitude,
            }}
            title={"Je suis ici"}
            description={"FinanceOne Abidjan"}
        />
    </MapView>
    <AppBarBottom />
     </View>
  );
}