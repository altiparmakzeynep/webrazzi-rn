import { 
  Image, 
  SafeAreaView,
  ScrollView, 
  StyleSheet, 
  Text, 
  View,
  ActivityIndicator 
} from 'react-native'
import React, { useEffect } from 'react'
import { RootStackParams } from '../../../App';
import { RouteProp } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNewsDetail } from '../../actions/newsDetailAction';
import { PhoneHeight, PhoneWidth } from '../../config';
import Header from '../../components/Header/Header';

type NewsDetailScreenRouteProp = RouteProp<RootStackParams, 'NewsDetail'>;

type Props = {
    route: NewsDetailScreenRouteProp;
}

const NewsDetail: React.FC<Props> = ({route}) => {

  const itemId: number = route.params.itemId
  const dispatch = useDispatch();  
  const {newsDetail}  = useSelector((state: any) => state.newsDetailReducer);

  // console.log("anan", newsDetail)
  if(newsDetail.length == 0){
    return(
      <ActivityIndicator style = {{width: 50, height: 50, alignSelf: "center"}}/>
    )
  }
  return (
    <SafeAreaView style = {styles.container}>
      <Header isBack={true}/>
      <ScrollView>
        <Text style = {styles.categoriesText}>{newsDetail?.categories[0]?.title}</Text>
        <Text style = {styles.headerText}>{newsDetail?.title}</Text>
        <Text style = {styles.summaryText}>{newsDetail?.summary}</Text>
        
        <View style = {styles.authorInfoView}>
          <View style = {styles.authorImgView}>
            <Image 
              style = {styles.authorImg}
              source={{uri: newsDetail?.author?.avatar}}/>
          </View>
          <Text style = {styles.authorText}>{newsDetail?.author?.full_name}</Text>
        </View>
        <Image 
          style = {{width: PhoneWidth * 0.95, height: PhoneHeight * 0.2, alignSelf: "center", borderRadius: 10}}
          source = {{uri: newsDetail?.thumbnails?.full.url}}
        />
        <Text style = {styles.contentText}>{newsDetail?.content.replace(/<\/?[^>]+(>|$)/g, "")}</Text>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    categoriesText: {
      fontSize: 20,
      color: "#514b44",
      marginLeft: 20,
      marginTop: 20,
    },
    headerText: {
      fontSize: 22,
      color: "black",
      fontWeight: "bold",
      marginHorizontal: 20,
      marginVertical: 10,
      width: PhoneWidth * 0.9
    },
    summaryText: {
      fontSize: 18,
      color: "black",
      marginHorizontal: 20,
      width: PhoneWidth * 0.9
    },
    authorInfoView: {
      width: PhoneWidth,
      height: PhoneHeight * 0.1,
      marginTop: 15,
      alignItems: "center",
      flexDirection: "row",
      borderWidth: 0
    },
    authorImgView: {
      width: 60,
      height: 60,
      borderRadius: 30,
      borderWidth: 5,
      borderColor: "#f3d02e",
      marginLeft: 15,
      flexDirection: "row"
    },
    authorImg: {
      width: 50,
      height: 50,
      borderRadius: 25,
      borderWidth: 0,
    },
    authorText: {
      fontSize: 18,
      color: "#514b44",
      fontWeight: "500",
      marginLeft: 10
    },
    contentText: {
      fontSize: 20,
      color: "black",
      marginLeft: 15,
      marginTop: 15
    }
})

export default NewsDetail; 