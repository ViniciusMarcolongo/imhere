import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        width: "100%",
        backgroundColor: "#1f1e25",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
        borderRadius: 5,
        
    },
    name:{
        flex: 1,
        color: "#FFF",
        fontSize: 16,
        marginLeft: 16,
    },
    buttonText:{
        color: '#fdfcfe',
        fontSize: 24,
    },
    button:{  
        width: 56, 
        height: 56,
        borderRadius: 5,
        backgroundColor: "#E23C44",
        alignItems: 'center',
        justifyContent: 'center',
    },
})