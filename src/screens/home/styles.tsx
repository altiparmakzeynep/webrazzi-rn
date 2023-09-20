import { StyleSheet } from "react-native";
import { PhoneHeight, PhoneWidth } from "../../config";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    searchContainer: {
        width: PhoneWidth,
        height: PhoneHeight * 0.1,
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
    notFoundText: {
        fontSize: 20, 
        color: "black",
        alignSelf: "center", 
        fontStyle: "italic"
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
    dotView: {
        width: 8,
        height: 8, 
        borderRadius: 4, 
        // this ratio for create "exact" circle, width and height = same, borderRadius = same/2
        backgroundColor: "gray", 
        marginLeft: 10
    },
    dateText: {
        fontSize: 16,
        color: "gray",
        marginLeft: 10
    }
})
export default styles;