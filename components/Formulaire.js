import React from 'react';
import { View, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import Style from '../Style';

export default function Formulaire(props) {
  return (
    <View>
      {
          props.elts.map((elt, key)=>(
            <TextInput 
            key={key}
            style={elt.style} 
            placeholder={elt.placeholder}
            secureTextEntry={ elt.secureTextEntry || false }
            right={elt.right || '' }
            />
          ))
      }
     </View>
  );
}
