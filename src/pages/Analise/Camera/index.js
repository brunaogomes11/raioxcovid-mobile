import { Camera } from 'expo-camera';
import styles from './styles';
import Icon from 'react-native-vector-icons/Octicons';
import { View, Modal, ActivityIndicator } from 'react-native';
import { useState, useEffect, useRef } from 'react';

export default function CameraScreen({navigation}) {
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [hasPermission, setHasPermission] = useState(null);
    const [capturedPhoto, setCapturedPhoto] = useState(null);
    const [loading, setLoadingVisible] = useState(null);
    const cameraRef = useRef();
    
    useEffect(() => {
        (async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setHasPermission(status === "granted");
        })();
    }, []);
    
    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    const takePicture = async () => {
        if (cameraRef.current) {
            setLoadingVisible(true);
            const data = await cameraRef.current.takePictureAsync();
            setLoadingVisible(false);
            setCapturedPhoto(data.uri);
            navigation.navigate('Analise', {image: data.uri})
        };
    };
    
    return (
        <View style={styles.container}>
            <Camera 
                ref={cameraRef}
                type={type}
                style={styles.camera}
            >
                <View style={styles.contentButtons}>
                    <View style={styles.containerTakePicture}>
                        <Icon backgroundColor={null} 
                            style={styles.takePictureButton} 
                            name="dot-fill" 
                            size={100} 
                            color="#FFF"
                            onPress={takePicture}
                        />
                    </View>
                    <Icon backgroundColor={null} 
                        style={styles.closeButton} 
                        name="x"
                        size={40} 
                        color="#FFF"
                        onPress={() => navigation.navigate('Analise')}
                    />
                    {loading && <Modal 
                      visible={loading}
                      transparent={true}  
                    >
                      <View style={styles.modalLoading}>
                        <ActivityIndicator size="large" />
                      </View>
                    </Modal>}
                </View>
            </Camera>
        </View>
    )
}