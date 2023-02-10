import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text } from 'react-native';
import AnaliseScreen from './src/pages/Analise';
import SobreScreen from './src/pages/Sobre';
import {useFonts, K2D_700Bold} from '@expo-google-fonts/k2d';
import CameraScreen from './src/pages/Analise/Camera';

const Stack = createNativeStackNavigator();



export default function App() {
  let [fontsLoaded] = useFonts({K2D_700Bold})
  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Analise">
        <Stack.Screen name="Analise" component={AnaliseScreen} 
        options={({navigation}) => ({
          headerStyle: {
            backgroundColor: '#FFF',
          },
          headerRight: () => (
            <Text
              style={styles.textHeader}
              onPress={() => navigation.navigate('Sobre')}
            >Sobre</Text>
          ),
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 18,
            fontFamily: "K2D_700Bold"
          },
        })} />
        <Stack.Screen name="Sobre" component={SobreScreen} 
        options={({navigation}) => ({
          headerStyle: {
            backgroundColor: '#FFF',
          },
          headerTitle: "",
          headerRight: () => (
            <Text
              style={styles.textHeader}
              onPress={() => navigation.navigate('Sobre')}
            >Sobre</Text>
          ),
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 18,
            fontFamily: "K2D_700Bold"
          },
        })}/>
        <Stack.Screen name="Camera" component={CameraScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  textHeader: {
    fontWeight: 'bold', 
    color:"#000", 
    fontSize: 18, 
    fontFamily: "K2D_700Bold"
  }
})