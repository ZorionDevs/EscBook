import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  FlatList, 
  ScrollView, 
  useWindowDimensions,
  PixelRatio,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconT from 'react-native-vector-icons/Fontisto';
import styles from './styles';
import UserHome from './Components/UserHome';
import ListInteracion from './Components/ListView';
import { AlertBell } from '../../Functions/AlertBell';
import { useNavigation } from '@react-navigation/native';

export default function Home(){
  const navigation = useNavigation();
  const Data = require('./Components/ListView/listInfos.json');
  
  return (
    <View style={styles.container}>
      <View style={styles.viewProfile}>
        
        <View style={{
          flexDirection: 'row',
          marginBottom: 15
        }}>
        
          <View style={styles.userIcon}></View>
        
          <Text style={styles.textApresent}>
            Olá,{'\n'}
            <Text style={styles.textUsername}>Jackson Barbosa! 👋</Text>
          </Text>
        
          <View style={styles.viewButtonsHeader}>
            <TouchableOpacity style={styles.buttonHeader} onPress={() => navigation.navigate('BellAlert')}><AlertBell/><IconT name="bell" size={20} color={styles.buttonHeaderText.color} /></TouchableOpacity>
            <TouchableOpacity style={styles.buttonHeader}><Icon name="bars" size={20} color={styles.buttonHeaderText.color} /></TouchableOpacity>
          </View>
       </View>
       
       <View style={{
  
       }}>
          <UserHome/>
       </View>
      </View>
      
      <View style={styles.bottomView}>
        <FlatList
        data={Data}
        renderItem={({ item }) => <ListInteracion item={item}/>}
        keyExtractor={item => item.id}
        />
      </View>

    </View>
    )
}