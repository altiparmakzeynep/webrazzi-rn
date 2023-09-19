import { 
    Text, 
    View,
    SafeAreaView,
    FlatList,
    Image,
    TouchableOpacity,
    TextInput,
    ActivityIndicator
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { fetchNews } from '../../actions/homeAction';
import { fetchNewsDetail } from '../../actions/newsDetailAction';
import { useDispatch, useSelector } from 'react-redux';
import { NewsItem } from '../../reducers/homeReducer';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../../../App';
import Header from '../../components/Header/Header';
import BottomBar from '../../components/BottomBar/BottomBar';
import styles from "./styles";

const Home = () => {

    const dispatch = useDispatch();  
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();  
    const [searchText, setSearchText] = useState("");
    const [filteredSearchData, setFilteredSearchData] = useState([]);
    const { newsContents } = useSelector((state: any) => state.homeReducer);

    // news headers array for searching small array
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
    console.log("duru", filteredSearchData.length)

    const renderItem = ({ item }: { item: NewsItem }) => {

        const publishedDate = new Date(item?.published_at);
        const now = new Date();
        const timeDiff = now.getTime() - publishedDate.getTime()
        //basic math operations for convert => hours
        const hoursDiff = timeDiff / (1000 * 60 * 60);

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
                    <View style = {styles.dotView}></View>
                    {
                        Math.floor(hoursDiff) < 12 ?
                        <Text style = {styles.dateText}>{Math.floor(hoursDiff)} saat önce</Text>
                        :
                        <Text style = {styles.dateText}>{item.published_at.substring(0,10)}</Text>
                    }
                </View>
            </TouchableOpacity>
        )  
    }

    if(newsContents.length == 0){
        return(
            <SafeAreaView>
                <ActivityIndicator style = {{width: 50, height: 50, alignSelf: "center"}}/>
            </SafeAreaView>
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
                data={searchText.length > 0 ?  filteredSearchData : newsContents}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
       </View>
       <BottomBar/>
    </SafeAreaView>
  )
}
export default Home;