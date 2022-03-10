import React, {useState} from 'react';
import { View, ScrollView, Text } from 'react-native';
import Style from '../Style';
import ModalPerso from '../components/ModalPerso';

export default function EventDetail({navigation, route}) {
    
  const detail =  route.params
  const style = Style;
    return (
    <View  style={style.container}>
        <ScrollView>
        <Text style={style.text}>{detail.LIBELLE_BANQUE}</Text>
        <Text style={style.textinput}>{detail.CODE_BANQUE}</Text>
        <Text style={style.button}>{detail.ADRESSE_BANQUE}</Text>
        <Text style={style.button}>{detail.ADRESSE_WEB_BANQUE}</Text>
        <Text style={style.button}>{detail.CONTACT_BANQUE}</Text>
        </ScrollView>
        <ModalPerso contenu={detail.CONTACT_BANQUE} />
    </View>
  );
}
