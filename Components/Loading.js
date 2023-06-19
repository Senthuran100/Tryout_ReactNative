import { Text, View } from 'react-native';
import { styles } from '../styles';

export const Loading = () => {
    return (
        <View style={styles.container}>
            <Text>
                Loading...
            </Text>
        </View>
    );
}