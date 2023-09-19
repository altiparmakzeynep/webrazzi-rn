import { 
  Image,
  TouchableOpacity, 
  View,
  Text
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

 //if goBack?
 type HeaderProps = {
  isBack: boolean;
}

export default function Header(props: HeaderProps) {

  const navigation = useNavigation();

  return (
    <View style = {styles.headerContainer}>
      {
        props.isBack ?
          <TouchableOpacity 
            onPress={() => navigation.goBack()}
            style = {styles.backButton}>
            <Image 
              style = {styles.backImage}
              source={{uri: "https://cdn1.iconfinder.com/data/icons/duotone-essentials/24/chevron_backward-512.png"}}/>
          </TouchableOpacity> 
        :  
        <Image 
          style = {styles.webrazziLogo}
          source={{uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Webrazzi_logo.svg/2560px-Webrazzi_logo.svg.png"}}/>
      }
    </View>
  )
}

