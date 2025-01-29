import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import Magnifying from '../../../../components/Icons/Magnifying';

interface HeaderProps {
    
};

export default function Header(props: HeaderProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Grupos</Text>

            <Magnifying size={30} />
        </View>
    );
};