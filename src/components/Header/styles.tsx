import { StyleSheet } from "react-native";
import { PhoneHeight, PhoneWidth } from "../../config";

const styles = StyleSheet.create({
    headerContainer: {
      width: PhoneWidth,
      height: PhoneHeight * 0.075,
      backgroundColor: "white",
      justifyContent: "center"
    },
    backButton: {
      height: "100%",
      width: "15%",
      justifyContent: "center",
      alignItems: "center",
    },
    backImage: {
      width: 50,
      height: 50
    },
    webrazziLogo: {
      width: 150,
      height: 30,
      // 1/5 rate because of rectangle png logo
      marginLeft: 20
    }
})

export default styles;