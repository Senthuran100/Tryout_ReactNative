
import { View, FlatList } from 'react-native';
import { styles } from '../styles';
import { Item } from './Item';

export const Home = ({ data }) => {
    return (
        <View style={styles.container}>
            <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={data}
                renderItem={({ item }) => <Item data={item} />}
            />
        </View>
    );
}