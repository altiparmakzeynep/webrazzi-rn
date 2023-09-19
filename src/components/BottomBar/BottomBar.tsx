import { 
    TouchableOpacity, 
    FlatList, 
    View, 
    Image
} from 'react-native';
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

    // I prepared the data, if it were used this scenario would happen.
    const buttons: ButtonsItem[] = [
        {id: 1, icon: "https://cdn-icons-png.flaticon.com/512/4363/4363382.png", navigate: "Home"},
        {id: 2, icon: "https://cdn-icons-png.flaticon.com/512/3031/3031121.png", navigate: "Bookmark"},
        {id: 3, icon: "https://cdn-icons-png.flaticon.com/512/1827/1827504.png", navigate: "Notifications"},
        {id: 4, icon: "https://cdn-icons-png.flaticon.com/512/1144/1144760.png", navigate: "MyProfile"},
    ]

    const buttonsRenderItem = ({ item }: { item: ButtonsItem }) => {
        return(
            <TouchableOpacity 
                //onPress={() => navigation.navigate(item.navigate)} 
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

