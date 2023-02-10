import { View, Text } from 'react-native';
import styles from './styles';

export default function SobreScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sobre o Aplicativo</Text>
            <Text style={styles.text}>O aplicativo Raio-X-Covid foi desenvolvido como fruto de um projeto de pesquisa do Instituto Federal do Triângulo Mineiro Campus Ituiutaba. Seu objetivo é auxiliar a medicina diagnóstica na identificação de imagens de raio-x pulmonares com suspeita de Covid-19 ou Pneumonia.</Text>
            <Text style={styles.title}>Observações Importantes</Text>
            <Text style={styles.text}>Esse aplicativo NÃO substitui o diagnóstico médico.Esse aplicativo NÃO deve ser utilizado como única forma de diagnóstico médico por imagens. Esse aplicativo NÃO deve ser utilizado por pacientes sem o acompanhamento médico.</Text>
            <Text style={styles.title}>Aviso</Text>
            <Text style={styles.text}>Não salvamos ou retemos imagens de pacientes</Text>
        </View>
    )
}