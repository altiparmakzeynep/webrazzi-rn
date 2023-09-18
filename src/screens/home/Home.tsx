import { 
    StyleSheet, 
    Text, 
    View,
    SafeAreaView,
    FlatList,
    Image,
    TouchableOpacity
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { fetchNews } from '../../actions/homeAction';
import { useDispatch, useSelector } from 'react-redux';
import { NewsItem } from '../../reducers/homeReducer';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../../../App';
import { PhoneHeight, PhoneWidth } from '../../config';

const Home = () => {

    const dispatch = useDispatch();  
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();  
    const { newsContents } = useSelector((state: any) => state.homeReducer);
  
    useEffect(() => {
      dispatch(fetchNews() as any);
    }, [])

    // const data = [
    //     {
    //         "id": 434550,
    //         "type": "post",
    //         "insights": false,
    //         "url": "https://webrazzi.com/2023/09/15/heygen-yapay-zeka/",
    //         "title": "Yapay zeka destekli avatar ve seslerle video üretmenizi sağlayan platform: HeyGen",
    //         "excerpt": "Joshua Xu ve Wayne Liang tarafından…",
    //         "published_at": "2023-09-15 17:45:00",
    //         "modified_at": "2023-09-15 17:45:36",
    //         "categories": [
    //             {
    //             "title": "Girişim",
    //             "id": 3577
    //             },
    //             {
    //             "title": "Yapay Zeka",
    //             "id": 33885
    //             }
    //         ],
    //         "tags": [
    //             {
    //             "title": "HeyGen",
    //             "id": 45803
    //             },
    //             {
    //             "title": "Yapay Zeka",
    //             "id": 5030
    //             }
    //         ],
    //         "author": {
    //             "id": 82597,
    //             "username": "tugce",
    //             "full_name": "Tuğçe İçözü",
    //             "avatar": "https://cdn.webrazzi.com/id/201903/67c3a531234359ff501778f49c1178c4.jpeg"
    //         },
    //         "interaction": {
    //             "bookmarked": false,
    //             "liked": false
    //         },
    //         "comment_count": 0,
    //         "comment_enabled": true,
    //         "is_advertorial": false,
    //         "is_guest_author": false,
    //         "thumbnails": {
    //             "full": {
    //             "url": "https://cdn.webrazzi.com/uploads/2023/09/heygen-332.png",
    //             "width": 960,
    //             "height": 540
    //             },
    //             "size-xs": {
    //             "url": "https://cdn.webrazzi.com/uploads/2023/09/heygen-332_48x27.png",
    //             "width": 48,
    //             "height": 27
    //             },
    //             "size-sm": {
    //             "url": "https://cdn.webrazzi.com/uploads/2023/09/heygen-332_240x135.png",
    //             "width": 240,
    //             "height": 135
    //             },
    //             "size-md": {
    //             "url": "https://cdn.webrazzi.com/uploads/2023/09/heygen-332_400x225.png",
    //             "width": 400,
    //             "height": 225
    //             },
    //             "size-lg": {
    //             "url": "https://cdn.webrazzi.com/uploads/2023/09/heygen-332_800x450.png",
    //             "width": 800,
    //             "height": 450
    //             }
    //         }
    //         },
    //         {
    //         "id": 434546,
    //         "type": "post",
    //         "insights": true,
    //         "url": "https://webrazzi.com/2023/09/15/tuketicilerin-sadece-yuzde-18-i-verilerin-gizliligi-konusunda-markalara-guveniyor/",
    //         "title": "Tüketicilerin sadece yüzde 18'i verilerin gizliliği konusunda markalara güveniyor",
    //         "excerpt": "Tüketicilerin yalnızca yüzde 18,29'unun veriler…",
    //         "published_at": "2023-09-15 17:00:00",
    //         "modified_at": "2023-09-15 17:00:28",
    //         "categories": [
    //             {
    //             "title": "Webrazzi Insights",
    //             "id": 33880
    //             }
    //         ],
    //         "tags": [
    //             {
    //             "title": "Webrazzi Insights",
    //             "id": 35881
    //             }
    //         ],
    //         "author": {
    //             "id": 82595,
    //             "username": "gozde",
    //             "full_name": "Gözde Ulukan",
    //             "avatar": "https://cdn.webrazzi.com/id/202006/24d294e559483fe39b9b7a6bd8d1b6b6.jpeg"
    //         },
    //         "interaction": {
    //             "bookmarked": false,
    //             "liked": false
    //         },
    //         "comment_count": 0,
    //         "comment_enabled": true,
    //         "is_advertorial": false,
    //         "is_guest_author": false,
    //         "thumbnails": {
    //             "full": {
    //             "url": "https://cdn.webrazzi.com/uploads/2023/09/veri-guvenligi-461.png",
    //             "width": 1280,
    //             "height": 720
    //             },
    //             "size-xs": {
    //             "url": "https://cdn.webrazzi.com/uploads/2023/09/veri-guvenligi-461_48x27.png",
    //             "width": 48,
    //             "height": 27
    //             },
    //             "size-sm": {
    //             "url": "https://cdn.webrazzi.com/uploads/2023/09/veri-guvenligi-461_240x135.png",
    //             "width": 240,
    //             "height": 135
    //             },
    //             "size-md": {
    //             "url": "https://cdn.webrazzi.com/uploads/2023/09/veri-guvenligi-461_400x225.png",
    //             "width": 400,
    //             "height": 225
    //             },
    //             "size-lg": {
    //             "url": "https://cdn.webrazzi.com/uploads/2023/09/veri-guvenligi-461_800x450.png",
    //             "width": 800,
    //             "height": 450
    //             }
    //         }
    //         }
    // ];
    
    const renderItem = ({ item }: { item: NewsItem }) => {
        return(
            <TouchableOpacity 
                style = {styles.newsContainer}
                onPress={() => navigation.navigate("NewsDetail", {itemId: item.id})}>
                <Image 
                    style = {styles.img}
                    source={{uri: item.thumbnails.full.url}}/>
                <View style = {styles.categoriesView}>
                    <View style = {{width: 25, height: 5, backgroundColor: "#f3d02e"}}></View>
                    <Text style = {styles.categoriesText}>{item.categories[0].title}</Text>

                </View>
                
                <Text style = {styles.headerText}>{item.title}</Text>
                <View style = {styles.authorInfoView}>
                    <Text style = {styles.authorText}>{item.author.full_name}</Text>
                    <View style = {{width: 8, height: 8, borderRadius: 4, backgroundColor: "gray", marginLeft: 10}}></View>
                    <Text style = {styles.dateText}>{(item.published_at).substring(0, 10)}</Text>
                </View>
               
            </TouchableOpacity>
        )  
    }
  return (
    <SafeAreaView style = {styles.container}>
       <FlatList
            data={newsContents}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
       />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    newsContainer: {
        backgroundColor: "white",
        borderRadius: 14,
        width: PhoneWidth * 0.9,
        height: PhoneHeight * 0.25,
        alignSelf: "center",
        marginTop: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7
    },
    img: {
        width: "100%", 
        height: "40%", 
        borderTopLeftRadius: 14, 
        borderTopRightRadius: 14
    },
    categoriesView: {
        width: PhoneWidth,
        height: "20%",
        borderWidth: 0,
        flexDirection: "row",
        alignItems: "center"
    },
    categoriesText: {
        fontSize: 14,
        color: "black",
        marginLeft: 8,
    },
    headerText: {
        fontSize: 16,
        color: "black",
        fontWeight: "bold",
        marginLeft: 10,
        height: "20%",
        width: "95%"
    },
    authorInfoView: {
        borderWidth: 0,
        flexDirection: "row",
        width: "100%",
        height: "20%",
        borderBottomLeftRadius: 14,
        borderBottomRightRadius: 14,
        alignItems: "center",
    },
    authorText: {
        fontSize: 16,
        color: "gray",
        marginLeft: 10
    },
    dateText: {
        fontSize: 16,
        color: "gray",
        marginLeft: 10
    }
})

export default Home;