import { View, Text, Image, Modal, ActivityIndicator, TouchableOpacity } from 'react-native';
import styles from './styles'
import { useFonts, LobsterTwo_700Bold } from '@expo-google-fonts/lobster-two';
import Icon from 'react-native-vector-icons/Octicons';
import React, { useEffect, useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

export default function AnaliseScreen({route}) {
    const [iconsVisible, setIconsVisible] = useState(false)
    const [image, setImage] = useState(null);
    const [prediction, setPrediction] = useState(null);
    const [loading, setLoadingVisible] = useState(null);
    const navigation = useNavigation();

    useEffect(()=>{
      if(route.params) {
        setImage(route.params.image)
        setPrediction(null)
      }
    }, [route.params])

    let [fontsLoaded] = useFonts({LobsterTwo_700Bold})
    if (!fontsLoaded) {
        return null;
    }
    const pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: false,
        aspect: [4, 3],
        quality: 1,
      });
  
      if (!result.canceled) {
        setImage(result.assets[0].uri);
        setLoadingVisible(null);
      }
    };

    const uploadImageAsync = async (uri) => {
      let apiUrl = 'https://web-production-fd36.up.railway.app/uploadedRN';
  
      const uriParts = uri.split('.');
      const fileType = uriParts[uriParts.length - 1];
  
      const formData = new FormData();
      formData.append('image', {
        uri,
        name: `image.${fileType}`,
        type: `image/${fileType}`,
      });
  
      try {
        const response = await axios.post(apiUrl, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        setPrediction(response.data);
        return setLoadingVisible(null);
      } catch (error) {
        return error
      }
    };
    return (
        <View style={styles.container}>
            <Text style={styles.pageTitle}>Raio-X-Covid</Text>
            <View>
                <Text style={styles.textSelect}>Selecione ou tire uma foto para a análise</Text>
                <Text style={styles.warnSelect}>Lembre-se de selecionar ou tirar foto apenas de imagens raio-x. A imagem deve ser tirada em um fundo claro e sem reflexos para melhor identificação.</Text>
                <View style={styles.containerButtons}>
                    {
                        iconsVisible == false ? 
                        <Icon backgroundColor={null} 
                            iconStyle={styles.primaryButton} 
                            name="upload" 
                            size={40} 
                            color="#000"
                            onPress={() => setIconsVisible(true)}
                        />
                        :
                        <View style={styles.buttonsContainer}>
                            <Icon backgroundColor={null} 
                                iconStyle={styles.secondaryButton} 
                                name="image" 
                                size={40} 
                                color="#000"
                                onPress={pickImage}
                            />
                            <Icon backgroundColor={null} 
                                iconStyle={styles.secondaryButton} 
                                name="device-camera" 
                                size={40} 
                                color="#000"
                                onPress={() => {navigation.navigate('Camera')}}
                            />
                        </View>
                    }
                </View>
                {image &&
                <View style={styles.imageContainer}>
                    <Image source={{ uri: image }} style={styles.image} />
                    <TouchableOpacity 
                      title='Analisar'
                      style={styles.buttonAnalisar}
                      onPress={() => {
                      setLoadingVisible(true)
                      uploadImageAsync(image)
                    }}><Text style={{color: "white"}}>ANALISAR</Text></TouchableOpacity>
                    {loading && <Modal 
                      visible={loading}
                      transparent={true}  
                    >
                      <View style={styles.modalLoading}>
                        <ActivityIndicator size="large" />
                      </View>
                    </Modal>}
                    {prediction && <Text style={styles.textPrediction}>{prediction.message}</Text>} 
                </View>}
            </View>
        </View>
    )
}

