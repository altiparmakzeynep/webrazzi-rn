import { 
  Image, 
  SafeAreaView,
  ScrollView, 
  StyleSheet, 
  Text, 
  View,
  ActivityIndicator 
} from 'react-native'
import React from 'react';
import { RootStackParams } from '../../../App';
import { RouteProp } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { PhoneHeight, PhoneWidth } from '../../config';
import Header from '../../components/Header/Header';
import BottomBar from '../../components/BottomBar/BottomBar';
import styles from './styles';

type NewsDetailScreenRouteProp = RouteProp<RootStackParams, 'NewsDetail'>;

type Props = {
    route: NewsDetailScreenRouteProp;
}

const NewsDetail: React.FC<Props> = () => {

  const {newsDetail}  = useSelector((state: any) => state.newsDetailReducer);

  if(newsDetail.length == 0){
    return(
      <SafeAreaView>
        <ActivityIndicator style = {{width: 50, height: 50, alignSelf: "center"}}/>
      </SafeAreaView>
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
      <BottomBar/>
    </SafeAreaView>
  )
}
export default NewsDetail; 