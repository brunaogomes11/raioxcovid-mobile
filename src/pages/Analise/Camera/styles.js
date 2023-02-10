import { StyleSheet } from "react-native"
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
  camera: {
    height: "100%",
    width: "100%",
  },
  contentButtons: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
  },
  closeButton: {
    position: "absolute",
    top: 10,
    left: 2,
    margin: 20,
  },
  imgPhoto: {
    width: "90%",
    height: "90%",
  },
  containerTakePicture: {
    position: "absolute",
    width: "100%",
    alignSelf: 'flex-end',
    alignItems: "center",
    justifyContent: 'center'
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
});
 
export default styles