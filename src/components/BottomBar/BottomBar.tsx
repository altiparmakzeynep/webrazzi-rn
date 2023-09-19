import { TouchableOpacity, FlatList, View, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

export default function BottomBar() {

    const navigation = useNavigation();

    type ButtonsItem = {
        id: number,
        icon: string,
        navigate: string
    }

    const buttons: ButtonsItem[] = [
        {id: 1, icon: "https://cdn-icons-png.flaticon.com/512/4363/4363382.png", navigate: "home"},
        {id: 2, icon: "https://cdn-icons-png.flaticon.com/512/3031/3031121.png", navigate: "contact"},
        {id: 3, icon: "https://cdn-icons-png.flaticon.com/512/1827/1827504.png", navigate: "scanScreen"},
        {id: 4, icon: "https://cdn-icons-png.flaticon.com/512/1144/1144760.png", navigate: "assistant"},
    ]

    const buttonsRenderItem = ({ item }: { item: ButtonsItem }) => {
        return(
            <TouchableOpacity 
                style = {styles.bottomButtons}>
                <Image 
                    style={styles.icons}
                    source={{uri: item.icon}}/>
            </TouchableOpacity>
        )
    }

  return (
    <View style = {styles.bottomBarContainer}>
        <FlatList
            data={buttons}
            renderItem={buttonsRenderItem}
            keyExtractor={(item) => item.id.toString()}
            horizontal
        />
    </View>
  )
}

