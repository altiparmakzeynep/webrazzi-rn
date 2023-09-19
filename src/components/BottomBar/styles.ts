import { StyleSheet } from "react-native";
import { PhoneHeight, PhoneWidth } from "../../config";

const styles = StyleSheet.create({
    bottomBarContainer: {
        width: PhoneWidth,
        height: PhoneHeight * 0.075,
        flexDirection: "row",
        justifyContent: "center",
    },
    bottomButtons: {
        width: PhoneWidth/4,
        height: "100%",
        // backgroundColor: "black",
        alignItems: "center",
        justifyContent: "center",
    },
    icons: {
        width: 35,
        height: 35
    }
  })

export default styles;