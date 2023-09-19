import { 
    StyleSheet, 
    Text, 
    View,
    SafeAreaView,
    FlatList,
    Image,
    TouchableOpacity,
    TextInput
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { fetchNews } from '../../actions/homeAction';
import { fetchNewsDetail } from '../../actions/newsDetailAction';
import { useDispatch, useSelector } from 'react-redux';
import { NewsItem } from '../../reducers/homeReducer';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../../../App';
import { PhoneHeight, PhoneWidth } from '../../config';
import Header from '../../components/Header/Header';
import BottomBar from '../../components/BottomBar/BottomBar';

const Home = () => {

    const dispatch = useDispatch();  
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();  
    const [searchText, setSearchText] = useState("");
    const [filteredSearchData, setFilteredSearchData] = useState([]);
    const { newsContents } = useSelector((state: any) => state.homeReducer);

    const newsHeaders: string[] = []
    newsContents.map((item: NewsItem) => newsHeaders.push(item.title))

    useEffect(() => {
      dispatch(fetchNews() as any);
    }, [])

    useEffect(() => {
        searchProduct(searchText)
    }, [searchText])

    //search function
    const searchProduct = (txt: string) => {
        if (!txt) {
            // Eğer kullanıcı hiçbir şey yazmamışsa, tüm içeriği göster
            setFilteredSearchData(newsContents);
        } else {
            // Kullanıcının girdiği metni arayın
            const filteredData = newsContents.filter((item: { title: string; }) => {
                // Başlığı küçük harfe çevirip, aranan metinle karşılaştırın
                return item.title.toLowerCase().includes(txt.toLowerCase());
            });
            setFilteredSearchData(filteredData);
        }
    };

    const onFetchNewsDetail = (itemId: number) => {
        navigation.navigate("NewsDetail", {itemId: itemId})
        dispatch(fetchNewsDetail(itemId) as any)
    }

    const renderItem = ({ item }: { item: NewsItem }) => {
        return(
            <TouchableOpacity 
                style = {styles.newsView}
                onPress={() => onFetchNewsDetail(item.id)}>
                <Image 
                    style = {styles.img}
                    source={{uri: item.thumbnails.full.url}}/>
                <View style = {styles.categoriesView}>
                    <View style = {{width: 25, height: 5, backgroundColor: "#f3d02e"}}></View>
                    <Text style = {styles.categoriesText}>{item.categories[0].title}</Text>
                </View>
                <Text style = {styles.headerText}>{item.title}</Text>
                <Text style = {styles.excerptText}>{item.excerpt}</Text>

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
       <Header isBack={false}/>
       <View style = {styles.searchContainer}>
        <TextInput 
            onChangeText={text => setSearchText(text) }
            style = {styles.searchInput}
            placeholder='Haber başlığı ara'
            placeholderTextColor={"gray"}        
        />
       </View>
       <View style = {styles.newsContainer}>
        <FlatList
                data={filteredSearchData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
        />
       </View>
       <BottomBar/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    searchContainer: {
        width: PhoneWidth,
        height: PhoneHeight * 0.1,
        borderWidth: 0,
        alignItems: "center",
        justifyContent: "center",
    },
    searchInput: {
        borderRadius: 20,
        width: PhoneWidth * 0.9,
        backgroundColor: "#e3e3e3",
        height: "70%",
        fontSize: 16,
        fontStyle: "italic",
        paddingLeft: 10 
    },
    newsContainer: {
        flex: 1
    },
    newsView: {
        backgroundColor: "white",
        borderRadius: 14,
        width: PhoneWidth * 0.9,
        height: PhoneHeight * 0.35,
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
        height: "35%", 
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
        height: "15%",
        width: "95%"
    },
    excerptText: {
        fontSize: 14,
        color: "black",
        marginLeft: 10,
        height: "15%",
        width: "95%"
    },
    authorInfoView: {
        flexDirection: "row",
        width: "100%",
        height: "15%",
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