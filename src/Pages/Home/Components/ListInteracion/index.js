import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles'

export default function({ item }){
  return(
      <View style={styles.container}>
       <View style={styles.headerText}>
        <Text style={styles.categoryText}>{item.category}</Text>
        <View style={{position: 'absolute', right: 0, paddingRight: 10}}>
          <TouchableOpacity style={{justifyContent: 'center'}}>
            <Text style={styles.allViewText}>Ver Todos <Icon name="arrow-right" size={12} color={styles.allViewText.color} /></Text>
          </TouchableOpacity>
        </View>
       </View>
       <View style={styles.component}>
       </View>
      </View>
    )
}