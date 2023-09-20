import { 
  Image, 
  SafeAreaView,
  ScrollView, 
  Share, 
  Text, 
  View,
  ActivityIndicator, 
  TouchableOpacity
} from 'react-native';
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

  const publishedDate = new Date(newsDetail.published_at);
  const now = new Date();
  const timeDiff = now.getTime() - publishedDate.getTime()
  //basic math operations for convert => hours
  const hoursDiff = timeDiff / (1000 * 60 * 60);

  if(newsDetail.length == 0){
    return(
      <SafeAreaView>
        <ActivityIndicator style = {{width: 50, height: 50, alignSelf: "center"}}/>
      </SafeAreaView>
    )
  }

  const onShare = async (itemHeader: string) => {
    try {
      const result = await Share.share({
        message: itemHeader // For now, I'm just sharing the news title.
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error: any) {
        //console.log(error)
    }
  };

  return (
    <SafeAreaView style = {styles.container}>
      <Header isBack={true}/>
      <ScrollView>
        {
          Math.floor(hoursDiff) == 0 ?
            <Text style = {styles.categoriesText}>{newsDetail?.categories[0]?.title} | Şimdi</Text>
            :
            Math.floor(hoursDiff) < 12 && Math.floor(hoursDiff) > 0 ?
              <Text style = {styles.categoriesText}>{newsDetail?.categories[0]?.title} | {Math.floor(hoursDiff)} saat önce</Text>
            :
              <Text style = {styles.categoriesText}>{newsDetail?.categories[0]?.title} | {newsDetail?.published_at.substring(0,10)}</Text>
        }
        <Text style = {styles.headerText}>{newsDetail?.title}</Text>
        <Text style = {styles.summaryText}>{newsDetail?.summary}</Text>
        
        <View style = {styles.authorInfoView}>
          <View style = {styles.authorImgView}>
            <Image 
              style = {styles.authorImg}
              source={{uri: newsDetail?.author?.avatar}}/>
          </View>
          <Text style = {styles.authorText}>{newsDetail?.author?.full_name}</Text>
          <TouchableOpacity 
            onPress={() => onShare(newsDetail.title)}
            style = {styles.shareButton}>
            <Image
              style = {{width: 40, height: 40}}
              source={{uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Sharethis-grey.svg/1200px-Sharethis-grey.svg.png"}}
            />
          </TouchableOpacity>
        </View>
        <Image 
          style = {styles.newsPhoto}
          source = {{uri: newsDetail?.thumbnails?.full.url}}
        />
        <Text style = {styles.contentText}>{newsDetail?.content.replace(/<\/?[^>]+(>|$)/g, "")}</Text>
      </ScrollView>
      <BottomBar/>
    </SafeAreaView>
  )
}
export default NewsDetail; 