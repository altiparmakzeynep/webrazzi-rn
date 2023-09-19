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
      width: 200,
      height: 40,
      marginLeft: 20
    }
  })

  export default styles;