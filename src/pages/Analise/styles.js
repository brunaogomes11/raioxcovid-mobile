import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF',
      alignItems: 'center',
      width: "100%"
    },
    pageTitle: {
        fontSize: 40,
        fontFamily: "LobsterTwo_700Bold",
        color: "#000",
        marginTop: 10,
    },
    textSelect: {
      marginTop: 20,
      color: "#000",
      fontSize: 18,
      textAlign: "center"
    },
    warnSelect: {
      margin: 10,
      fontSize: 14,
      fontStyle: "italic",
      textAlign: "center"
    },
    containerButtons: {
      justifyContent: "center",
      alignItems: "center",
    },
    primaryButton: {
      padding: 0,
      margin: 0,
      flexDirection: "column",
      alignItems: "center",
    },
    buttonsContainer: {
      width: "50%",
      margin: 5,
      flexDirection: "row",
      justifyContent: "space-evenly",
    },
    buttonAnalisar: {
      paddingVertical: 10,
      paddingHorizontal: 30,
      borderRadius: 50,
      backgroundColor: "#000"
    },
    imageContainer: {
      flexDirection: "column",
      justifyContent: 'center',
      alignItems: 'center'
    },
    image: {
      marginVertical: 10,
      width: 300, 
      height: 300,
    },
    modalLoading: {
      width: "100%",
      height: "100%",
      backgroundColor:"#000000BB",
      position: "absolute",
      flexDirection: "column",
      justifyContent: 'center',
      alignItems: 'center'
    },
    textPrediction:{ 
      fontSize: 20,
      marginTop: 20,
      color: "#000",
      textAlign: 'center'
    },
    camera: {
      height: "100%",
      width: "100%",
      position: "absolute",
    },
});

export default styles