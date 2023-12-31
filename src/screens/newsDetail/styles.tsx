import { StyleSheet } from "react-native";
import { PhoneHeight, PhoneWidth } from "../../config";

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
    newsPhoto: {
      width: PhoneWidth * 0.95, 
      height: PhoneHeight * 0.2, 
      alignSelf: "center", 
      borderRadius: 10
    },
    authorImg: {
      width: 50,
      height: 50,
      borderRadius: 25,
    },
    authorText: {
      fontSize: 18,
      width: "60%",
      color: "#514b44",
      fontWeight: "500",
      marginLeft: 10
    },
    shareButton: {
      width: "20%",
      height: "70%",
      alignItems: "center",
      justifyContent: "center"
    },
    contentText: {
      fontSize: 20,
      color: "black",
      marginLeft: 15,
      marginTop: 15
    }
})

export default styles;